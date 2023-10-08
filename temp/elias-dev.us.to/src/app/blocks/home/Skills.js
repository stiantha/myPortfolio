__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_Dots__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/Dots */ "./src/app/components/Dots.js");
/* harmony import */ var _components_SkillBlock__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/SkillBlock */ "./src/app/components/SkillBlock.js");
/* harmony import */ var _consts_skills__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/consts/skills */ "./src/app/consts/skills.js");




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((t, t2) => {
    return /*html*/ `
        <sections class="skills">
            <h2 class="h2">${t.title}</h2>
            <div class="skills__content">
                <div class="skills__illustrations illustrations">
                    <img src="/images/logo-outline.svg" alt="" class="illustrations__logo">
                    ${(0,_components_Dots__WEBPACK_IMPORTED_MODULE_0__["default"])({ width: 4, height: 4 })}
                    ${(0,_components_Dots__WEBPACK_IMPORTED_MODULE_0__["default"])({ width: 6, height: 6 })}
                </div>
                <div class="skills__list">
                    ${Object.keys(_consts_skills__WEBPACK_IMPORTED_MODULE_2__["default"])
                        .filter(id => id !== "tool")
                        .map((id) => (0,_components_SkillBlock__WEBPACK_IMPORTED_MODULE_1__["default"])({ id }, t2))
                        .join("")}
                </div>

            </div>

        </sections>
    `;
});


//# sourceURL=webpack://portfolio/./src/app/blocks/home/Skills.js?