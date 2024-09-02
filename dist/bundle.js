/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _linkedList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./linkedList */ \"./src/linkedList.js\");\n\nvar list = (0,_linkedList__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\nlist.append(\"dog\");\nlist.append(\"cat\");\nlist.append(\"parrot\");\nlist.append(\"hamster\");\nlist.append(\"snake\");\nlist.append(\"turtle\");\nconsole.log(list.toString());\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/linkedList.js":
/*!***************************!*\
  !*** ./src/linkedList.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node */ \"./src/node.js\");\n\nvar _nodeFactory = (0,_node__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(),\n  createNode = _nodeFactory.createNode;\nvar linkedListFactory = function linkedListFactory() {\n  var head = null; // Initialise empty list\n\n  var _nodeFactory2 = (0,_node__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(),\n    createNode = _nodeFactory2.createNode;\n  var append = function append(value) {\n    var newNode = createNode(value);\n    if (head === null) {\n      head = newNode;\n    } else {\n      var currentNode = head;\n      while (currentNode.nextNode !== null) {\n        // Tranverse along the LinkedList\n        currentNode = currentNode.nextNode;\n      }\n      currentNode.nextNode = newNode; // at the end of the list then assign newNode\n    }\n    ;\n  };\n  var prepend = function prepend(value) {\n    var newNode = createNode(value, head);\n    head = newNode; // Reassign head\n  };\n  var size = function size() {\n    var count = 0;\n    var currentNode = head;\n    while (currentNode !== null) {\n      count++;\n      currentNode = currentNode.nextNode;\n    }\n    return count;\n  };\n  var getHead = function getHead() {\n    return head;\n  };\n  var getTail = function getTail() {\n    if (head === null) {\n      var currentNode = head;\n      while (currentNode.nextNode !== null) {\n        currentNode = currentNode.nextNode;\n      }\n      return currentNode;\n    }\n  };\n  var at = function at(index) {\n    if (index < 0) return null;\n    var currentIndex = 0;\n    var currentNode = head;\n    while (currentNode !== null) {\n      if (currentIndex === index) {\n        return currentNode;\n      }\n      currentNode = currentNode.nextNode;\n      currentIndex++;\n    }\n    return null; // If Index out of range\n  };\n  var pop = function pop() {\n    if (head === null) return null; // Empty list\n\n    // Single element list\n    if (head.nextNode === null) {\n      head = null;\n      return;\n    }\n    ;\n\n    // More than 1 element\n    var currentNode = head;\n    while (currentNode.nextNode.nextNode !== null) {\n      currentNode = currentNode.nextNode;\n    }\n    // At 2nd last node\n    currentNode.nextNode = null;\n  };\n  var contains = function contains(value) {\n    var currentNode = head;\n    while (currentNode !== null) {\n      if (currentNode.value = value) {\n        return true;\n      }\n      currentNode = currentNode.nextNode;\n    }\n    return false;\n  };\n  var find = function find(value) {\n    if (head === null) return null;\n    var currentIndex = 0;\n    var currentNode = head;\n    while (currentNode !== null) {\n      if (currentNode.value === value) {\n        return currentIndex;\n      }\n      currentNode = currentNode.nextNode;\n      currentIndex++;\n    }\n    return null; // No values found\n  };\n  var toString = function toString() {\n    var currentNode = head;\n    var result = '';\n    while (currentNode !== null) {\n      result += \"( \".concat(currentNode.value, \" ) -> \");\n      currentNode = currentNode.nextNode;\n    }\n    result += 'null'; // For the last node;\n    return result;\n  };\n  var insertAt = function insertAt(value, index) {\n    if (index < 0 || index > size()) {\n      console.log(\"Index out of bounds\");\n      return;\n    }\n    if (index === 0) {\n      prepend(value);\n      return;\n    }\n    var newNode = createNode(value);\n    var currentNode = head;\n    var currentIndex = 0;\n    while (currentIndex < index - 1) {\n      // we are aiming for the index before \n      currentNode = currentNode.nextNode;\n      currentIndex++;\n    }\n    ;\n\n    // Reach to the node before index to be inserted and then reassign \n    newNode.nextNode = currentNode.nextNode;\n    currentNode.nextNode = newNode;\n  };\n  var removeAt = function removeAt(index) {\n    if (index < 0 || index >= size()) {\n      console.log(\"Index out of bounds\");\n      return;\n    }\n\n    // Since initial head is index 0\n    if (index === 0) {\n      head = head.nextNode;\n      return;\n    }\n    ;\n    var currentNode = head;\n    var currentIndex = 0;\n    while (currentIndex < index - 1) {\n      currentNode = currentNode.nextNode;\n      currentIndex++;\n    }\n\n    // Reassign currentNode nextNode to skip\n    currentNode.nextNode = currentNode.nextNode.nextNode;\n  };\n  return {\n    append: append,\n    prepend: prepend,\n    size: size,\n    getHead: getHead,\n    getTail: getTail,\n    at: at,\n    pop: pop,\n    contains: contains,\n    find: find,\n    toString: toString,\n    insertAt: insertAt,\n    removeAt: removeAt\n  };\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (linkedListFactory);\n\n//# sourceURL=webpack:///./src/linkedList.js?");

/***/ }),

/***/ "./src/node.js":
/*!*********************!*\
  !*** ./src/node.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar nodeFactory = function nodeFactory() {\n  var createNode = function createNode() {\n    var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;\n    var nextNode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;\n    return {\n      value: value,\n      nextNode: nextNode\n    };\n  };\n  return {\n    createNode: createNode\n  };\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (nodeFactory);\n\n//# sourceURL=webpack:///./src/node.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;