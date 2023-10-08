__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_Footer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/Footer.js */ "./src/app/components/Footer.js");
/* harmony import */ var _components_Header_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/Header.js */ "./src/app/components/Header.js");
/* harmony import */ var _helpers_localeHandler_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/helpers/localeHandler.js */ "./src/app/helpers/localeHandler.js");




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (content, path) => {
    const locale = await (0,_helpers_localeHandler_js__WEBPACK_IMPORTED_MODULE_2__.getLocale)()

    return /*html*/ `
        ${(0,_components_Header_js__WEBPACK_IMPORTED_MODULE_1__["default"])(locale.header)}
        <div class="container content">
            ${content(locale.pages[path.name], locale)}
        </div>
        ${(0,_components_Footer_js__WEBPACK_IMPORTED_MODULE_0__["default"])(locale.footer)}
    `;
});


//# sourceURL=webpack://portfolio/./src/app/views/Layout.js?