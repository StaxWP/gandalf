/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"app": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,"chunk-vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/App.vue?vue&type=script&lang=js":
/*!********************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/App.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _shared_Header_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared/Header.vue */ \"./src/shared/Header.vue\");\n/* harmony import */ var _shared_Footer_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/Footer.vue */ \"./src/shared/Footer.vue\");\n/* harmony import */ var _shared_Content_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/Content.vue */ \"./src/shared/Content.vue\");\n/* harmony import */ var _components_YoutubeVideo_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/YoutubeVideo.vue */ \"./src/components/YoutubeVideo.vue\");\n/* harmony import */ var _components_BuilderPicker_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/BuilderPicker.vue */ \"./src/components/BuilderPicker.vue\");\n\n\n\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  components: {\n    Header: _shared_Header_vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n    Footer: _shared_Footer_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n    Content: _shared_Content_vue__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n    YoutubeVideo: _components_YoutubeVideo_vue__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n    BuilderPicker: _components_BuilderPicker_vue__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n  },\n  data() {\n    return {\n      app: {\n        logo: \"\",\n        exit: {\n          url: \"\",\n          text: \"\",\n        },\n        buttons: {\n          next: \"\",\n          prev: \"\",\n          finish: \"\",\n          import: \"\",\n          install: \"\",\n          view: \"\",\n        },\n        public_url: \"\",\n        progress: false,\n        steps: [],\n        no_steps_text: \"\",\n      },\n      step: 0,\n      total_steps: 0,\n    };\n  },\n  beforeMount() {\n    this.app = window.gandalf_data;\n    this.app.steps = this.app.steps.filter((item) => {\n      return this.$options.components[item.type] !== undefined;\n    });\n\n    this.total_steps = this.app.steps.length;\n  },\n  mounted() {\n    this.emitter.on(\"update:step\", (step) => {\n      this.step = step;\n    });\n  },\n});\n\n\n//# sourceURL=webpack:///./src/App.vue?./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1");

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/BuilderPicker.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/components/BuilderPicker.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  props: {\n    data: {\n      type: Object,\n      required: true,\n      default: () => ({\n        title: \"\",\n        description: \"\",\n        builders: () => ({}),\n      }),\n    },\n    public_url: {\n      type: String,\n      required: true,\n    },\n  },\n  watch: {\n    selected: function (newValue, oldValue) {\n      if (newValue === oldValue) {\n        return;\n      }\n\n      if (!newValue) {\n        this.disableNext();\n      } else {\n        this.emitter.emit(\"update:btn:next:disabled\", false);\n        this.emitter.emit(\"update:btn:next:tooltip\", \"\");\n      }\n    },\n  },\n  data() {\n    return {\n      selected: \"\",\n    };\n  },\n  mounted() {\n    if (!this.selected) {\n      this.disableNext();\n    }\n  },\n  methods: {\n    disableNext() {\n      this.emitter.emit(\"update:btn:next:disabled\", true);\n      this.emitter.emit(\n        \"update:btn:next:tooltip\",\n        \"Pick an option to continue!\"\n      );\n    },\n  },\n});\n\n\n//# sourceURL=webpack:///./src/components/BuilderPicker.vue?./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1");

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/YoutubeVideo.vue?vue&type=script&lang=js":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/components/YoutubeVideo.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue3_youtube__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue3-youtube */ \"./node_modules/vue3-youtube/dist/vue3-youtube.umd.min.js\");\n/* harmony import */ var vue3_youtube__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue3_youtube__WEBPACK_IMPORTED_MODULE_0__);\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  components: { YouTube: (vue3_youtube__WEBPACK_IMPORTED_MODULE_0___default()) },\n  props: {\n    data: {\n      type: Object,\n      required: true,\n      default: () => ({\n        title: \"\",\n        description: \"\",\n        url: \"\",\n        autoplay: false,\n      }),\n    },\n    public_url: {\n      type: String,\n      required: true,\n    },\n  },\n  methods: {\n    onReady() {\n      if (this.data.autoplay) this.$refs.youtube.playVideo();\n    },\n  },\n});\n\n\n//# sourceURL=webpack:///./src/components/YoutubeVideo.vue?./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1");

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/shared/Footer.vue?vue&type=script&lang=js":
/*!******************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/shared/Footer.vue?vue&type=script&lang=js ***!
  \******************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  props: {\n    step: {\n      type: Number,\n      required: true,\n    },\n    total_steps: {\n      type: Number,\n      required: true,\n    },\n    progress: {\n      type: Object,\n      default: () => ({\n        enabled: false,\n        full: false,\n        numbers: false,\n      }),\n    },\n    btnNext: {\n      type: String,\n      required: true,\n    },\n    btnPrev: {\n      type: String,\n      required: true,\n    },\n  },\n  data() {\n    return {\n      next: {\n        show: true,\n        disabled: false,\n        tooltip: \"\",\n      },\n    };\n  },\n  computed: {\n    progressBar: function () {\n      return Math.round((this.step / this.total_steps) * 100);\n    },\n  },\n  created() {\n    this.emitter.on(\"update:btn:next:show\", (show) => {\n      this.next.show = show;\n    });\n    this.emitter.on(\"update:btn:next:disabled\", (disabled) => {\n      this.next.disabled = disabled;\n    });\n    this.emitter.on(\"update:btn:next:tooltip\", (tooltip) => {\n      this.next.tooltip = tooltip;\n    });\n  },\n  methods: {\n    goPrev() {\n      const prevStep = this.step - 1;\n      this.emitter.emit(\"update:step\", prevStep);\n    },\n    goNext() {\n      if (this.next.disabled) return;\n\n      const nextStep = this.step + 1;\n      this.emitter.emit(\"update:step\", nextStep);\n    },\n  },\n});\n\n\n//# sourceURL=webpack:///./src/shared/Footer.vue?./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1");

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/shared/Header.vue?vue&type=script&lang=js":
/*!******************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/shared/Header.vue?vue&type=script&lang=js ***!
  \******************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  props: {\n    logo: {\n      type: String,\n      default: \"\",\n    },\n    exit: {\n      type: Object,\n      default: () => ({\n        url: \"\",\n        text: \"\",\n      }),\n    },\n  },\n});\n\n\n//# sourceURL=webpack:///./src/shared/Header.vue?./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1");

/***/ }),

/***/ "./node_modules/vue-loader-v16/dist/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/App.vue?vue&type=template&id=7ba5bd90":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader-v16/dist/templateLoader.js??ref--5!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/App.vue?vue&type=template&id=7ba5bd90 ***!
  \***************************************************************************************************************************************************************************************************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm-bundler.js\");\n\n\nconst _hoisted_1 = { class: \"gan-flex gan-flex-col gan-h-screen gan-bg-neutral-100\" }\nconst _hoisted_2 = {\n  key: 1,\n  class: \"gan-text-center\"\n}\nconst _hoisted_3 = { class: \"gan-text-center gan-font-black gan-text-4xl gan-tracking-wide\" }\nconst _hoisted_4 = [\"href\"]\n\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n  const _component_Header = Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"resolveComponent\"])(\"Header\")\n  const _component_Content = Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"resolveComponent\"])(\"Content\")\n  const _component_Footer = Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"resolveComponent\"])(\"Footer\")\n\n  return (Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"openBlock\"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementBlock\"])(\"div\", _hoisted_1, [\n    Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(_component_Header, {\n      logo: $data.app.logo,\n      exit: $data.app.exit\n    }, null, 8 /* PROPS */, [\"logo\", \"exit\"]),\n    Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(_component_Content, null, {\n      default: Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"withCtx\"])(() => [\n        ($data.app.steps.length)\n          ? (Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"openBlock\"])(true), Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementBlock\"])(vue__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], { key: 0 }, Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"renderList\"])($data.app.steps, (item, key) => {\n              return (Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"openBlock\"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementBlock\"])(vue__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], null, [\n                (parseInt(key) === $data.step)\n                  ? (Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"openBlock\"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createBlock\"])(Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"resolveDynamicComponent\"])(item.type), {\n                      key: key,\n                      public_url: $data.app.public_url,\n                      data: item.data\n                    }, null, 8 /* PROPS */, [\"public_url\", \"data\"]))\n                  : Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createCommentVNode\"])(\"v-if\", true)\n              ], 64 /* STABLE_FRAGMENT */))\n            }), 256 /* UNKEYED_FRAGMENT */))\n          : Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createCommentVNode\"])(\"v-if\", true),\n        (!$data.app.steps.length && $data.app.no_steps_text)\n          ? (Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"openBlock\"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementBlock\"])(\"div\", _hoisted_2, [\n              Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementVNode\"])(\"h3\", _hoisted_3, Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"toDisplayString\"])($data.app.no_steps_text), 1 /* TEXT */),\n              ($data.app.exit.url && $data.app.exit.text)\n                ? (Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"openBlock\"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementBlock\"])(\"a\", {\n                    key: 0,\n                    href: $data.app.exit.url,\n                    class: \"gan-inline-block gan-mt-6 gan-px-6 gan-py-3 gan-bg-gradient-to-r gan-from-neutral-800 gan-to-neutral-700 gan-text-white gan-rounded hover:gan-to-neutral-800 hover:gan-shadow-xl\"\n                  }, Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"toDisplayString\"])($data.app.exit.text), 9 /* TEXT, PROPS */, _hoisted_4))\n                : Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createCommentVNode\"])(\"v-if\", true)\n            ]))\n          : Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createCommentVNode\"])(\"v-if\", true)\n      ]),\n      _: 1 /* STABLE */\n    }),\n    ($data.app.steps.length)\n      ? (Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"openBlock\"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createBlock\"])(_component_Footer, {\n          key: 0,\n          step: $data.step,\n          total_steps: $data.total_steps,\n          progress: $data.app.progress,\n          btnNext: $data.app.buttons.next,\n          btnPrev: $data.app.buttons.prev\n        }, null, 8 /* PROPS */, [\"step\", \"total_steps\", \"progress\", \"btnNext\", \"btnPrev\"]))\n      : Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createCommentVNode\"])(\"v-if\", true)\n  ]))\n}\n\n//# sourceURL=webpack:///./src/App.vue?./node_modules/vue-loader-v16/dist/templateLoader.js??ref--5!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1");

/***/ }),

/***/ "./node_modules/vue-loader-v16/dist/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/BuilderPicker.vue?vue&type=template&id=61c35b89":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader-v16/dist/templateLoader.js??ref--5!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/components/BuilderPicker.vue?vue&type=template&id=61c35b89 ***!
  \************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm-bundler.js\");\n\n\nconst _hoisted_1 = { class: \"gan-w-1/2 gan-flex gan-flex-col gan-flex-wrap gan-justify-center\" }\nconst _hoisted_2 = {\n  key: 0,\n  class: \"gan-mb-10\"\n}\nconst _hoisted_3 = {\n  key: 0,\n  class: \"gan-text-center gan-font-black gan-text-4xl gan-tracking-wide\"\n}\nconst _hoisted_4 = {\n  key: 1,\n  class: \"gan-text-center gan-mt-6 gan-text-neutral-700 gan-px-40\"\n}\nconst _hoisted_5 = { class: \"gan-grid gan-grid-cols-3 gan-gap-4 gan-mx-20\" }\nconst _hoisted_6 = [\"onClick\"]\nconst _hoisted_7 = [\"src\"]\nconst _hoisted_8 = { class: \"gan-mt-6\" }\n\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n  return (Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"openBlock\"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementBlock\"])(\"div\", _hoisted_1, [\n    ($props.data.title || $props.data.description)\n      ? (Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"openBlock\"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementBlock\"])(\"div\", _hoisted_2, [\n          ($props.data.title)\n            ? (Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"openBlock\"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementBlock\"])(\"h2\", _hoisted_3, Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"toDisplayString\"])($props.data.title), 1 /* TEXT */))\n            : Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createCommentVNode\"])(\"v-if\", true),\n          ($props.data.description)\n            ? (Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"openBlock\"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementBlock\"])(\"div\", _hoisted_4, Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"toDisplayString\"])($props.data.description), 1 /* TEXT */))\n            : Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createCommentVNode\"])(\"v-if\", true)\n        ]))\n      : Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createCommentVNode\"])(\"v-if\", true),\n    Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementVNode\"])(\"div\", _hoisted_5, [\n      (Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"openBlock\"])(true), Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementBlock\"])(vue__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], null, Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"renderList\"])($props.data.builders, (builder, key) => {\n        return (Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"openBlock\"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementBlock\"])(\"div\", {\n          key: key,\n          class: Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"normalizeClass\"])([\"gan-flex gan-flex-wrap gan-flex-col gan-items-center gan-justify-center gan-p-6 gan-rounded gan-shadow-lg hover:gan-shadow-xl hover:gan-cursor-pointer gan-bg-white gan-border-4 gan-border-transparent gan-transition gan-ease-linear hover:gan--translate-y-2\", {\n          'gan-border-indigo-500 hover:gan-border-indigo-500':\n            $data.selected === builder.type,\n        }]),\n          onClick: Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"withModifiers\"])($event => ($data.selected = builder.type), [\"stop\"])\n        }, [\n          Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementVNode\"])(\"img\", {\n            src: \n            $props.public_url + 'assets' + __webpack_require__(\"./src/assets/svg sync recursive ^\\\\.\\\\/.*\\\\.svg$\")(`./${builder.type}.svg`)\n          ,\n            class: \"gan-block gan-w-20 gan-h-20\"\n          }, null, 8 /* PROPS */, _hoisted_7),\n          Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementVNode\"])(\"h4\", _hoisted_8, Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"toDisplayString\"])(builder.title), 1 /* TEXT */)\n        ], 10 /* CLASS, PROPS */, _hoisted_6))\n      }), 128 /* KEYED_FRAGMENT */))\n    ])\n  ]))\n}\n\n//# sourceURL=webpack:///./src/components/BuilderPicker.vue?./node_modules/vue-loader-v16/dist/templateLoader.js??ref--5!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1");

/***/ }),

/***/ "./node_modules/vue-loader-v16/dist/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/YoutubeVideo.vue?vue&type=template&id=35c68170":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader-v16/dist/templateLoader.js??ref--5!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/components/YoutubeVideo.vue?vue&type=template&id=35c68170 ***!
  \***********************************************************************************************************************************************************************************************************************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm-bundler.js\");\n\n\nconst _hoisted_1 = { class: \"gan-w-1/2 gan-flex gan-flex-col gan-flex-wrap gan-justify-center\" }\nconst _hoisted_2 = {\n  key: 0,\n  class: \"gan-mb-10\"\n}\nconst _hoisted_3 = {\n  key: 0,\n  class: \"gan-text-center gan-font-black gan-text-4xl gan-tracking-wide\"\n}\nconst _hoisted_4 = {\n  key: 1,\n  class: \"gan-text-center gan-mt-6 gan-text-neutral-700 gan-px-40\"\n}\n\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n  const _component_YouTube = Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"resolveComponent\"])(\"YouTube\")\n\n  return (Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"openBlock\"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementBlock\"])(\"div\", _hoisted_1, [\n    ($props.data.title || $props.data.description)\n      ? (Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"openBlock\"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementBlock\"])(\"div\", _hoisted_2, [\n          ($props.data.title)\n            ? (Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"openBlock\"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementBlock\"])(\"h2\", _hoisted_3, Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"toDisplayString\"])($props.data.title), 1 /* TEXT */))\n            : Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createCommentVNode\"])(\"v-if\", true),\n          ($props.data.description)\n            ? (Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"openBlock\"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementBlock\"])(\"div\", _hoisted_4, Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"toDisplayString\"])($props.data.description), 1 /* TEXT */))\n            : Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createCommentVNode\"])(\"v-if\", true)\n        ]))\n      : Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createCommentVNode\"])(\"v-if\", true),\n    Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(_component_YouTube, {\n      src: $props.data.url,\n      vars: { controls: 0, disablekb: 1, enablejsapi: 1, iv_load_policy: 0 },\n      width: \"770\",\n      height: \"446\",\n      onReady: $options.onReady,\n      ref: \"youtube\",\n      class: \"gan-mx-auto gan-yt-video\"\n    }, null, 8 /* PROPS */, [\"src\", \"onReady\"])\n  ]))\n}\n\n//# sourceURL=webpack:///./src/components/YoutubeVideo.vue?./node_modules/vue-loader-v16/dist/templateLoader.js??ref--5!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1");

/***/ }),

/***/ "./node_modules/vue-loader-v16/dist/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/shared/Content.vue?vue&type=template&id=010bd548":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader-v16/dist/templateLoader.js??ref--5!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/shared/Content.vue?vue&type=template&id=010bd548 ***!
  \**************************************************************************************************************************************************************************************************************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm-bundler.js\");\n\n\nconst _hoisted_1 = { class: \"gan-flex-1 gan-overflow-y-auto gan-flex gan-flex-wrap gan-items-center gan-justify-center gan-py-10\" }\nconst _hoisted_2 = /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementVNode\"])(\"div\", { class: \"gan-w-full gan-text-center gan-text-neutral-300 gan-mt-10 gan-text-sm\" }, [\n  /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createTextVNode\"])(\" Using Gandalf by \"),\n  /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementVNode\"])(\"a\", {\n    href: \"https://staxwp.com/gandalf\",\n    target: \"_blank\",\n    class: \"gan-underline\"\n  }, \"StaxWP\")\n], -1 /* HOISTED */)\n\nfunction render(_ctx, _cache) {\n  return (Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"openBlock\"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementBlock\"])(\"main\", _hoisted_1, [\n    Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"renderSlot\"])(_ctx.$slots, \"default\"),\n    _hoisted_2\n  ]))\n}\n\n//# sourceURL=webpack:///./src/shared/Content.vue?./node_modules/vue-loader-v16/dist/templateLoader.js??ref--5!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1");

/***/ }),

/***/ "./node_modules/vue-loader-v16/dist/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/shared/Footer.vue?vue&type=template&id=345b9d1c":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader-v16/dist/templateLoader.js??ref--5!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/shared/Footer.vue?vue&type=template&id=345b9d1c ***!
  \*************************************************************************************************************************************************************************************************************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm-bundler.js\");\n\n\nconst _hoisted_1 = { class: \"gan-flex gan-items-center gan-justify-between gan-z-10\" }\nconst _hoisted_2 = /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementVNode\"])(\"span\", { class: \"gan-block gan-mr-2 gan-w-5\" }, [\n  /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementVNode\"])(\"svg\", {\n    xmlns: \"http://www.w3.org/2000/svg\",\n    \"xmlns:xlink\": \"http://www.w3.org/1999/xlink\",\n    style: {\"enable-background\":\"new 0 0 128 128\"},\n    version: \"1.1\",\n    viewBox: \"0 0 128 128\",\n    \"xml:space\": \"preserve\",\n    class: \"gan-fill-current\"\n  }, [\n    /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementVNode\"])(\"g\", null, [\n      /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementVNode\"])(\"polygon\", { points: \"48.1,29.1 13.2,64 48.1,98.9 53.8,93.2 28.5,68 92,68 92,60 28.5,60 53.8,34.8  \" }),\n      /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementVNode\"])(\"rect\", {\n        height: \"8\",\n        width: \"8\",\n        x: \"104\",\n        y: \"60\"\n      })\n    ])\n  ])\n], -1 /* HOISTED */)\nconst _hoisted_3 = { key: 1 }\nconst _hoisted_4 = { key: 2 }\nconst _hoisted_5 = /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementVNode\"])(\"span\", { class: \"gan-block gan-ml-2 gan-w-5\" }, [\n  /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementVNode\"])(\"svg\", {\n    xmlns: \"http://www.w3.org/2000/svg\",\n    \"xmlns:xlink\": \"http://www.w3.org/1999/xlink\",\n    id: \"Layer_1\",\n    style: {\"enable-background\":\"new 0 0 128 128\"},\n    version: \"1.1\",\n    viewBox: \"0 0 128 128\",\n    \"xml:space\": \"preserve\",\n    class: \"gan-fill-current\"\n  }, [\n    /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementVNode\"])(\"g\", null, [\n      /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementVNode\"])(\"polygon\", { points: \"79.9,98.9 114.8,64 79.9,29.1 74.2,34.8 99.5,60 36,60 36,68 99.5,68 74.2,93.2  \" }),\n      /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementVNode\"])(\"rect\", {\n        height: \"8\",\n        width: \"8\",\n        x: \"16\",\n        y: \"60\"\n      })\n    ])\n  ])\n], -1 /* HOISTED */)\nconst _hoisted_6 = { key: 4 }\n\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n  const _directive_tooltip = Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"resolveDirective\"])(\"tooltip\")\n\n  return (Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"openBlock\"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementBlock\"])(\"footer\", {\n    class: Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"normalizeClass\"])([\"gan-relative gan-w-full gan-bg-white gan-py-4 gan-px-20 gan-shadow-top gan-z-0\", { 'gan-pt-6': $props.progress.enabled && !$props.progress.full }])\n  }, [\n    ($props.progress.enabled)\n      ? (Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"openBlock\"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementBlock\"])(\"div\", {\n          key: 0,\n          class: Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"normalizeClass\"])([\"gan-absolute gan-top-0 gan-left-0 gan-w-full\", {\n        'gan-bg-white gan-h-full gan--z-1': $props.progress.full,\n        'gan-bg-gray-100 gan-h-2': !$props.progress.full,\n      }])\n        }, [\n          Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementVNode\"])(\"div\", {\n            class: Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"normalizeClass\"])([\"gan-transition-width gan-ease-linear gan-duration-500\", {\n          'gan-bg-green-500 gan-h-full': $props.progress.full,\n          'gan-bg-green-500 gan-h-2': !$props.progress.full,\n        }]),\n            style: Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"normalizeStyle\"])(`width: ${$options.progressBar}%`)\n          }, null, 6 /* CLASS, STYLE */)\n        ], 2 /* CLASS */))\n      : Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createCommentVNode\"])(\"v-if\", true),\n    Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementVNode\"])(\"div\", _hoisted_1, [\n      ($props.step !== 0)\n        ? (Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"openBlock\"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementBlock\"])(\"button\", {\n            key: 0,\n            onClick: _cache[0] || (_cache[0] = Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"withModifiers\"])($event => ($options.goPrev()), [\"stop\"])),\n            class: \"gan-inline-flex gan-items-center gan-cursor-pointer gan-bg-gradient-to-r gan-from-neutral-200 gan-to-neutral-100 hover:gan-to-neutral-200 gan-text-neutral-600 gan-rounded-full gan-px-6 gan-py-3\"\n          }, [\n            _hoisted_2,\n            Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createTextVNode\"])(\" \" + Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"toDisplayString\"])($props.btnPrev), 1 /* TEXT */)\n          ]))\n        : (Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"openBlock\"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementBlock\"])(\"div\", _hoisted_3)),\n      ($props.progress.numbers)\n        ? (Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"openBlock\"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementBlock\"])(\"div\", _hoisted_4))\n        : Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createCommentVNode\"])(\"v-if\", true),\n      ($data.next.show && $props.total_steps !== $props.step)\n        ? Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"withDirectives\"])((Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"openBlock\"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementBlock\"])(\"button\", {\n            key: 3,\n            onClick: _cache[1] || (_cache[1] = Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"withModifiers\"])($event => ($options.goNext()), [\"stop\"])),\n            class: Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"normalizeClass\"])([\"gan-inline-flex gan-items-center gan-cursor-pointer gan-bg-gradient-to-r gan-from-indigo-600 gan-to-blue-600 hover:gan-to-indigo-600 gan-text-white gan-rounded-full gan-px-6 gan-py-3\", {\n          'gan-opacity-75 gan-cursor-not-allowed': $data.next.disabled,\n        }])\n          }, [\n            Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createTextVNode\"])(Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"toDisplayString\"])($props.btnNext) + \" \", 1 /* TEXT */),\n            _hoisted_5\n          ], 2 /* CLASS */)), [\n            [\n              _directive_tooltip,\n              $data.next.tooltip,\n              void 0,\n              { left: true }\n            ]\n          ])\n        : (Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"openBlock\"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementBlock\"])(\"div\", _hoisted_6))\n    ])\n  ], 2 /* CLASS */))\n}\n\n//# sourceURL=webpack:///./src/shared/Footer.vue?./node_modules/vue-loader-v16/dist/templateLoader.js??ref--5!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1");

/***/ }),

/***/ "./node_modules/vue-loader-v16/dist/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/shared/Header.vue?vue&type=template&id=558e010e":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader-v16/dist/templateLoader.js??ref--5!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/shared/Header.vue?vue&type=template&id=558e010e ***!
  \*************************************************************************************************************************************************************************************************************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm-bundler.js\");\n\n\nconst _hoisted_1 = { class: \"gan-w-full gan-flex gan-justify-between gan-bg-white gan-shadow-md gan-z-20\" }\nconst _hoisted_2 = {\n  href: \"https://staxwp.com/gandalf\",\n  target: \"_blank\",\n  class: \"gan-block\"\n}\nconst _hoisted_3 = [\"src\"]\nconst _hoisted_4 = {\n  key: 1,\n  class: \"gan-h-full\",\n  style: {\"enable-background\":\"new 0 0 48 48\"},\n  version: \"1.1\",\n  viewBox: \"0 0 48 48\",\n  \"xml:space\": \"preserve\",\n  xmlns: \"http://www.w3.org/2000/svg\",\n  \"xmlns:xlink\": \"http://www.w3.org/1999/xlink\"\n}\nconst _hoisted_5 = /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createStaticVNode\"])(\"<g id=\\\"Icons\\\"><g><path d=\\\"M41.25359,19.74176c-0.59,0.96-4.42,3.01-7.3,3.62l-19.57,0.15c-2.89-0.61-7.05-2.6-7.64-3.56    c-0.59-0.95,1.84-2.5,3.58-3.14c1.89-0.69,6.97-2.48,7.27-3.41c0.29-0.93,2.21-4.33,3.39-6.34c1.18-2,3.06-1.65,3.06-1.65    s1.89-0.35,3.07,1.65c1.05,1.8,2.69,4.71,3.24,5.97c0.06,0.15,0.11,0.27,0.14,0.37c0.03,0.11,0.13,0.22,0.28,0.35    c1.14,0.98,5.32,2.45,6.99,3.06C39.50359,17.45176,41.84359,18.78176,41.25359,19.74176z\\\" style=\\\"fill:#e1e5d6;\\\"></path><path d=\\\"M41.25359,19.74176c-0.59,0.96-4.42,3.01-7.3,3.62h-0.27l-3.77,0.03l-11.45,0.09l-3.85,0.03h-0.23    c-0.72-0.15-1.43-0.37-2.12-0.61c-0.97-0.34-1.92-0.72-2.85-1.15c-0.74-0.35-1.49-0.71-2.15-1.2c-0.17-0.13-0.38-0.28-0.48-0.48    c-0.08-0.14-0.02-0.28,0.09-0.38c0.24-0.23,0.54-0.37,0.83-0.53c0.31-0.18,0.63-0.35,0.95-0.53c0.64-0.34,1.29-0.66,1.96-0.93    c0.9-0.35,1.81-0.65,2.75-0.9c0.94-0.25,1.91-0.44,2.88-0.59c0.89-0.15,2.6001,1.0564,2.6902,1.0464    c1-0.07,2.1432-0.3659,3.1432-0.3659c0.99,0,2.07,0.5886,3.06,0.6486c0.96,0.06,1.701-0.4592,2.661-0.3493    c0.69,0.0801,1.3656,0.2326,2.0455,0.3327c0.23,0.0399,0.6348,0.226,0.8648,0.2661c0.45,0.07,0.9753-1.1086,1.4253-1.0186v0.01    c0.4,0.07,0.79,0.15,1.19,0.23c0.76,0.16,1.52,0.34,2.28,0.53c0.66,0.17,1.32,0.35,1.98,0.55c0.54,0.16,1.07,0.34,1.6,0.53    c0.4,0.14,0.8,0.3,1.19,0.47c0.24,0.12,0.49,0.23,0.71,0.39C41.14359,19.53176,41.31359,19.64176,41.25359,19.74176z\\\" style=\\\"fill:#8d8d8d;\\\"></path><path d=\\\"M39.22359,37.54176c-0.88,0,0.48,1.94-0.58,1.39c-1.05-0.55-0.99-1.06-1.46,0.48    c-0.4415,1.4075,0.1578,1.8672-0.3195,1.9084c-0.0415,0.0036-1.0497-0.6843-1.109-0.6867    c-0.7399-0.04-1.9321-1.0431-1.9321-1.0431s-0.2633-0.6016-1.4534-0.4616c-1.19,0.13-4.0195,1.5277-5.0276,2.019    c-0.5142,0.2507-0.9711,0.5055-1.2684,0.644c-0.89,0.41-0.55,0.07-1.5-0.24c-0.96-0.3-1.58,1.06-1.58,1.06s-0.67-0.99-1.6-1.64    c-0.46-0.32-0.6025-0.26-0.7575-0.0938c-0.155,0.1663-0.5119-0.4692-1.0219-0.3642c-1.03,0.1999-0.7041-0.6278-2.2741-0.8379    c-1.57-0.2-1.2386,0.1594-2.1886-0.2906c-0.96-0.4601-2.4379,1.2465-3.1279,1.4065c-0.69,0.15-1.05-0.74-1.83-0.22    c-0.79,0.51-1.16,0.44-0.62-0.79c0.55-1.23,0.68-1.46-0.54-2.01c-1.23-0.54-0.42-1.57-0.42-1.57s1.37-0.51,1.25-3.1    c-0.11-2.6,0.63-3.07,2.55-3.87c1.92-0.79,1.52-1.38,1.81-3.2c0.17-1.02,0.3-1.92,0.39-2.52c0.07-0.47,0.11-0.75,0.11-0.75    c0.37-2.55,1.52-6.55,1.52-6.55c0.89-0.15,1.79-0.25,2.69-0.31c0.09-0.01,0.18-0.01,0.27-0.02c1-0.07,2-0.1,3-0.1    c0.99,0,1.97,0.04,2.96,0.1c0.96,0.06,1.92,0.15,2.88,0.26c0.69,0.08,1.37,0.18,2.05,0.28c0.23,0.04,0.46,0.07,0.69,0.11    c0.45,0.07,0.9,0.15,1.35,0.24v0.01l1.13,5.05c0,0,0.23,0.61,0.42,1.53c0.14,0.69,0.26,1.55,0.24,2.46    c-0.05,2.13,0.89,2.87,2.79,3.98c1.89,1.1,1.53,2.07,1.55,2.99c0.03,0.91-0.5,2.02,0.85,3.19c1.36,1.17,0.49,0.53,0.73,0.97    C40.07359,37.40176,40.11359,37.53176,39.22359,37.54176z\\\" style=\\\"fill:#f4f4f4;\\\"></path><path d=\\\"M30.13359,20.67176c-0.23,0.83,0.08,1.79-0.22,2.72c-0.07,0.18-0.15,0.35-0.26,0.53    c-0.66,1.03-1.31,1.88-1.38,2.33h-0.03c-0.26-0.23-0.56-0.46-0.88-0.67c-0.29-0.18-0.58-0.34-0.85-0.45    c-0.29-0.13-0.55-0.2-0.75-0.2c-0.55,0.01-1.09-0.3-1.39-0.51c-0.01,0-0.01,0-0.01,0c-0.09-0.07-0.17-0.13-0.2-0.16    c-0.03,0.02-0.1,0.08-0.21,0.16c-0.29,0.2-0.84,0.52-1.4,0.51c-0.13,0-0.29,0.03-0.46,0.09c-0.24,0.07-0.5,0.19-0.77,0.34    c-0.45,0.25-0.9,0.57-1.25,0.89l-0.04-0.02c0-0.43-0.74-1.42-1.44-2.5c-0.05-0.08-0.1-0.16-0.13-0.25c-0.5-1.01-0.08-2.08-0.34-3    c-0.29-0.99-0.04-4.07-0.04-4.31c0.28-0.1,0.57-0.18,0.85-0.27c0.09-0.01,0.18-0.01,0.27-0.02c1-0.07,2-0.1,3-0.1    c0.99,0,1.97,0.04,2.96,0.1c0.96,0.06,1.92,0.15,2.88,0.26c0.69,0.08,1.37,0.18,2.05,0.28    C30.12359,16.92176,30.40359,19.73176,30.13359,20.67176z\\\" style=\\\"fill:#f9d9c0;\\\"></path><path d=\\\"M36.86359,41.31176c-0.04,0.01-0.09,0.01-0.15,0.01c-0.74-0.04-1.78-0.53-1.78-0.53    s-0.96-0.77-2.15-0.63c-1.19,0.13-0.31,0.95-0.31,0.95c-1.22,0-1.19,0.21-2.22-0.48c-0.68-0.45-1.9,0.02-2.91,0.52l0.82-1.14    c1.07-0.67,1.48-4.31,2.05-6.51c0.29-1.12,0.47-2.9,0.58-4.39c0.28,1.19,0.65,2.26,1.12,2.86c1.52,1.93,1.67,3.42,1.62,4.61    c-0.05,1.18,1.29,3.41,2.68,4.21C36.21359,40.79176,36.21359,40.79176,36.86359,41.31176z\\\" style=\\\"fill:#dbdbd9;\\\"></path><g><path d=\\\"M20.59359,40.92176c-0.14,0.17-0.32,0.4-0.79,0.5c-1.03,0.2-1.23-0.58-2.8-0.79     c-1.57-0.2-0.65,1.23-0.65,1.23c-0.92-0.31-0.85-1.4-1.8-1.85c-0.96-0.46-1.84,0.62-2.53,0.78c1.39-0.8,2.73-3.03,2.68-4.21     c-0.05-1.19,0.1-2.68,1.62-4.61c0.46-0.58,0.82-1.62,1.1-2.79c0.11,1.46,0.31,3.2,0.6,4.32c0.57,2.2,0.98,5.84,2.05,6.51     L20.59359,40.92176z\\\" style=\\\"fill:#dbdbd9;\\\"></path></g><g><g><path d=\\\"M26.85479,21.45936c-0.8125,0-1.5479-0.834-1.6289-0.9297      c-0.1436-0.1679-0.1241-0.4199,0.0439-0.5634c0.168-0.1426,0.4199-0.1231,0.5635,0.0429      c0.2168,0.253,0.6846,0.6504,1.0205,0.6504c0.0029,0,0.0049,0,0.0078-0.001c0.6055-0.0117,1.3164-0.1777,1.3232-0.1796      c0.212-0.0469,0.4297,0.082,0.4815,0.2978c0.0508,0.2148-0.083,0.4307-0.2979,0.4815      c-0.0322,0.0068-0.8007,0.1875-1.4912,0.2011C26.86939,21.45936,26.86159,21.45936,26.85479,21.45936z\\\" style=\\\"fill:#e5c0a8;\\\"></path></g><g><path d=\\\"M26.66819,19.59706c-0.5947,0-0.6494-0.0185-0.7001-0.0351      c-0.0977-0.0332-0.1788-0.1026-0.2266-0.1934l-0.5654-1.0742c-0.0596-0.1133-0.0616-0.2471-0.0059-0.3613      c0.0557-0.1153,0.1621-0.1963,0.2881-0.2188c0.5703-0.1025,1.9355-0.3379,2.1953-0.3301      c0.2754,0.0137,1.1729,0.2295,1.4414,0.2949c0.2139,0.0528,0.3457,0.2696,0.293,0.4844      c-0.0528,0.2129-0.2666,0.3477-0.4844,0.293c-0.5146-0.126-1.1533-0.2666-1.2881-0.2734c-0.001,0-0.001,0-0.001,0      c-0.1289,0-0.7802,0.1025-1.4755,0.2226l0.208,0.3955c0.2793-0.0019,0.9648-0.0078,1.5839-0.0195c0.002,0,0.0049,0,0.0069,0      c0.2178,0,0.3965,0.1748,0.4004,0.3935c0.0039,0.2207-0.1719,0.4024-0.3936,0.4073      C27.35769,19.59216,26.95149,19.59706,26.66819,19.59706z\\\" style=\\\"fill:#e5c0a8;\\\"></path></g><g><path d=\\\"M21.44659,21.45936c-0.0069,0-0.0147,0-0.0225,0c-0.6904-0.0136-1.459-0.1943-1.4912-0.2011      c-0.2148-0.0508-0.3486-0.2667-0.2979-0.4815c0.0508-0.2158,0.2647-0.3447,0.4815-0.2978      c0.0068,0.0019,0.7197,0.1689,1.3232,0.1796c0.003,0.001,0.0049,0.001,0.0078,0.001c0.3516,0,0.8379-0.4365,1.0196-0.6494      c0.1455-0.1699,0.3965-0.1865,0.5644-0.0449c0.168,0.1435,0.1875,0.3965,0.044,0.5644      C22.99439,20.62536,22.25909,21.45936,21.44659,21.45936z\\\" style=\\\"fill:#e5c0a8;\\\"></path></g><g><path d=\\\"M21.65159,19.59706c-0.2832,0-0.6884-0.0049-1.2753-0.0146      c-0.2217-0.0049-0.3975-0.1866-0.3936-0.4073c0.0039-0.2207,0.1992-0.413,0.4072-0.3935      c0.5987,0.0107,1.2588,0.0166,1.583,0.0127l0.1973-0.3867c-0.6973-0.1211-1.3545-0.2246-1.4883-0.2246h-0.001      c-0.1298,0.0068-0.7685,0.1474-1.2832,0.2734c-0.2148,0.0557-0.4316-0.0801-0.4843-0.293      c-0.0528-0.2148,0.0791-0.4316,0.2929-0.4844c0.2686-0.0654,1.166-0.2812,1.4405-0.2949      c0.2949-0.0058,1.6279,0.2276,2.1963,0.3301c0.125,0.0225,0.2314,0.1025,0.2871,0.2158      c0.0556,0.1133,0.0556,0.2461-0.002,0.3594l-0.5469,1.0742c-0.0478,0.0938-0.1298,0.1651-0.2295,0.1983      C22.30109,19.57856,22.24639,19.59706,21.65159,19.59706z\\\" style=\\\"fill:#e5c0a8;\\\"></path></g></g><path d=\\\"M19.69739,15.85036c-0.0152,0.0644-0.0892,1.0584-0.108,1.1217    c-0.0572,0.1933-0.1266,0.3842-0.2157,0.5656c-0.1155,0.2355-0.2647,0.3909-0.4547,0.5698    c-0.4437,0.4178-0.8575,0.8654-1.2593,1.3223v-2.1829c0,0-0.0868-1.2651,0.8191-1.3187    C19.38469,15.87456,19.69739,15.85036,19.69739,15.85036z\\\" style=\\\"fill:#f4f4f4;\\\"></path><path d=\\\"M28.71779,16.22596c0.0152,0.0644,0.1191,1.1566,0.1379,1.2199    c0.0572,0.1933,0.1266,0.3842,0.2156,0.5656c0.1155,0.2355,0.2648,0.3909,0.4548,0.5698    c0.4437,0.4178,0.8574,0.8654,1.2592,1.3223v-2.1829c0,0,0.2487-1.0005-0.4588-1.2511c-0.0551-0.0195-0.2953-0.0583-0.3602-0.0676    C29.09239,16.27706,28.71779,16.22596,28.71779,16.22596z\\\" style=\\\"fill:#f4f4f4;\\\"></path><path d=\\\"M27.36359,25.58176c-0.29-0.18-0.58-0.34-0.85-0.45c-0.1-0.72-0.27-1.24-0.44-1.62    c-0.15,0.18-0.38,0.33-0.76,0.4c-0.13,0.03-0.24,0.12-0.37,0.22c-0.14,0.11-0.33,0.25-0.57,0.29c-0.01,0-0.01,0-0.01,0    c-0.09-0.07-0.17-0.13-0.2-0.16c-0.03,0.02-0.1,0.08-0.21,0.16c-0.23-0.05-0.42-0.19-0.56-0.29c-0.13-0.1-0.24-0.19-0.37-0.22    c-0.32-0.06-0.54-0.18-0.68-0.31c-0.15,0.36-0.26,0.83-0.25,1.42c-0.24,0.07-0.5,0.19-0.77,0.34c-0.19-2.3,1.14-3.36,1.2-3.41    c0.14-0.11,0.33-0.11,0.47-0.02c0.15,0.1,0.21,0.28,0.16,0.44c-0.03,0.12-0.1,0.19-0.17,0.25c-0.1,0.11-0.16,0.19-0.17,0.23    c0.01,0.09,0.01,0.21,0.36,0.28c0.32,0.06,0.54,0.23,0.71,0.36c0.17,0.14,0.23,0.16,0.28,0.15c0.06,0.01,0.12-0.01,0.29-0.15    c0.17-0.13,0.39-0.3,0.7-0.36c0.36-0.07,0.36-0.19,0.37-0.29c-0.01-0.03-0.07-0.11-0.17-0.22c-0.07-0.06-0.14-0.14-0.18-0.25    c-0.03-0.15,0.01-0.31,0.13-0.41c0.12-0.1,0.28-0.12,0.42-0.06C25.87359,21.96176,27.12359,22.61176,27.36359,25.58176z\\\" style=\\\"fill:#e5c0a8;\\\"></path><path d=\\\"M30.77359,13.75176c0,0-2.87-0.9-6.87-0.48c0,0,2.92-0.99,6.45-0.24c0.06,0.15,0.11,0.27,0.14,0.37    C30.52359,13.51176,30.62359,13.62176,30.77359,13.75176z\\\" style=\\\"fill:#c1c6af;\\\"></path><path d=\\\"M32.61359,18.94176c-0.62-0.11-1.23-0.2-1.83-0.28c-0.19-0.03-0.37-0.05-0.55-0.07    c-0.28-0.05-0.55-0.08-0.81-0.11c-4.24-0.51-7.82-0.56-10.42-0.45c-0.36,0.01-0.7,0.03-1.01,0.04c-0.12,0.01-0.22,0.02-0.33,0.03    c-0.8,0.05-1.47,0.12-1.98,0.18c0.31-1.2,0.56-2.07,0.56-2.07c0.71-0.12,1.43-0.21,2.15-0.26c0.02-0.01,0.03-0.01,0.04-0.01    c0.02-0.01,0.04-0.01,0.05-0.01c0.05-0.01,0.11-0.01,0.16-0.01c0.05,0,0.11,0,0.15-0.01c0.05,0,0.1-0.01,0.14-0.01    c0.56-0.04,0.76-0.05,0.76-0.05c0.84-0.05,1.67-0.07,2.51-0.07c0.99,0,1.97,0.04,2.96,0.1c0.96,0.06,1.92,0.15,2.88,0.26    c0.22,0.03,0.45,0.05,0.67,0.08c0,0,0.38,0.06,1.25,0.18c0.03,0,0.07,0.01,0.13,0.02c0.05,0.01,0.12,0.02,0.16,0.03    c0.01,0,0.03,0,0.04,0.01c0.17,0.01,0.32,0.04,0.49,0.07c0.45,0.07,0.9,0.15,1.35,0.24v0.01L32.61359,18.94176z\\\" style=\\\"opacity:0.1;\\\"></path><path d=\\\"M28.21489,28.41186c-0.3534-0.2667-0.7804-0.4019-1.1315-0.5882    c-0.1766-0.0919-0.3522-0.1944-0.4574-0.3094c-0.1055-0.1121-0.1264-0.2222-0.1414-0.4074    c-0.0161-0.1517,0.0315-0.4542-0.159-0.7581c-0.1247-0.1909-0.3042-0.3098-0.5038-0.3749    c-0.0601-0.036-0.1264-0.0623-0.2014-0.0623h-2.8047c-0.0188,0-0.0349,0.0082-0.053,0.0107    c-0.3116,0.0151-0.6033,0.1493-0.7844,0.4265c-0.1904,0.3039-0.1429,0.6064-0.1591,0.7581    c-0.0149,0.1852-0.0358,0.2953-0.1413,0.4074c-0.1052,0.115-0.2809,0.2175-0.4575,0.3094    c-0.351,0.1863-0.7781,0.3215-1.1313,0.5882c-0.3525,0.236-0.6632,0.6859-0.5169,1.1094    c-0.0676-0.4401,0.2722-0.7718,0.6227-0.9397c0.3568-0.1904,0.7605-0.2484,1.1792-0.3885    c0.2069-0.0716,0.4203-0.1431,0.6335-0.303c0.2269-0.1558,0.3622-0.4653,0.4046-0.6912c0.0763-0.5366,0.1743-0.4961,0.3575-0.4894    l0.0394,0.0015c0.0024,0.0001,0.0043,0.0013,0.0066,0.0013h2.8047c0.0078,0,0.0143-0.0039,0.0219-0.0043    c0.1158,0.0063,0.1899,0.0728,0.2494,0.4909c0.0425,0.2259,0.1777,0.5354,0.4046,0.6912c0.2132,0.1599,0.4266,0.2314,0.6335,0.303    c0.4187,0.1401,0.8224,0.1981,1.1792,0.3885c0.3505,0.1679,0.6902,0.4996,0.6228,0.9397    C28.87789,29.09776,28.56719,28.64786,28.21489,28.41186z\\\" style=\\\"fill:#dbdbd9;\\\"></path></g></g>\", 1)\nconst _hoisted_6 = [\n  _hoisted_5\n]\nconst _hoisted_7 = {\n  key: 0,\n  class: \"gan-w-20 gan-h-20 gan-border-l gan-border-neutral-200 gan-p-6\"\n}\nconst _hoisted_8 = [\"href\"]\nconst _hoisted_9 = /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementVNode\"])(\"svg\", {\n  xmlns: \"http://www.w3.org/2000/svg\",\n  viewBox: \"0 0 48 48\",\n  class: \"gan-fill-current\"\n}, [\n  /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementVNode\"])(\"path\", { d: \"M38 12.83l-2.83-2.83-11.17 11.17-11.17-11.17-2.83 2.83 11.17 11.17-11.17 11.17 2.83 2.83 11.17-11.17 11.17 11.17 2.83-2.83-11.17-11.17z\" }),\n  /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementVNode\"])(\"path\", {\n    d: \"M0 0h48v48h-48z\",\n    fill: \"none\"\n  })\n], -1 /* HOISTED */)\nconst _hoisted_10 = [\n  _hoisted_9\n]\n\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n  return (Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"openBlock\"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementBlock\"])(\"header\", _hoisted_1, [\n    Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementVNode\"])(\"div\", {\n      class: Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"normalizeClass\"])([\"gan-flex gan-items-center gan-h-20 gan-border-r gan-border-neutral-200\", { 'gan-p-2': !$props.logo, 'gan-p-6': $props.logo }])\n    }, [\n      Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementVNode\"])(\"a\", _hoisted_2, [\n        ($props.logo)\n          ? (Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"openBlock\"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementBlock\"])(\"img\", {\n              key: 0,\n              src: $props.logo,\n              class: \"gan-block gan-w-full gan-h-full\"\n            }, null, 8 /* PROPS */, _hoisted_3))\n          : (Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"openBlock\"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementBlock\"])(\"svg\", _hoisted_4, _hoisted_6))\n      ])\n    ], 2 /* CLASS */),\n    ($props.exit.url)\n      ? (Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"openBlock\"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementBlock\"])(\"div\", _hoisted_7, [\n          Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementVNode\"])(\"a\", {\n            href: $props.exit.url,\n            class: \"gan-block gan-text-neutral-500 hover:gan-text-neutral-800 gan-transition-colors gan-duration-200 gan-ease-in\"\n          }, _hoisted_10, 8 /* PROPS */, _hoisted_8)\n        ]))\n      : Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createCommentVNode\"])(\"v-if\", true)\n  ]))\n}\n\n//# sourceURL=webpack:///./src/shared/Header.vue?./node_modules/vue-loader-v16/dist/templateLoader.js??ref--5!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1");

/***/ }),

/***/ "./src/App.vue":
/*!*********************!*\
  !*** ./src/App.vue ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_template_id_7ba5bd90__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=7ba5bd90 */ \"./src/App.vue?vue&type=template&id=7ba5bd90\");\n/* harmony import */ var _App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js */ \"./src/App.vue?vue&type=script&lang=js\");\n/* empty/unused harmony star reexport *//* harmony import */ var _home_george_dev_sq_wp_content_plugins_starting_wizard_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader-v16/dist/exportHelper.js */ \"./node_modules/vue-loader-v16/dist/exportHelper.js\");\n/* harmony import */ var _home_george_dev_sq_wp_content_plugins_starting_wizard_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_home_george_dev_sq_wp_content_plugins_starting_wizard_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\n\nconst __exports__ = /*#__PURE__*/_home_george_dev_sq_wp_content_plugins_starting_wizard_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2___default()(_App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"], [['render',_App_vue_vue_type_template_id_7ba5bd90__WEBPACK_IMPORTED_MODULE_0__[\"render\"]],['__file',\"src/App.vue\"]])\n/* hot reload */\nif (false) {}\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (__exports__);\n\n//# sourceURL=webpack:///./src/App.vue?");

/***/ }),

/***/ "./src/App.vue?vue&type=script&lang=js":
/*!*********************************************!*\
  !*** ./src/App.vue?vue&type=script&lang=js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/cache-loader/dist/cjs.js??ref--1-0!../node_modules/vue-loader-v16/dist??ref--1-1!./App.vue?vue&type=script&lang=js */ \"./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/App.vue?vue&type=script&lang=js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n/* empty/unused harmony star reexport */ \n\n//# sourceURL=webpack:///./src/App.vue?");

/***/ }),

/***/ "./src/App.vue?vue&type=template&id=7ba5bd90":
/*!***************************************************!*\
  !*** ./src/App.vue?vue&type=template&id=7ba5bd90 ***!
  \***************************************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_v16_dist_templateLoader_js_ref_5_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_App_vue_vue_type_template_id_7ba5bd90__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/vue-loader-v16/dist/templateLoader.js??ref--5!../node_modules/cache-loader/dist/cjs.js??ref--1-0!../node_modules/vue-loader-v16/dist??ref--1-1!./App.vue?vue&type=template&id=7ba5bd90 */ \"./node_modules/vue-loader-v16/dist/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/App.vue?vue&type=template&id=7ba5bd90\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_v16_dist_templateLoader_js_ref_5_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_App_vue_vue_type_template_id_7ba5bd90__WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n\n\n//# sourceURL=webpack:///./src/App.vue?");

/***/ }),

/***/ "./src/assets/svg sync recursive ^\\.\\/.*\\.svg$":
/*!*******************************************!*\
  !*** ./src/assets/svg sync ^\.\/.*\.svg$ ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var map = {\n\t\"./beaver-builder.svg\": \"./src/assets/svg/beaver-builder.svg\",\n\t\"./elementor.svg\": \"./src/assets/svg/elementor.svg\",\n\t\"./wordpress.svg\": \"./src/assets/svg/wordpress.svg\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn map[req];\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"./src/assets/svg sync recursive ^\\\\.\\\\/.*\\\\.svg$\";\n\n//# sourceURL=webpack:///./src/assets/svg_sync_^\\.\\/.*\\.svg$?");

/***/ }),

/***/ "./src/assets/svg/beaver-builder.svg":
/*!*******************************************!*\
  !*** ./src/assets/svg/beaver-builder.svg ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/beaver-builder.fb1b2059.svg\";\n\n//# sourceURL=webpack:///./src/assets/svg/beaver-builder.svg?");

/***/ }),

/***/ "./src/assets/svg/elementor.svg":
/*!**************************************!*\
  !*** ./src/assets/svg/elementor.svg ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/elementor.fb316c62.svg\";\n\n//# sourceURL=webpack:///./src/assets/svg/elementor.svg?");

/***/ }),

/***/ "./src/assets/svg/wordpress.svg":
/*!**************************************!*\
  !*** ./src/assets/svg/wordpress.svg ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/wordpress.6c70ec33.svg\";\n\n//# sourceURL=webpack:///./src/assets/svg/wordpress.svg?");

/***/ }),

/***/ "./src/components/BuilderPicker.vue":
/*!******************************************!*\
  !*** ./src/components/BuilderPicker.vue ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _BuilderPicker_vue_vue_type_template_id_61c35b89__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BuilderPicker.vue?vue&type=template&id=61c35b89 */ \"./src/components/BuilderPicker.vue?vue&type=template&id=61c35b89\");\n/* harmony import */ var _BuilderPicker_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BuilderPicker.vue?vue&type=script&lang=js */ \"./src/components/BuilderPicker.vue?vue&type=script&lang=js\");\n/* empty/unused harmony star reexport *//* harmony import */ var _home_george_dev_sq_wp_content_plugins_starting_wizard_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader-v16/dist/exportHelper.js */ \"./node_modules/vue-loader-v16/dist/exportHelper.js\");\n/* harmony import */ var _home_george_dev_sq_wp_content_plugins_starting_wizard_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_home_george_dev_sq_wp_content_plugins_starting_wizard_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\n\nconst __exports__ = /*#__PURE__*/_home_george_dev_sq_wp_content_plugins_starting_wizard_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2___default()(_BuilderPicker_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"], [['render',_BuilderPicker_vue_vue_type_template_id_61c35b89__WEBPACK_IMPORTED_MODULE_0__[\"render\"]],['__file',\"src/components/BuilderPicker.vue\"]])\n/* hot reload */\nif (false) {}\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (__exports__);\n\n//# sourceURL=webpack:///./src/components/BuilderPicker.vue?");

/***/ }),

/***/ "./src/components/BuilderPicker.vue?vue&type=script&lang=js":
/*!******************************************************************!*\
  !*** ./src/components/BuilderPicker.vue?vue&type=script&lang=js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_BuilderPicker_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/vue-loader-v16/dist??ref--1-1!./BuilderPicker.vue?vue&type=script&lang=js */ \"./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/BuilderPicker.vue?vue&type=script&lang=js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_BuilderPicker_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n/* empty/unused harmony star reexport */ \n\n//# sourceURL=webpack:///./src/components/BuilderPicker.vue?");

/***/ }),

/***/ "./src/components/BuilderPicker.vue?vue&type=template&id=61c35b89":
/*!************************************************************************!*\
  !*** ./src/components/BuilderPicker.vue?vue&type=template&id=61c35b89 ***!
  \************************************************************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_v16_dist_templateLoader_js_ref_5_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_BuilderPicker_vue_vue_type_template_id_61c35b89__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader-v16/dist/templateLoader.js??ref--5!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/vue-loader-v16/dist??ref--1-1!./BuilderPicker.vue?vue&type=template&id=61c35b89 */ \"./node_modules/vue-loader-v16/dist/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/BuilderPicker.vue?vue&type=template&id=61c35b89\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_v16_dist_templateLoader_js_ref_5_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_BuilderPicker_vue_vue_type_template_id_61c35b89__WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n\n\n//# sourceURL=webpack:///./src/components/BuilderPicker.vue?");

/***/ }),

/***/ "./src/components/YoutubeVideo.vue":
/*!*****************************************!*\
  !*** ./src/components/YoutubeVideo.vue ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _YoutubeVideo_vue_vue_type_template_id_35c68170__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./YoutubeVideo.vue?vue&type=template&id=35c68170 */ \"./src/components/YoutubeVideo.vue?vue&type=template&id=35c68170\");\n/* harmony import */ var _YoutubeVideo_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./YoutubeVideo.vue?vue&type=script&lang=js */ \"./src/components/YoutubeVideo.vue?vue&type=script&lang=js\");\n/* empty/unused harmony star reexport *//* harmony import */ var _home_george_dev_sq_wp_content_plugins_starting_wizard_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader-v16/dist/exportHelper.js */ \"./node_modules/vue-loader-v16/dist/exportHelper.js\");\n/* harmony import */ var _home_george_dev_sq_wp_content_plugins_starting_wizard_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_home_george_dev_sq_wp_content_plugins_starting_wizard_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\n\nconst __exports__ = /*#__PURE__*/_home_george_dev_sq_wp_content_plugins_starting_wizard_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2___default()(_YoutubeVideo_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"], [['render',_YoutubeVideo_vue_vue_type_template_id_35c68170__WEBPACK_IMPORTED_MODULE_0__[\"render\"]],['__file',\"src/components/YoutubeVideo.vue\"]])\n/* hot reload */\nif (false) {}\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (__exports__);\n\n//# sourceURL=webpack:///./src/components/YoutubeVideo.vue?");

/***/ }),

/***/ "./src/components/YoutubeVideo.vue?vue&type=script&lang=js":
/*!*****************************************************************!*\
  !*** ./src/components/YoutubeVideo.vue?vue&type=script&lang=js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_YoutubeVideo_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/vue-loader-v16/dist??ref--1-1!./YoutubeVideo.vue?vue&type=script&lang=js */ \"./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/YoutubeVideo.vue?vue&type=script&lang=js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_YoutubeVideo_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n/* empty/unused harmony star reexport */ \n\n//# sourceURL=webpack:///./src/components/YoutubeVideo.vue?");

/***/ }),

/***/ "./src/components/YoutubeVideo.vue?vue&type=template&id=35c68170":
/*!***********************************************************************!*\
  !*** ./src/components/YoutubeVideo.vue?vue&type=template&id=35c68170 ***!
  \***********************************************************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_v16_dist_templateLoader_js_ref_5_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_YoutubeVideo_vue_vue_type_template_id_35c68170__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader-v16/dist/templateLoader.js??ref--5!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/vue-loader-v16/dist??ref--1-1!./YoutubeVideo.vue?vue&type=template&id=35c68170 */ \"./node_modules/vue-loader-v16/dist/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/YoutubeVideo.vue?vue&type=template&id=35c68170\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_v16_dist_templateLoader_js_ref_5_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_YoutubeVideo_vue_vue_type_template_id_35c68170__WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n\n\n//# sourceURL=webpack:///./src/components/YoutubeVideo.vue?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm-bundler.js\");\n/* harmony import */ var floating_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! floating-vue */ \"./node_modules/floating-vue/dist/floating-vue.es.js\");\n/* harmony import */ var mitt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mitt */ \"./node_modules/mitt/dist/mitt.mjs\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./App.vue */ \"./src/App.vue\");\n/* harmony import */ var floating_vue_dist_style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! floating-vue/dist/style.css */ \"./node_modules/floating-vue/dist/style.css\");\n/* harmony import */ var floating_vue_dist_style_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(floating_vue_dist_style_css__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\n\nconst emitter = Object(mitt__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n\nfloating_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"].options.distance = 12;\n\nconst app = Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createApp\"])(_App_vue__WEBPACK_IMPORTED_MODULE_3__[\"default\"]).use(floating_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n\napp.config.globalProperties.emitter = emitter;\napp.mount(\"#app\");\n\n\n//# sourceURL=webpack:///./src/main.js?");

/***/ }),

/***/ "./src/shared/Content.vue":
/*!********************************!*\
  !*** ./src/shared/Content.vue ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Content_vue_vue_type_template_id_010bd548__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Content.vue?vue&type=template&id=010bd548 */ \"./src/shared/Content.vue?vue&type=template&id=010bd548\");\n/* harmony import */ var _home_george_dev_sq_wp_content_plugins_starting_wizard_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/vue-loader-v16/dist/exportHelper.js */ \"./node_modules/vue-loader-v16/dist/exportHelper.js\");\n/* harmony import */ var _home_george_dev_sq_wp_content_plugins_starting_wizard_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_home_george_dev_sq_wp_content_plugins_starting_wizard_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_1__);\n\nconst script = {}\n\n\nconst __exports__ = /*#__PURE__*/_home_george_dev_sq_wp_content_plugins_starting_wizard_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_1___default()(script, [['render',_Content_vue_vue_type_template_id_010bd548__WEBPACK_IMPORTED_MODULE_0__[\"render\"]],['__file',\"src/shared/Content.vue\"]])\n/* hot reload */\nif (false) {}\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (__exports__);\n\n//# sourceURL=webpack:///./src/shared/Content.vue?");

/***/ }),

/***/ "./src/shared/Content.vue?vue&type=template&id=010bd548":
/*!**************************************************************!*\
  !*** ./src/shared/Content.vue?vue&type=template&id=010bd548 ***!
  \**************************************************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_v16_dist_templateLoader_js_ref_5_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_Content_vue_vue_type_template_id_010bd548__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader-v16/dist/templateLoader.js??ref--5!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/vue-loader-v16/dist??ref--1-1!./Content.vue?vue&type=template&id=010bd548 */ \"./node_modules/vue-loader-v16/dist/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/shared/Content.vue?vue&type=template&id=010bd548\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_v16_dist_templateLoader_js_ref_5_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_Content_vue_vue_type_template_id_010bd548__WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n\n\n//# sourceURL=webpack:///./src/shared/Content.vue?");

/***/ }),

/***/ "./src/shared/Footer.vue":
/*!*******************************!*\
  !*** ./src/shared/Footer.vue ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Footer_vue_vue_type_template_id_345b9d1c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Footer.vue?vue&type=template&id=345b9d1c */ \"./src/shared/Footer.vue?vue&type=template&id=345b9d1c\");\n/* harmony import */ var _Footer_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Footer.vue?vue&type=script&lang=js */ \"./src/shared/Footer.vue?vue&type=script&lang=js\");\n/* empty/unused harmony star reexport *//* harmony import */ var _home_george_dev_sq_wp_content_plugins_starting_wizard_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader-v16/dist/exportHelper.js */ \"./node_modules/vue-loader-v16/dist/exportHelper.js\");\n/* harmony import */ var _home_george_dev_sq_wp_content_plugins_starting_wizard_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_home_george_dev_sq_wp_content_plugins_starting_wizard_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\n\nconst __exports__ = /*#__PURE__*/_home_george_dev_sq_wp_content_plugins_starting_wizard_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2___default()(_Footer_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"], [['render',_Footer_vue_vue_type_template_id_345b9d1c__WEBPACK_IMPORTED_MODULE_0__[\"render\"]],['__file',\"src/shared/Footer.vue\"]])\n/* hot reload */\nif (false) {}\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (__exports__);\n\n//# sourceURL=webpack:///./src/shared/Footer.vue?");

/***/ }),

/***/ "./src/shared/Footer.vue?vue&type=script&lang=js":
/*!*******************************************************!*\
  !*** ./src/shared/Footer.vue?vue&type=script&lang=js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_Footer_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/vue-loader-v16/dist??ref--1-1!./Footer.vue?vue&type=script&lang=js */ \"./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/shared/Footer.vue?vue&type=script&lang=js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_Footer_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n/* empty/unused harmony star reexport */ \n\n//# sourceURL=webpack:///./src/shared/Footer.vue?");

/***/ }),

/***/ "./src/shared/Footer.vue?vue&type=template&id=345b9d1c":
/*!*************************************************************!*\
  !*** ./src/shared/Footer.vue?vue&type=template&id=345b9d1c ***!
  \*************************************************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_v16_dist_templateLoader_js_ref_5_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_Footer_vue_vue_type_template_id_345b9d1c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader-v16/dist/templateLoader.js??ref--5!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/vue-loader-v16/dist??ref--1-1!./Footer.vue?vue&type=template&id=345b9d1c */ \"./node_modules/vue-loader-v16/dist/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/shared/Footer.vue?vue&type=template&id=345b9d1c\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_v16_dist_templateLoader_js_ref_5_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_Footer_vue_vue_type_template_id_345b9d1c__WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n\n\n//# sourceURL=webpack:///./src/shared/Footer.vue?");

/***/ }),

/***/ "./src/shared/Header.vue":
/*!*******************************!*\
  !*** ./src/shared/Header.vue ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Header_vue_vue_type_template_id_558e010e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Header.vue?vue&type=template&id=558e010e */ \"./src/shared/Header.vue?vue&type=template&id=558e010e\");\n/* harmony import */ var _Header_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Header.vue?vue&type=script&lang=js */ \"./src/shared/Header.vue?vue&type=script&lang=js\");\n/* empty/unused harmony star reexport *//* harmony import */ var _home_george_dev_sq_wp_content_plugins_starting_wizard_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader-v16/dist/exportHelper.js */ \"./node_modules/vue-loader-v16/dist/exportHelper.js\");\n/* harmony import */ var _home_george_dev_sq_wp_content_plugins_starting_wizard_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_home_george_dev_sq_wp_content_plugins_starting_wizard_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\n\nconst __exports__ = /*#__PURE__*/_home_george_dev_sq_wp_content_plugins_starting_wizard_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2___default()(_Header_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"], [['render',_Header_vue_vue_type_template_id_558e010e__WEBPACK_IMPORTED_MODULE_0__[\"render\"]],['__file',\"src/shared/Header.vue\"]])\n/* hot reload */\nif (false) {}\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (__exports__);\n\n//# sourceURL=webpack:///./src/shared/Header.vue?");

/***/ }),

/***/ "./src/shared/Header.vue?vue&type=script&lang=js":
/*!*******************************************************!*\
  !*** ./src/shared/Header.vue?vue&type=script&lang=js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_Header_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/vue-loader-v16/dist??ref--1-1!./Header.vue?vue&type=script&lang=js */ \"./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/shared/Header.vue?vue&type=script&lang=js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_Header_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n/* empty/unused harmony star reexport */ \n\n//# sourceURL=webpack:///./src/shared/Header.vue?");

/***/ }),

/***/ "./src/shared/Header.vue?vue&type=template&id=558e010e":
/*!*************************************************************!*\
  !*** ./src/shared/Header.vue?vue&type=template&id=558e010e ***!
  \*************************************************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_v16_dist_templateLoader_js_ref_5_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_Header_vue_vue_type_template_id_558e010e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader-v16/dist/templateLoader.js??ref--5!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/vue-loader-v16/dist??ref--1-1!./Header.vue?vue&type=template&id=558e010e */ \"./node_modules/vue-loader-v16/dist/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/shared/Header.vue?vue&type=template&id=558e010e\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_v16_dist_templateLoader_js_ref_5_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_Header_vue_vue_type_template_id_558e010e__WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n\n\n//# sourceURL=webpack:///./src/shared/Header.vue?");

/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./src/main.js */\"./src/main.js\");\n\n\n//# sourceURL=webpack:///multi_./src/main.js?");

/***/ })

/******/ });