<?php

namespace StaxWp\Gandalf\Core\Components;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

use StaxWp\Gandalf\Core\Step;

final class BuilderPicker extends Step {

	/**
	 * BuilderPicker constructor
	 *
	 * @param array   $data
	 * @param integer $priority
	 */
	public function __construct( array $data, int $priority = 0 ) {
		parent::__construct( $data, $priority );
		$this->set_requires_action();

		$builders = [
			[
				'type'     => 'wordpress',
				'title'    => __( 'Wordpress', 'gandalf' ),
				'selected' => false,
			],
			[
				'type'     => 'elementor',
				'title'    => __( 'Elementor', 'gandalf' ),
				'selected' => false,
			],
			[
				'type'     => 'beaver-builder',
				'title'    => __( 'Beaver Builder', 'gandalf' ),
				'selected' => false,
			],
		];

		if ( isset( $data['only'] ) && is_array( $data['only'] ) ) {
			$exclude  = $data['only'];
			$builders = array_filter(
				$builders,
				static function( $value ) use ( $exclude ) {
					return in_array( $value['type'], $exclude, true );
				}
			);
		}

		$this->add_data(
			'builders',
			$builders
		);

		$this->add_validation_rules(
			[
				'title'               => 'string|nullable',
				'description'         => 'string|nullable',
				'only'                => 'sometimes|required|array|min:1',
				'builders'            => 'required|array',
				'builders.*.type'     => 'required|string|in:wordpress,elementor,beaver-builder',
				'builders.*.title'    => 'required|string|min:1',
				'builders.*.selected' => 'required|boolean',
			]
		);
	}

}
