__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _consts_media__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/consts/media */ "./src/app/consts/media.js");


const contacts = [
    {
        name: "discord",
        text: _consts_media__WEBPACK_IMPORTED_MODULE_0__["default"].discordTag,
    },
    {
        name: "email",
        text: _consts_media__WEBPACK_IMPORTED_MODULE_0__["default"].emailRaw,
    },
];

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((t) => {
    return /*html*/ `
        <sections class="contacts" id="contacts">
            <h2 class="h2">${t.title}</h2>
            <div class="contacts__content">
                <p class="contacts__description">${t.text}</p>
                <div class="contacts__media">
                    <h3 class="contacts__title">${t.media}</h3>
                    <div class="contacts__list">
                        ${contacts
                            .map(
                                (contact) => /*html*/ `
                            <a class="contact" href="${_consts_media__WEBPACK_IMPORTED_MODULE_0__["default"][contact.name]}">
                                <img src="/images/icons/${
                                    contact.name
                                }.svg" alt="">
                                <div class="contact__name">${contact.text}</div>
                            </a>
                        `
                            )
                            .join("")}
                    </div>
                </div>
            </div>

        </sections>
    `;
});


//# sourceURL=webpack://portfolio/./src/app/blocks/home/Contacts.js?