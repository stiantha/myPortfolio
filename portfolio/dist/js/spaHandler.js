/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app/spaHandler.js":
/*!*******************************!*\
  !*** ./src/app/spaHandler.js ***!
  \*******************************/
/***/ (() => {

eval("\r\n// From https://github.com/rafgraph/spa-github-pages\r\n\r\nlet pathSegmentsToKeep = 0;\r\nlet l = window.location;\r\n\r\nl.replace(\r\n    l.protocol +\r\n        \"//\" +\r\n        l.hostname +\r\n        (l.port ? \":\" + l.port : \"\") +\r\n        l.pathname\r\n            .split(\"/\")\r\n            .slice(0, 1 + pathSegmentsToKeep)\r\n            .join(\"/\") +\r\n        \"/?/\" +\r\n        l.pathname\r\n            .slice(1)\r\n            .split(\"/\")\r\n            .slice(pathSegmentsToKeep)\r\n            .join(\"/\")\r\n            .replace(/&/g, \"~and~\") +\r\n        (l.search\r\n            ? \"&\" + l.search.slice(1).replace(/&/g, \"~and~\")\r\n            : \"\") +\r\n        l.hash\r\n);\n\n//# sourceURL=webpack://portfolio/./src/app/spaHandler.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/app/spaHandler.js"]();
/******/ 	
/******/ })()
;