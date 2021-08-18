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
exports.id = "pages/api/user";
exports.ids = ["pages/api/user"];
exports.modules = {

/***/ "./pages/api/user.ts":
/*!***************************!*\
  !*** ./pages/api/user.ts ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cookie */ \"cookie\");\n/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cookie__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (async (req, res, next) => {\n  if (req.method === 'GET') {\n    if (!req.headers.cookie) {\n      res.status(403).json({\n        message: 'Not Authorized'\n      });\n      return;\n    }\n\n    const {\n      token\n    } = cookie__WEBPACK_IMPORTED_MODULE_0___default().parse(req.headers.cookie) || null;\n    const strapiRes = await axios__WEBPACK_IMPORTED_MODULE_1___default().get(`${\"http://localhost:1337\"}/users/me`, {\n      headers: {\n        Authorization: `Bearer ${token}`\n      }\n    });\n\n    if (strapiRes.data) {\n      res.status(200).json({\n        user: strapiRes.data\n      });\n    } else {\n      next();\n    }\n  } else {\n    res.setHeader('Allow', ['GET']);\n    res.status(405).json({\n      message: `Method ${req.method} not allowed`\n    });\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL3BhZ2VzL2FwaS91c2VyLnRzP2JmYjAiXSwibmFtZXMiOlsicmVxIiwicmVzIiwibmV4dCIsIm1ldGhvZCIsImhlYWRlcnMiLCJjb29raWUiLCJzdGF0dXMiLCJqc29uIiwibWVzc2FnZSIsInRva2VuIiwic3RyYXBpUmVzIiwiYXhpb3MiLCJwcm9jZXNzIiwiQXV0aG9yaXphdGlvbiIsImRhdGEiLCJ1c2VyIiwic2V0SGVhZGVyIl0sIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFHQSwrREFBZSxPQUFPQSxHQUFQLEVBQTRCQyxHQUE1QixFQUFrREMsSUFBbEQsS0FBK0Q7QUFDMUUsTUFBSUYsR0FBRyxDQUFDRyxNQUFKLEtBQWUsS0FBbkIsRUFBMEI7QUFHeEIsUUFBSSxDQUFDSCxHQUFHLENBQUNJLE9BQUosQ0FBWUMsTUFBakIsRUFBeUI7QUFDdkJKLFNBQUcsQ0FBQ0ssTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQUVDLGVBQU8sRUFBRTtBQUFYLE9BQXJCO0FBRUE7QUFDRDs7QUFFRCxVQUFNO0FBQUVDO0FBQUYsUUFBWUosbURBQUEsQ0FBYUwsR0FBRyxDQUFDSSxPQUFKLENBQVlDLE1BQXpCLEtBQW9DLElBQXREO0FBRUEsVUFBTUssU0FBUyxHQUFHLE1BQU1DLGdEQUFBLENBQVcsR0FBRUMsdUJBQWlDLFdBQTlDLEVBQTBEO0FBRWhGUixhQUFPLEVBQUU7QUFDUFMscUJBQWEsRUFBRyxVQUFTSixLQUFNO0FBRHhCO0FBRnVFLEtBQTFELENBQXhCOztBQVNBLFFBQUlDLFNBQVMsQ0FBQ0ksSUFBZCxFQUFvQjtBQUNsQmIsU0FBRyxDQUFDSyxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFBRVEsWUFBSSxFQUFFTCxTQUFTLENBQUNJO0FBQWxCLE9BQXJCO0FBQ0QsS0FGRCxNQUVPO0FBQ0xaLFVBQUk7QUFDTDtBQUNGLEdBekJELE1BeUJPO0FBQ0xELE9BQUcsQ0FBQ2UsU0FBSixDQUFjLE9BQWQsRUFBdUIsQ0FBQyxLQUFELENBQXZCO0FBQ0FmLE9BQUcsQ0FBQ0ssTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQUVDLGFBQU8sRUFBRyxVQUFTUixHQUFHLENBQUNHLE1BQU87QUFBaEMsS0FBckI7QUFDRDtBQUNGLENBOUJIIiwiZmlsZSI6Ii4vcGFnZXMvYXBpL3VzZXIudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY29va2llIGZyb20gJ2Nvb2tpZSdcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCB0eXBlIHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gJ25leHQnXG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIChyZXE6IE5leHRBcGlSZXF1ZXN0LCByZXM6IE5leHRBcGlSZXNwb25zZSwgbmV4dDphbnkpID0+IHtcbiAgICBpZiAocmVxLm1ldGhvZCA9PT0gJ0dFVCcpIHtcbiAgICAgICBcblxuICAgICAgaWYgKCFyZXEuaGVhZGVycy5jb29raWUpIHtcbiAgICAgICAgcmVzLnN0YXR1cyg0MDMpLmpzb24oeyBtZXNzYWdlOiAnTm90IEF1dGhvcml6ZWQnIH0pXG5cbiAgICAgICAgcmV0dXJuIFxuICAgICAgfVxuICBcbiAgICAgIGNvbnN0IHsgdG9rZW4gfSA9IGNvb2tpZS5wYXJzZShyZXEuaGVhZGVycy5jb29raWUpIHx8IG51bGw7XG4gIFxuICAgICAgY29uc3Qgc3RyYXBpUmVzID0gYXdhaXQgYXhpb3MuZ2V0KGAke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0JBU0VfVVJMfS91c2Vycy9tZWAsIHtcbiAgICAgICBcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0b2tlbn1gLFxuICAgICAgICB9LFxuICAgICAgfSlcbiAgXG4gICAgICBcbiAgXG4gICAgICBpZiAoc3RyYXBpUmVzLmRhdGEpIHtcbiAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyB1c2VyOiBzdHJhcGlSZXMuZGF0YSB9KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbmV4dCgpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICByZXMuc2V0SGVhZGVyKCdBbGxvdycsIFsnR0VUJ10pXG4gICAgICByZXMuc3RhdHVzKDQwNSkuanNvbih7IG1lc3NhZ2U6IGBNZXRob2QgJHtyZXEubWV0aG9kfSBub3QgYWxsb3dlZGAgfSlcbiAgICB9XG4gIH1cbiAgIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/api/user.ts\n");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("axios");;

/***/ }),

/***/ "cookie":
/*!*************************!*\
  !*** external "cookie" ***!
  \*************************/
/***/ (function(module) {

"use strict";
module.exports = require("cookie");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/api/user.ts"));
module.exports = __webpack_exports__;

})();