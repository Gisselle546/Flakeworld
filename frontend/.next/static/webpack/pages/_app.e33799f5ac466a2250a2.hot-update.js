/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./Components/FollowList/FollowList.tsx":
/*!**********************************************!*\
  !*** ./Components/FollowList/FollowList.tsx ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_gise_Documents_Practice_Apps_lighters_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ \"./node_modules/next/node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_gise_Documents_Practice_Apps_lighters_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_gise_Documents_Practice_Apps_lighters_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Users_gise_Documents_Practice_Apps_lighters_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/styles */ \"./node_modules/@material-ui/core/esm/styles/index.js\");\n/* harmony import */ var _utils_fetchQuery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/fetchQuery */ \"./utils/fetchQuery.ts\");\n/* harmony import */ var _context_Auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../context/Auth */ \"./context/Auth.tsx\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nvar _jsxFileName = \"/Users/gise/Documents/Practice Apps/lighters/frontend/Components/FollowList/FollowList.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\nvar useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__.makeStyles)(function (theme) {\n  return (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__.createStyles)({\n    followlistcontainer: {\n      backgroundColor: \"#ededed\",\n      height: \"30vh\",\n      width: \"20vw\",\n      marginLeft: \"0.6rem\",\n      marginTop: \"1rem\",\n      borderRadius: \"30px\"\n    },\n    flakenewsheader: {\n      display: \"flex\",\n      justifyContent: \"flex-start\",\n      alignItems: \"center\",\n      borderBottom: \"2px solid #bdbdbd\",\n      marginLeft: \"1rem\"\n    },\n    flakenewsheaderfont: {\n      fontFamily: \"Roboto, sans-serif\",\n      fontWeight: 900,\n      fontSize: \"1.2rem\"\n    }\n  });\n});\n\nvar FollowList = function FollowList() {\n  _s();\n\n  var classes = useStyles();\n\n  var _useStore = (0,_context_Auth__WEBPACK_IMPORTED_MODULE_5__.useStore)(),\n      profile = _useStore.profile;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]),\n      list = _useState[0],\n      setList = _useState[1];\n\n  var getAllprofiles = /*#__PURE__*/function () {\n    var _ref = (0,_Users_gise_Documents_Practice_Apps_lighters_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/_Users_gise_Documents_Practice_Apps_lighters_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {\n      var allprofiles;\n      return _Users_gise_Documents_Practice_Apps_lighters_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.next = 2;\n              return (0,_utils_fetchQuery__WEBPACK_IMPORTED_MODULE_4__.fetchQuery)('profiles');\n\n            case 2:\n              allprofiles = _context.sent;\n              setList(allprofiles);\n\n            case 4:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function getAllprofiles() {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {\n    getAllprofiles();\n  }, []);\n  var data = list === null || list === void 0 ? void 0 : list.filter(function (data) {\n    return data.id !== profile.id;\n  });\n  console.log(data);\n  var design;\n  design = data.map(function (datacue) {\n    var _datacue$followers;\n\n    return design = (_datacue$followers = datacue.followers) === null || _datacue$followers === void 0 ? void 0 : _datacue$followers.includes(profile.id);\n  });\n  console.log(design);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    className: classes.followlistcontainer,\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: classes.flakenewsheader,\n      children: [\" \", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        className: classes.flakenewsheaderfont,\n        children: \"Who to Follow\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 74,\n        columnNumber: 55\n      }, _this), \"   \"]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 74,\n      columnNumber: 13\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 73,\n    columnNumber: 9\n  }, _this);\n};\n\n_s(FollowList, \"EB923+BEFVAlOumGQZF2QHGZM+A=\", false, function () {\n  return [useStyles, _context_Auth__WEBPACK_IMPORTED_MODULE_5__.useStore];\n});\n\n_c = FollowList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (FollowList);\n\nvar _c;\n\n$RefreshReg$(_c, \"FollowList\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vQ29tcG9uZW50cy9Gb2xsb3dMaXN0L0ZvbGxvd0xpc3QudHN4P2VmYTciXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwiY3JlYXRlU3R5bGVzIiwiZm9sbG93bGlzdGNvbnRhaW5lciIsImJhY2tncm91bmRDb2xvciIsImhlaWdodCIsIndpZHRoIiwibWFyZ2luTGVmdCIsIm1hcmdpblRvcCIsImJvcmRlclJhZGl1cyIsImZsYWtlbmV3c2hlYWRlciIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsImFsaWduSXRlbXMiLCJib3JkZXJCb3R0b20iLCJmbGFrZW5ld3NoZWFkZXJmb250IiwiZm9udEZhbWlseSIsImZvbnRXZWlnaHQiLCJmb250U2l6ZSIsIkZvbGxvd0xpc3QiLCJjbGFzc2VzIiwidXNlU3RvcmUiLCJwcm9maWxlIiwidXNlU3RhdGUiLCJsaXN0Iiwic2V0TGlzdCIsImdldEFsbHByb2ZpbGVzIiwiZmV0Y2hRdWVyeSIsImFsbHByb2ZpbGVzIiwidXNlRWZmZWN0IiwiZGF0YSIsImZpbHRlciIsImlkIiwiY29uc29sZSIsImxvZyIsImRlc2lnbiIsIm1hcCIsImRhdGFjdWUiLCJmb2xsb3dlcnMiLCJpbmNsdWRlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUdBLElBQU1BLFNBQVMsR0FBR0Msb0VBQVUsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsU0FDM0JDLHNFQUFZLENBQUM7QUFDWEMsdUJBQW1CLEVBQUU7QUFDaEJDLHFCQUFlLEVBQUMsU0FEQTtBQUVoQkMsWUFBTSxFQUFDLE1BRlM7QUFHaEJDLFdBQUssRUFBQyxNQUhVO0FBSWhCQyxnQkFBVSxFQUFDLFFBSks7QUFLaEJDLGVBQVMsRUFBQyxNQUxNO0FBTWhCQyxrQkFBWSxFQUFDO0FBTkcsS0FEVjtBQVNYQyxtQkFBZSxFQUFDO0FBQ1pDLGFBQU8sRUFBQyxNQURJO0FBRVpDLG9CQUFjLEVBQUMsWUFGSDtBQUdaQyxnQkFBVSxFQUFDLFFBSEM7QUFJWkMsa0JBQVksRUFBQyxtQkFKRDtBQUtaUCxnQkFBVSxFQUFDO0FBTEMsS0FUTDtBQW9CWFEsdUJBQW1CLEVBQUM7QUFDaEJDLGdCQUFVLEVBQUMsb0JBREs7QUFFaEJDLGdCQUFVLEVBQUMsR0FGSztBQUdoQkMsY0FBUSxFQUFDO0FBSE87QUFwQlQsR0FBRCxDQURlO0FBQUEsQ0FBRCxDQUE1Qjs7QUFzQ0EsSUFBTUMsVUFBVSxHQUFHLFNBQWJBLFVBQWEsR0FBTTtBQUFBOztBQUVyQixNQUFNQyxPQUFPLEdBQUdyQixTQUFTLEVBQXpCOztBQUZxQixrQkFHSHNCLHVEQUFRLEVBSEw7QUFBQSxNQUdkQyxPQUhjLGFBR2RBLE9BSGM7O0FBQUEsa0JBSUVDLCtDQUFRLENBQUMsRUFBRCxDQUpWO0FBQUEsTUFJZEMsSUFKYztBQUFBLE1BSVRDLE9BSlM7O0FBTXJCLE1BQU1DLGNBQWM7QUFBQSxpV0FBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUNPQyw2REFBVSxDQUFDLFVBQUQsQ0FEakI7O0FBQUE7QUFDYkMseUJBRGE7QUFFbkJILHFCQUFPLENBQUNHLFdBQUQsQ0FBUDs7QUFGbUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSDs7QUFBQSxvQkFBZEYsY0FBYztBQUFBO0FBQUE7QUFBQSxLQUFwQjs7QUFLQUcsa0RBQVMsQ0FBQyxZQUFNO0FBQ1pILGtCQUFjO0FBQ2pCLEdBRlEsRUFFTixFQUZNLENBQVQ7QUFJQSxNQUFNSSxJQUFJLEdBQUdOLElBQUgsYUFBR0EsSUFBSCx1QkFBR0EsSUFBSSxDQUFFTyxNQUFOLENBQWEsVUFBQ0QsSUFBRDtBQUFBLFdBQVlBLElBQUksQ0FBQ0UsRUFBTCxLQUFVVixPQUFPLENBQUNVLEVBQTlCO0FBQUEsR0FBYixDQUFiO0FBRUZDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZSixJQUFaO0FBRUEsTUFBSUssTUFBSjtBQUVFQSxRQUFNLEdBQUdMLElBQUksQ0FBQ00sR0FBTCxDQUFTLFVBQUNDLE9BQUQsRUFBZTtBQUFBOztBQUM5QixXQUFPRixNQUFNLHlCQUFDRSxPQUFPLENBQUNDLFNBQVQsdURBQUMsbUJBQW1CQyxRQUFuQixDQUE0QmpCLE9BQU8sQ0FBQ1UsRUFBcEMsQ0FBZDtBQUNGLEdBRlEsQ0FBVDtBQUlBQyxTQUFPLENBQUNDLEdBQVIsQ0FBWUMsTUFBWjtBQUVBLHNCQUNJO0FBQUssYUFBUyxFQUFFZixPQUFPLENBQUNqQixtQkFBeEI7QUFBQSwyQkFDSTtBQUFLLGVBQVMsRUFBRWlCLE9BQU8sQ0FBQ1YsZUFBeEI7QUFBQSxtQ0FBMEM7QUFBRyxpQkFBUyxFQUFFVSxPQUFPLENBQUNMLG1CQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUExQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUFNSCxDQWpDRDs7R0FBTUksVTtVQUVjcEIsUyxFQUNFc0IsbUQ7OztLQUhoQkYsVTtBQW1DTiwrREFBZUEsVUFBZiIsImZpbGUiOiIuL0NvbXBvbmVudHMvRm9sbG93TGlzdC9Gb2xsb3dMaXN0LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBUaGVtZSwgY3JlYXRlU3R5bGVzLCBtYWtlU3R5bGVzfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuaW1wb3J0IHsgZmV0Y2hRdWVyeSB9IGZyb20gJy4uLy4uL3V0aWxzL2ZldGNoUXVlcnknO1xuaW1wb3J0IHsgdXNlU3RvcmUgfSBmcm9tICcuLi8uLi9jb250ZXh0L0F1dGgnO1xuaW1wb3J0IHByb2ZpbGUgZnJvbSAnLi4vLi4vcGFnZXMvYXBpL3Byb2ZpbGUnO1xuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZTogVGhlbWUpID0+XG4gIGNyZWF0ZVN0eWxlcyh7XG4gICAgZm9sbG93bGlzdGNvbnRhaW5lcjoge1xuICAgICAgICAgYmFja2dyb3VuZENvbG9yOlwiI2VkZWRlZFwiLFxuICAgICAgICAgaGVpZ2h0OlwiMzB2aFwiLFxuICAgICAgICAgd2lkdGg6XCIyMHZ3XCIsXG4gICAgICAgICBtYXJnaW5MZWZ0OlwiMC42cmVtXCIsXG4gICAgICAgICBtYXJnaW5Ub3A6XCIxcmVtXCIsXG4gICAgICAgICBib3JkZXJSYWRpdXM6XCIzMHB4XCJcbiAgICB9LFxuICAgIGZsYWtlbmV3c2hlYWRlcjp7XG4gICAgICAgIGRpc3BsYXk6XCJmbGV4XCIsXG4gICAgICAgIGp1c3RpZnlDb250ZW50OlwiZmxleC1zdGFydFwiLFxuICAgICAgICBhbGlnbkl0ZW1zOlwiY2VudGVyXCIsXG4gICAgICAgIGJvcmRlckJvdHRvbTpcIjJweCBzb2xpZCAjYmRiZGJkXCIsXG4gICAgICAgIG1hcmdpbkxlZnQ6XCIxcmVtXCJcbiAgICAgICBcbiAgICAgICAgXG4gICAgICAgXG4gICAgfSxcblxuICAgIGZsYWtlbmV3c2hlYWRlcmZvbnQ6e1xuICAgICAgICBmb250RmFtaWx5OlwiUm9ib3RvLCBzYW5zLXNlcmlmXCIsXG4gICAgICAgIGZvbnRXZWlnaHQ6OTAwLFxuICAgICAgICBmb250U2l6ZTpcIjEuMnJlbVwiXG4gICAgICAgIFxuICAgICAgIFxuICAgIH1cblxuICAgXG4gICAgXG5cbn0pLFxuKTtcblxuXG5cblxuY29uc3QgRm9sbG93TGlzdCA9ICgpID0+IHtcblxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcbiAgICBjb25zdCB7cHJvZmlsZX0gPSB1c2VTdG9yZSgpO1xuICAgIGNvbnN0IFtsaXN0LHNldExpc3RdID0gdXNlU3RhdGUoW10pXG5cbiAgICBjb25zdCBnZXRBbGxwcm9maWxlcyA9IGFzeW5jKCk9PntcbiAgICAgICAgY29uc3QgYWxscHJvZmlsZXMgPSBhd2FpdCBmZXRjaFF1ZXJ5KCdwcm9maWxlcycpO1xuICAgICAgICBzZXRMaXN0KGFsbHByb2ZpbGVzKTtcbiAgICB9XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBnZXRBbGxwcm9maWxlcygpO1xuICAgIH0sIFtdKVxuXG4gICAgY29uc3QgZGF0YSA9IGxpc3Q/LmZpbHRlcigoZGF0YTphbnkpPT5kYXRhLmlkIT09cHJvZmlsZS5pZCk7XG5cbiAgY29uc29sZS5sb2coZGF0YSk7XG5cbiAgbGV0IGRlc2lnbjtcblxuICAgIGRlc2lnbiA9IGRhdGEubWFwKChkYXRhY3VlOmFueSk9PntcbiAgICAgICByZXR1cm4gZGVzaWduPWRhdGFjdWUuZm9sbG93ZXJzPy5pbmNsdWRlcyhwcm9maWxlLmlkKVxuICAgIH0pXG5cbiAgICBjb25zb2xlLmxvZyhkZXNpZ24pXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5mb2xsb3dsaXN0Y29udGFpbmVyfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmZsYWtlbmV3c2hlYWRlcn0+IDxwIGNsYXNzTmFtZT17Y2xhc3Nlcy5mbGFrZW5ld3NoZWFkZXJmb250fT5XaG8gdG8gRm9sbG93PC9wPiAgIDwvZGl2PlxuICAgICAgICAgICAgXG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgRm9sbG93TGlzdDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./Components/FollowList/FollowList.tsx\n");

/***/ })

});