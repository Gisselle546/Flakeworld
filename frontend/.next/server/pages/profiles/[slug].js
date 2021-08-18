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
exports.id = "pages/profiles/[slug]";
exports.ids = ["pages/profiles/[slug]"];
exports.modules = {

/***/ "./pages/profiles/[slug].tsx":
/*!***********************************!*\
  !*** ./pages/profiles/[slug].tsx ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/styles */ \"./node_modules/@material-ui/core/esm/styles/index.js\");\n/* harmony import */ var _material_ui_icons_Room__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/icons/Room */ \"@material-ui/icons/Room\");\n/* harmony import */ var _material_ui_icons_Room__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Room__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _utils_fetchQuery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/fetchQuery */ \"./utils/fetchQuery.ts\");\n/* harmony import */ var _material_ui_icons_ArrowBack__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/ArrowBack */ \"@material-ui/icons/ArrowBack\");\n/* harmony import */ var _material_ui_icons_ArrowBack__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ArrowBack__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _Components_Navbar_Navbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../Components/Navbar/Navbar */ \"./Components/Navbar/Navbar.tsx\");\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core */ \"@material-ui/core\");\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _context_Auth__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../context/Auth */ \"./context/Auth.tsx\");\n/* harmony import */ var _utils_time__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../utils/time */ \"./utils/time.ts\");\n\n\nvar _jsxFileName = \"/Users/gise/Documents/Practice Apps/lighters/frontend/pages/profiles/[slug].tsx\";\n\n\n\n\n\n\n\n\n\n\nconst useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_10__.makeStyles)(theme => (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_10__.createStyles)({\n  image: {\n    borderRadius: \"100px\"\n  }\n}));\n\nconst profileDta = () => {\n  const classes = useStyles();\n  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n  const {\n    profile,\n    getprofile,\n    createFollowing,\n    createFollowers,\n    user\n  } = (0,_context_Auth__WEBPACK_IMPORTED_MODULE_8__.useStore)();\n  const {\n    0: data,\n    1: setData\n  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n  const {\n    slug\n  } = router.query;\n  console.log(profile);\n\n  const getSlug = async slug => {\n    const data = await (0,_utils_fetchQuery__WEBPACK_IMPORTED_MODULE_4__.fetchQuery)('profiles', slug);\n    setData(data);\n  };\n\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {\n    getprofile();\n    getSlug(slug);\n  }, []);\n\n  if (!data) {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.CircularProgress, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 12\n    }, undefined);\n  }\n\n  const clickhandler = async profiledata => {\n    let monkey = {\n      counter: 1,\n      profile: profiledata,\n      mainid: profile\n    };\n    let reverse = {\n      counter: 1,\n      profile: profile,\n      mainid: profiledata\n    };\n    createFollowing(monkey);\n    createFollowers(reverse);\n  };\n\n  const returneddata = data.map(datafield => {\n    var _profile$followings, _datafield$followers;\n\n    console.log(datafield);\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n          borderBottom: \"0.4px solid #efefef\"\n        },\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          style: {\n            display: \"flex\",\n            justifyContent: 'flex-start',\n            marginLeft: '2rem'\n          },\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_ui_icons_ArrowBack__WEBPACK_IMPORTED_MODULE_5___default()), {\n            style: {\n              alignSelf: \"center\",\n              fontSize: 31,\n              marginTop: '0.6rem',\n              color: \"rgb(29,161,242)\",\n              cursor: \"pointer\"\n            },\n            onClick: () => router.back()\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 76,\n            columnNumber: 11\n          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Components_Navbar_Navbar__WEBPACK_IMPORTED_MODULE_6__.default, {\n            title: `${datafield === null || datafield === void 0 ? void 0 : datafield.name}`\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 78,\n            columnNumber: 11\n          }, undefined)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 75,\n          columnNumber: 11\n        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          style: {\n            display: \"flex\",\n            marginLeft: \"5rem\",\n            marginBottom: \"1rem\"\n          },\n          children: [datafield === null || datafield === void 0 ? void 0 : datafield.posts.length, \" Flakes\"]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 80,\n          columnNumber: 11\n        }, undefined)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 74,\n        columnNumber: 6\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n          height: '20vh',\n          backgroundImage: `url(${datafield === null || datafield === void 0 ? void 0 : datafield.banner})`,\n          backgroundSize: 'cover',\n          display: \"flex\",\n          alignItems: 'flex-end'\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 83,\n        columnNumber: 6\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n        src: datafield === null || datafield === void 0 ? void 0 : datafield.avatar,\n        style: {\n          height: \"11vh\",\n          width: \"7rem\",\n          borderRadius: \"50%\",\n          margin: \"-5rem 0rem 0rem 1rem\"\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 84,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n          display: \"flex\",\n          justifyContent: \"space-between\"\n        },\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          style: {\n            display: 'flex',\n            margin: \"-1rem 0rem 0rem 1.8rem\",\n            flexDirection: \"column\"\n          },\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n            children: datafield === null || datafield === void 0 ? void 0 : datafield.name\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 88,\n            columnNumber: 11\n          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            style: {\n              color: \"#938f8f\",\n              fontSize: \"1rem\",\n              marginTop: \"-1rem\"\n            },\n            children: [\"@\", datafield === null || datafield === void 0 ? void 0 : datafield.user.username]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 89,\n            columnNumber: 11\n          }, undefined)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 87,\n          columnNumber: 9\n        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          style: {\n            marginRight: \"2rem\"\n          },\n          children: [(profile === null || profile === void 0 ? void 0 : profile.id) === (datafield === null || datafield === void 0 ? void 0 : datafield.id) && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.Button, {\n            variant: \"contained\",\n            color: \"primary\",\n            children: \"Edit Profile\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 94,\n            columnNumber: 40\n          }, undefined), (profile === null || profile === void 0 ? void 0 : (_profile$followings = profile.followings) === null || _profile$followings === void 0 ? void 0 : _profile$followings.length) === 0 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.Button, {\n            variant: \"contained\",\n            color: \"primary\",\n            onClick: () => clickhandler(datafield),\n            children: \"add\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 103,\n            columnNumber: 50\n          }, undefined)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 91,\n          columnNumber: 9\n        }, undefined)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 86,\n        columnNumber: 5\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n          display: \"flex\",\n          flexDirection: \"column\",\n          margin: \"1rem 0rem 0rem 1.6rem\",\n          height: \"8vh\",\n          justifyContent: \"space-around\"\n        },\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          children: datafield === null || datafield === void 0 ? void 0 : datafield.bio\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 112,\n          columnNumber: 7\n        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          style: {\n            display: \"flex\",\n            height: \"2vh\",\n            marginRight: \"0.9rem\"\n          },\n          children: [\" \", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_ui_icons_Room__WEBPACK_IMPORTED_MODULE_2___default()), {\n            style: {\n              marginBottom: \"1rem\"\n            }\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 113,\n            columnNumber: 73\n          }, undefined), datafield === null || datafield === void 0 ? void 0 : datafield.location, \"   \", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            style: {\n              marginLeft: \"2rem\"\n            },\n            children: [\"Joined \", (0,_utils_time__WEBPACK_IMPORTED_MODULE_9__.longprofiletime)(datafield === null || datafield === void 0 ? void 0 : datafield.created_at)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 113,\n            columnNumber: 138\n          }, undefined)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 113,\n          columnNumber: 7\n        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          style: {\n            display: \"flex\",\n            flexDirection: \"row\",\n            justifyContent: \"flex-start\"\n          },\n          children: [\" \", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\"Following: \", datafield === null || datafield === void 0 ? void 0 : datafield.followings.length]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 114,\n            columnNumber: 87\n          }, undefined), \"          \", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            style: {\n              marginLeft: \"1rem\"\n            },\n            children: [\"Followers: \", datafield === null || datafield === void 0 ? void 0 : (_datafield$followers = datafield.followers) === null || _datafield$followers === void 0 ? void 0 : _datafield$followers.length]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 114,\n            columnNumber: 149\n          }, undefined)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 114,\n          columnNumber: 7\n        }, undefined)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 111,\n        columnNumber: 5\n      }, undefined)]\n    }, void 0, true);\n  });\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    children: returneddata\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 124,\n    columnNumber: 9\n  }, undefined);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (profileDta);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL3BhZ2VzL3Byb2ZpbGVzL1tzbHVnXS50c3g/ODhkYiJdLCJuYW1lcyI6WyJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJjcmVhdGVTdHlsZXMiLCJpbWFnZSIsImJvcmRlclJhZGl1cyIsInByb2ZpbGVEdGEiLCJjbGFzc2VzIiwicm91dGVyIiwidXNlUm91dGVyIiwicHJvZmlsZSIsImdldHByb2ZpbGUiLCJjcmVhdGVGb2xsb3dpbmciLCJjcmVhdGVGb2xsb3dlcnMiLCJ1c2VyIiwidXNlU3RvcmUiLCJkYXRhIiwic2V0RGF0YSIsInVzZVN0YXRlIiwic2x1ZyIsInF1ZXJ5IiwiY29uc29sZSIsImxvZyIsImdldFNsdWciLCJmZXRjaFF1ZXJ5IiwidXNlRWZmZWN0IiwiY2xpY2toYW5kbGVyIiwicHJvZmlsZWRhdGEiLCJtb25rZXkiLCJjb3VudGVyIiwibWFpbmlkIiwicmV2ZXJzZSIsInJldHVybmVkZGF0YSIsIm1hcCIsImRhdGFmaWVsZCIsImJvcmRlckJvdHRvbSIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsIm1hcmdpbkxlZnQiLCJhbGlnblNlbGYiLCJmb250U2l6ZSIsIm1hcmdpblRvcCIsImNvbG9yIiwiY3Vyc29yIiwiYmFjayIsIm5hbWUiLCJtYXJnaW5Cb3R0b20iLCJwb3N0cyIsImxlbmd0aCIsImhlaWdodCIsImJhY2tncm91bmRJbWFnZSIsImJhbm5lciIsImJhY2tncm91bmRTaXplIiwiYWxpZ25JdGVtcyIsImF2YXRhciIsIndpZHRoIiwibWFyZ2luIiwiZmxleERpcmVjdGlvbiIsInVzZXJuYW1lIiwibWFyZ2luUmlnaHQiLCJpZCIsImZvbGxvd2luZ3MiLCJiaW8iLCJsb2NhdGlvbiIsImxvbmdwcm9maWxldGltZSIsImNyZWF0ZWRfYXQiLCJmb2xsb3dlcnMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFD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QUFBO0FBQUE7QUFBQTtBQUFBLG1CQXRDQztBQUFBLG9CQURGO0FBZ0RELEdBbERtQixDQUFwQjtBQXFERyxzQkFDSTtBQUFBLGNBRUdoQjtBQUZIO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESjtBQU1ILENBbEdEOztBQW9HQSwrREFBZTFCLFVBQWYiLCJmaWxlIjoiLi9wYWdlcy9wcm9maWxlcy9bc2x1Z10udHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFByb2ZpbGVyLCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgVGhlbWUsIGNyZWF0ZVN0eWxlcywgbWFrZVN0eWxlc30gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcbmltcG9ydCBSb29tSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvUm9vbSc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcbmltcG9ydCB7IGZldGNoUXVlcnkgfSBmcm9tICcuLi8uLi91dGlscy9mZXRjaFF1ZXJ5JztcbmltcG9ydCBBcnJvd0JhY2tJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9BcnJvd0JhY2snO1xuaW1wb3J0IE5hdmJhciBmcm9tICcuLi8uLi9Db21wb25lbnRzL05hdmJhci9OYXZiYXInO1xuaW1wb3J0IHsgQ2lyY3VsYXJQcm9ncmVzcywgQnV0dG9uIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xuaW1wb3J0IHsgdXNlU3RvcmUgfSBmcm9tICcuLi8uLi9jb250ZXh0L0F1dGgnO1xuaW1wb3J0IHsgbG9uZ3Byb2ZpbGV0aW1lIH0gZnJvbSAnLi4vLi4vdXRpbHMvdGltZSc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZTogVGhlbWUpID0+XG4gIGNyZWF0ZVN0eWxlcyh7XG4gICBcbiAgICBpbWFnZTp7XG4gICAgICBib3JkZXJSYWRpdXM6XCIxMDBweFwiXG4gICAgfSxcbiAgICBcblxuICAgXG5cbn0pLFxuKTtcblxuXG5cblxuXG5jb25zdCBwcm9maWxlRHRhID0gKCkgPT4ge1xuICAgXG5cbiAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTsgXG4gICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgIGNvbnN0IHtwcm9maWxlLGdldHByb2ZpbGUsY3JlYXRlRm9sbG93aW5nLGNyZWF0ZUZvbGxvd2Vycyx1c2VyfSA9IHVzZVN0b3JlKClcbiAgIGNvbnN0W2RhdGEsc2V0RGF0YV09dXNlU3RhdGUoW10pXG4gICBjb25zdCB7c2x1Z309IHJvdXRlci5xdWVyeTtcblxuXG4gICBjb25zb2xlLmxvZyhwcm9maWxlKVxuICBjb25zdCBnZXRTbHVnPWFzeW5jKHNsdWc6YW55KT0+e1xuICAgIGNvbnN0IGRhdGE9YXdhaXQgZmV0Y2hRdWVyeSgncHJvZmlsZXMnLHNsdWcpO1xuICAgIHNldERhdGEoZGF0YSlcbiAgfVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZ2V0cHJvZmlsZSgpXG4gICBnZXRTbHVnKHNsdWcpXG4gIH0sIFtdKVxuXG4gIGlmKCFkYXRhKXtcbiAgICByZXR1cm4gPENpcmN1bGFyUHJvZ3Jlc3MvPlxuICB9XG5cblxuIGNvbnN0IGNsaWNraGFuZGxlcj0gYXN5bmMocHJvZmlsZWRhdGE6YW55KT0+e1xuICAgXG4gIGxldCBtb25rZXk9e2NvdW50ZXI6MSxwcm9maWxlOnByb2ZpbGVkYXRhLG1haW5pZDpwcm9maWxlfVxuICBsZXQgcmV2ZXJzZT17Y291bnRlcjoxLHByb2ZpbGU6cHJvZmlsZSxtYWluaWQ6cHJvZmlsZWRhdGF9XG4gIFxuIFxuICBjcmVhdGVGb2xsb3dpbmcobW9ua2V5KTtcbiAgY3JlYXRlRm9sbG93ZXJzKHJldmVyc2UpO1xufVxuXG5cbiAgXG4gXG4gY29uc3QgcmV0dXJuZWRkYXRhPSBkYXRhIS5tYXAoKGRhdGFmaWVsZDphbnkpPT57XG4gICBjb25zb2xlLmxvZyhkYXRhZmllbGQpXG4gICByZXR1cm4oXG4gICAgIDw+XG4gICAgIDxkaXYgc3R5bGU9e3tib3JkZXJCb3R0b206XCIwLjRweCBzb2xpZCAjZWZlZmVmXCJ9fT5cbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7ZGlzcGxheTpcImZsZXhcIiwganVzdGlmeUNvbnRlbnQ6J2ZsZXgtc3RhcnQnLG1hcmdpbkxlZnQ6JzJyZW0nfX0+XG4gICAgICAgICAgPEFycm93QmFja0ljb24gc3R5bGU9e3thbGlnblNlbGY6XCJjZW50ZXJcIiwgZm9udFNpemU6IDMxLCBtYXJnaW5Ub3A6JzAuNnJlbScsIGNvbG9yOlwicmdiKDI5LDE2MSwyNDIpXCIsY3Vyc29yOlwicG9pbnRlclwifX0gb25DbGljaz17KCkgPT4gcm91dGVyLmJhY2soKX0vPlxuICAgICAgICAgIFxuICAgICAgICAgIDxOYXZiYXIgdGl0bGU9e2Ake2RhdGFmaWVsZD8ubmFtZX1gfSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgc3R5bGU9e3tkaXNwbGF5OlwiZmxleFwiLG1hcmdpbkxlZnQ6XCI1cmVtXCIsIG1hcmdpbkJvdHRvbTpcIjFyZW1cIn19PntkYXRhZmllbGQ/LnBvc3RzLmxlbmd0aH0gRmxha2VzPC9kaXY+XG4gICAgIDwvZGl2PlxuICAgICBcbiAgICAgPGRpdiBzdHlsZT17e2hlaWdodDonMjB2aCcsYmFja2dyb3VuZEltYWdlOiBgdXJsKCR7ZGF0YWZpZWxkPy5iYW5uZXJ9KWAsYmFja2dyb3VuZFNpemU6J2NvdmVyJyxkaXNwbGF5OlwiZmxleFwiLGFsaWduSXRlbXM6J2ZsZXgtZW5kJ319PjwvZGl2PlxuICAgICAgICA8aW1nIHNyYz17ZGF0YWZpZWxkPy5hdmF0YXJ9IHN0eWxlPXt7aGVpZ2h0OlwiMTF2aFwiLCB3aWR0aDpcIjdyZW1cIiwgYm9yZGVyUmFkaXVzOlwiNTAlXCIsbWFyZ2luOlwiLTVyZW0gMHJlbSAwcmVtIDFyZW1cIn19IC8+XG4gICAgICAgXG4gICAgPGRpdiBzdHlsZT17e2Rpc3BsYXk6XCJmbGV4XCIsIGp1c3RpZnlDb250ZW50Olwic3BhY2UtYmV0d2VlblwifX0+XG4gICAgICAgIDxkaXYgc3R5bGU9e3tkaXNwbGF5OidmbGV4JyxtYXJnaW46XCItMXJlbSAwcmVtIDByZW0gMS44cmVtXCIsZmxleERpcmVjdGlvbjpcImNvbHVtblwifX0+XG4gICAgICAgICAgPGgzPntkYXRhZmllbGQ/Lm5hbWV9PC9oMz5cbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7Y29sb3I6XCIjOTM4ZjhmXCIsZm9udFNpemU6XCIxcmVtXCIsbWFyZ2luVG9wOlwiLTFyZW1cIn19PkB7ZGF0YWZpZWxkPy51c2VyLnVzZXJuYW1lfTwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBzdHlsZT17e21hcmdpblJpZ2h0OlwiMnJlbVwifX0+XG4gICAgICAgeyAgIFxuICAgICAgIFxuICAgICAgICAgIHByb2ZpbGU/LmlkPT09ZGF0YWZpZWxkPy5pZCYmPEJ1dHRvbiB2YXJpYW50PVwiY29udGFpbmVkXCIgY29sb3I9XCJwcmltYXJ5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEVkaXQgUHJvZmlsZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgfVxuICAgICAgXG4gICAgIFxuICAgICAgXG4gICAgICB7XG5cbiAgICAgICAgICAgICAgKHByb2ZpbGU/LmZvbGxvd2luZ3M/Lmxlbmd0aD09PTApJiY8QnV0dG9uIHZhcmlhbnQ9XCJjb250YWluZWRcIiBjb2xvcj1cInByaW1hcnlcIiBvbkNsaWNrPXsoKT0+Y2xpY2toYW5kbGVyKGRhdGFmaWVsZCl9PlxuICAgICAgICAgICAgICBhZGRcbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgfVxuICAgICAgICBcbiAgICAgICAgPC9kaXY+XG4gICAgICAgIFxuICAgIDwvZGl2PlxuICAgIDxkaXYgc3R5bGU9e3tkaXNwbGF5OlwiZmxleFwiLCBmbGV4RGlyZWN0aW9uOlwiY29sdW1uXCIsbWFyZ2luOlwiMXJlbSAwcmVtIDByZW0gMS42cmVtXCIsaGVpZ2h0OlwiOHZoXCIsanVzdGlmeUNvbnRlbnQ6XCJzcGFjZS1hcm91bmRcIn19PlxuICAgICAgPGRpdj57ZGF0YWZpZWxkPy5iaW99PC9kaXY+XG4gICAgICA8ZGl2IHN0eWxlPXt7ZGlzcGxheTpcImZsZXhcIixoZWlnaHQ6XCIydmhcIiwgbWFyZ2luUmlnaHQ6XCIwLjlyZW1cIn19PiA8Um9vbUljb24gc3R5bGU9e3ttYXJnaW5Cb3R0b206XCIxcmVtXCJ9fS8+e2RhdGFmaWVsZD8ubG9jYXRpb259ICAgPGRpdiBzdHlsZT17e21hcmdpbkxlZnQ6XCIycmVtXCJ9fT5Kb2luZWQgeyBsb25ncHJvZmlsZXRpbWUoZGF0YWZpZWxkPy5jcmVhdGVkX2F0KX08L2Rpdj48L2Rpdj5cbiAgICAgIDxkaXYgc3R5bGU9e3tkaXNwbGF5OlwiZmxleFwiLGZsZXhEaXJlY3Rpb246XCJyb3dcIiwganVzdGlmeUNvbnRlbnQ6XCJmbGV4LXN0YXJ0XCJ9fT4gPGRpdj5Gb2xsb3dpbmc6IHtkYXRhZmllbGQ/LmZvbGxvd2luZ3MubGVuZ3RofTwvZGl2PiAgICAgICAgICA8ZGl2IHN0eWxlPXt7bWFyZ2luTGVmdDpcIjFyZW1cIn19PkZvbGxvd2Vyczoge2RhdGFmaWVsZD8uZm9sbG93ZXJzPy5sZW5ndGh9PC9kaXY+PC9kaXY+XG4gICAgXG4gICAgPC9kaXY+XG4gICAgICBcbiAgICA8Lz5cbiAgIClcbiB9KVxuICBcbiAgIFxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICBcbiAgICAgICAgICB7cmV0dXJuZWRkYXRhfVxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IHByb2ZpbGVEdGE7XG5cblxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/profiles/[slug].tsx\n");

/***/ }),

/***/ "./utils/fetchQuery.ts":
/*!*****************************!*\
  !*** ./utils/fetchQuery.ts ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"baseUrl\": function() { return /* binding */ baseUrl; },\n/* harmony export */   \"fetchQuery\": function() { return /* binding */ fetchQuery; }\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n\nconst baseUrl = \"http://localhost:1337\";\n\nasync function fetchQuery(path, params =  false || null) {\n  let url;\n  params !== null ? url = `${baseUrl}/${path}/${params}` : url = `${baseUrl}/${path}`;\n  console.log(url, params);\n  const response = await axios__WEBPACK_IMPORTED_MODULE_0___default().get(`${url}`);\n  return response.data;\n}\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL3V0aWxzL2ZldGNoUXVlcnkudHM/MzRmZSJdLCJuYW1lcyI6WyJiYXNlVXJsIiwicHJvY2VzcyIsImZldGNoUXVlcnkiLCJwYXRoIiwicGFyYW1zIiwidXJsIiwiY29uc29sZSIsImxvZyIsInJlc3BvbnNlIiwiYXhpb3MiLCJkYXRhIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFFQSxNQUFNQSxPQUFPLEdBQUdDLHVCQUFoQjs7QUFHQSxlQUFlQyxVQUFmLENBQTBCQyxJQUExQixFQUFvQ0MsTUFBTSxHQUFHLE1BQUUsSUFBRSxJQUFqRCxFQUF1RDtBQUVuRCxNQUFJQyxHQUFKO0FBRUNELFFBQU0sS0FBSyxJQUFaLEdBQWtCQyxHQUFHLEdBQUksR0FBRUwsT0FBUSxJQUFHRyxJQUFLLElBQUdDLE1BQU8sRUFBckQsR0FBd0RDLEdBQUcsR0FBSSxHQUFFTCxPQUFRLElBQUdHLElBQUssRUFBakY7QUFFQUcsU0FBTyxDQUFDQyxHQUFSLENBQVlGLEdBQVosRUFBZ0JELE1BQWhCO0FBRUEsUUFBTUksUUFBUSxHQUFHLE1BQU1DLGdEQUFBLENBQVcsR0FBRUosR0FBSSxFQUFqQixDQUF2QjtBQUVBLFNBQU9HLFFBQVEsQ0FBQ0UsSUFBaEI7QUFFSCIsImZpbGUiOiIuL3V0aWxzL2ZldGNoUXVlcnkudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5cbmNvbnN0IGJhc2VVcmwgPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19CQVNFX1VSTDtcblxuXG5hc3luYyBmdW5jdGlvbiBmZXRjaFF1ZXJ5KHBhdGg6YW55LCBwYXJhbXMgPSAnJ3x8bnVsbCkge1xuICAgIFxuICAgIGxldCB1cmw6c3RyaW5nO1xuXG4gICAgKHBhcmFtcyAhPT0gbnVsbCk/dXJsID0gYCR7YmFzZVVybH0vJHtwYXRofS8ke3BhcmFtc31gOiB1cmwgPSBgJHtiYXNlVXJsfS8ke3BhdGh9YFxuXG4gICAgY29uc29sZS5sb2codXJsLHBhcmFtcylcbiAgICBcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChgJHt1cmx9YCk7XG4gICAgXG4gICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XG5cbn1cblxuXG5cblxuXG5cblxuXG5leHBvcnQge2Jhc2VVcmwsZmV0Y2hRdWVyeX0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./utils/fetchQuery.ts\n");

/***/ }),

/***/ "@material-ui/core":
/*!************************************!*\
  !*** external "@material-ui/core" ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@material-ui/core");;

/***/ }),

/***/ "@material-ui/icons/ArrowBack":
/*!***********************************************!*\
  !*** external "@material-ui/icons/ArrowBack" ***!
  \***********************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@material-ui/icons/ArrowBack");;

/***/ }),

/***/ "@material-ui/icons/Room":
/*!******************************************!*\
  !*** external "@material-ui/icons/Room" ***!
  \******************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@material-ui/icons/Room");;

/***/ }),

/***/ "@material-ui/styles":
/*!**************************************!*\
  !*** external "@material-ui/styles" ***!
  \**************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@material-ui/styles");;

/***/ }),

/***/ "@material-ui/system":
/*!**************************************!*\
  !*** external "@material-ui/system" ***!
  \**************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@material-ui/system");;

/***/ }),

/***/ "@material-ui/utils":
/*!*************************************!*\
  !*** external "@material-ui/utils" ***!
  \*************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@material-ui/utils");;

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("axios");;

/***/ }),

/***/ "js-cookie":
/*!****************************!*\
  !*** external "js-cookie" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("js-cookie");;

/***/ }),

/***/ "moment":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/***/ (function(module) {

"use strict";
module.exports = require("moment");;

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_material-ui_core_esm_styles_index_js","context_Auth_tsx","Components_Navbar_Navbar_tsx-utils_time_ts"], function() { return __webpack_exec__("./pages/profiles/[slug].tsx"); });
module.exports = __webpack_exports__;

})();