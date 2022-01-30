<?php

namespace StaxWp\Gandalf\Core;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

use StaxWp\Gandalf\Core\Routing\Processor;
use StaxWp\Gandalf\Core\Routing\Router;
use StaxWp\Gandalf\Core\Routing\Route;

use StaxWp\Gandalf\Core\Components\BuilderPicker;
use StaxWp\Gandalf\Core\Components\YoutubeVideo;

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

		Processor::init( new Router( 'gandalf_router' ), $this->routes );

		add_action( 'wp_enqueue_scripts', [ $this, 'remove_theme_resources' ], PHP_INT_MAX );
		add_action( 'wp_enqueue_scripts', [ $this, 'register_assets' ] );
		add_action( 'wp', [ $this, 'wp' ] );
	}

	/**
	 * Remove theme's scripts & styles
	 *
	 * @return void
	 */
	public function remove_theme_resources() {
		if ( ! get_query_var( 'gandalf_router' ) ) {
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
			'gandalf-style',
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
				'gandalf-vendors',
				GDLF_URL . 'assets/' . $vendors_js,
				[],
				GDLF_VERSION,
				true,
			);

			wp_register_script(
				'gandalf-script',
				GDLF_URL . 'assets/' . $app_js,
				[ 'gandalf-vendors' ],
				GDLF_VERSION,
				true,
			);
		}

		if ( get_query_var( 'gandalf_router' ) ) {
			wp_enqueue_style( 'gandalf-style' );

			if ( $vendors_js && $app_js ) {
				wp_enqueue_script( 'gandalf-script' );

				$logo = '';

				if ( has_custom_logo() ) {
					$logo_data = wp_get_attachment_image_src( get_theme_mod( 'custom_logo' ), 'full' );
					$logo      = $logo_data[0];
				}

				$steps = apply_filters( 'gandalf/data/steps', [] );

				foreach ( $steps as $key => $step ) {
					if ( ! $step instanceof Step ) {
						unset( $steps[ $key ] );
						continue;
					}

					$steps[ $key ] = $step->to_array();
				}

				usort(
					$steps,
					function ( $a, $b ) {
						return $a['priority'] <=> $b['priority'];
					}
				);

				// Do validations before passing them

				$gandalf_data = [
					'logo'     => apply_filters( 'gandalf/data/logo', $logo ),
					'url'      => [
						'public' => GDLF_URL,
						'exit'   => apply_filters( 'gandalf/data/exit/url', get_admin_url() ),
					],
					'progress' => [
						'bar'     => true,
						'numbers' => true,
					],
					'steps'    => $steps,
					'text'     => [
						'button'      => [
							'next'    => apply_filters( 'gandalf/data/text/button/next', __( 'Continue', 'gandalf' ) ),
							'prev'    => apply_filters( 'gandalf/data/text/button/prev', __( 'Back', 'gandalf' ) ),
							'finish'  => apply_filters( 'gandalf/data/text/button/finish', __( 'Finish', 'gandalf' ) ),
							'import'  => apply_filters( 'gandalf/data/text/button/import', __( 'Import', 'gandalf' ) ),
							'install' => apply_filters( 'gandalf/data/text/button/install', __( 'Install', 'gandalf' ) ),
							'view'    => apply_filters( 'gandalf/data/text/button/view', __( 'View', 'gandalf' ) ),
							'exit'    => apply_filters( 'gandalf/data/text/button/exit', __( 'Back to Dashboard', 'gandalf' ) ),
						],
						'empty'       => [
							'steps'    => apply_filters( 'gandalf/data/text/empty/steps', __( 'Hey, there\'s nothing to configure yet!', 'gandalf' ) ),
							'builders' => apply_filters( 'gandalf/data/text/empty/builders', __( 'Hey, there\'s nothing to configure yet!', 'gandalf' ) ),
						],
						'placeholder' => [
							'search' => apply_filters( 'gandalf/data/text/placeholder/search', __( 'Find the perfect Template', 'gandalf' ) ),
						],
					],
				];

				$extra_gandalf_data    = apply_filters( 'gandalf/extra/data', [] );
				$required_gandalf_data = array_keys( $gandalf_data );

				// Remove native fields from extra data
				$extra_gandalf_data = array_filter(
					$extra_gandalf_data,
					static function ( $key ) use ( $required_gandalf_data ) {
						return ! in_array( $key, $required_gandalf_data );
					},
					ARRAY_FILTER_USE_KEY
				);

				$gandalf_data = array_merge( $gandalf_data, $extra_gandalf_data );

				wp_localize_script(
					'gandalf-script',
					'gandalf_data',
					$gandalf_data,
				);
			}
		}
	}

	/**
	 * WP hook handler
	 *
	 * @return void
	 */
	public function wp() {
		if ( get_query_var( 'gandalf_router' ) ) {
			add_filter( 'show_admin_bar', '__return_false' );
		}
	}

}
