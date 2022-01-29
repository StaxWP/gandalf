<?php

namespace StaxWp\Gandalf\Core;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

use Illuminate\Container\Container;
use Illuminate\Filesystem\Filesystem;
use Illuminate\Translation\FileLoader;
use Illuminate\Translation\Translator;
use Illuminate\Validation\Factory;
use Exception;

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
	 * Step skippable
	 *
	 * A stept without $reqires_actions si skippable by default. Use skippable only when you want to display the "Skip" button instead of "Continue"
	 *
	 * @var boolean
	 */
	private $skippable = false;

	/**
	 * Step requires action
	 *
	 * @var boolean
	 */
	private $requires_action = false;

	/**
	 * Step vars
	 *
	 * @var array
	 */
	private $vars = [];

	/**
	 * Step data
	 *
	 * @var array
	 */
	private $data;

	/**
	 * Step data validator
	 *
	 * @var Factory
	 */
	private $validation;

	/**
	 * Step data validation rules
	 *
	 * @var array
	 */
	private $validation_rules = [];

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

		$loader           = new FileLoader( new Filesystem(), 'lang' );
		$translator       = new Translator( $loader, 'en' );
		$this->validation = new Factory( $translator, new Container() );
	}

	/**
	 * Get step type
	 *
	 * @return string
	 */
	public function type() {
		return $this->type;
	}

	/**
	 * Get step priority
	 *
	 * @return int
	 */
	public function priority() {
		return $this->priority;
	}

	/**
	 * Check if step skippable
	 *
	 * @return boolean
	 */
	public function is_skippable() {
		return $this->skippable;
	}

	/**
	 * Check if step requires action
	 *
	 * @return boolean
	 */
	public function requires_action() {
		return $this->requires_action;
	}

	/**
	 * Get step vars
	 *
	 * @return array
	 */
	public function vars() {
		return $this->vars;
	}

	/**
	 * Get step data
	 *
	 * @return array
	 */
	public function data() {
		return $this->data;
	}

	/**
	 * Set step priority
	 *
	 * @param integer $priority
	 * @return Step
	 */
	protected function set_priority( int $priority ) {
		$this->priority = $priority;

		return $this;
	}

	/**
	 * Set step skippable status
	 *
	 * @param boolean $skippable
	 * @return Step
	 */
	protected function set_skippable( bool $skippable = true ) {
		$this->skippable = $skippable;

		return $this;
	}

	/**
	 * Set step requires actions status
	 *
	 * @param boolean $requires_action
	 * @return Step
	 */
	protected function set_requires_action( bool $requires_action = true ) {
		$this->requires_action = $requires_action;

		return $this;
	}

	/**
	 * Add step var
	 *
	 * @param string $var
	 * @param mixed  $value
	 * @return Step
	 */
	protected function add_var( string $var, $value = null ) {
		$this->vars[ $var ] = $value;

		return $this;
	}

	/**
	 * Remove step var
	 *
	 * @param string $var
	 * @return Step
	 */
	protected function remove_var( string $var ) {
		if ( isset( $this->vars[ $var ] ) ) {
			unset( $this->vars[ $var ] );
		}

		return $this;
	}

	/**
	 * Add more data or overwrite existing one
	 *
	 * @param string $name
	 * @param mixed  $value
	 * @return Step
	 */
	public function add_data( string $name, $value ) {
		$this->data[ $name ] = $value;

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
	 * @return mixed
	 */
	public function to_array() {
		$this->validate_data();

		return get_object_vars( $this );
	}

	/**
	 * Add validation rules
	 *
	 * @param array $rules
	 * @return void
	 */
	protected function add_validation_rules( array $rules ) {
		$this->validation_rules = array_merge( $this->validation_rules, $rules );

		return $this;
	}

	/**
	 * Validate step's data
	 *
	 * @return mixed
	 */
	protected function validate_data() {
		if ( ! empty( $this->data() ) && empty( $this->validation_rules ) ) {
			throw new Exception( $this->type() . ' has data but no validation rules.' );
		}

		$validator = $this->validation->make( $this->data(), $this->validation_rules );

		if ( $validator->fails() ) {
			throw new Exception( $this->type() . ' has an incorrect data format.' );
		}
	}

}
