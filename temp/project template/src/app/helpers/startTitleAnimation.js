__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });

const steps = "/-\\|";
const FPS = 2
const frameInterval = 1000 / FPS;

let step = 0;
let lastTimestep = 0;

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((pathName) => {
    window.requestAnimationFrame(animation);

    function animation(timestamp) {
        if (lastTimestep + frameInterval < timestamp) {
            document.title = `${steps[step++]} Elias | ${pathName}`;

            step %= steps.length;
            lastTimestep = timestamp;
        }

        window.requestAnimationFrame(animation);
    }
});

//# sourceURL=webpack://portfolio/./src/app/helpers/startTitleAnimation.js?