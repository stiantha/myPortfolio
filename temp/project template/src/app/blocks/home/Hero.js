__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_Dots__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/Dots */ "./src/app/components/Dots.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((t) => {
    return /*html*/ `
        <section class="hero">
            <div class="hero__content">
                <h1 class="hero__title">${t.title}</h1>
                <div class="hero__description">${t.description}</div>
                <a class="button button__primary" href="#contacts">${t.button} =></a>
            </div>
            <div class="hero__illustrations">
                <img src="/images/logo-outline.svg" alt="" class="hero__logo">
                <img src="/images/hero.png" alt="Elias" class="hero__image">
                <div class="hero__status">${t.status} <a href="https://elias-dev.ml">Portfolio</a></div>
                ${(0,_components_Dots__WEBPACK_IMPORTED_MODULE_0__["default"])({})}
            </div>
        </section>
    `;
});


//# sourceURL=webpack://portfolio/./src/app/blocks/home/Hero.js?