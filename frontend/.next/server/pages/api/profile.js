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
exports.id = "pages/api/profile";
exports.ids = ["pages/api/profile"];
exports.modules = {

/***/ "./pages/api/profile.ts":
/*!******************************!*\
  !*** ./pages/api/profile.ts ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cookie */ \"cookie\");\n/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cookie__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (async (req, res, next) => {\n  if (req.method === 'GET') {\n    if (!req.headers.cookie) {\n      res.status(403).json({\n        message: 'Not Authorized'\n      });\n      return;\n    }\n\n    const tokenCookie = cookie__WEBPACK_IMPORTED_MODULE_0___default().parse(req.headers.cookie) || null;\n    const token = tokenCookie['token'];\n    const strapiRes = await axios__WEBPACK_IMPORTED_MODULE_1___default().get(`${\"http://localhost:1337\"}/profiles/me`, {\n      headers: {\n        Authorization: `Bearer ${token}`\n      }\n    });\n    console.log(strapiRes.data);\n\n    if (strapiRes.data) {\n      res.status(200).json({\n        profile: strapiRes.data\n      });\n    } else {\n      next();\n    }\n  } else {\n    res.setHeader('Allow', ['GET']);\n    res.status(405).json({\n      message: `Method ${req.method} not allowed`\n    });\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL3BhZ2VzL2FwaS9wcm9maWxlLnRzPzczODIiXSwibmFtZXMiOlsicmVxIiwicmVzIiwibmV4dCIsIm1ldGhvZCIsImhlYWRlcnMiLCJjb29raWUiLCJzdGF0dXMiLCJqc29uIiwibWVzc2FnZSIsInRva2VuQ29va2llIiwidG9rZW4iLCJzdHJhcGlSZXMiLCJheGlvcyIsInByb2Nlc3MiLCJBdXRob3JpemF0aW9uIiwiY29uc29sZSIsImxvZyIsImRhdGEiLCJwcm9maWxlIiwic2V0SGVhZGVyIl0sIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFHQSwrREFBZSxPQUFPQSxHQUFQLEVBQTRCQyxHQUE1QixFQUFrREMsSUFBbEQsS0FBK0Q7QUFDMUUsTUFBSUYsR0FBRyxDQUFDRyxNQUFKLEtBQWUsS0FBbkIsRUFBMEI7QUFFdEIsUUFBSSxDQUFDSCxHQUFHLENBQUNJLE9BQUosQ0FBWUMsTUFBakIsRUFBeUI7QUFDckJKLFNBQUcsQ0FBQ0ssTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQUVDLGVBQU8sRUFBRTtBQUFYLE9BQXJCO0FBRUE7QUFDRDs7QUFJRCxVQUFPQyxXQUFXLEdBQUlKLG1EQUFBLENBQWFMLEdBQUcsQ0FBQ0ksT0FBSixDQUFZQyxNQUF6QixLQUFvQyxJQUExRDtBQUNBLFVBQU1LLEtBQUssR0FBRUQsV0FBVyxDQUFDLE9BQUQsQ0FBeEI7QUFHRixVQUFNRSxTQUFTLEdBQUcsTUFBTUMsZ0RBQUEsQ0FBVyxHQUFFQyx1QkFBaUMsY0FBOUMsRUFBNkQ7QUFFakZULGFBQU8sRUFBRTtBQUNQVSxxQkFBYSxFQUFHLFVBQVNKLEtBQU07QUFEeEI7QUFGd0UsS0FBN0QsQ0FBeEI7QUFPRUssV0FBTyxDQUFDQyxHQUFSLENBQVlMLFNBQVMsQ0FBQ00sSUFBdEI7O0FBRUEsUUFBSU4sU0FBUyxDQUFDTSxJQUFkLEVBQW9CO0FBQ2xCaEIsU0FBRyxDQUFDSyxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFBRVcsZUFBTyxFQUFFUCxTQUFTLENBQUNNO0FBQXJCLE9BQXJCO0FBQ0QsS0FGRCxNQUVPO0FBQ0xmLFVBQUk7QUFDTDtBQUNGLEdBNUJMLE1BNEJXO0FBQ0xELE9BQUcsQ0FBQ2tCLFNBQUosQ0FBYyxPQUFkLEVBQXVCLENBQUMsS0FBRCxDQUF2QjtBQUNBbEIsT0FBRyxDQUFDSyxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFBRUMsYUFBTyxFQUFHLFVBQVNSLEdBQUcsQ0FBQ0csTUFBTztBQUFoQyxLQUFyQjtBQUNEO0FBQ0YsQ0FqQ1AiLCJmaWxlIjoiLi9wYWdlcy9hcGkvcHJvZmlsZS50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjb29raWUgZnJvbSAnY29va2llJ1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IHR5cGUgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSAnbmV4dCdcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgKHJlcTogTmV4dEFwaVJlcXVlc3QsIHJlczogTmV4dEFwaVJlc3BvbnNlLCBuZXh0OmFueSkgPT4ge1xuICAgIGlmIChyZXEubWV0aG9kID09PSAnR0VUJykge1xuICAgICAgICBcbiAgICAgICAgaWYgKCFyZXEuaGVhZGVycy5jb29raWUpIHtcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoNDAzKS5qc29uKHsgbWVzc2FnZTogJ05vdCBBdXRob3JpemVkJyB9KVxuICAgIFxuICAgICAgICAgICAgcmV0dXJuIFxuICAgICAgICAgIH1cblxuICAgICAgICAgIFxuICAgICAgXG4gICAgICAgICAgY29uc3QgIHRva2VuQ29va2llICA9IGNvb2tpZS5wYXJzZShyZXEuaGVhZGVycy5jb29raWUpIHx8IG51bGw7XG4gICAgICAgICAgY29uc3QgdG9rZW4gPXRva2VuQ29va2llWyd0b2tlbiddXG4gICAgICAgICAgXG4gICAgICAgIFxuICAgICAgICBjb25zdCBzdHJhcGlSZXMgPSBhd2FpdCBheGlvcy5nZXQoYCR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQkFTRV9VUkx9L3Byb2ZpbGVzL21lYCwge1xuICAgICAgIFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dG9rZW59YCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSlcbiAgICAgIFxuICAgICAgICAgIGNvbnNvbGUubG9nKHN0cmFwaVJlcy5kYXRhKVxuICAgICAgXG4gICAgICAgICAgaWYgKHN0cmFwaVJlcy5kYXRhKSB7XG4gICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7IHByb2ZpbGU6IHN0cmFwaVJlcy5kYXRhIH0pXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG5leHQoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVzLnNldEhlYWRlcignQWxsb3cnLCBbJ0dFVCddKVxuICAgICAgICAgIHJlcy5zdGF0dXMoNDA1KS5qc29uKHsgbWVzc2FnZTogYE1ldGhvZCAke3JlcS5tZXRob2R9IG5vdCBhbGxvd2VkYCB9KVxuICAgICAgICB9XG4gICAgICB9Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/api/profile.ts\n");

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
var __webpack_exports__ = (__webpack_exec__("./pages/api/profile.ts"));
module.exports = __webpack_exports__;

})();