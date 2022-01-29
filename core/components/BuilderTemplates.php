<?php

namespace StaxWp\Gandalf\Core\Components;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

use StaxWp\Gandalf\Core\Step;

final class BuilderTemplates extends Step {

	/**
	 * BuilderTemplates constructor
	 *
	 * @param array   $data
	 * @param integer $priority
	 */
	public function __construct( array $data, int $priority = 0 ) {
		parent::__construct( $data, $priority );

		$this->add_validation_rules(
			[
				'title'       => 'required|string|nullable',
				'description' => 'required|string|nullable',
				'builder'     => 'string|nullable',
				'search'      => 'required|boolean',
				'menu'        => 'required|boolean',
				'sort'        => 'required|boolean',
				'source'      => 'required|string',
			]
		);
	}

}
