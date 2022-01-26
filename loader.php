<?php

/**
 * Plugin Name: Gandalf WP
 * Description: Just a wizard. You shall follow the steps.
 * Plugin URI:  https://staxwp.com
 * Version:     1.0.0
 * Author:      StaxWP
 * Author URI:  https://staxwp.com
 *
 * Text Domain: gandalf
 * Domain Path: /languages
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

define( 'GDLF_VERSION', '1.0.0' );
define( 'GDLF_URL', trailingslashit( plugin_dir_url( __FILE__ ) ) );
define( 'GDLF_PATH', trailingslashit( plugin_dir_path( __FILE__ ) ) );

// Autoload
require_once 'bootstrap.php';

\StaxWp\Gandalf\Core\Plugin::instance();
