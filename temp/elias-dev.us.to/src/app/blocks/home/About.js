__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((t) => {
    return /*html*/ `
        <section class="about">
            <div class="about__content">
                <h2 class="h2">${t.title}</h2>
                <div class="about__text">
                    ${t.description.map(
                        (text) =>
                            /*html*/ `<p class="about__description">${text}</p>`
                    ).join("")}
                </div>

                <a href="/about-me" class="button">${t.button} -></a>
            </div>
            <img src="/images/about-me.png" alt="" class="about__image">
        </section>
    `;
});


//# sourceURL=webpack://portfolio/./src/app/blocks/home/About.js?