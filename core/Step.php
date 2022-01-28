<?php

namespace StaxWp\Gandalf\Core;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

abstract class Step {

	/**
	 * Step type
	 *
	 * @var string
	 */
	private $type;

	/**
	 * Step priority
	 *
	 * @var int
	 */
	private $priority;

	/**
	 * Step data
	 *
	 * @var array
	 */
	private $data;

	/**
	 * Step constructor
	 *
	 * @param array   $data
	 * @param integer $priority
	 */
	public function __construct( array $data, int $priority = 0 ) {
		$this->type     = ( new \ReflectionClass( $this ) )->getShortName();
		$this->data     = $data;
		$this->priority = $priority;
	}

	/**
	 * Get step type
	 *
	 * @return string
	 */
	public function get_type() {
		return $this->type;
	}

	/**
	 * Get step priority
	 *
	 * @return int
	 */
	public function get_priority() {
		return $this->priority;
	}

	/**
	 * Get step data
	 *
	 * @return array
	 */
	public function get_data() {
		return $this->data;
	}

	/**
	 * Set step priority
	 *
	 * @param integer $priority
	 * @return Step
	 */
	public function set_priority( int $priority ) {
		$this->priority = $priority;

		return $this;
	}

	/**
	 * Set step data
	 *
	 * @param array $data
	 * @return Step
	 */
	public function set_data( array $data ) {
		$this->data = $data;

		return $this;
	}

	/**
	 * Get step as array
	 *
	 * @return array
	 */
	public function to_array() {
		return get_object_vars( $this );
	}

}
