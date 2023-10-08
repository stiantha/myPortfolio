__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _MediaIcon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MediaIcon */ "./src/app/components/MediaIcon.js");
/* harmony import */ var _consts_media__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/consts/media */ "./src/app/consts/media.js");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((t) => {
    return /*html*/ `
        <footer class="footer">
            <div class="container">
                <div class="footer__inner">
                    <div class="footer__info">
                        <div class="footer__header">
                            <div class="logo">
                                <img src="/images/logo.svg" alt="logo" class="logo__img">
                                <div class="logo__name">Elias</div>
                            </div>
                            <a class="footer__email" href="${_consts_media__WEBPACK_IMPORTED_MODULE_1__["default"].email}">${_consts_media__WEBPACK_IMPORTED_MODULE_1__["default"].emailRaw}</a>
                        </div>

                        <p class="footer__description">${t.description}</p>
                    </div>
                    <div class="footer__media">
                        <div class="footer__title">${t.media}</div>
                        <div class="footer__list">
                            ${["figma", "github", "discord"]
                                .map((name) => (0,_MediaIcon__WEBPACK_IMPORTED_MODULE_0__["default"])({ name }))
                                .join("")}
                        </div>
                    </div>
                </div>
                <div class="footer__copyright">© ${t.copyright}</div>
            </div>

        </footer>
    `;
});


//# sourceURL=webpack://portfolio/./src/app/components/Footer.js?