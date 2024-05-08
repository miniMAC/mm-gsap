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

    $directory = plugin_dir_path( __DIR__ ) . 'js'; // Percorso alla cartella js nel tuo plugin
    $files = scandir($directory);
    $listaFiles = [];

    foreach ($files as $file) {
        if ($file !== '.' && $file !== '..' && is_file($directory . '/' . $file)) {
            if (pathinfo($file, PATHINFO_EXTENSION) !== 'map') {
                $listaFiles[] = 'js/' . $file;
            }
        }
    }

    return $listaFiles;
}


// Aggiungi stili e script personalizzati
function mm_gsap_enqueue( $hook ) {


    // Prendo tutti i files dentro la path
    $files = mm_get_files_on_path();

    // Creo un array con i dati per i vari files
    $gsap_files = [];
    foreach ($files as $file) {

        $nome_file = mm_estrai_nome_file( $file );
        $nome = strtolower($nome_file);

        $gsap_files[] = [
            'name' => $nome,
            'path' => $file
        ];

    }

    // Registro tutti gli scripts
    if ( empty( $gsap_files ) ) {
        return;
    }

    $prefisso = 'mm-';

    // Registro ogni files
    foreach ($gsap_files as $file) {

        wp_register_script(
            $prefisso . $file['name'], // manipolo la stringa con il prefisso "mm-"
            plugins_url( $file['path'], __DIR__ ),
            array(
                'jquery'
            ),
            '1.0.0'
        );

    }

    // Servo tutti i files
    foreach ($gsap_files as $file) {
        wp_enqueue_script( $prefisso . $file['name'] );
    }


}
add_action( 'wp_enqueue_scripts', 'mm_gsap_enqueue' );
