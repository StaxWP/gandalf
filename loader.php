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

add_filter(
	'gandalf/data/steps',
	static function( $steps ) {
		return [
			new \StaxWp\Gandalf\Core\Components\YoutubeVideo(
				[
					'title'       => __( 'Get started with Dollie', 'gandalf' ),
					'description' => __( 'The Cloud Automation Platform to build, launch and sell WordPress cloud services under your own brand & domain.', 'gandalf' ),
					'url'         => 'https://www.youtube.com/watch?v=S5QC7jaoGCw',
					'autoplay'    => false,
				],
				1
			),
			new \StaxWp\Gandalf\Core\Components\YoutubeVideo(
				[
					'title'       => __( 'Get started with Stax', 'gandalf' ),
					'description' => __( 'Import the most beautiful template you\'ve ever seen.', 'gandalf' ),
					'url'         => 'https://www.youtube.com/watch?v=oygrmJFKYZY',
					'autoplay'    => false,
				],
				2,
			),
			new \StaxWp\Gandalf\Core\Components\BuilderPicker(
				[
					'title'       => __( 'Select your favourite Page Builder', 'gandalf' ),
					'description' => __( 'We have awesome templates for all the popular page builders out there.', 'gandalf' ),
				],
				0
			),
		];
	}
);
