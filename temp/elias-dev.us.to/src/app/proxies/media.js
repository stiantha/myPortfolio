__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _consts_websites__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../consts/websites */ "./src/app/consts/websites.js");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    get(target, name) {
        if (name === "emailRaw") 
            return target.email
        
        if (name === "discord") return `https://${_consts_websites__WEBPACK_IMPORTED_MODULE_0__["default"].discord}${target.discord.id}`
        if (name === "discordTag") return target.discord.tag

        return `${name === "email" ? "" : "https://"}${_consts_websites__WEBPACK_IMPORTED_MODULE_0__["default"][name] ?? ""}${target[name]}`
    }
});

//# sourceURL=webpack://portfolio/./src/app/proxies/media.js?