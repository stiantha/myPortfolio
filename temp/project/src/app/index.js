__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _views_Layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./views/Layout */ "./src/app/views/Layout.js");
/* harmony import */ var _consts_routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./consts/routes */ "./src/app/consts/routes.js");
/* harmony import */ var _helpers_startTitleAnimation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers/startTitleAnimation */ "./src/app/helpers/startTitleAnimation.js");
/* harmony import */ var _helpers_localeHandler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./helpers/localeHandler */ "./src/app/helpers/localeHandler.js");
/* harmony import */ var _helpers_loadCssFile__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./helpers/loadCssFile */ "./src/app/helpers/loadCssFile.js");
/* harmony import */ var _helpers_replacePath__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./helpers/replacePath */ "./src/app/helpers/replacePath.js");
/* harmony import */ var styles_styles_sass__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styles/styles.sass */ "./src/assets/styles/styles.sass");









const rootId = "root";
async function render() {
    const path = _consts_routes__WEBPACK_IMPORTED_MODULE_1__["default"][window.location.pathname] ?? _consts_routes__WEBPACK_IMPORTED_MODULE_1__["default"]["/404"];

    (0,_helpers_loadCssFile__WEBPACK_IMPORTED_MODULE_4__["default"])(path.name);
    (0,_helpers_startTitleAnimation__WEBPACK_IMPORTED_MODULE_2__["default"])(path.name);

    document.getElementById(rootId).innerHTML = await (0,_views_Layout__WEBPACK_IMPORTED_MODULE_0__["default"])(
        (
            await __webpack_require__("./src/app/views lazy recursive ^\\.\\/.*$")(`./${path.element}`)
        ).default,
        path
    );
}

(0,_helpers_replacePath__WEBPACK_IMPORTED_MODULE_5__["default"])()
    .then(() => render())
    .then(() => (0,_helpers_localeHandler__WEBPACK_IMPORTED_MODULE_3__["default"])());


//# sourceURL=webpack://portfolio/./src/app/index.js?