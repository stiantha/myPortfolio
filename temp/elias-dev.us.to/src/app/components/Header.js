__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _consts_routes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/consts/routes */ "./src/app/consts/routes.js");
/* harmony import */ var _MediaIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MediaIcon */ "./src/app/components/MediaIcon.js");



const paths = ["/", "/projects", "/about-me"]

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((t) => {
    return /*html*/ `
        <header class="header">
            <input class="hamburger" type="checkbox" aria-label="Menu" />

            <div class="media-header">
                <span class="media-header__line"></span>
                <div class="media-header__links">
                    ${["discord", "github", "email"]
                        .map((name) => (0,_MediaIcon__WEBPACK_IMPORTED_MODULE_1__["default"])({ name }))
                        .join("")}
                </div>
            </div>


            <div class="container">

                <div class="header__inner">
                    <a class="logo" href="/">
                        <img class="logo__img" src="/images/logo.svg" alt="Elias logo">
                        <span class="logo__name">Elias</span>
                    </a>
                    <div class="header__links">
                        ${paths
                            .map(
                                (path) => /*html*/ `
                                <a href="${path}" class="header__link ${
                                    window.location.pathname === path
                                        ? "header__link_active"
                                        : ""
                                }">${t[_consts_routes__WEBPACK_IMPORTED_MODULE_0__["default"][path].name]}</a>
                            `
                            )
                            .join("")}
                    </div>
                    <div class="dropdown">
                        <span class="dropdown__label">en</span>

                        <div class="dropdown__list">
                            <div class="dropdown__option">ru</div>
                            <div class="dropdown__option">ua</div>
                        </div>
                    </div>

                </div>
            </div>
            

        </header>
    `;
});


//# sourceURL=webpack://portfolio/./src/app/components/Header.js?