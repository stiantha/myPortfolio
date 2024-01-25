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

/***/ "./src/assets/styles/styles.sass":
/*!***************************************!*\
  !*** ./src/assets/styles/styles.sass ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://portfolio/./src/assets/styles/styles.sass?");

/***/ }),

/***/ "./src/app/components/Footer.js":
/*!**************************************!*\
  !*** ./src/app/components/Footer.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _MediaIcon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MediaIcon */ \"./src/app/components/MediaIcon.js\");\n/* harmony import */ var _consts_media__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/consts/media */ \"./src/app/consts/media.js\");\n\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((t) => {\r\n    return /*html*/ `\r\n        <footer class=\"footer\">\r\n            <div class=\"container\">\r\n                <div class=\"footer__inner\">\r\n                    <div class=\"footer__info\">\r\n                        <div class=\"footer__header\">\r\n                            <div class=\"logo\">\r\n                                <img src=\"/images/logo.svg\" alt=\"logo\" class=\"logo__img\">\r\n                                <div class=\"logo__name\">Stian Tharaldsen</div>\r\n                            </div>\r\n                            <a class=\"footer__email\" href=\"${_consts_media__WEBPACK_IMPORTED_MODULE_1__[\"default\"].email}\">${_consts_media__WEBPACK_IMPORTED_MODULE_1__[\"default\"].emailRaw}</a>\r\n                        </div>\r\n\r\n                        <p class=\"footer__description\">${t.description}</p>\r\n                    </div>\r\n                    <div class=\"footer__media\">\r\n                        <div class=\"footer__title\">${t.media}</div>\r\n                        <div class=\"footer__list\">\r\n                            ${[\"figma\", \"github\", \"discord\"]\r\n                                .map((name) => (0,_MediaIcon__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({ name }))\r\n                                .join(\"\")}\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"footer__copyright\">${t.copyright}</div>\r\n            </div>\r\n\r\n        </footer>\r\n    `;\r\n});\r\n\n\n//# sourceURL=webpack://portfolio/./src/app/components/Footer.js?");

/***/ }),

/***/ "./src/app/components/Header.js":
/*!**************************************!*\
  !*** ./src/app/components/Header.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _consts_routes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/consts/routes */ \"./src/app/consts/routes.js\");\n/* harmony import */ var _MediaIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MediaIcon */ \"./src/app/components/MediaIcon.js\");\n\r\n\r\n\r\nconst paths = [\"/\", \"/projects\", \"/about-me\"]\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((t) => {\r\n    return /*html*/ `\r\n        <header class=\"header\">\r\n            <input class=\"hamburger\" type=\"checkbox\" aria-label=\"Menu\" />\r\n\r\n            <div class=\"media-header\">\r\n                <span class=\"media-header__line\"></span>\r\n                <div class=\"media-header__links\">\r\n                    ${[\"discord\", \"github\", \"email\"]\r\n                        .map((name) => (0,_MediaIcon__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({ name }))\r\n                        .join(\"\")}\r\n                </div>\r\n            </div>\r\n\r\n\r\n            <div class=\"container\">\r\n\r\n                <div class=\"header__inner\">\r\n                    <a class=\"logo\" href=\"/\">\r\n                        <img class=\"logo__img\" src=\"/images/logo.svg\" alt=\"Stian logo\">\r\n                        <span class=\"logo__name\">Stian Tharaldsen</span>\r\n                    </a>\r\n                    <div class=\"header__links\">\r\n                        ${paths\r\n                            .map(\r\n                                (path) => /*html*/ `\r\n                                <a href=\"${path}\" class=\"header__link ${\r\n                                    window.location.pathname === path\r\n                                        ? \"header__link_active\"\r\n                                        : \"\"\r\n                                }\">${t[_consts_routes__WEBPACK_IMPORTED_MODULE_0__[\"default\"][path].name]}</a>\r\n                            `\r\n                            )\r\n                            .join(\"\")}\r\n                    </div>\r\n                    <div class=\"dropdown\">\r\n                        <span class=\"dropdown__label\">no</span>\r\n\r\n                        <div class=\"dropdown__list\">\r\n                            <div class=\"dropdown__option\">en</div>\r\n                        </div>\r\n                    </div>\r\n\r\n                </div>\r\n            </div>\r\n            \r\n\r\n        </header>\r\n    `;\r\n});\r\n\n\n//# sourceURL=webpack://portfolio/./src/app/components/Header.js?");

/***/ }),

/***/ "./src/app/components/MediaIcon.js":
/*!*****************************************!*\
  !*** ./src/app/components/MediaIcon.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _consts_media__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/consts/media */ \"./src/app/consts/media.js\");\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (({ name }) => {\r\n    return /*html*/ `\r\n        <a href=\"${_consts_media__WEBPACK_IMPORTED_MODULE_0__[\"default\"][name]}\" class=\"media\">\r\n            <img src=\"/images/icons/${name}.svg\" alt=\"${name}\" class=\"media__icon\"/>\r\n        </a>`;\r\n});\r\n\n\n//# sourceURL=webpack://portfolio/./src/app/components/MediaIcon.js?");

/***/ }),

/***/ "./src/app/consts/media.js":
/*!*********************************!*\
  !*** ./src/app/consts/media.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _proxies_media__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../proxies/media */ \"./src/app/proxies/media.js\");\n\r\n\r\nconst media = {\r\n    discord: {\r\n        id: \"168427950230732801\",\r\n        tag: \"stiantha\",\r\n    },\r\n    stackOverflow: {\r\n        id: \"21562624\",\r\n        name: \"stian\",\r\n    },\r\n    github: \"stiantha\",\r\n    figma: \"stiantha\",\r\n    replit: \"stiantha\",\r\n    codewars: \"stiantha\",\r\n    devTo: \"stiantha\",\r\n    cssBattle: \"stiantha\",\r\n    codepen: \"stiantha\",\r\n    dribble: \"stiantha\",\r\n    linkedin: \"stiantha\",\r\n    email: \"stiant@getacademy.no\"\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new Proxy(media, _proxies_media__WEBPACK_IMPORTED_MODULE_0__[\"default\"]));\r\n\r\n\n\n//# sourceURL=webpack://portfolio/./src/app/consts/media.js?");

/***/ }),

/***/ "./src/app/consts/routes.js":
/*!**********************************!*\
  !*** ./src/app/consts/routes.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\r\n/**\r\n * @type {import(\"../../types/Routes\").Routes}\r\n */\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\r\n    \"/\": {\r\n        name: \"home\",\r\n        element: \"Home\",\r\n    },\r\n    \"/projects\": {\r\n        name: \"projects\",\r\n        element: \"Projects\",\r\n    },\r\n    \"/about-me\": {\r\n        name: \"about\",\r\n        element: \"About\",\r\n    },\r\n    \"/404\": {\r\n        name: \"404\",\r\n        element: \"PageNotFound\",\r\n    },\r\n    \r\n    // \"/contacts\": {\r\n    //     name: \"contacts\",\r\n    //     element: \"Contacts\",\r\n    // },\r\n});\n\n//# sourceURL=webpack://portfolio/./src/app/consts/routes.js?");

/***/ }),

/***/ "./src/app/consts/websites.js":
/*!************************************!*\
  !*** ./src/app/consts/websites.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\r\n    discord: \"discord.com/users/\",\r\n    github: \"github.com/\",\r\n    figma: \"figma.com/@\",\r\n    replit: \"replit.com/@\",\r\n    stackOverflow: \"stackoverflow.com/users/\",\r\n    codewars: \"codewars.com/users/\",\r\n    devTo: \"dev.to/\",\r\n    cssBattle: \"cssbattle.dev/player/\",\r\n    codepen: \"codepen.io/\",\r\n    dribble: \"dribbble.com/\",\r\n    email: \"mailto:\",\r\n    linkedin: \"linkedin.com/in/\"\r\n});\n\n//# sourceURL=webpack://portfolio/./src/app/consts/websites.js?");

/***/ }),

/***/ "./src/app/helpers/loadCssFile.js":
/*!****************************************!*\
  !*** ./src/app/helpers/loadCssFile.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((pathName) => {\r\n    const link = document.createElement(\"link\")\r\n    link.href = `/css/${pathName}.css`;\r\n    link.rel = \"stylesheet\"\r\n    \r\n    document.head.appendChild(link)\r\n});\n\n//# sourceURL=webpack://portfolio/./src/app/helpers/loadCssFile.js?");

/***/ }),

/***/ "./src/app/helpers/localeHandler.js":
/*!******************************************!*\
  !*** ./src/app/helpers/localeHandler.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   getLocale: () => (/* binding */ getLocale)\n/* harmony export */ });\nconst defaultLocale = \"no\"\r\n\r\n\r\nfunction setLocaleHander() {\r\n    const options = document.querySelectorAll(\".dropdown__option\");\r\n    const label = document.querySelector(\".dropdown__label\");\r\n\r\n    options.forEach((option) => {\r\n        if (option.innerHTML === localStorage.locale) \r\n            [label.innerHTML, option.innerHTML] = [localStorage.locale, label.innerHTML]\r\n\r\n        option.addEventListener(\"click\", () => {\r\n            localStorage.locale = option.innerHTML;\r\n\r\n            window.location.reload();\r\n        });\r\n    });\r\n}\r\n\r\nasync function getLocale() {\r\n    const locale = localStorage.locale ?? defaultLocale\r\n\r\n    return fetch(`/locales/${locale}.json`).then(res => res.json())\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (setLocaleHander);\r\n\r\n\n\n//# sourceURL=webpack://portfolio/./src/app/helpers/localeHandler.js?");

/***/ }),

/***/ "./src/app/helpers/replacePath.js":
/*!****************************************!*\
  !*** ./src/app/helpers/replacePath.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\r\n// From https://github.com/rafgraph/spa-github-pages\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async () => {\r\n    const l = window.location;\r\n\r\n    if (l.search[1] === \"/\") {\r\n        let decoded = l.search\r\n            .slice(1)\r\n            .split(\"&\")\r\n            .map((s) => s.replace(/~and~/g, \"&\"))\r\n            .join(\"?\");\r\n\r\n        window.history.replaceState(\r\n            null,\r\n            null,\r\n            l.pathname.slice(0, -1) + decoded + l.hash\r\n        );\r\n    }\r\n});\n\n//# sourceURL=webpack://portfolio/./src/app/helpers/replacePath.js?");

/***/ }),

/***/ "./src/app/helpers/startTitleAnimation.js":
/*!************************************************!*\
  !*** ./src/app/helpers/startTitleAnimation.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\r\nconst steps = \"⚍⚎⚏\";\r\nconst FPS = 2\r\nconst frameInterval = 1000 / FPS;\r\n\r\nlet step = 0;\r\nlet lastTimestep = 0;\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((pathName) => {\r\n    window.requestAnimationFrame(animation);\r\n\r\n    function animation(timestamp) {\r\n        if (lastTimestep + frameInterval < timestamp) {\r\n            document.title = `${steps[step++]} Stian | ${pathName}`;\r\n\r\n            step %= steps.length;\r\n            lastTimestep = timestamp;\r\n        }\r\n\r\n        window.requestAnimationFrame(animation);\r\n    }\r\n});\n\n//# sourceURL=webpack://portfolio/./src/app/helpers/startTitleAnimation.js?");

/***/ }),

/***/ "./src/app/index.js":
/*!**************************!*\
  !*** ./src/app/index.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _views_Layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./views/Layout */ \"./src/app/views/Layout.js\");\n/* harmony import */ var _consts_routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./consts/routes */ \"./src/app/consts/routes.js\");\n/* harmony import */ var _helpers_startTitleAnimation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers/startTitleAnimation */ \"./src/app/helpers/startTitleAnimation.js\");\n/* harmony import */ var _helpers_localeHandler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./helpers/localeHandler */ \"./src/app/helpers/localeHandler.js\");\n/* harmony import */ var _helpers_loadCssFile__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./helpers/loadCssFile */ \"./src/app/helpers/loadCssFile.js\");\n/* harmony import */ var _helpers_replacePath__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./helpers/replacePath */ \"./src/app/helpers/replacePath.js\");\n/* harmony import */ var styles_styles_sass__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styles/styles.sass */ \"./src/assets/styles/styles.sass\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst rootId = \"root\";\r\nasync function render() {\r\n    const path = _consts_routes__WEBPACK_IMPORTED_MODULE_1__[\"default\"][window.location.pathname] ?? _consts_routes__WEBPACK_IMPORTED_MODULE_1__[\"default\"][\"/404\"];\r\n\r\n    (0,_helpers_loadCssFile__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(path.name);\r\n    (0,_helpers_startTitleAnimation__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(path.name);\r\n\r\n    document.getElementById(rootId).innerHTML = await (0,_views_Layout__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\r\n        (\r\n            await __webpack_require__(\"./src/app/views lazy recursive ^\\\\.\\\\/.*$\")(`./${path.element}`)\r\n        ).default,\r\n        path\r\n    );\r\n}\r\n\r\n(0,_helpers_replacePath__WEBPACK_IMPORTED_MODULE_5__[\"default\"])()\r\n    .then(() => render())\r\n    .then(() => (0,_helpers_localeHandler__WEBPACK_IMPORTED_MODULE_3__[\"default\"])());\r\n\n\n//# sourceURL=webpack://portfolio/./src/app/index.js?");

/***/ }),

/***/ "./src/app/proxies/media.js":
/*!**********************************!*\
  !*** ./src/app/proxies/media.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _consts_websites__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../consts/websites */ \"./src/app/consts/websites.js\");\n\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\r\n    get(target, name) {\r\n        if (name === \"emailRaw\") \r\n            return target.email\r\n        \r\n        if (name === \"discord\") return `https://${_consts_websites__WEBPACK_IMPORTED_MODULE_0__[\"default\"].discord}${target.discord.id}`\r\n        if (name === \"discordTag\") return target.discord.tag\r\n\r\n        return `${name === \"email\" ? \"\" : \"https://\"}${_consts_websites__WEBPACK_IMPORTED_MODULE_0__[\"default\"][name] ?? \"\"}${target[name]}`\r\n    }\r\n});\n\n//# sourceURL=webpack://portfolio/./src/app/proxies/media.js?");

/***/ }),

/***/ "./src/app/views/Layout.js":
/*!*********************************!*\
  !*** ./src/app/views/Layout.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _components_Footer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/Footer.js */ \"./src/app/components/Footer.js\");\n/* harmony import */ var _components_Header_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/Header.js */ \"./src/app/components/Header.js\");\n/* harmony import */ var _helpers_localeHandler_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/helpers/localeHandler.js */ \"./src/app/helpers/localeHandler.js\");\n\r\n\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (content, path) => {\r\n    const locale = await (0,_helpers_localeHandler_js__WEBPACK_IMPORTED_MODULE_2__.getLocale)()\r\n\r\n    return /*html*/ `\r\n        ${(0,_components_Header_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(locale.header)}\r\n        <div class=\"container content\">\r\n            ${content(locale.pages[path.name], locale)}\r\n        </div>\r\n        ${(0,_components_Footer_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(locale.footer)}\r\n    `;\r\n});\r\n\n\n//# sourceURL=webpack://portfolio/./src/app/views/Layout.js?");

/***/ }),

/***/ "./src/app/views lazy recursive ^\\.\\/.*$":
/*!*******************************************************!*\
  !*** ./src/app/views/ lazy ^\.\/.*$ namespace object ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var map = {\n\t\"./About\": [\n\t\t\"./src/app/views/About.js\",\n\t\t\"src_app_views_About_js\"\n\t],\n\t\"./About.js\": [\n\t\t\"./src/app/views/About.js\",\n\t\t\"src_app_views_About_js\"\n\t],\n\t\"./Contacts\": [\n\t\t\"./src/app/views/Contacts.js\",\n\t\t\"src_app_views_Contacts_js\"\n\t],\n\t\"./Contacts.js\": [\n\t\t\"./src/app/views/Contacts.js\",\n\t\t\"src_app_views_Contacts_js\"\n\t],\n\t\"./Home\": [\n\t\t\"./src/app/views/Home.js\",\n\t\t\"src_app_views_Home_js\"\n\t],\n\t\"./Home.js\": [\n\t\t\"./src/app/views/Home.js\",\n\t\t\"src_app_views_Home_js\"\n\t],\n\t\"./Layout\": [\n\t\t\"./src/app/views/Layout.js\"\n\t],\n\t\"./Layout.js\": [\n\t\t\"./src/app/views/Layout.js\"\n\t],\n\t\"./PageNotFound\": [\n\t\t\"./src/app/views/PageNotFound.js\",\n\t\t\"src_app_views_PageNotFound_js\"\n\t],\n\t\"./PageNotFound.js\": [\n\t\t\"./src/app/views/PageNotFound.js\",\n\t\t\"src_app_views_PageNotFound_js\"\n\t],\n\t\"./Projects\": [\n\t\t\"./src/app/views/Projects.js\",\n\t\t\"src_app_views_Projects_js\"\n\t],\n\t\"./Projects.js\": [\n\t\t\"./src/app/views/Projects.js\",\n\t\t\"src_app_views_Projects_js\"\n\t]\n};\nfunction webpackAsyncContext(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\treturn Promise.resolve().then(() => {\n\t\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\t\te.code = 'MODULE_NOT_FOUND';\n\t\t\tthrow e;\n\t\t});\n\t}\n\n\tvar ids = map[req], id = ids[0];\n\treturn Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {\n\t\treturn __webpack_require__(id);\n\t});\n}\nwebpackAsyncContext.keys = () => (Object.keys(map));\nwebpackAsyncContext.id = \"./src/app/views lazy recursive ^\\\\.\\\\/.*$\";\nmodule.exports = webpackAsyncContext;\n\n//# sourceURL=webpack://portfolio/./src/app/views/_lazy_^\\.\\/.*$_namespace_object?");

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "js/" + {"src_app_views_About_js":"a655b7f27f8a26162e28","src_app_views_Contacts_js":"9242ac6b46ad1ecca817","src_app_views_Home_js":"78c5dddfc6a2c6060053","src_app_views_PageNotFound_js":"aeef2b0b2a336e260d61","src_app_views_Projects_js":"852487cac8d16b3b5b0b"}[chunkId] + ".js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get mini-css chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.miniCssF = (chunkId) => {
/******/ 			// return url for filenames not based on template
/******/ 			if (chunkId === "src_app_views_About_js") return "css/about.css";
/******/ 			if (chunkId === "src_app_views_Home_js") return "css/home.css";
/******/ 			if (chunkId === "src_app_views_Projects_js") return "css/projects.css";
/******/ 			// return url for filenames based on template
/******/ 			return undefined;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "portfolio:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 		
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl + "../";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/css loading */
/******/ 	(() => {
/******/ 		if (typeof document === "undefined") return;
/******/ 		var createStylesheet = (chunkId, fullhref, oldTag, resolve, reject) => {
/******/ 			var linkTag = document.createElement("link");
/******/ 		
/******/ 			linkTag.rel = "stylesheet";
/******/ 			linkTag.type = "text/css";
/******/ 			var onLinkComplete = (event) => {
/******/ 				// avoid mem leaks.
/******/ 				linkTag.onerror = linkTag.onload = null;
/******/ 				if (event.type === 'load') {
/******/ 					resolve();
/******/ 				} else {
/******/ 					var errorType = event && event.type;
/******/ 					var realHref = event && event.target && event.target.href || fullhref;
/******/ 					var err = new Error("Loading CSS chunk " + chunkId + " failed.\n(" + errorType + ": " + realHref + ")");
/******/ 					err.name = "ChunkLoadError";
/******/ 					err.code = "CSS_CHUNK_LOAD_FAILED";
/******/ 					err.type = errorType;
/******/ 					err.request = realHref;
/******/ 					if (linkTag.parentNode) linkTag.parentNode.removeChild(linkTag)
/******/ 					reject(err);
/******/ 				}
/******/ 			}
/******/ 			linkTag.onerror = linkTag.onload = onLinkComplete;
/******/ 			linkTag.href = fullhref;
/******/ 		
/******/ 			if (oldTag) {
/******/ 				oldTag.parentNode.insertBefore(linkTag, oldTag.nextSibling);
/******/ 			} else {
/******/ 				document.head.appendChild(linkTag);
/******/ 			}
/******/ 			return linkTag;
/******/ 		};
/******/ 		var findStylesheet = (href, fullhref) => {
/******/ 			var existingLinkTags = document.getElementsByTagName("link");
/******/ 			for(var i = 0; i < existingLinkTags.length; i++) {
/******/ 				var tag = existingLinkTags[i];
/******/ 				var dataHref = tag.getAttribute("data-href") || tag.getAttribute("href");
/******/ 				if(tag.rel === "stylesheet" && (dataHref === href || dataHref === fullhref)) return tag;
/******/ 			}
/******/ 			var existingStyleTags = document.getElementsByTagName("style");
/******/ 			for(var i = 0; i < existingStyleTags.length; i++) {
/******/ 				var tag = existingStyleTags[i];
/******/ 				var dataHref = tag.getAttribute("data-href");
/******/ 				if(dataHref === href || dataHref === fullhref) return tag;
/******/ 			}
/******/ 		};
/******/ 		var loadStylesheet = (chunkId) => {
/******/ 			return new Promise((resolve, reject) => {
/******/ 				var href = __webpack_require__.miniCssF(chunkId);
/******/ 				var fullhref = __webpack_require__.p + href;
/******/ 				if(findStylesheet(href, fullhref)) return resolve();
/******/ 				createStylesheet(chunkId, fullhref, null, resolve, reject);
/******/ 			});
/******/ 		}
/******/ 		// object to store loaded CSS chunks
/******/ 		var installedCssChunks = {
/******/ 			"index": 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.miniCss = (chunkId, promises) => {
/******/ 			var cssChunks = {"src_app_views_About_js":1,"src_app_views_Home_js":1,"src_app_views_Projects_js":1};
/******/ 			if(installedCssChunks[chunkId]) promises.push(installedCssChunks[chunkId]);
/******/ 			else if(installedCssChunks[chunkId] !== 0 && cssChunks[chunkId]) {
/******/ 				promises.push(installedCssChunks[chunkId] = loadStylesheet(chunkId).then(() => {
/******/ 					installedCssChunks[chunkId] = 0;
/******/ 				}, (e) => {
/******/ 					delete installedCssChunks[chunkId];
/******/ 					throw e;
/******/ 				}));
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		// no hmr
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.j = (chunkId, promises) => {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if(true) { // all chunks have JS
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise((resolve, reject) => (installedChunkData = installedChunks[chunkId] = [resolve, reject]));
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = (event) => {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 		};
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 		
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkportfolio"] = self["webpackChunkportfolio"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/app/index.js");
/******/ 	
/******/ })()
;