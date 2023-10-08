__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_ProjectList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/ProjectList */ "./src/app/components/ProjectList.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((t, t2) => {
    return /*html*/ `
        <section class="projects">
            <div class="projects__header">
                <h2 class="h2">${t.title}</h2>
                <a class="projects__link" href="/projects">${t.button} ~~></a>
            </div>
            ${(0,_components_ProjectList__WEBPACK_IMPORTED_MODULE_0__["default"])({ limit: 3 }, t2)}
        </section>
    `;
});


//# sourceURL=webpack://portfolio/./src/app/blocks/home/Projects.js?