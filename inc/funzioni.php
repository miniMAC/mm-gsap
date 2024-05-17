<?php
/**
 * @package mm_gsap
 */

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
    die;
}

function gsap_classe_custom_body($classes) {
    // Aggiungi la tua classe personalizzata
    $classes[] = 'mm-gsap';
    return $classes;
}
add_filter('body_class', 'gsap_classe_custom_body');
