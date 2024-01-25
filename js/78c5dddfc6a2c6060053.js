"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkportfolio"] = self["webpackChunkportfolio"] || []).push([["src_app_views_Home_js"],{

/***/ "./src/assets/styles/pages/home.sass":
/*!*******************************************!*\
  !*** ./src/assets/styles/pages/home.sass ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://portfolio/./src/assets/styles/pages/home.sass?");

/***/ }),

/***/ "./src/app/blocks/home/About.js":
/*!**************************************!*\
  !*** ./src/app/blocks/home/About.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((t) => {\r\n    return /*html*/ `\r\n        <section class=\"about\">\r\n            <div class=\"about__content\">\r\n                <h2 class=\"h2\">${t.title}</h2>\r\n                <div class=\"about__text\">\r\n                    ${t.description.map(\r\n                        (text) =>\r\n                            /*html*/ `<p class=\"about__description\">${text}</p>`\r\n                    ).join(\"\")}\r\n                </div>\r\n\r\n                <a href=\"/about-me\" class=\"button\">${t.button} -></a>\r\n            </div>\r\n            <img src=\"/images/about-me.png\" alt=\"\" class=\"about__image\">\r\n        </section>\r\n    `;\r\n});\n\n//# sourceURL=webpack://portfolio/./src/app/blocks/home/About.js?");

/***/ }),

/***/ "./src/app/blocks/home/Contacts.js":
/*!*****************************************!*\
  !*** ./src/app/blocks/home/Contacts.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _consts_media__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/consts/media */ \"./src/app/consts/media.js\");\n\r\n\r\nconst contacts = [\r\n    {\r\n        name: \"discord\",\r\n        text: _consts_media__WEBPACK_IMPORTED_MODULE_0__[\"default\"].discordTag,\r\n    },\r\n    {\r\n        name: \"email\",\r\n        text: _consts_media__WEBPACK_IMPORTED_MODULE_0__[\"default\"].emailRaw,\r\n    },\r\n];\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((t) => {\r\n    return /*html*/ `\r\n        <sections class=\"contacts\" id=\"contacts\">\r\n            <h2 class=\"h2\">${t.title}</h2>\r\n            <div class=\"contacts__content\">\r\n                <p class=\"contacts__description\">${t.text}</p>\r\n                <div class=\"contacts__media\">\r\n                    <h3 class=\"contacts__title\">${t.media}</h3>\r\n                    <div class=\"contacts__list\">\r\n                        ${contacts\r\n                            .map(\r\n                                (contact) => /*html*/ `\r\n                            <a class=\"contact\" href=\"${_consts_media__WEBPACK_IMPORTED_MODULE_0__[\"default\"][contact.name]}\">\r\n                                <img src=\"/images/icons/${\r\n                                    contact.name\r\n                                }.svg\" alt=\"\">\r\n                                <div class=\"contact__name\">${contact.text}</div>\r\n                            </a>\r\n                        `\r\n                            )\r\n                            .join(\"\")}\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n        </sections>\r\n    `;\r\n});\r\n\n\n//# sourceURL=webpack://portfolio/./src/app/blocks/home/Contacts.js?");

/***/ }),

/***/ "./src/app/blocks/home/Hero.js":
/*!*************************************!*\
  !*** ./src/app/blocks/home/Hero.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _components_Dots__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/Dots */ \"./src/app/components/Dots.js\");\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((t) => {\r\n    return /*html*/ `\r\n        <section class=\"hero\">\r\n            <div class=\"hero__content\">\r\n                <h1 class=\"hero__title\">${t.title}</h1>\r\n                <div class=\"hero__description\">\r\n                    ${t.description.map(\r\n                        (text) =>\r\n                            /*html*/ `<p>${text}</p>`\r\n                    ).join(\"\")}\r\n                </div>\r\n                <a class=\"button button__primary\" href=\"#contacts\">${t.button} =></a>\r\n            </div>\r\n            <div class=\"hero__illustrations\">\r\n                <img src=\"/images/logo-outline.svg\" alt=\"\" class=\"hero__logo\">\r\n                <img src=\"/images/hero.png\" alt=\"Stian\" class=\"hero__image\">\r\n                <div class=\"hero__status\">${t.status} <a href=\"https://getacademy.no\">Get Academy</a></div>\r\n                ${(0,_components_Dots__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({})}\r\n            </div>\r\n        </section>\r\n    `;\r\n});\n\n//# sourceURL=webpack://portfolio/./src/app/blocks/home/Hero.js?");

/***/ }),

/***/ "./src/app/blocks/home/Projects.js":
/*!*****************************************!*\
  !*** ./src/app/blocks/home/Projects.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _components_ProjectList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/ProjectList */ \"./src/app/components/ProjectList.js\");\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((t, t2) => {\r\n    return /*html*/ `\r\n        <section class=\"projects\">\r\n            <div class=\"projects__header\">\r\n                <h2 class=\"h2\">${t.title}</h2>\r\n                <a class=\"projects__link\" href=\"/projects\">${t.button} ~~></a>\r\n            </div>\r\n            ${(0,_components_ProjectList__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({ limit: 3 }, t2)}\r\n        </section>\r\n    `;\r\n});\r\n\n\n//# sourceURL=webpack://portfolio/./src/app/blocks/home/Projects.js?");

/***/ }),

/***/ "./src/app/blocks/home/Quote.js":
/*!**************************************!*\
  !*** ./src/app/blocks/home/Quote.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((t) => {\r\n    return /*html*/`\r\n        <figure class=\"quote\">\r\n            <blockquote class=\"quote__text\">${t.text}</blockquote>\r\n            <figcaption class=\"quote__author\">${t.author}</figcaption>\r\n        </figure>\r\n    `\r\n});\n\n//# sourceURL=webpack://portfolio/./src/app/blocks/home/Quote.js?");

/***/ }),

/***/ "./src/app/blocks/home/Skills.js":
/*!***************************************!*\
  !*** ./src/app/blocks/home/Skills.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _components_Dots__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/Dots */ \"./src/app/components/Dots.js\");\n/* harmony import */ var _components_SkillBlock__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/SkillBlock */ \"./src/app/components/SkillBlock.js\");\n/* harmony import */ var _consts_skills__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/consts/skills */ \"./src/app/consts/skills.js\");\n\r\n\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((t, t2) => {\r\n    return /*html*/ `\r\n        <sections class=\"skills\">\r\n            <h2 class=\"h2\">${t.title}</h2>\r\n            <div class=\"skills__content\">\r\n                <div class=\"skills__illustrations illustrations\">\r\n                    <img src=\"/images/logo-outline.svg\" alt=\"\" class=\"illustrations__logo\">\r\n                    ${(0,_components_Dots__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({ width: 4, height: 4 })}\r\n                    ${(0,_components_Dots__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({ width: 6, height: 6 })}\r\n                </div>\r\n                <div class=\"skills__list\">\r\n                    ${Object.keys(_consts_skills__WEBPACK_IMPORTED_MODULE_2__[\"default\"])\r\n                        .filter(id => id)\r\n                        .map((id) => (0,_components_SkillBlock__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({ id }, t2))\r\n                        .join(\"\")}\r\n                </div>\r\n\r\n            </div>\r\n\r\n        </sections>\r\n    `;\r\n});\r\n\n\n//# sourceURL=webpack://portfolio/./src/app/blocks/home/Skills.js?");

/***/ }),

/***/ "./src/app/components/Dots.js":
/*!************************************!*\
  !*** ./src/app/components/Dots.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst radius = 4;\r\nconst gap = 16;\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (({ width = 5, height = 5 } = {}) => {\r\n    const svgWidth = (radius * 2 + gap) * width - gap\r\n    const svgHeight = (radius * 2 + gap) * height - gap\r\n\r\n    return /*html*/ `\r\n        <svg width=\"100%\" class=\"dots\" viewBox=\"0 0 ${svgWidth} ${svgHeight}\">\r\n            ${new Array(width)\r\n                .fill(new Array(height).fill(\"\"))\r\n                .map((arr, i) =>\r\n                    arr.map((_, j) => {\r\n                        const x = radius + i * (radius * 2 + gap);\r\n                        const y = radius + j * (radius * 2 + gap);\r\n\r\n                        return /*html*/ `<circle cx=\"${x}\" cy=\"${y}\" r=\"${radius}\" />`;\r\n                    }).join(\"\")\r\n                )\r\n                .join(\"\")}\r\n        </svg>\r\n    `;\r\n});\r\n\n\n//# sourceURL=webpack://portfolio/./src/app/components/Dots.js?");

/***/ }),

/***/ "./src/app/components/Project.js":
/*!***************************************!*\
  !*** ./src/app/components/Project.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _consts_projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/consts/projects */ \"./src/app/consts/projects.js\");\n/* harmony import */ var _consts_websites__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/consts/websites */ \"./src/app/consts/websites.js\");\n/* harmony import */ var _consts_techs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/consts/techs */ \"./src/app/consts/techs.js\");\n/* harmony import */ var _consts_media__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/consts/media */ \"./src/app/consts/media.js\");\n\r\n\r\n\r\n\r\n\r\nfunction mapLinks(links) {\r\n    function map(link) {\r\n        let href =\r\n        \"https://\" + (link === \"live\" ? \"\" : _consts_websites__WEBPACK_IMPORTED_MODULE_1__[\"default\"][link]) + links[link];\r\n\r\n        if (link === \"figma\") href = `https://figma.com/community/file/${links[link]}`\r\n        if (link === \"github\" && links[link].startsWith(\"/\")) href = _consts_media__WEBPACK_IMPORTED_MODULE_3__[\"default\"].github + links[link]\r\n\r\n\r\n        const className = link === \"cached\" ? \"button__secondary\" : \"\";\r\n        const name = `${link[0].toUpperCase()}${link.slice(1)}`;\r\n\r\n        return /*html*/ `<a href=\"${href}\" class=\"button ${className}\">${name} =></a>`;\r\n    }\r\n\r\n    return Object.keys(links).map(map).join(\"\");\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (({ id }, t) => {\r\n    const { hasImage, techs: projectTech, links } = _consts_projects__WEBPACK_IMPORTED_MODULE_0__[\"default\"].find(\r\n        (project) => project.id === id\r\n    );\r\n\r\n    return /*html*/ `\r\n        <div class=\"project\">\r\n            ${\r\n                hasImage\r\n                    ? `<img src=\"/images/projects/${id}.webp\" alt=\"${t[id].name}\" class=\"project__image\">`\r\n                    : \"\"\r\n            }\r\n            \r\n            <ul class=\"project__techs\">\r\n                ${projectTech\r\n                    .map(\r\n                        (tech) =>\r\n                            /*html*/ `<li class=\"project__tech\">${_consts_techs__WEBPACK_IMPORTED_MODULE_2__[\"default\"][tech]}</li>`\r\n                    )\r\n                    .join(\"\")}\r\n            </ul> \r\n\r\n            <div class=\"project__content\">\r\n                <div class=\"project__name\">${t[id].name}</div>\r\n                <div class=\"project__description\">${t[id].description}</div>\r\n                <div class=\"project__links\">${mapLinks(links)}</div>\r\n            </div>\r\n        </div> \r\n    `;\r\n});\r\n\n\n//# sourceURL=webpack://portfolio/./src/app/components/Project.js?");

/***/ }),

/***/ "./src/app/components/ProjectList.js":
/*!*******************************************!*\
  !*** ./src/app/components/ProjectList.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _components_Project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/Project */ \"./src/app/components/Project.js\");\n/* harmony import */ var _consts_projects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/consts/projects */ \"./src/app/consts/projects.js\");\n\r\n\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (({ title, filter = () => true, limit = _consts_projects__WEBPACK_IMPORTED_MODULE_1__[\"default\"].length }, t) => {\r\n    return /*html*/ `\r\n            ${title ? `<div> <h2 class=\"h2\">${title}</h2>` : \"\"}\r\n            <div class=\"project-list\">\r\n                ${_consts_projects__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\r\n                    .filter(filter)\r\n                    .slice(0, limit)\r\n                    .sort((a, b) => a.hasImage - b.hasImage)\r\n                    .map(({ id }) => (0,_components_Project__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({ id }, t))\r\n                    .join(\"\")}\r\n            </div>\r\n        ${title ? \"</div>\" : \"\"}\r\n    `;\r\n});\r\n\n\n//# sourceURL=webpack://portfolio/./src/app/components/ProjectList.js?");

/***/ }),

/***/ "./src/app/components/SkillBlock.js":
/*!******************************************!*\
  !*** ./src/app/components/SkillBlock.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _consts_skills__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/consts/skills */ \"./src/app/consts/skills.js\");\n/* harmony import */ var _consts_techs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/consts/techs */ \"./src/app/consts/techs.js\");\n\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (({ id }, t) => {\r\n    return /*html*/ `\r\n        <div class=\"skill-block\">\r\n            <div class=\"skill-block__name\">${t[id]}</div>\r\n            <ul class=\"skill-block__list\">\r\n                ${(_consts_skills__WEBPACK_IMPORTED_MODULE_0__[\"default\"][id].map((techIndex) => _consts_techs__WEBPACK_IMPORTED_MODULE_1__[\"default\"][techIndex]))\r\n                    .map(\r\n                        (tech) =>\r\n                            /*html*/ `<li class=\"skill-block__skill\">${tech}</li>`\r\n                    )\r\n                    .join(\"\")}\r\n            </ul>\r\n        </div>\r\n    `;\r\n});\r\n\n\n//# sourceURL=webpack://portfolio/./src/app/components/SkillBlock.js?");

/***/ }),

/***/ "./src/app/consts/projects.js":
/*!************************************!*\
  !*** ./src/app/consts/projects.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/**\r\n * @type {import(\"../../types/Project\").Project[]}\r\n */\r\nconst projects = [\r\n    {\r\n        id: \"discord-timer-bot\",\r\n        links: {\r\n            github: \"/SoD-ResetTimer/\",\r\n            live: \"discord.com/oauth2/authorize?client_id=1198244865465667634&permissions=67108864&scope=bot\"\r\n        },\r\n        techs: [\"python\", \"paas\"],\r\n        hasImage: true,\r\n    },\r\n\r\n];\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (projects);\r\n\n\n//# sourceURL=webpack://portfolio/./src/app/consts/projects.js?");

/***/ }),

/***/ "./src/app/consts/skills.js":
/*!**********************************!*\
  !*** ./src/app/consts/skills.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\r\n    language: [\"js\", \"python\", \"c\"],\r\n    database: [\"mongo\"],\r\n    other: [\"html\", \"css\", \"sass\", \"scss\"],\r\n    tool: [\"vscode\", \"git\", \"br\", \"figma\", \"canva\"],\r\n    framework: [\"react\",\"vue\", \"astro\"]   \r\n});\n\n//# sourceURL=webpack://portfolio/./src/app/consts/skills.js?");

/***/ }),

/***/ "./src/app/consts/techs.js":
/*!*********************************!*\
  !*** ./src/app/consts/techs.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\r\n    astro: \"Astro\",\r\n    c: \"C#\",\r\n    ts: \"TypeScript\",\r\n    js: \"JavaScript\",\r\n    python: \"Python\",\r\n    sqlite: \"SQLite\",\r\n    mongo: \"MongoDB\",\r\n    postgreSql: \"PostgreSQL\",\r\n    html: \"HTML\",\r\n    css: \"CSS\",\r\n    sass: \"SASS\",\r\n    scss: \"SCSS\",\r\n    less: \"Less\",\r\n    stylus: \"Stylus\",\r\n    ejs: \"EJS\",\r\n    jinja: \"Jinja2\",\r\n    node: \"Node.js\",\r\n    vscode: \"VSCode\",\r\n    nvim: \"NeoVim\",\r\n    figma: \"Figma\",\r\n    git: \"Git & GitHub\",\r\n    xfce: \"XFCE\",\r\n    react: \"React\",\r\n    discordJs: \"Discord.js\",\r\n    flask: \"Flask\",\r\n    quart: \"Quart\",\r\n    express: \"Express\",\r\n    rtk: \"RTK\",\r\n    zod: \"Zod\",\r\n    webpack: \"WebPack\",\r\n    pug: \"Pug\",\r\n    gulp: \"Gulp\",\r\n    next: \"Next\",\r\n    deno: \"Deno\",\r\n    vue: \"Vue\",\r\n    canva: \"Canva\",\r\n    br: '\\n',\r\n    no: \"Norsk\",\r\n    en: \"Engelsk\",\r\n    paas:\"PaaS\",\r\n});\n\n//# sourceURL=webpack://portfolio/./src/app/consts/techs.js?");

/***/ }),

/***/ "./src/app/views/Home.js":
/*!*******************************!*\
  !*** ./src/app/views/Home.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _blocks_home_Hero_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/blocks/home/Hero.js */ \"./src/app/blocks/home/Hero.js\");\n/* harmony import */ var _blocks_home_Quote_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/blocks/home/Quote.js */ \"./src/app/blocks/home/Quote.js\");\n/* harmony import */ var _blocks_home_Projects_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/blocks/home/Projects.js */ \"./src/app/blocks/home/Projects.js\");\n/* harmony import */ var _blocks_home_Skills_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/blocks/home/Skills.js */ \"./src/app/blocks/home/Skills.js\");\n/* harmony import */ var _blocks_home_About_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/blocks/home/About.js */ \"./src/app/blocks/home/About.js\");\n/* harmony import */ var _blocks_home_Contacts_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/blocks/home/Contacts.js */ \"./src/app/blocks/home/Contacts.js\");\n/* harmony import */ var styles_pages_home_sass__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styles/pages/home.sass */ \"./src/assets/styles/pages/home.sass\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((t, locale) => {\r\n    return /*html*/`\r\n        ${(0,_blocks_home_Hero_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(t.hero)}\r\n        ${(0,_blocks_home_Quote_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(t.quote)}\r\n        ${(0,_blocks_home_Projects_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(t.projects, locale.projects)}\r\n        ${(0,_blocks_home_Skills_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(t.skills, locale.skills)}\r\n        ${(0,_blocks_home_About_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(t.about)}\r\n        ${(0,_blocks_home_Contacts_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(t.contacts)}\r\n    `;\r\n});\r\n\n\n//# sourceURL=webpack://portfolio/./src/app/views/Home.js?");

/***/ })

}]);