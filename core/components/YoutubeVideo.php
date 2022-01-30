<?php

namespace StaxWp\Gandalf\Core\Components;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

use StaxWp\Gandalf\Core\Step;

final class YoutubeVideo extends Step {

	/**
	 * YoutubeVideo constructor
	 *
	 * @param array   $data
	 * @param integer $priority
	 */
	public function __construct( array $data, int $priority = 0 ) {
		parent::__construct( $data, $priority );

		$this->add_validation_rules(
			[
				'title'       => 'sometimes|required|string|nullable',
				'description' => 'sometimes|required|string|nullable',
				'url'         => [ 'required', 'string', 'regex:/^(https?\:\/\/)?(www\.)?(youtube\.com|youtu\.be)\/watch\?v\=\w+$/' ],
				'autoplay'    => 'required|boolean',
			]
		);
	}

}
