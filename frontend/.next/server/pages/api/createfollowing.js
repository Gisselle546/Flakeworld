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
exports.id = "pages/api/createfollowing";
exports.ids = ["pages/api/createfollowing"];
exports.modules = {

/***/ "./pages/api/createfollowing.ts":
/*!**************************************!*\
  !*** ./pages/api/createfollowing.ts ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cookie */ \"cookie\");\n/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cookie__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (async (req, res) => {\n  if (req.method === 'POST') {\n    if (!req.headers.cookie) {\n      res.status(403).json({\n        message: 'Not Authorized'\n      });\n      return;\n    }\n\n    const {\n      counter,\n      profile,\n      mainid\n    } = req.body.datar;\n    const tokenCookie = cookie__WEBPACK_IMPORTED_MODULE_0___default().parse(req.headers.cookie) || null;\n    const token = tokenCookie['token'];\n    const strapiRes = await axios__WEBPACK_IMPORTED_MODULE_1___default().post(`${\"http://localhost:1337\"}/followings`, {\n      counter,\n      profile,\n      mainid\n    }, {\n      headers: {\n        Authorization: `Bearer ${token}`\n      }\n    });\n\n    if (strapiRes.data) {\n      res.status(200).json({\n        followings: strapiRes.data\n      });\n    } else {\n      res.status(strapiRes.data.statusCode);\n    }\n  } else {\n    res.setHeader('Allow', ['POST']);\n    res.status(405).json({\n      message: `Method ${req.method} not allowed`\n    });\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL3BhZ2VzL2FwaS9jcmVhdGVmb2xsb3dpbmcudHM/Yjg2YSJdLCJuYW1lcyI6WyJyZXEiLCJyZXMiLCJtZXRob2QiLCJoZWFkZXJzIiwiY29va2llIiwic3RhdHVzIiwianNvbiIsIm1lc3NhZ2UiLCJjb3VudGVyIiwicHJvZmlsZSIsIm1haW5pZCIsImJvZHkiLCJkYXRhciIsInRva2VuQ29va2llIiwidG9rZW4iLCJzdHJhcGlSZXMiLCJheGlvcyIsInByb2Nlc3MiLCJBdXRob3JpemF0aW9uIiwiZGF0YSIsImZvbGxvd2luZ3MiLCJzdGF0dXNDb2RlIiwic2V0SGVhZGVyIl0sIm1hcHBpbmdzIjoiOzs7OztBQUNBO0FBQ0E7QUFFQSwrREFBZSxPQUFPQSxHQUFQLEVBQTRCQyxHQUE1QixLQUFxRDtBQUNsRSxNQUFJRCxHQUFHLENBQUNFLE1BQUosS0FBZSxNQUFuQixFQUEyQjtBQUV6QixRQUFJLENBQUNGLEdBQUcsQ0FBQ0csT0FBSixDQUFZQyxNQUFqQixFQUF5QjtBQUNyQkgsU0FBRyxDQUFDSSxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFBRUMsZUFBTyxFQUFFO0FBQVgsT0FBckI7QUFFQTtBQUNEOztBQUVELFVBQUs7QUFBQ0MsYUFBRDtBQUFTQyxhQUFUO0FBQWlCQztBQUFqQixRQUEwQlYsR0FBRyxDQUFDVyxJQUFKLENBQVNDLEtBQXhDO0FBRUEsVUFBT0MsV0FBVyxHQUFJVCxtREFBQSxDQUFhSixHQUFHLENBQUNHLE9BQUosQ0FBWUMsTUFBekIsS0FBb0MsSUFBMUQ7QUFDQSxVQUFNVSxLQUFLLEdBQUVELFdBQVcsQ0FBQyxPQUFELENBQXhCO0FBRUEsVUFBTUUsU0FBUyxHQUFHLE1BQU1DLGlEQUFBLENBQVksR0FBRUMsdUJBQWlDLGFBQS9DLEVBQTZEO0FBQ25GVCxhQURtRjtBQUVuRkMsYUFGbUY7QUFHbkZDO0FBSG1GLEtBQTdELEVBSXRCO0FBQ0FQLGFBQU8sRUFBRTtBQUNQZSxxQkFBYSxFQUFHLFVBQVNKLEtBQU07QUFEeEI7QUFEVCxLQUpzQixDQUF4Qjs7QUFVQSxRQUFJQyxTQUFTLENBQUNJLElBQWQsRUFBb0I7QUFDbEJsQixTQUFHLENBQUNJLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFzQjtBQUFDYyxrQkFBVSxFQUFDTCxTQUFTLENBQUNJO0FBQXRCLE9BQXRCO0FBQ0QsS0FGRCxNQUVPO0FBQ0xsQixTQUFHLENBQ0ZJLE1BREQsQ0FDUVUsU0FBUyxDQUFDSSxJQUFWLENBQWVFLFVBRHZCO0FBRUQ7QUFDRixHQTdCSCxNQTZCUztBQUNMcEIsT0FBRyxDQUFDcUIsU0FBSixDQUFjLE9BQWQsRUFBdUIsQ0FBQyxNQUFELENBQXZCO0FBQ0FyQixPQUFHLENBQUNJLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtBQUFFQyxhQUFPLEVBQUcsVUFBU1AsR0FBRyxDQUFDRSxNQUFPO0FBQWhDLEtBQXJCO0FBQ0Q7QUFNRixDQXZDSCIsImZpbGUiOiIuL3BhZ2VzL2FwaS9jcmVhdGVmb2xsb3dpbmcudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tICduZXh0J1xuaW1wb3J0IGNvb2tpZSBmcm9tICdjb29raWUnXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIChyZXE6IE5leHRBcGlSZXF1ZXN0LCByZXM6IE5leHRBcGlSZXNwb25zZSkgPT4ge1xuICBpZiAocmVxLm1ldGhvZCA9PT0gJ1BPU1QnKSB7XG5cbiAgICBpZiAoIXJlcS5oZWFkZXJzLmNvb2tpZSkge1xuICAgICAgICByZXMuc3RhdHVzKDQwMykuanNvbih7IG1lc3NhZ2U6ICdOb3QgQXV0aG9yaXplZCcgfSlcblxuICAgICAgICByZXR1cm4gXG4gICAgICB9XG5cbiAgICAgIGNvbnN0e2NvdW50ZXIscHJvZmlsZSxtYWluaWR9PSByZXEuYm9keS5kYXRhcjtcbiAgICBcbiAgICAgIGNvbnN0ICB0b2tlbkNvb2tpZSAgPSBjb29raWUucGFyc2UocmVxLmhlYWRlcnMuY29va2llKSB8fCBudWxsO1xuICAgICAgY29uc3QgdG9rZW4gPXRva2VuQ29va2llWyd0b2tlbiddXG5cbiAgICAgIGNvbnN0IHN0cmFwaVJlcyA9IGF3YWl0IGF4aW9zLnBvc3QoYCR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQkFTRV9VUkx9L2ZvbGxvd2luZ3NgLCB7XG4gICAgICAgIGNvdW50ZXIsXG4gICAgICAgIHByb2ZpbGUsXG4gICAgICAgIG1haW5pZFxuICAgICAgfSx7XG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dG9rZW59YCxcbiAgICAgICAgfSxcbiAgICAgIH0pXG5cbiAgICAgIGlmIChzdHJhcGlSZXMuZGF0YSkge1xuICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbigge2ZvbGxvd2luZ3M6c3RyYXBpUmVzLmRhdGF9IClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc1xuICAgICAgICAuc3RhdHVzKHN0cmFwaVJlcy5kYXRhLnN0YXR1c0NvZGUpXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlcy5zZXRIZWFkZXIoJ0FsbG93JywgWydQT1NUJ10pXG4gICAgICByZXMuc3RhdHVzKDQwNSkuanNvbih7IG1lc3NhZ2U6IGBNZXRob2QgJHtyZXEubWV0aG9kfSBub3QgYWxsb3dlZGAgfSlcbiAgICB9XG4gIFxuXG5cblxuXG4gIH1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/api/createfollowing.ts\n");

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
var __webpack_exports__ = (__webpack_exec__("./pages/api/createfollowing.ts"));
module.exports = __webpack_exports__;

})();