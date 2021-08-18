/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function() {
var exports = {};
exports.id = "pages/api/getposts";
exports.ids = ["pages/api/getposts"];
exports.modules = {

/***/ "./pages/api/getposts.ts":
/*!*******************************!*\
  !*** ./pages/api/getposts.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (async (req, res) => {\n  const resd = await axios__WEBPACK_IMPORTED_MODULE_0___default().get(`${\"http://localhost:1337\"}/posts`);\n  const jsonData = resd.data;\n  res.status(200).json(jsonData);\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL3BhZ2VzL2FwaS9nZXRwb3N0cy50cz9lYTM5Il0sIm5hbWVzIjpbInJlcSIsInJlcyIsInJlc2QiLCJheGlvcyIsInByb2Nlc3MiLCJqc29uRGF0YSIsImRhdGEiLCJzdGF0dXMiLCJqc29uIl0sIm1hcHBpbmdzIjoiOzs7QUFBQTtBQUdBLCtEQUFlLE9BQU9BLEdBQVAsRUFBNEJDLEdBQTVCLEtBQXFEO0FBQ2xFLFFBQU1DLElBQUksR0FBRyxNQUFNQyxnREFBQSxDQUFXLEdBQUVDLHVCQUFpQyxRQUE5QyxDQUFuQjtBQUNBLFFBQU1DLFFBQVEsR0FBR0gsSUFBSSxDQUFDSSxJQUF0QjtBQUNBTCxLQUFHLENBQUNNLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQkgsUUFBckI7QUFDRCxDQUpEIiwiZmlsZSI6Ii4vcGFnZXMvYXBpL2dldHBvc3RzLnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IHR5cGUgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSAnbmV4dCdcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgKHJlcTogTmV4dEFwaVJlcXVlc3QsIHJlczogTmV4dEFwaVJlc3BvbnNlKSA9PiB7XG4gIGNvbnN0IHJlc2QgPSBhd2FpdCBheGlvcy5nZXQoYCR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQkFTRV9VUkx9L3Bvc3RzYClcbiAgY29uc3QganNvbkRhdGEgPSByZXNkLmRhdGFcbiAgcmVzLnN0YXR1cygyMDApLmpzb24oanNvbkRhdGEpXG59XG4gIFxuICBcbiAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/api/getposts.ts\n");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("axios");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/api/getposts.ts"));
module.exports = __webpack_exports__;

})();