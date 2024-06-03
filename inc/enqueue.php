<?php
/**
 * @package mm_gsap
 */

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
    die;
}

// Funzione per prendere il nome dalla path
function mm_estrai_nome_file( $path ) {
    $pattern = "/([^\/]+?)(?:\.min)?\.js$/";
    if (preg_match($pattern, $path, $matches)) {
        return $matches[1];
    } else {
        return false;
    }
}


function mm_get_files_on_path() {

    $directory = plugin_dir_path( __DIR__ ) . 'assets/vendors'; // Percorso alla cartella js nel tuo plugin
    $files = scandir($directory);
    $listaFiles = [];

    foreach ($files as $file) {
        if ($file !== '.' && $file !== '..' && is_file($directory . '/' . $file)) {
            if (pathinfo($file, PATHINFO_EXTENSION) !== 'map') {
                $listaFiles[] = 'assets/vendors/' . $file;
            }
        }
    }

    return $listaFiles;
}

// Funzione che restituisce tutti i files che trova in un array custom
function mm_get_gsap_all_files() {

    // Prendo tutti i files dentro la path
    $files = mm_get_files_on_path();

    // Setto un prefisso
    $prefisso = 'mm-';

    // Creo un array con i dati per i vari files
    $gsap_files = [];
    foreach ($files as $file) {

        $nome_file = mm_estrai_nome_file( $file );
        $nome = strtolower($nome_file);

        $gsap_files[] = [
            'fullname' => $prefisso . $nome,
            'name' => $nome,
            'path' => $file
        ];

    }

    return $gsap_files;

}


// Aggiungi stili e script personalizzati
function mm_gsap_enqueue( $hook ) {

    // Prendo l'opzione
    $mm_gsap_settings = get_option('mm_gsap_settings');

    // Se è false
    if ( ! $mm_gsap_settings ) {
        return;
    }

    // Prendo i files
    $gsap_files = mm_get_gsap_all_files();

    // Registro tutti gli scripts
    if ( empty( $gsap_files ) ) {
        return;
    }

    // Registro ogni files
    foreach ( $gsap_files as $file ) {

        wp_register_script(
            $file['fullname'], // manipolo la stringa con il prefisso "mm-"
            plugins_url( $file['path'], __DIR__ ),
            array(
                'jquery'
            ),
            '1.0.0'
        );

    }

    // In base alla selzione servo tutti i files richiesti
    foreach ($mm_gsap_settings['mm_gsap_checkbox_field'] as $key => $value) {
        wp_enqueue_script( $key );
    }

    
    // Includo il file principale
    $mm_gsap_dep = ['jquery'];

    // Ottieni le chiavi dall'array mm_gsap_checkbox_field
    $mm_gsap_keys = array_keys($mm_gsap_settings['mm_gsap_checkbox_field']);

    // Unisci le chiavi con l'array esistente
    $mm_gsap_dep = array_merge($mm_gsap_dep, $mm_gsap_keys);

    wp_register_script(
        'mm-gsap-scripts',
        plugins_url( 'assets/js/mm-gsap.js', __DIR__ ),
        $mm_gsap_dep,
        '1.0.0'
    );
    wp_enqueue_script( 'mm-gsap-scripts' );

    // Aggiungi lo stile CSS solo nel front-end
    if ( ! is_admin() ) {
        wp_enqueue_style(
            'mm-gsap-styles',
            plugins_url( 'assets/css/mm-gsap.css', __DIR__ ),
            array(),
            '1.0.0'
        );
    }


}
add_action( 'wp_enqueue_scripts', 'mm_gsap_enqueue' );



// Enqueue the JavaScript for the sidebar
function mm_gsap_sidebar_enqueue() {

    wp_enqueue_script(
        'mm-gsap-admin-edit',
        plugins_url( 'assets/js/mm-gsap-admin-edit.js', __DIR__ ),
        array( 'wp-plugins', 'wp-edit-post', 'wp-element', 'wp-components', 'wp-data' ),
        '1.0.0'
    );
}
add_action( 'enqueue_block_editor_assets', 'mm_gsap_sidebar_enqueue' );
