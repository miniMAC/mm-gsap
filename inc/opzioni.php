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

// Spiegazione delle librerie GSAP
function mm_gsap_spiegazione($nome_plugin) {
    if (empty($nome_plugin)) {
        return;
    }

    // Condizioni
    $descrizioni = [
        "GSAP" => "Una potente libreria per animazioni JavaScript ad alte prestazioni.",
        "CSSRULEPLUGIN" => "Anima le regole CSS, come @keyframes e @media.",
        "CUSTOMBOUNCE" => "Crea animazioni personalizzate con effetti di rimbalzo.",
        "CUSTOMEASE" => "Definisce curve di easing personalizzate per animazioni.",
        "CUSTOMWIGGLE" => "Crea animazioni con effetti di tremolio personalizzati.",
        "DRAGGABLE" => "Rende gli elementi HTML trascinabili.",
        "DRAWSVGPLUGIN" => "Anima il tracciato di elementi SVG.",
        "EASEPACK" => "Pacchetto di easing predefinite per animazioni fluide.",
        "EASELPLUGIN" => "Integra GSAP con la libreria EaselJS per animare canvas.",
        "FLIP" => "Crea animazioni complesse che trasformano elementi da uno stato all'altro.",
        "GSDEVTOOLS" => "Strumenti di sviluppo per facilitare il debug delle animazioni GSAP.",
        "INERTIAPLUGIN" => "Aggiunge inerzia realistica alle animazioni di trascinamento e rotazione.",
        "MORPHSVGPLUGIN" => "Morpha un elemento SVG in un altro.",
        "MOTIONPATHHELPER" => "Strumento visuale per creare percorsi di animazione.",
        "MOTIONPATHPLUGIN" => "Anima elementi lungo un percorso definito.",
        "OBSERVER" => "Rileva e reagisce agli eventi di interazione dell'utente.",
        "PHYSICS2DPLUGIN" => "Aggiunge simulazioni fisiche bidimensionali alle animazioni.",
        "PHYSICSPROPSPLUGIN" => "Anima le proprietà degli oggetti con effetti fisici.",
        "PIXIPLUGIN" => "Integra GSAP con PixiJS per animare grafica WebGL.",
        "SCRAMBLETEXTPLUGIN" => "Anima il testo cambiando le lettere in modo casuale.",
        "SCROLLSMOOTHER" => "Aggiunge effetti di scorrimento fluido ai siti.",
        "SCROLLTOPLUGIN" => "Anima gli scroll di pagina fino a un punto specifico.",
        "SCROLLTRIGGER" => "Anima elementi in base alla posizione di scorrimento.",
        "SPLITTEXT" => "Divide il testo in parole o lettere per animazioni dettagliate.",
        "TEXTPLUGIN" => "Anima il testo cambiandolo lettera per lettera."
    ];

    $nome_plugin = strtoupper($nome_plugin); // Converti il nome del plugin in maiuscolo

    if (array_key_exists($nome_plugin, $descrizioni)) {
        return $descrizioni[$nome_plugin];
    } else {
        return "Descrizione non trovata per il plugin specificato.";
    }
}

// Renderizza il campo checkbox
function mm_gsap_checkbox_field_render() {
    $options = get_option('mm_gsap_settings');
    $files = mm_get_gsap_all_files();

    // Plugin da preselezionare
    $preselected_plugins = ["GSAP", "TEXTPLUGIN", "SPLITTEXT", "SCROLLTRIGGER", "SCROLLSMOOTHER"];

    foreach ($files as $file) {
        $normalized_name = strtoupper($file['name']);
        // Verifica se il checkbox deve essere preselezionato
        $checked = (isset($options['mm_gsap_checkbox_field'][$file['fullname']]) || in_array($normalized_name, $preselected_plugins)) ? 'checked' : '';
        echo '<input type="checkbox" name="mm_gsap_settings[mm_gsap_checkbox_field][' . $file['fullname'] . ']" ' . $checked . '> ' . $file['name'] . ' - '. mm_gsap_spiegazione($file['name']) .'<br>';
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