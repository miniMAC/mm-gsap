<?php
/**
 * @package mm
 */

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
    die;
}

/**
 * Update
 */
if ( ! class_exists( 'wpHelpHubProUpdater' ) ) {

    class wpHelpHubProUpdater {

        public $plugin_slug;
        public $version;
        public $cache_key;
        public $cache_allowed;
        public $path_plugin;
        public $id_plugin;

        public function __construct() {

            $this->plugin_slug = plugin_basename( __DIR__ );
            $this->version = constant('MM_GSAP_VERSION');
            $this->path_plugin = constant('MM_GSAP_SLUG') .'/'. constant('MM_GSAP_SLUG') .'.php';
            $this->id_plugin = constant('MM_GSAP_PLUGIN');
            $this->cache_key = 'mm_gsap_upd';
            $this->cache_allowed = true;

            add_filter( 'plugins_api', array( $this, 'info' ), 20, 3 );
            add_filter( 'site_transient_update_plugins', array( $this, 'update' ) );
            add_action( 'upgrader_process_complete', array( $this, 'purge' ), 10, 2 );

        }

        // qui viene fatta la richiesta
        public function request() {

            //delete_transient( $this->cache_key );

            // Prendo il transient
            $remote = get_transient( $this->cache_key );

            // Se cache_allowed è false allora interrogo nuovamente e aggiorno il local storage
            if ( false === $remote || ! $this->cache_allowed ) {

                // Eseguo la chiamata e controllo
                $remote = wp_remote_get(
                    'https://update.minimac.it/wp-admin/admin-ajax.php?action=mm_plugin_info&plugin_id='. constant('MM_GSAP_PLUGIN'),
                    array(
                        'timeout' => 10,
                        'headers' => array(
                            'Accept' => 'application/json'
                        )
                    )
                );

                // Se ho un errore 
                if ( is_wp_error( $remote )
                    || 200 !== wp_remote_retrieve_response_code( $remote )
                    || empty( wp_remote_retrieve_body( $remote ) ) ) {
                    return false;
                }
                set_transient( $this->cache_key, $remote, DAY_IN_SECONDS );

            }

            $remote = json_decode( wp_remote_retrieve_body( $remote ) );

            return $remote;

        }

        // Richiesta dopo
        function info( $res, $action, $args ) {

            // do nothing if you're not getting plugin information right now
            if ( 'plugin_information' !== $action ) {
                return $res;
            }

            // do nothing if it is not our plugin
            if ( $this->plugin_slug !== $args->slug ) {
                return $res;
            }

            // get updates
            $remote = $this->request();

            if ( ! $remote ) {
                return $res;
            }

            $res = new stdClass();

            $res->name = $remote->name;
            $res->slug = $remote->slug;
            $res->version = $remote->version;
            $res->tested = $remote->tested;
            $res->requires = $remote->requires;
            $res->author = $remote->author;
            $res->author_profile = $remote->author_profile;
            $res->download_link = $remote->download_url;
            $res->trunk = $remote->download_url;
            $res->requires_php = $remote->requires_php;
            $res->last_updated = $remote->last_updated;

            $res->sections = array(
                'description' => $remote->sections->description,
                'installation' => $remote->sections->installation,
                'changelog' => $remote->sections->changelog
            );

            if ( ! empty( $remote->banners ) ) {
                $res->banners = array(
                    'low' => $remote->banners->low,
                    'high' => $remote->banners->high
                );
            }

            if ( ! empty( $remote->icons ) ) {
                $res->icons = array(
                    '2x' => $remote->icons->low,
                    '1x' => $remote->icons->high,
                    'svg' => $remote->icons->svg
                );
            }

            return $res;

        }

        public function update( $transient ) {

            if ( empty($transient->checked ) ) {
                return $transient;
            }

            $remote = $this->request();

            if ( $remote
                && version_compare( $this->version, $remote->version, '<' )
                && version_compare( $remote->requires, get_bloginfo( 'version' ), '<=' )
                && version_compare( $remote->requires_php, PHP_VERSION, '<' ) ) {
                
                $res = new stdClass();
                $res->slug = $this->plugin_slug;
                $res->plugin = $this->path_plugin;
                $res->new_version = $remote->version;
                $res->tested = $remote->tested;
                $res->package = $remote->download_url;
                $res->icons = array(
                    '2x' => $remote->icons->low,
                    '1x' => $remote->icons->high,
                    'svg' => $remote->icons->svg
                );

                $transient->response[ $res->plugin ] = $res;

            }

            return $transient;

        }

        public function purge( $upgrader, $options ) {

            //delete_transient( $this->cache_key );

            if ( $this->cache_allowed
                && 'update' === $options['action']
                && 'plugin' === $options[ 'type' ] ) {
                // Pulisci la cache quando il plugin è stato aggiornato
                delete_transient( $this->cache_key );
            }

        }

    }

    new wpHelpHubProUpdater();

}
