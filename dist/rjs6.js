window["Raven"] =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/rjs6-main.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/rjs6-core-src/plugin/descriptor/raven-binding-plugin-descriptor.ts":
/*!********************************************************************************!*\
  !*** ./src/rjs6-core-src/plugin/descriptor/raven-binding-plugin-descriptor.ts ***!
  \********************************************************************************/
/*! exports provided: RavenBindingPluginDescriptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"RavenBindingPluginDescriptor\", function() { return RavenBindingPluginDescriptor; });\n/* harmony import */ var _raven_plugin_descriptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./raven-plugin-descriptor */ \"./src/rjs6-core-src/plugin/descriptor/raven-plugin-descriptor.ts\");\n\r\nclass RavenBindingPluginDescriptor extends _raven_plugin_descriptor__WEBPACK_IMPORTED_MODULE_0__[\"RavenPluginDescriptor\"] {\r\n    constructor(pluginName, pluginSelector, onEvaluate, opensNewContext = false) {\r\n        super(pluginName);\r\n        this.pluginSelector = pluginSelector;\r\n        this.onEvaluate = onEvaluate;\r\n        this.opensNewContext = opensNewContext;\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://Raven/./src/rjs6-core-src/plugin/descriptor/raven-binding-plugin-descriptor.ts?");

/***/ }),

/***/ "./src/rjs6-core-src/plugin/descriptor/raven-global-plugin-descriptor.ts":
/*!*******************************************************************************!*\
  !*** ./src/rjs6-core-src/plugin/descriptor/raven-global-plugin-descriptor.ts ***!
  \*******************************************************************************/
/*! exports provided: RavenGlobalPluginDescriptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"RavenGlobalPluginDescriptor\", function() { return RavenGlobalPluginDescriptor; });\n/* harmony import */ var _raven_plugin_descriptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./raven-plugin-descriptor */ \"./src/rjs6-core-src/plugin/descriptor/raven-plugin-descriptor.ts\");\n\r\nclass RavenGlobalPluginDescriptor extends _raven_plugin_descriptor__WEBPACK_IMPORTED_MODULE_0__[\"RavenPluginDescriptor\"] {\r\n    constructor(pluginName, globalName, functions) {\r\n        super(pluginName);\r\n        this.globalName = globalName;\r\n        this.functions = functions;\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://Raven/./src/rjs6-core-src/plugin/descriptor/raven-global-plugin-descriptor.ts?");

/***/ }),

/***/ "./src/rjs6-core-src/plugin/descriptor/raven-plugin-descriptor.ts":
/*!************************************************************************!*\
  !*** ./src/rjs6-core-src/plugin/descriptor/raven-plugin-descriptor.ts ***!
  \************************************************************************/
/*! exports provided: RavenPluginDescriptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"RavenPluginDescriptor\", function() { return RavenPluginDescriptor; });\n/* harmony import */ var _helper_raven_plugin_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helper/raven-plugin-helper */ \"./src/rjs6-core-src/plugin/helper/raven-plugin-helper.ts\");\n\r\nclass RavenPluginDescriptor {\r\n    constructor(pluginName) {\r\n        this.pluginName = pluginName;\r\n        this.identifier = _helper_raven_plugin_helper__WEBPACK_IMPORTED_MODULE_0__[\"RavenPluginHelper\"].nextId;\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://Raven/./src/rjs6-core-src/plugin/descriptor/raven-plugin-descriptor.ts?");

/***/ }),

/***/ "./src/rjs6-core-src/plugin/helper/raven-plugin-helper.ts":
/*!****************************************************************!*\
  !*** ./src/rjs6-core-src/plugin/helper/raven-plugin-helper.ts ***!
  \****************************************************************/
/*! exports provided: RavenPluginHelper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"RavenPluginHelper\", function() { return RavenPluginHelper; });\nclass RavenPluginHelper {\r\n    static get nextId() {\r\n        return `raven_plugin_${RavenPluginHelper.currentId++}`;\r\n    }\r\n}\r\nRavenPluginHelper.currentId = 1000;\r\n\n\n//# sourceURL=webpack://Raven/./src/rjs6-core-src/plugin/helper/raven-plugin-helper.ts?");

/***/ }),

/***/ "./src/rjs6-core-src/plugin/hub/raven-plugin-hub.ts":
/*!**********************************************************!*\
  !*** ./src/rjs6-core-src/plugin/hub/raven-plugin-hub.ts ***!
  \**********************************************************/
/*! exports provided: RavenPluginHub */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"RavenPluginHub\", function() { return RavenPluginHub; });\n/* harmony import */ var _descriptor_raven_binding_plugin_descriptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../descriptor/raven-binding-plugin-descriptor */ \"./src/rjs6-core-src/plugin/descriptor/raven-binding-plugin-descriptor.ts\");\n\r\nclass RavenPluginHub {\r\n    static init(ravenContext) {\r\n        if (!RavenPluginHub.context) {\r\n            RavenPluginHub.context = ravenContext;\r\n        }\r\n    }\r\n    static getAllSelector() {\r\n        return RavenPluginHub\r\n            .registeredPlugins\r\n            .map(m => m.pluginSelector);\r\n    }\r\n    static findBindingPluginBySelector(selector) {\r\n        return RavenPluginHub.registeredPlugins.find(m => m.pluginSelector === selector);\r\n    }\r\n    static registerPlugin(plugin) {\r\n        RavenPluginHub.checkAvability(plugin);\r\n        (plugin instanceof _descriptor_raven_binding_plugin_descriptor__WEBPACK_IMPORTED_MODULE_0__[\"RavenBindingPluginDescriptor\"])\r\n            ? RavenPluginHub.registerBindingPlugin(plugin)\r\n            : RavenPluginHub.registerGlobalPlugin(plugin);\r\n        RavenPluginHub.registeredPlugins.push(plugin);\r\n    }\r\n    static getAllRegisteredPlugin() {\r\n        return RavenPluginHub.registeredPlugins;\r\n    }\r\n    static checkAvability(plugin) {\r\n        const pluginWithSameName = RavenPluginHub.registeredPlugins\r\n            .find(m => m.pluginName === plugin.pluginName);\r\n        if (pluginWithSameName) {\r\n            throw `Plugin with name '${plugin.pluginName}' is already registered!`;\r\n        }\r\n    }\r\n    static registerBindingPlugin(plugin) {\r\n    }\r\n    static registerGlobalPlugin(plugin) {\r\n        if (!RavenPluginHub.context) {\r\n            throw \"You must call 'Raven.born()' before register any global plugins!\";\r\n        }\r\n        if (RavenPluginHub.context.pluginScope[plugin.globalName]) {\r\n            throw `The global name ${plugin.globalName} is already in use!`;\r\n        }\r\n        RavenPluginHub.context.pluginScope[plugin.globalName] = {};\r\n        const functionKeys = Object.keys(plugin.functions);\r\n        for (const functionKey of functionKeys) {\r\n            RavenPluginHub.context.pluginScope[plugin.globalName][functionKey] = plugin.functions[functionKey];\r\n        }\r\n    }\r\n}\r\nRavenPluginHub.registeredPlugins = [];\r\n\n\n//# sourceURL=webpack://Raven/./src/rjs6-core-src/plugin/hub/raven-plugin-hub.ts?");

/***/ }),

/***/ "./src/rjs6-core-src/raven-ext.ts":
/*!****************************************!*\
  !*** ./src/rjs6-core-src/raven-ext.ts ***!
  \****************************************/
/*! exports provided: RavenExt */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"RavenExt\", function() { return RavenExt; });\n/* harmony import */ var _plugin_descriptor_raven_binding_plugin_descriptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./plugin/descriptor/raven-binding-plugin-descriptor */ \"./src/rjs6-core-src/plugin/descriptor/raven-binding-plugin-descriptor.ts\");\n/* harmony import */ var _plugin_descriptor_raven_global_plugin_descriptor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./plugin/descriptor/raven-global-plugin-descriptor */ \"./src/rjs6-core-src/plugin/descriptor/raven-global-plugin-descriptor.ts\");\n\r\n\r\nclass RavenExt {\r\n    static getInstance() {\r\n        if (!RavenExt.instance) {\r\n            RavenExt.instance = new RavenExt();\r\n        }\r\n        return RavenExt.instance;\r\n    }\r\n    createBindingPlugin(pluginName, pluginSelector, onEvaluate, opensNewContext = false) {\r\n        return new _plugin_descriptor_raven_binding_plugin_descriptor__WEBPACK_IMPORTED_MODULE_0__[\"RavenBindingPluginDescriptor\"](pluginName, pluginSelector, onEvaluate, opensNewContext);\r\n    }\r\n    createGlobalPlugin(pluginName, globalName, functions) {\r\n        return new _plugin_descriptor_raven_global_plugin_descriptor__WEBPACK_IMPORTED_MODULE_1__[\"RavenGlobalPluginDescriptor\"](pluginName, globalName, functions);\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://Raven/./src/rjs6-core-src/raven-ext.ts?");

/***/ }),

/***/ "./src/rjs6-core-src/raven-main.ts":
/*!*****************************************!*\
  !*** ./src/rjs6-core-src/raven-main.ts ***!
  \*****************************************/
/*! exports provided: RavenCore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"RavenCore\", function() { return RavenCore; });\n/* harmony import */ var _plugin_hub_raven_plugin_hub__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./plugin/hub/raven-plugin-hub */ \"./src/rjs6-core-src/plugin/hub/raven-plugin-hub.ts\");\n/* harmony import */ var _raven_ext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./raven-ext */ \"./src/rjs6-core-src/raven-ext.ts\");\n\r\n\r\nclass RavenCore {\r\n    constructor() {\r\n        this.pluginScope = {};\r\n    }\r\n    static getInstance() {\r\n        if (!RavenCore.instance) {\r\n            RavenCore.instance = new RavenCore();\r\n        }\r\n        return RavenCore.instance;\r\n    }\r\n    get ext() {\r\n        return _raven_ext__WEBPACK_IMPORTED_MODULE_1__[\"RavenExt\"].getInstance();\r\n    }\r\n    born() {\r\n        _plugin_hub_raven_plugin_hub__WEBPACK_IMPORTED_MODULE_0__[\"RavenPluginHub\"].init(this);\r\n    }\r\n    getAllSelector() {\r\n        return _plugin_hub_raven_plugin_hub__WEBPACK_IMPORTED_MODULE_0__[\"RavenPluginHub\"].getAllSelector();\r\n    }\r\n    findBindingPluginBySelector(selector) {\r\n        return _plugin_hub_raven_plugin_hub__WEBPACK_IMPORTED_MODULE_0__[\"RavenPluginHub\"].findBindingPluginBySelector(selector);\r\n    }\r\n    registerPlugin(plugin) {\r\n        _plugin_hub_raven_plugin_hub__WEBPACK_IMPORTED_MODULE_0__[\"RavenPluginHub\"].registerPlugin(plugin);\r\n    }\r\n    getRegisteredPlugins() {\r\n        return _plugin_hub_raven_plugin_hub__WEBPACK_IMPORTED_MODULE_0__[\"RavenPluginHub\"].getAllRegisteredPlugin();\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://Raven/./src/rjs6-core-src/raven-main.ts?");

/***/ }),

/***/ "./src/rjs6-main.ts":
/*!**************************!*\
  !*** ./src/rjs6-main.ts ***!
  \**************************/
/*! exports provided: core, plugins */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"core\", function() { return core; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"plugins\", function() { return plugins; });\n/* harmony import */ var _rjs6_core_src_raven_main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rjs6-core-src/raven-main */ \"./src/rjs6-core-src/raven-main.ts\");\n/* harmony import */ var _rjs6_plugins_src_raven_plugin_loader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rjs6-plugins-src/raven-plugin-loader */ \"./src/rjs6-plugins-src/raven-plugin-loader.ts\");\n\r\n\r\nconst core = _rjs6_core_src_raven_main__WEBPACK_IMPORTED_MODULE_0__[\"RavenCore\"].getInstance();\r\nconst plugins = core.pluginScope;\r\n_rjs6_plugins_src_raven_plugin_loader__WEBPACK_IMPORTED_MODULE_1__[\"RavenPluginFactory\"].appendAllLoaded();\r\n\n\n//# sourceURL=webpack://Raven/./src/rjs6-main.ts?");

/***/ }),

/***/ "./src/rjs6-plugins-src/helper/raven-evaluator.ts":
/*!********************************************************!*\
  !*** ./src/rjs6-plugins-src/helper/raven-evaluator.ts ***!
  \********************************************************/
/*! exports provided: RavenEvaluator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"RavenEvaluator\", function() { return RavenEvaluator; });\nclass RavenEvaluator {\r\n    static evaluate(expression, context) {\r\n        const evaluator = Function.apply(null, [...Object.keys(context), \"expression\", \"return eval(expression)\"]);\r\n        return evaluator.apply(null, [...Object.values(context), expression]);\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://Raven/./src/rjs6-plugins-src/helper/raven-evaluator.ts?");

/***/ }),

/***/ "./src/rjs6-plugins-src/implementation/raven-binding-for.ts":
/*!******************************************************************!*\
  !*** ./src/rjs6-plugins-src/implementation/raven-binding-for.ts ***!
  \******************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _raven_plugin_factory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../raven-plugin-factory */ \"./src/rjs6-plugins-src/raven-plugin-factory.ts\");\n/* harmony import */ var _helper_raven_evaluator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helper/raven-evaluator */ \"./src/rjs6-plugins-src/helper/raven-evaluator.ts\");\n/* harmony import */ var _rjs6_core_src_raven_main__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../rjs6-core-src/raven-main */ \"./src/rjs6-core-src/raven-main.ts\");\n\r\n\r\n\r\nconst ravenContext = _rjs6_core_src_raven_main__WEBPACK_IMPORTED_MODULE_2__[\"RavenCore\"].getInstance();\r\nconst forEvaluateFn = function (element, expression, context) {\r\n    const results = _helper_raven_evaluator__WEBPACK_IMPORTED_MODULE_1__[\"RavenEvaluator\"].evaluate(expression, context);\r\n    const cloned = element.cloneNode(true);\r\n    // element.parentElement.innerHTML = \"\";\r\n    for (let i = 0; i < results.length; i++) {\r\n        const currentChild = cloned.cloneNode(true);\r\n        ravenContext\r\n            .pluginScope[\"binding\"][\"fly\"](currentChild, { element: results[i] });\r\n        console.log(\"c\", currentChild);\r\n        element.parentElement.appendChild(currentChild); // (childInnerElements[i].cloneNode(true) as HTMLElement));\r\n    }\r\n    element.parentElement.removeChild(element);\r\n};\r\n_raven_plugin_factory__WEBPACK_IMPORTED_MODULE_0__[\"RavenPluginFactory\"].loadBindingPlugin(\"raven-for\", \"raven-for\", forEvaluateFn, true);\r\n\n\n//# sourceURL=webpack://Raven/./src/rjs6-plugins-src/implementation/raven-binding-for.ts?");

/***/ }),

/***/ "./src/rjs6-plugins-src/implementation/raven-binding-if.ts":
/*!*****************************************************************!*\
  !*** ./src/rjs6-plugins-src/implementation/raven-binding-if.ts ***!
  \*****************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _raven_plugin_factory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../raven-plugin-factory */ \"./src/rjs6-plugins-src/raven-plugin-factory.ts\");\n/* harmony import */ var _helper_raven_evaluator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helper/raven-evaluator */ \"./src/rjs6-plugins-src/helper/raven-evaluator.ts\");\n\r\n\r\nconst ifEvaluateFn = function (element, expression, context) {\r\n    const result = _helper_raven_evaluator__WEBPACK_IMPORTED_MODULE_1__[\"RavenEvaluator\"].evaluate(expression, context);\r\n    if (!result) {\r\n        element.style.display = \"none\";\r\n    }\r\n    else {\r\n        element.style.display = \"\";\r\n    }\r\n};\r\n_raven_plugin_factory__WEBPACK_IMPORTED_MODULE_0__[\"RavenPluginFactory\"].loadBindingPlugin(\"raven-if\", \"raven-if\", ifEvaluateFn);\r\n\n\n//# sourceURL=webpack://Raven/./src/rjs6-plugins-src/implementation/raven-binding-if.ts?");

/***/ }),

/***/ "./src/rjs6-plugins-src/implementation/raven-binding-text.ts":
/*!*******************************************************************!*\
  !*** ./src/rjs6-plugins-src/implementation/raven-binding-text.ts ***!
  \*******************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _raven_plugin_factory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../raven-plugin-factory */ \"./src/rjs6-plugins-src/raven-plugin-factory.ts\");\n/* harmony import */ var _helper_raven_evaluator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helper/raven-evaluator */ \"./src/rjs6-plugins-src/helper/raven-evaluator.ts\");\n\r\n\r\nconst textEvaluateFn = function (element, expression, context) {\r\n    const result = _helper_raven_evaluator__WEBPACK_IMPORTED_MODULE_1__[\"RavenEvaluator\"].evaluate(expression, context);\r\n    element.textContent = result;\r\n};\r\n_raven_plugin_factory__WEBPACK_IMPORTED_MODULE_0__[\"RavenPluginFactory\"].loadBindingPlugin(\"raven-text\", \"raven-text\", textEvaluateFn);\r\n\n\n//# sourceURL=webpack://Raven/./src/rjs6-plugins-src/implementation/raven-binding-text.ts?");

/***/ }),

/***/ "./src/rjs6-plugins-src/implementation/raven-global-fly.ts":
/*!*****************************************************************!*\
  !*** ./src/rjs6-plugins-src/implementation/raven-global-fly.ts ***!
  \*****************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _raven_plugin_factory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../raven-plugin-factory */ \"./src/rjs6-plugins-src/raven-plugin-factory.ts\");\n/* harmony import */ var _rjs6_core_src_raven_main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../rjs6-core-src/raven-main */ \"./src/rjs6-core-src/raven-main.ts\");\n\r\n\r\nconst ravenContext = _rjs6_core_src_raven_main__WEBPACK_IMPORTED_MODULE_1__[\"RavenCore\"].getInstance();\r\nconst flyFunction = function (target, context) {\r\n    if (typeof target === \"string\") {\r\n        target = document.getElementById(target);\r\n    }\r\n    if (!target) {\r\n        throw \"Cannot find the binding target!\";\r\n    }\r\n    const attributes = ravenContext.getAllSelector();\r\n    bindRecursively(toHtmlElementArray(target.children), context, attributes);\r\n};\r\nfunction bindRecursively(childNodes, context, attributes) {\r\n    for (const childNode of childNodes) {\r\n        const ravenAttributes = [];\r\n        let bindChildren = true;\r\n        for (const attribute of attributes) {\r\n            const nodeAttribute = childNode.getAttribute(attribute);\r\n            if (nodeAttribute) {\r\n                ravenAttributes.push({ name: attribute, expression: nodeAttribute });\r\n            }\r\n        }\r\n        if (ravenAttributes.length > 0) {\r\n            if (ravenAttributes.length > 1) {\r\n                throw \"More than one attributes detected on element!\";\r\n            }\r\n            const ravenAttribute = ravenAttributes[0];\r\n            const plugin = ravenContext.findBindingPluginBySelector(ravenAttribute.name);\r\n            if (!plugin) {\r\n                throw `Raven binding plugin was not found with selector ${ravenAttribute.name}!`;\r\n            }\r\n            plugin.onEvaluate(childNode, ravenAttribute.expression, context);\r\n            bindChildren = !plugin.opensNewContext;\r\n        }\r\n        if (childNode.children.length > 0 && bindChildren) {\r\n            bindRecursively(toHtmlElementArray(childNode.children), context, attributes);\r\n        }\r\n    }\r\n}\r\nfunction toHtmlElementArray(collection) {\r\n    return [].slice.call(collection);\r\n}\r\n_raven_plugin_factory__WEBPACK_IMPORTED_MODULE_0__[\"RavenPluginFactory\"].loadGlobalPlugin(\"raven-fly\", \"binding\", {\r\n    \"fly\": flyFunction\r\n});\r\n\n\n//# sourceURL=webpack://Raven/./src/rjs6-plugins-src/implementation/raven-global-fly.ts?");

/***/ }),

/***/ "./src/rjs6-plugins-src/implementation/raven-global-observables.ts":
/*!*************************************************************************!*\
  !*** ./src/rjs6-plugins-src/implementation/raven-global-observables.ts ***!
  \*************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _raven_plugin_factory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../raven-plugin-factory */ \"./src/rjs6-plugins-src/raven-plugin-factory.ts\");\n\r\nconst eggFunction = function (initialValue) {\r\n    eggImpl.value = initialValue;\r\n    function eggImpl() {\r\n        if (arguments.length > 0) {\r\n            eggImpl.value = arguments[0];\r\n            return this;\r\n        }\r\n        else {\r\n            return eggImpl.value;\r\n        }\r\n    }\r\n    return eggImpl;\r\n};\r\nconst eggsFunction = function (initialValue) {\r\n    eggsImpl.value = initialValue;\r\n    eggsImpl.push = eggsImpl.value.push;\r\n    eggsImpl.pop = eggsImpl.value.pop;\r\n    eggsImpl.indexOf = eggsImpl.value.indexOf;\r\n    function eggsImpl() {\r\n        if (arguments.length > 0) {\r\n            eggsImpl.value = arguments[0];\r\n            return this;\r\n        }\r\n        else {\r\n            return eggsImpl.value;\r\n        }\r\n    }\r\n    return eggsImpl;\r\n};\r\n_raven_plugin_factory__WEBPACK_IMPORTED_MODULE_0__[\"RavenPluginFactory\"].loadGlobalPlugin(\"raven-observables\", \"observables\", {\r\n    \"egg\": eggFunction,\r\n    \"eggs\": eggsFunction\r\n});\r\n\n\n//# sourceURL=webpack://Raven/./src/rjs6-plugins-src/implementation/raven-global-observables.ts?");

/***/ }),

/***/ "./src/rjs6-plugins-src/raven-plugin-factory.ts":
/*!******************************************************!*\
  !*** ./src/rjs6-plugins-src/raven-plugin-factory.ts ***!
  \******************************************************/
/*! exports provided: RavenPluginFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"RavenPluginFactory\", function() { return RavenPluginFactory; });\n/* harmony import */ var _rjs6_core_src_raven_main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../rjs6-core-src/raven-main */ \"./src/rjs6-core-src/raven-main.ts\");\n\r\nclass RavenPluginFactory {\r\n    static loadGlobalPlugin(pluginName, globalName, functions) {\r\n        const plugin = RavenPluginFactory\r\n            .ravenContext\r\n            .ext\r\n            .createGlobalPlugin(pluginName, globalName, functions);\r\n        RavenPluginFactory.loadedPlugins.push(plugin);\r\n    }\r\n    static loadBindingPlugin(pluginName, pluginSelector, onEvaluateFn, opensNewContext = false) {\r\n        const plugin = RavenPluginFactory\r\n            .ravenContext\r\n            .ext\r\n            .createBindingPlugin(pluginName, pluginSelector, onEvaluateFn, opensNewContext);\r\n        RavenPluginFactory.loadedPlugins.push(plugin);\r\n    }\r\n    static appendAllLoaded() {\r\n        const ravenCore = _rjs6_core_src_raven_main__WEBPACK_IMPORTED_MODULE_0__[\"RavenCore\"].getInstance();\r\n        ravenCore.born();\r\n        RavenPluginFactory.loadedPlugins.forEach(plugin => {\r\n            ravenCore.registerPlugin(plugin);\r\n        });\r\n    }\r\n}\r\nRavenPluginFactory.loadedPlugins = [];\r\nRavenPluginFactory.ravenContext = _rjs6_core_src_raven_main__WEBPACK_IMPORTED_MODULE_0__[\"RavenCore\"].getInstance();\r\n\n\n//# sourceURL=webpack://Raven/./src/rjs6-plugins-src/raven-plugin-factory.ts?");

/***/ }),

/***/ "./src/rjs6-plugins-src/raven-plugin-loader.ts":
/*!*****************************************************!*\
  !*** ./src/rjs6-plugins-src/raven-plugin-loader.ts ***!
  \*****************************************************/
/*! exports provided: RavenPluginFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _raven_plugins__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./raven-plugins */ \"./src/rjs6-plugins-src/raven-plugins.ts\");\n/* harmony import */ var _raven_plugin_factory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./raven-plugin-factory */ \"./src/rjs6-plugins-src/raven-plugin-factory.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"RavenPluginFactory\", function() { return _raven_plugin_factory__WEBPACK_IMPORTED_MODULE_1__[\"RavenPluginFactory\"]; });\n\n\r\n\r\n\n\n//# sourceURL=webpack://Raven/./src/rjs6-plugins-src/raven-plugin-loader.ts?");

/***/ }),

/***/ "./src/rjs6-plugins-src/raven-plugins.ts":
/*!***********************************************!*\
  !*** ./src/rjs6-plugins-src/raven-plugins.ts ***!
  \***********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _implementation_raven_global_observables__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./implementation/raven-global-observables */ \"./src/rjs6-plugins-src/implementation/raven-global-observables.ts\");\n/* harmony import */ var _implementation_raven_global_fly__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./implementation/raven-global-fly */ \"./src/rjs6-plugins-src/implementation/raven-global-fly.ts\");\n/* harmony import */ var _implementation_raven_binding_if__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./implementation/raven-binding-if */ \"./src/rjs6-plugins-src/implementation/raven-binding-if.ts\");\n/* harmony import */ var _implementation_raven_binding_for__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./implementation/raven-binding-for */ \"./src/rjs6-plugins-src/implementation/raven-binding-for.ts\");\n/* harmony import */ var _implementation_raven_binding_text__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./implementation/raven-binding-text */ \"./src/rjs6-plugins-src/implementation/raven-binding-text.ts\");\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://Raven/./src/rjs6-plugins-src/raven-plugins.ts?");

/***/ })

/******/ });