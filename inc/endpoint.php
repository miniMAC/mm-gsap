<?php
/**
 * @package mm_gsap
 */

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
    die;
}

// Hook per aggiungere la riscrittura
add_action('init', 'add_mm_gsap_testo_endpoint');
function add_mm_gsap_testo_endpoint() {
    add_rewrite_rule('^mm-gsap-testo/?$', 'index.php?mm_gsap_testo=1', 'top');
}

// Aggiungere una query var per l'endpoint
add_filter('query_vars', 'mm_gsap_testo_query_vars');
function mm_gsap_testo_query_vars($vars) {
    $vars[] = 'mm_gsap_testo';
    return $vars;
}

// Intercettare la query e caricare il template se l'utente è loggato
add_action('template_redirect', 'mm_gsap_testo_template');
function mm_gsap_testo_template() {
    if (get_query_var('mm_gsap_testo') && is_user_logged_in()) {

        // Disabilita la admin bar
        add_filter('show_admin_bar', '__return_false');

        // Avvia l'output buffering
        ob_start();
        ?>
        <!DOCTYPE html>
        <html>
        <head>
            <title>MM GSAP Testo</title>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
            <?php wp_head(); // Includere gli script e gli stili registrati ?>
        </head>
        <body style="background-color: #fff;">

            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-12 col-md-8">
                        <h1>MM GSAP</h1>
                    </div>
                </div>
            </div>


            <?php for ($i = 1; $i <= 12; $i++) {
                ?>
                <div class="container my-5">
                    <div class="row justify-content-center">
                        <div class="col-12 col-md-8">
                            <div class="p-5 bg-body-tertiary rounded-3">
                                <p class="lead mb-5">mm-gsap-testo-<?php echo $i; ?></p>
                                <h2 class="mm-gsap-testo-<?php echo $i; ?>">Lorem ipsum dolor sit amet pellentesque auctor malesuada blandit aliquam pellentesque sollicitudin mi.</h2>
                                <div class="mt-5">
                                    <div id="trigger-animation-<?php echo $i; ?>" class="btn btn-dark">play</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <?php
            } ?>

            





            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
            <?php wp_footer(); // Includere gli script registrati nel footer ?>
        </body>
        </html>
        <?php
        // Invia l'output al browser
        ob_end_flush();
        exit;
    } elseif (get_query_var('mm_gsap_testo')) {
        // Se l'utente non è loggato, reindirizzalo alla pagina di login
        auth_redirect();
    }
}









// Hook per aggiungere la riscrittura
add_action('init', 'add_mm_gsap_immagine_endpoint');
function add_mm_gsap_immagine_endpoint() {
    add_rewrite_rule('^mm-gsap-immagine/?$', 'index.php?mm_gsap_immagine=1', 'top');
}

// Aggiungere una query var per l'endpoint
add_filter('query_vars', 'mm_gsap_immagine_query_vars');
function mm_gsap_immagine_query_vars($vars) {
    $vars[] = 'mm_gsap_immagine';
    return $vars;
}

// Intercettare la query e caricare il template se l'utente è loggato
add_action('template_redirect', 'mm_gsap_immagine_template');
function mm_gsap_immagine_template() {
    if (get_query_var('mm_gsap_immagine') && is_user_logged_in()) {

        // Disabilita la admin bar
        add_filter('show_admin_bar', '__return_false');

        // Avvia l'output buffering
        ob_start();
        ?>
        <!DOCTYPE html>
        <html>
        <head>
            <title>MM GSAP immagine</title>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
            <?php wp_head(); // Includere gli script e gli stili registrati ?>
        </head>
        <body style="background-color: #fff;">

            <div class="container mb-5">
                <div class="row justify-content-center">
                    <div class="col-12 col-md-8">
                        <h1>MM GSAP</h1>
                    </div>
                </div>
            </div>


            <?php 
            
            $img = plugins_url( 'assets/images/test_1.jpg', __DIR__ ); 
            
            for ($i = 1; $i <= 20; $i++) {
                ?>
                <div class="container mb-5">
                    <div class="row justify-content-center">
                        <div class="col-12 col-md-4">
                            <div class="p-5 bg-body-tertiary rounded-3">
                                <p class="lead mb-5">img-effetto-<?php echo $i; ?></p>
                                <div class="img-effetto-<?php echo $i; ?>"><img src="<?php echo $img ?>" alt=""></div>
                                <div class="mt-5">
                                    <div id="trigger-animation-img-<?php echo $i; ?>" class="btn btn-dark">play</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <?php
            }
            ?>

            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
            <?php wp_footer(); // Includere gli script registrati nel footer ?>
        </body>
        </html>
        <?php
        // Invia l'output al browser
        ob_end_flush();
        exit;
    } elseif (get_query_var('mm_gsap_immagine')) {
        // Se l'utente non è loggato, reindirizzalo alla pagina di login
        auth_redirect();
    }
}

