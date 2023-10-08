__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });

// From https://github.com/rafgraph/spa-github-pages
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async () => {
    const l = window.location;

    if (l.search[1] === "/") {
        let decoded = l.search
            .slice(1)
            .split("&")
            .map((s) => s.replace(/~and~/g, "&"))
            .join("?");

        window.history.replaceState(
            null,
            null,
            l.pathname.slice(0, -1) + decoded + l.hash
        );
    }
});

//# sourceURL=webpack://portfolio/./src/app/helpers/replacePath.js?