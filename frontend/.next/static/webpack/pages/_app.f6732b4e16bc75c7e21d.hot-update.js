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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_gise_Documents_Practice_Apps_lighters_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ \"./node_modules/next/node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_gise_Documents_Practice_Apps_lighters_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_gise_Documents_Practice_Apps_lighters_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Users_gise_Documents_Practice_Apps_lighters_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/styles */ \"./node_modules/@material-ui/core/esm/styles/index.js\");\n/* harmony import */ var _utils_fetchQuery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/fetchQuery */ \"./utils/fetchQuery.ts\");\n/* harmony import */ var _context_Auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../context/Auth */ \"./context/Auth.tsx\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_6__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nvar _jsxFileName = \"/Users/gise/Documents/Practice Apps/lighters/frontend/Components/FollowList/FollowList.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\nvar useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__.makeStyles)(function (theme) {\n  return (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__.createStyles)({\n    followlistcontainer: {\n      backgroundColor: \"#ededed\",\n      height: \"30vh\",\n      width: \"20vw\",\n      marginLeft: \"0.6rem\",\n      marginTop: \"1rem\",\n      borderRadius: \"30px\"\n    },\n    flakenewsheader: {\n      display: \"flex\",\n      justifyContent: \"flex-start\",\n      alignItems: \"center\",\n      borderBottom: \"2px solid #bdbdbd\",\n      marginLeft: \"1rem\"\n    },\n    flakenewsheaderfont: {\n      fontFamily: \"Roboto, sans-serif\",\n      fontWeight: 900,\n      fontSize: \"1.2rem\"\n    }\n  });\n});\n\nvar FollowList = function FollowList() {\n  _s();\n\n  var classes = useStyles();\n\n  var _useStore = (0,_context_Auth__WEBPACK_IMPORTED_MODULE_5__.useStore)(),\n      profile = _useStore.profile;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]),\n      profiles = _useState[0],\n      setProfiles = _useState[1];\n\n  var allusers = /*#__PURE__*/function () {\n    var _ref = (0,_Users_gise_Documents_Practice_Apps_lighters_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/_Users_gise_Documents_Practice_Apps_lighters_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {\n      var allusers;\n      return _Users_gise_Documents_Practice_Apps_lighters_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.next = 2;\n              return (0,_utils_fetchQuery__WEBPACK_IMPORTED_MODULE_4__.fetchQuery)('profiles');\n\n            case 2:\n              allusers = _context.sent;\n              setProfiles(allusers);\n\n            case 4:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function allusers() {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {\n    allusers();\n  }, []);\n  console.log(profiles);\n  console.log(profile);\n  var data = profiles.filter(function (code) {\n    return code.id !== profile.id;\n  });\n  var result = data.filter(function (code) {\n    var _profile$followings;\n\n    return (_profile$followings = profile.followings) === null || _profile$followings === void 0 ? void 0 : _profile$followings.every(function (balanceCode) {\n      return balanceCode.profile !== code.id;\n    });\n  });\n  console.log(result);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    className: classes.followlistcontainer,\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: classes.flakenewsheader,\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        className: classes.flakenewsheaderfont,\n        children: \"Who to Follow\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 80,\n        columnNumber: 17\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 79,\n      columnNumber: 13\n    }, _this), result.length > 0 ? result.map(function (results) {\n      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_6___default()), {\n          src: results.avatar,\n          alt: \"Picture of the author\",\n          width: 65,\n          height: 65\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 87,\n          columnNumber: 37\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 86,\n        columnNumber: 29\n      }, _this);\n    }) : null]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 78,\n    columnNumber: 9\n  }, _this);\n};\n\n_s(FollowList, \"PsouZ07Ud2990/bCsz+vcwULBbM=\", false, function () {\n  return [useStyles, _context_Auth__WEBPACK_IMPORTED_MODULE_5__.useStore];\n});\n\n_c = FollowList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (FollowList);\n\nvar _c;\n\n$RefreshReg$(_c, \"FollowList\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vQ29tcG9uZW50cy9Gb2xsb3dMaXN0L0ZvbGxvd0xpc3QudHN4P2VmYTciXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwiY3JlYXRlU3R5bGVzIiwiZm9sbG93bGlzdGNvbnRhaW5lciIsImJhY2tncm91bmRDb2xvciIsImhlaWdodCIsIndpZHRoIiwibWFyZ2luTGVmdCIsIm1hcmdpblRvcCIsImJvcmRlclJhZGl1cyIsImZsYWtlbmV3c2hlYWRlciIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsImFsaWduSXRlbXMiLCJib3JkZXJCb3R0b20iLCJmbGFrZW5ld3NoZWFkZXJmb250IiwiZm9udEZhbWlseSIsImZvbnRXZWlnaHQiLCJmb250U2l6ZSIsIkZvbGxvd0xpc3QiLCJjbGFzc2VzIiwidXNlU3RvcmUiLCJwcm9maWxlIiwidXNlU3RhdGUiLCJwcm9maWxlcyIsInNldFByb2ZpbGVzIiwiYWxsdXNlcnMiLCJmZXRjaFF1ZXJ5IiwidXNlRWZmZWN0IiwiY29uc29sZSIsImxvZyIsImRhdGEiLCJmaWx0ZXIiLCJjb2RlIiwiaWQiLCJyZXN1bHQiLCJmb2xsb3dpbmdzIiwiZXZlcnkiLCJiYWxhbmNlQ29kZSIsImxlbmd0aCIsIm1hcCIsInJlc3VsdHMiLCJhdmF0YXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0EsSUFBTUEsU0FBUyxHQUFHQyxvRUFBVSxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxTQUMzQkMsc0VBQVksQ0FBQztBQUNYQyx1QkFBbUIsRUFBRTtBQUNoQkMscUJBQWUsRUFBQyxTQURBO0FBRWhCQyxZQUFNLEVBQUMsTUFGUztBQUdoQkMsV0FBSyxFQUFDLE1BSFU7QUFJaEJDLGdCQUFVLEVBQUMsUUFKSztBQUtoQkMsZUFBUyxFQUFDLE1BTE07QUFNaEJDLGtCQUFZLEVBQUM7QUFORyxLQURWO0FBU1hDLG1CQUFlLEVBQUM7QUFDWkMsYUFBTyxFQUFDLE1BREk7QUFFWkMsb0JBQWMsRUFBQyxZQUZIO0FBR1pDLGdCQUFVLEVBQUMsUUFIQztBQUlaQyxrQkFBWSxFQUFDLG1CQUpEO0FBS1pQLGdCQUFVLEVBQUM7QUFMQyxLQVRMO0FBb0JYUSx1QkFBbUIsRUFBQztBQUNoQkMsZ0JBQVUsRUFBQyxvQkFESztBQUVoQkMsZ0JBQVUsRUFBQyxHQUZLO0FBR2hCQyxjQUFRLEVBQUM7QUFITztBQXBCVCxHQUFELENBRGU7QUFBQSxDQUFELENBQTVCOztBQXNDQSxJQUFNQyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxHQUFNO0FBQUE7O0FBRXJCLE1BQU1DLE9BQU8sR0FBR3JCLFNBQVMsRUFBekI7O0FBRnFCLGtCQUdIc0IsdURBQVEsRUFITDtBQUFBLE1BR2RDLE9BSGMsYUFHZEEsT0FIYzs7QUFBQSxrQkFJU0MsK0NBQVEsQ0FBQyxFQUFELENBSmpCO0FBQUEsTUFJZkMsUUFKZTtBQUFBLE1BSU5DLFdBSk07O0FBUXJCLE1BQU1DLFFBQVE7QUFBQSxpV0FBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUNVQyw2REFBVSxDQUFDLFVBQUQsQ0FEcEI7O0FBQUE7QUFDUEQsc0JBRE87QUFFYkQseUJBQVcsQ0FBQ0MsUUFBRCxDQUFYOztBQUZhO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUg7O0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBZDs7QUFNQUUsa0RBQVMsQ0FBQyxZQUFNO0FBRVpGLFlBQVE7QUFDWCxHQUhRLEVBR04sRUFITSxDQUFUO0FBTUpHLFNBQU8sQ0FBQ0MsR0FBUixDQUFZTixRQUFaO0FBQ0FLLFNBQU8sQ0FBQ0MsR0FBUixDQUFZUixPQUFaO0FBRUUsTUFBTVMsSUFBSSxHQUFHUCxRQUFRLENBQUNRLE1BQVQsQ0FBZ0IsVUFBQ0MsSUFBRDtBQUFBLFdBQVlBLElBQUksQ0FBQ0MsRUFBTCxLQUFVWixPQUFPLENBQUNZLEVBQTlCO0FBQUEsR0FBaEIsQ0FBYjtBQUVBLE1BQUlDLE1BQU0sR0FBR0osSUFBSSxDQUFDQyxNQUFMLENBQVksVUFBQ0MsSUFBRDtBQUFBOztBQUFBLGtDQUN6QlgsT0FBTyxDQUFDYyxVQURpQix3REFDekIsb0JBQW9CQyxLQUFwQixDQUEwQixVQUFDQyxXQUFEO0FBQUEsYUFBcUJBLFdBQVcsQ0FBQ2hCLE9BQVosS0FBd0JXLElBQUksQ0FBQ0MsRUFBbEQ7QUFBQSxLQUExQixDQUR5QjtBQUFBLEdBQVosQ0FBYjtBQUdGTCxTQUFPLENBQUNDLEdBQVIsQ0FBWUssTUFBWjtBQUdJLHNCQUNJO0FBQUssYUFBUyxFQUFFZixPQUFPLENBQUNqQixtQkFBeEI7QUFBQSw0QkFDSTtBQUFLLGVBQVMsRUFBRWlCLE9BQU8sQ0FBQ1YsZUFBeEI7QUFBQSw2QkFDSTtBQUFHLGlCQUFTLEVBQUVVLE9BQU8sQ0FBQ0wsbUJBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURKLEVBTVlvQixNQUFNLENBQUNJLE1BQVAsR0FBYyxDQUFkLEdBQWlCSixNQUFNLENBQUNLLEdBQVAsQ0FBVyxVQUFDQyxPQUFELEVBQWU7QUFDdkMsMEJBQ0k7QUFBQSwrQkFDUSw4REFBQyxtREFBRDtBQUVBLGFBQUcsRUFBRUEsT0FBTyxDQUFDQyxNQUZiO0FBR0EsYUFBRyxFQUFDLHVCQUhKO0FBSUEsZUFBSyxFQUFFLEVBSlA7QUFLQSxnQkFBTSxFQUFFO0FBTFI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURSO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESjtBQVdILEtBWmdCLENBQWpCLEdBYUMsSUFuQmI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUEwQkgsQ0F6REQ7O0dBQU12QixVO1VBRWNwQixTLEVBQ0VzQixtRDs7O0tBSGhCRixVO0FBMkROLCtEQUFlQSxVQUFmIiwiZmlsZSI6Ii4vQ29tcG9uZW50cy9Gb2xsb3dMaXN0L0ZvbGxvd0xpc3QudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFRoZW1lLCBjcmVhdGVTdHlsZXMsIG1ha2VTdHlsZXN9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5pbXBvcnQgeyBmZXRjaFF1ZXJ5IH0gZnJvbSAnLi4vLi4vdXRpbHMvZmV0Y2hRdWVyeSc7XG5pbXBvcnQgeyB1c2VTdG9yZSB9IGZyb20gJy4uLy4uL2NvbnRleHQvQXV0aCc7XG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XG5cblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWU6IFRoZW1lKSA9PlxuICBjcmVhdGVTdHlsZXMoe1xuICAgIGZvbGxvd2xpc3Rjb250YWluZXI6IHtcbiAgICAgICAgIGJhY2tncm91bmRDb2xvcjpcIiNlZGVkZWRcIixcbiAgICAgICAgIGhlaWdodDpcIjMwdmhcIixcbiAgICAgICAgIHdpZHRoOlwiMjB2d1wiLFxuICAgICAgICAgbWFyZ2luTGVmdDpcIjAuNnJlbVwiLFxuICAgICAgICAgbWFyZ2luVG9wOlwiMXJlbVwiLFxuICAgICAgICAgYm9yZGVyUmFkaXVzOlwiMzBweFwiXG4gICAgfSxcbiAgICBmbGFrZW5ld3NoZWFkZXI6e1xuICAgICAgICBkaXNwbGF5OlwiZmxleFwiLFxuICAgICAgICBqdXN0aWZ5Q29udGVudDpcImZsZXgtc3RhcnRcIixcbiAgICAgICAgYWxpZ25JdGVtczpcImNlbnRlclwiLFxuICAgICAgICBib3JkZXJCb3R0b206XCIycHggc29saWQgI2JkYmRiZFwiLFxuICAgICAgICBtYXJnaW5MZWZ0OlwiMXJlbVwiXG4gICAgICAgXG4gICAgICAgIFxuICAgICAgIFxuICAgIH0sXG5cbiAgICBmbGFrZW5ld3NoZWFkZXJmb250OntcbiAgICAgICAgZm9udEZhbWlseTpcIlJvYm90bywgc2Fucy1zZXJpZlwiLFxuICAgICAgICBmb250V2VpZ2h0OjkwMCxcbiAgICAgICAgZm9udFNpemU6XCIxLjJyZW1cIlxuICAgICAgICBcbiAgICAgICBcbiAgICB9XG5cbiAgIFxuICAgIFxuXG59KSxcbik7XG5cblxuXG5cbmNvbnN0IEZvbGxvd0xpc3QgPSAoKSA9PiB7XG5cbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG4gICAgY29uc3Qge3Byb2ZpbGV9ID0gdXNlU3RvcmUoKTtcbiAgICBjb25zdFtwcm9maWxlcyxzZXRQcm9maWxlc10gPSB1c2VTdGF0ZShbXSlcblxuICAgIFxuICAgIFxuICAgIGNvbnN0IGFsbHVzZXJzID0gYXN5bmMoKT0+e1xuICAgICAgICBjb25zdCBhbGx1c2VycyA9IGF3YWl0IGZldGNoUXVlcnkoJ3Byb2ZpbGVzJyk7XG4gICAgICAgIHNldFByb2ZpbGVzKGFsbHVzZXJzKTtcbiAgICB9XG5cblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICBcbiAgICAgICAgYWxsdXNlcnMoKTtcbiAgICB9LCBbXSlcblxuICBcbmNvbnNvbGUubG9nKHByb2ZpbGVzKTtcbmNvbnNvbGUubG9nKHByb2ZpbGUpXG5cbiAgY29uc3QgZGF0YSA9IHByb2ZpbGVzLmZpbHRlcigoY29kZTphbnkpPT5jb2RlLmlkIT09cHJvZmlsZS5pZClcbiAgXG4gIHZhciByZXN1bHQgPSBkYXRhLmZpbHRlcigoY29kZTphbnkpID0+IFxuICBwcm9maWxlLmZvbGxvd2luZ3M/LmV2ZXJ5KChiYWxhbmNlQ29kZTphbnkpID0+IGJhbGFuY2VDb2RlLnByb2ZpbGUgIT09IGNvZGUuaWQpKTtcblxuY29uc29sZS5sb2cocmVzdWx0KTtcbiAgXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5mb2xsb3dsaXN0Y29udGFpbmVyfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmZsYWtlbmV3c2hlYWRlcn0+IFxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17Y2xhc3Nlcy5mbGFrZW5ld3NoZWFkZXJmb250fT5XaG8gdG8gRm9sbG93PC9wPlxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQubGVuZ3RoPjA/IHJlc3VsdC5tYXAoKHJlc3VsdHM6YW55KT0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtyZXN1bHRzLmF2YXRhcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIlBpY3R1cmUgb2YgdGhlIGF1dGhvclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD17NjV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezY1fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgOm51bGxcbiAgICAgICAgICAgICAgICB9ICAgXG5cbiAgICAgICAgICAgIFxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEZvbGxvd0xpc3Q7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./Components/FollowList/FollowList.tsx\n");

/***/ })

});