<?php
/**
 * @package mm_gsap
 */

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
    die;
}


// Aggiungi stili e script personalizzati
function mm_gsap_enqueue( $hook ) {

    // Seleziono i miei scripts
    $gsaps = [
        'mm-gsap' => 'js/gsap.min.js',
        'mm-gsap-scrolltrigger' => 'js/ScrollTrigger.min.js',
        'mm-gsap-scrolltoplugin' => 'js/ScrollToPlugin.min.js',
        'mm-gsap-textplugin' => 'js/TextPlugin.min.js',
        'mm-gsap-scrollsmoother' => 'js/ScrollSmoother.min.js',
        'mm-gsap-scrambletextplugin' => 'js/ScrambleTextPlugin.min.js',
        'mm-gsap-splittext' => 'js/SplitText.min.js',
    ];

    // Registro tutti gli scripts
    foreach ($gsaps as $key => $value) {
        wp_register_script(
            $key,
            plugins_url( $value, __DIR__ ),
            array(
                'jquery'
            ),
            '1.0.0'
        );
    }

    // Servo tutti gli scripts
    foreach ($gsaps as $key => $value) {
        wp_enqueue_script( $key );
    }


    // File singolo
    $dipendenze = [];
    foreach ($gsaps as $key => $value) {
        $dipendenze[] = $key;
    }
    $dipendenze[] = 'jquery'; // Aggiungo all'array anche jquery


}
add_action( 'wp_enqueue_scripts', 'mm_gsap_enqueue' );