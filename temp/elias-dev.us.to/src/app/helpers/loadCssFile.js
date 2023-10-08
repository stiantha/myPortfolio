__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((pathName) => {
    const link = document.createElement("link")
    link.href = `/css/${pathName}.css`;
    link.rel = "stylesheet"
    
    document.head.appendChild(link)
});

//# sourceURL=webpack://portfolio/./src/app/helpers/loadCssFile.js?