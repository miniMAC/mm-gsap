<?php
/**
 * @package mm_gsap
 */

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
    die;
}

function gsap_wrapper_kadence_scroll_start() {
    ?>
    <div id="smooth-wrapper">
        <div id="smooth-content">
    <?php
}

function gsap_wrapper_kadence_scroll_end() {
    ?>
        </div><!-- #smooth-wrapper -->
    </div><!-- #smooth-content -->
    <?php
}

$mm_gsap_scrollsmoother_enable = get_option('mm_gsap_scrollsmoother_enable', false);
if ( $mm_gsap_scrollsmoother_enable ) {
    // Aggiungi un'azione all'hook 'kadence_after_header'
    add_action('kadence_after_header', 'gsap_wrapper_kadence_scroll_start');

    // Aggiungi un'azione all'hook 'kadence_after_footer'
    add_action('kadence_after_footer', 'gsap_wrapper_kadence_scroll_end');
}
