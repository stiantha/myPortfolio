__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _consts_projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/consts/projects */ "./src/app/consts/projects.js");
/* harmony import */ var _consts_websites__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/consts/websites */ "./src/app/consts/websites.js");
/* harmony import */ var _consts_techs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/consts/techs */ "./src/app/consts/techs.js");
/* harmony import */ var _consts_media__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/consts/media */ "./src/app/consts/media.js");





function mapLinks(links) {
    function map(link) {
        let href =
        "https://" + (link === "live" ? "" : _consts_websites__WEBPACK_IMPORTED_MODULE_1__["default"][link]) + links[link];

        if (link === "figma") href = `https://figma.com/community/file/${links[link]}`
        if (link === "github" && links[link].startsWith("/")) href = _consts_media__WEBPACK_IMPORTED_MODULE_3__["default"].github + links[link]


        const className = link === "cached" ? "button__secondary" : "";
        const name = `${link[0].toUpperCase()}${link.slice(1)}`;

        return /*html*/ `<a href="${href}" class="button ${className}">${name} =></a>`;
    }

    return Object.keys(links).map(map).join("");
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (({ id }, t) => {
    const { hasImage, techs: projectTech, links } = _consts_projects__WEBPACK_IMPORTED_MODULE_0__["default"].find(
        (project) => project.id === id
    );

    return /*html*/ `
        <div class="project">
            ${
                hasImage
                    ? `<img src="/images/projects/${id}.webp" alt="${t[id].name}" class="project__image">`
                    : ""
            }
            
            <ul class="project__techs">
                ${projectTech
                    .map(
                        (tech) =>
                            /*html*/ `<li class="project__tech">${_consts_techs__WEBPACK_IMPORTED_MODULE_2__["default"][tech]}</li>`
                    )
                    .join("")}
            </ul> 

            <div class="project__content">
                <div class="project__name">${t[id].name}</div>
                <div class="project__description">${t[id].description}</div>
                <div class="project__links">${mapLinks(links)}</div>
            </div>
        </div> 
    `;
});


//# sourceURL=webpack://portfolio/./src/app/components/Project.js?