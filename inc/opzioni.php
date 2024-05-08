<?php
/**
 * @package mm_gsap
 */

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
    die;
}

// Aggiungi il menu delle impostazioni
add_action('admin_menu', 'mm_gsap_add_admin_menu');
function mm_gsap_add_admin_menu() {
    add_options_page('MM GSAP Opzioni', 'MM GSAP', 'manage_options', 'mm_gsap', 'mm_gsap_options_page');
}

// Registra le impostazioni
add_action('admin_init', 'mm_gsap_settings_init');
function mm_gsap_settings_init() {
    register_setting('mmGsapPlugin', 'mm_gsap_settings');

    add_settings_section(
        'mm_gsap_plugin_page_section', 
        __('Scegli quali plugin GSAP includere', 'mm-gsap'), 
        'mm_gsap_settings_section_callback', 
        'mmGsapPlugin'
    );

    add_settings_field(
        'mm_gsap_checkbox_field', 
        __('Seleziona plugin gsap', 'mm-gsap'), 
        'mm_gsap_checkbox_field_render', 
        'mmGsapPlugin', 
        'mm_gsap_plugin_page_section'
    );
}

// Renderizza il campo checkbox
function mm_gsap_checkbox_field_render() {
    $options = get_option('mm_gsap_settings');
    $files = mm_get_gsap_all_files();

    foreach ($files as $file) {
        $checked = isset($options['mm_gsap_checkbox_field'][$file['fullname']]) ? 'checked' : '';
        echo '<input type="checkbox" name="mm_gsap_settings[mm_gsap_checkbox_field][' . $file['fullname'] . ']" ' . $checked . '> ' . $file['name'] . '<br>';
    }
}

// Callback della sezione
function mm_gsap_settings_section_callback() {
    
}

// Renderizza la pagina delle opzioni
function mm_gsap_options_page() {
    ?>
    <form action='options.php' method='post'>

        <h2>MM GSAP Options</h2>

        <?php
        settings_fields('mmGsapPlugin');
        do_settings_sections('mmGsapPlugin');
        submit_button();
        ?>

    </form>
    <?php
}