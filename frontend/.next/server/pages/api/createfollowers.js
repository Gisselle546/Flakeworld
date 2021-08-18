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
exports.id = "pages/api/createfollowers";
exports.ids = ["pages/api/createfollowers"];
exports.modules = {

/***/ "./pages/api/createfollowers.ts":
/*!**************************************!*\
  !*** ./pages/api/createfollowers.ts ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cookie */ \"cookie\");\n/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cookie__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (async (req, res) => {\n  if (req.method === 'POST') {\n    if (!req.headers.cookie) {\n      res.status(403).json({\n        message: 'Not Authorized'\n      });\n      return;\n    }\n\n    const {\n      counter,\n      profile,\n      mainid\n    } = req.body.datar;\n    const tokenCookie = cookie__WEBPACK_IMPORTED_MODULE_0___default().parse(req.headers.cookie) || null;\n    const token = tokenCookie['token'];\n    const strapiRes = await axios__WEBPACK_IMPORTED_MODULE_1___default().post(`${\"http://localhost:1337\"}/followers`, {\n      counter,\n      profile,\n      mainid\n    }, {\n      headers: {\n        Authorization: `Bearer ${token}`\n      }\n    });\n\n    if (strapiRes.data) {\n      res.status(200).json({\n        followers: strapiRes.data\n      });\n    } else {\n      res.status(strapiRes.data.statusCode);\n    }\n  } else {\n    res.setHeader('Allow', ['POST']);\n    res.status(405).json({\n      message: `Method ${req.method} not allowed`\n    });\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL3BhZ2VzL2FwaS9jcmVhdGVmb2xsb3dlcnMudHM/YjdhMSJdLCJuYW1lcyI6WyJyZXEiLCJyZXMiLCJtZXRob2QiLCJoZWFkZXJzIiwiY29va2llIiwic3RhdHVzIiwianNvbiIsIm1lc3NhZ2UiLCJjb3VudGVyIiwicHJvZmlsZSIsIm1haW5pZCIsImJvZHkiLCJkYXRhciIsInRva2VuQ29va2llIiwidG9rZW4iLCJzdHJhcGlSZXMiLCJheGlvcyIsInByb2Nlc3MiLCJBdXRob3JpemF0aW9uIiwiZGF0YSIsImZvbGxvd2VycyIsInN0YXR1c0NvZGUiLCJzZXRIZWFkZXIiXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0E7QUFDQTtBQUVBLCtEQUFlLE9BQU9BLEdBQVAsRUFBNEJDLEdBQTVCLEtBQXFEO0FBQ2xFLE1BQUlELEdBQUcsQ0FBQ0UsTUFBSixLQUFlLE1BQW5CLEVBQTJCO0FBRXpCLFFBQUksQ0FBQ0YsR0FBRyxDQUFDRyxPQUFKLENBQVlDLE1BQWpCLEVBQXlCO0FBQ3JCSCxTQUFHLENBQUNJLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtBQUFFQyxlQUFPLEVBQUU7QUFBWCxPQUFyQjtBQUVBO0FBQ0Q7O0FBRUQsVUFBSztBQUFDQyxhQUFEO0FBQVNDLGFBQVQ7QUFBaUJDO0FBQWpCLFFBQTBCVixHQUFHLENBQUNXLElBQUosQ0FBU0MsS0FBeEM7QUFFQSxVQUFPQyxXQUFXLEdBQUlULG1EQUFBLENBQWFKLEdBQUcsQ0FBQ0csT0FBSixDQUFZQyxNQUF6QixLQUFvQyxJQUExRDtBQUNBLFVBQU1VLEtBQUssR0FBRUQsV0FBVyxDQUFDLE9BQUQsQ0FBeEI7QUFFQSxVQUFNRSxTQUFTLEdBQUcsTUFBTUMsaURBQUEsQ0FBWSxHQUFFQyx1QkFBaUMsWUFBL0MsRUFBNEQ7QUFDbEZULGFBRGtGO0FBRWxGQyxhQUZrRjtBQUdsRkM7QUFIa0YsS0FBNUQsRUFJdEI7QUFDQVAsYUFBTyxFQUFFO0FBQ1BlLHFCQUFhLEVBQUcsVUFBU0osS0FBTTtBQUR4QjtBQURULEtBSnNCLENBQXhCOztBQVVBLFFBQUlDLFNBQVMsQ0FBQ0ksSUFBZCxFQUFvQjtBQUNsQmxCLFNBQUcsQ0FBQ0ksTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXNCO0FBQUNjLGlCQUFTLEVBQUNMLFNBQVMsQ0FBQ0k7QUFBckIsT0FBdEI7QUFDRCxLQUZELE1BRU87QUFDTGxCLFNBQUcsQ0FDRkksTUFERCxDQUNRVSxTQUFTLENBQUNJLElBQVYsQ0FBZUUsVUFEdkI7QUFFRDtBQUNGLEdBN0JILE1BNkJTO0FBQ0xwQixPQUFHLENBQUNxQixTQUFKLENBQWMsT0FBZCxFQUF1QixDQUFDLE1BQUQsQ0FBdkI7QUFDQXJCLE9BQUcsQ0FBQ0ksTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQUVDLGFBQU8sRUFBRyxVQUFTUCxHQUFHLENBQUNFLE1BQU87QUFBaEMsS0FBckI7QUFDRDtBQU1GLENBdkNIIiwiZmlsZSI6Ii4vcGFnZXMvYXBpL2NyZWF0ZWZvbGxvd2Vycy50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gJ25leHQnXG5pbXBvcnQgY29va2llIGZyb20gJ2Nvb2tpZSdcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgKHJlcTogTmV4dEFwaVJlcXVlc3QsIHJlczogTmV4dEFwaVJlc3BvbnNlKSA9PiB7XG4gIGlmIChyZXEubWV0aG9kID09PSAnUE9TVCcpIHtcblxuICAgIGlmICghcmVxLmhlYWRlcnMuY29va2llKSB7XG4gICAgICAgIHJlcy5zdGF0dXMoNDAzKS5qc29uKHsgbWVzc2FnZTogJ05vdCBBdXRob3JpemVkJyB9KVxuXG4gICAgICAgIHJldHVybiBcbiAgICAgIH1cblxuICAgICAgY29uc3R7Y291bnRlcixwcm9maWxlLG1haW5pZH09IHJlcS5ib2R5LmRhdGFyO1xuICAgIFxuICAgICAgY29uc3QgIHRva2VuQ29va2llICA9IGNvb2tpZS5wYXJzZShyZXEuaGVhZGVycy5jb29raWUpIHx8IG51bGw7XG4gICAgICBjb25zdCB0b2tlbiA9dG9rZW5Db29raWVbJ3Rva2VuJ11cblxuICAgICAgY29uc3Qgc3RyYXBpUmVzID0gYXdhaXQgYXhpb3MucG9zdChgJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19CQVNFX1VSTH0vZm9sbG93ZXJzYCwge1xuICAgICAgICBjb3VudGVyLFxuICAgICAgICBwcm9maWxlLFxuICAgICAgICBtYWluaWRcbiAgICAgIH0se1xuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke3Rva2VufWAsXG4gICAgICAgIH0sXG4gICAgICB9KVxuXG4gICAgICBpZiAoc3RyYXBpUmVzLmRhdGEpIHtcbiAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oIHtmb2xsb3dlcnM6c3RyYXBpUmVzLmRhdGF9IClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc1xuICAgICAgICAuc3RhdHVzKHN0cmFwaVJlcy5kYXRhLnN0YXR1c0NvZGUpXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlcy5zZXRIZWFkZXIoJ0FsbG93JywgWydQT1NUJ10pXG4gICAgICByZXMuc3RhdHVzKDQwNSkuanNvbih7IG1lc3NhZ2U6IGBNZXRob2QgJHtyZXEubWV0aG9kfSBub3QgYWxsb3dlZGAgfSlcbiAgICB9XG4gIFxuXG5cblxuXG4gIH1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/api/createfollowers.ts\n");

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
var __webpack_exports__ = (__webpack_exec__("./pages/api/createfollowers.ts"));
module.exports = __webpack_exports__;

})();