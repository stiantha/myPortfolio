__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _consts_skills__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/consts/skills */ "./src/app/consts/skills.js");
/* harmony import */ var _consts_techs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/consts/techs */ "./src/app/consts/techs.js");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (({ id }, t) => {
    return /*html*/ `
        <div class="skill-block">
            <div class="skill-block__name">${t[id]}</div>
            <ul class="skill-block__list">
                ${(_consts_skills__WEBPACK_IMPORTED_MODULE_0__["default"][id].map((techIndex) => _consts_techs__WEBPACK_IMPORTED_MODULE_1__["default"][techIndex]))
                    .map(
                        (tech) =>
                            /*html*/ `<li class="skill-block__skill">${tech}</li>`
                    )
                    .join("")}
            </ul>
        </div>
    `;
});


//# sourceURL=webpack://portfolio/./src/app/components/SkillBlock.js?