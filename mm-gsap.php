<?php

/**
 * Plugin Name:       MM GSAP
 * Plugin URI:        https://minimamente.com
 * Description:       Inclusione di custom CSS, JS e animazioni GSAP
 * Version:           1.0.0
 * Author:            miniMAC
 * Author URI:        https://minimamente.com
 * License:           GPL-2.0+
 * License URI:       http://www.gnu.org/licenses/gpl-2.0.txt
 * Text Domain:       mm
 */

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
    die;
}

/**
 * Includo files
 */
require_once plugin_dir_path( __FILE__ ) . 'inc/enqueue.php';
require_once plugin_dir_path( __FILE__ ) . 'inc/opzioni.php';
require_once plugin_dir_path( __FILE__ ) . 'inc/funzioni.php';