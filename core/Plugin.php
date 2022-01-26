<?php

namespace StaxWp\Gandalf\Core;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

use StaxWp\Gandalf\Core\Routing\Processor;
use StaxWp\Gandalf\Core\Routing\Router;
use StaxWp\Gandalf\Core\Routing\Route;


/**
 * Class Plugin
 *
 * @package StaxWp\Gandalf\Core
 */
class Plugin extends Singleton {

	/**
	 * Route prefix
	 *
	 * @var string
	 */
	private $prefix = 'gandalf';

	/**
	 * Plugin constructor
	 */
	public function __construct( array $data = [] ) {
		parent::__construct();

		if ( isset( $data['prefix'] ) && $data['prefix'] ) {
			$this->prefix = (string) $data['prefix'];
		}

		$this->routes = [
			'index' => new Route( $this->prefix . '/wizard', 'gdlf_wizard', GDLF_PATH . 'templates/index.php' ),
		];

		Processor::init( new Router( 'gdlf_router' ), $this->routes );

		add_action( 'wp_enqueue_scripts', [ $this, 'remove_theme_resources' ], PHP_INT_MAX );
		add_action( 'wp_enqueue_scripts', [ $this, 'register_assets' ] );
	}

	/**
	 * Remove theme's scripts & styles
	 */
	public function remove_theme_resources() {
		if ( ! get_query_var( 'gdlf_router' ) ) {
			return;
		}

		$wp_scripts = wp_scripts();
		$wp_styles  = wp_styles();
		$themes_uri = get_theme_root_uri();

		foreach ( $wp_scripts->registered as $wp_script ) {
			if ( strpos( $wp_script->src, $themes_uri ) !== false ) {
				wp_deregister_script( $wp_script->handle );
			}
		}

		foreach ( $wp_styles->registered as $wp_style ) {
			if ( strpos( $wp_style->src, $themes_uri ) !== false ) {
				wp_deregister_style( $wp_style->handle );
			}
		}
	}

	/**
	 * Register assets
	 *
	 * @return void
	 */
	public function register_assets() {
		wp_register_style(
			'gdlf-style',
			GDLF_URL . 'assets/css/index.css',
			[],
			GDLF_VERSION
		);

		$js = @json_decode( file_get_contents( GDLF_URL . 'assets/report.json' ), true );

		$vendors_js = '';
		$app_js     = '';

		if ( is_array( $js ) && isset( $js['assetsByChunkName'] ) ) {
			if ( isset( $js['assetsByChunkName']['chunk-vendors'] ) ) {
				if ( is_array( $js['assetsByChunkName']['chunk-vendors'] ) ) {
					$vendors_js = $js['assetsByChunkName']['chunk-vendors'][0];
				} else {
					$vendors_js = $js['assetsByChunkName']['chunk-vendors'];
				}
			}

			if ( isset( $js['assetsByChunkName']['app'] ) ) {
				if ( is_array( $js['assetsByChunkName']['app'] ) ) {
					$app_js = $js['assetsByChunkName']['app'][0];
				} else {
					$app_js = $js['assetsByChunkName']['app'];
				}
			}
		}

		if ( $vendors_js && $app_js ) {
			wp_register_script(
				'gdlf-vendors',
				GDLF_URL . 'assets/' . $vendors_js,
				[],
				GDLF_VERSION,
				true,
			);

			wp_register_script(
				'gdlf-script',
				GDLF_URL . 'assets/' . $app_js,
				[ 'gdlf-vendors' ],
				GDLF_VERSION,
				true,
			);
		}

		if ( get_query_var( 'gdlf_router' ) ) {
			wp_enqueue_style( 'gdlf-style' );

			if ( $vendors_js && $app_js ) {
				wp_enqueue_script( 'gdlf-script' );
			}
		}
	}

}