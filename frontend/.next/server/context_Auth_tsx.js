/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "context_Auth_tsx";
exports.ids = ["context_Auth_tsx"];
exports.modules = {

/***/ "./context/Auth.tsx":
/*!**************************!*\
  !*** ./context/Auth.tsx ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AuthProvider\": function() { return /* binding */ AuthProvider; },\n/* harmony export */   \"useStore\": function() { return /* binding */ useStore; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! js-cookie */ \"js-cookie\");\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _jsxFileName = \"/Users/gise/Documents/Practice Apps/lighters/frontend/context/Auth.tsx\";\n\n\n\n\nconst AuthContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({\n  register: () => {},\n  login: () => {},\n  logout: () => {},\n  update: () => {},\n  user: {},\n  profile: {},\n  getprofile: () => {},\n  createpost: datar => {},\n  createlike: () => {},\n  createcomment: () => {},\n  removelike: () => {},\n  createretweet: () => {},\n  removeretweet: () => {},\n  createFollowing: () => {},\n  createFollowers: () => {}\n});\nconst AuthProvider = props => {\n  const {\n    0: post,\n    1: setPost\n  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n  const {\n    0: user,\n    1: setUser\n  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n  const {\n    0: like,\n    1: setLike\n  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n  const {\n    0: profile,\n    1: setProfile\n  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n  const {\n    0: comment,\n    1: setComment\n  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n  const {\n    0: error,\n    1: setError\n  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n  const {\n    0: retweet,\n    1: setRetweet\n  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n  const {\n    0: following,\n    1: setFollowing\n  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n  const {\n    0: followers,\n    1: setFollowers\n  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n\n  async function createFollowers(datar) {\n    const res = await axios__WEBPACK_IMPORTED_MODULE_3___default().post(`/api/createfollowers`, {\n      datar\n    });\n\n    if (res.data) {\n      setFollowers(res.data.followers);\n    } else {\n      setError(error);\n      setProfile(null);\n    }\n  }\n\n  async function createFollowing(datar) {\n    const res = await axios__WEBPACK_IMPORTED_MODULE_3___default().post(`/api/createfollowing`, {\n      datar\n    });\n\n    if (res.data) {\n      setFollowing(res.data.followings);\n    } else {\n      setError(error);\n      setProfile(null);\n    }\n  }\n\n  async function getprofile() {\n    if (js_cookie__WEBPACK_IMPORTED_MODULE_4___default().get('user') == undefined) {\n      return;\n    }\n\n    const res = await axios__WEBPACK_IMPORTED_MODULE_3___default().get(`/api/profile`);\n\n    if (res.data) {\n      setProfile(res.data.profile);\n    } else {\n      setError(error);\n      setProfile(null);\n    }\n  }\n\n  async function check() {\n    if (js_cookie__WEBPACK_IMPORTED_MODULE_4___default().get('user') == undefined) {\n      return;\n    }\n\n    const res = await axios__WEBPACK_IMPORTED_MODULE_3___default().get(`/api/user`);\n\n    if (res.data) {\n      setUser(res.data.user);\n    } else {\n      setUser(null);\n    }\n  }\n\n  async function update(datar) {\n    const res = await axios__WEBPACK_IMPORTED_MODULE_3___default().post(`/api/updateuser`, {\n      datar\n    });\n\n    if (res.data) {\n      setUser(res.data);\n      setProfile(res.data);\n      router.push('/');\n    } else {\n      setError(res.data.message);\n      setError(null);\n    }\n  }\n\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {\n    if (js_cookie__WEBPACK_IMPORTED_MODULE_4___default().get('user') !== undefined) {\n      check();\n    }\n  }, [user === null]);\n\n  async function register(token) {\n    const res = await axios__WEBPACK_IMPORTED_MODULE_3___default().post(`/api/register`, {\n      token\n    });\n\n    if (res.data) {\n      js_cookie__WEBPACK_IMPORTED_MODULE_4___default().set('user', `${Math.random()}`, {\n        expires: 7\n      });\n      setUser(res.data);\n      router.push(\"/profilemodal\");\n    } else {\n      setError(res.data.message);\n      setError(null);\n    }\n  }\n\n  async function createlike(datar) {\n    const res = await axios__WEBPACK_IMPORTED_MODULE_3___default().post(`/api/createLike`, {\n      datar\n    });\n\n    if (res.data) {\n      setLike(res.data);\n    } else {\n      setError(res.data.message);\n      setError(null);\n    }\n  }\n\n  async function createretweet(datar) {\n    const res = await axios__WEBPACK_IMPORTED_MODULE_3___default().post(`/api/createRetweet`, {\n      datar\n    });\n\n    if (res.data) {\n      setRetweet(res.data);\n    } else {\n      setError(res.data.message);\n      setError(null);\n    }\n  }\n\n  async function removeretweet(datar) {\n    const res = await axios__WEBPACK_IMPORTED_MODULE_3___default().delete(`/api/removeRetweet`, {\n      data: datar\n    });\n\n    if (res.data) {\n      setRetweet(res.data);\n    } else {\n      setError(res.data.message);\n      setError(null);\n    }\n  }\n\n  async function removelike(datar) {\n    const res = await axios__WEBPACK_IMPORTED_MODULE_3___default().delete(`/api/removeLike`, {\n      data: datar\n    });\n\n    if (res.data) {\n      setLike(res.data);\n    } else {\n      setError(res.data.message);\n      setError(null);\n    }\n  }\n\n  async function login(token) {\n    const res = await axios__WEBPACK_IMPORTED_MODULE_3___default().post(`/api/login`, {\n      token\n    });\n\n    if (res.data) {\n      js_cookie__WEBPACK_IMPORTED_MODULE_4___default().set('user', `${Math.random()}`, {\n        expires: 7\n      });\n      setUser(res.data);\n    } else {\n      setError(res.data.message);\n      setError(null);\n    }\n  }\n\n  async function logout() {\n    js_cookie__WEBPACK_IMPORTED_MODULE_4___default().remove(\"token\");\n    js_cookie__WEBPACK_IMPORTED_MODULE_4___default().remove(\"user\");\n    setUser(null);\n    router.push('/');\n  }\n\n  async function createpost(datar) {\n    const res = await axios__WEBPACK_IMPORTED_MODULE_3___default().post(`/api/createpost`, {\n      datar\n    });\n\n    if (res.data) {\n      setPost(res.data);\n      router.push('/');\n    } else {\n      setError(res.data.message);\n      setError(null);\n    }\n  }\n\n  async function createcomment(datar) {\n    const res = await axios__WEBPACK_IMPORTED_MODULE_3___default().post(`/api/createcomment`, {\n      datar\n    });\n\n    if (res.data) {\n      setComment(res.data);\n    } else {\n      setError(res.data.message);\n      setError(null);\n    }\n\n    return res.data;\n  }\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AuthContext.Provider, {\n    value: {\n      register,\n      login,\n      logout,\n      user,\n      update,\n      getprofile,\n      profile,\n      createpost,\n      createlike,\n      createcomment,\n      removelike,\n      createretweet,\n      removeretweet,\n      createFollowing,\n      createFollowers\n    },\n    children: props.children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 370,\n    columnNumber: 9\n  }, undefined);\n};\nconst useStore = () => (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(AuthContext);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL2NvbnRleHQvQXV0aC50c3g/M2E1OSJdLCJuYW1lcyI6WyJBdXRoQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJyZWdpc3RlciIsImxvZ2luIiwibG9nb3V0IiwidXBkYXRlIiwidXNlciIsInByb2ZpbGUiLCJnZXRwcm9maWxlIiwiY3JlYXRlcG9zdCIsImRhdGFyIiwiY3JlYXRlbGlrZSIsImNyZWF0ZWNvbW1lbnQiLCJyZW1vdmVsaWtlIiwiY3JlYXRlcmV0d2VldCIsInJlbW92ZXJldHdlZXQiLCJjcmVhdGVGb2xsb3dpbmciLCJjcmVhdGVGb2xsb3dlcnMiLCJBdXRoUHJvdmlkZXIiLCJwcm9wcyIsInBvc3QiLCJzZXRQb3N0IiwidXNlU3RhdGUiLCJzZXRVc2VyIiwibGlrZSIsInNldExpa2UiLCJzZXRQcm9maWxlIiwiY29tbWVudCIsInNldENvbW1lbnQiLCJlcnJvciIsInNldEVycm9yIiwicmV0d2VldCIsInNldFJldHdlZXQiLCJmb2xsb3dpbmciLCJzZXRGb2xsb3dpbmciLCJmb2xsb3dlcnMiLCJzZXRGb2xsb3dlcnMiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJyZXMiLCJheGlvcyIsImRhdGEiLCJmb2xsb3dpbmdzIiwiQ29va2llcyIsInVuZGVmaW5lZCIsImNoZWNrIiwicHVzaCIsIm1lc3NhZ2UiLCJ1c2VFZmZlY3QiLCJ0b2tlbiIsIk1hdGgiLCJyYW5kb20iLCJleHBpcmVzIiwiY2hpbGRyZW4iLCJ1c2VTdG9yZSIsInVzZUNvbnRleHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFLQSxNQUFNQSxXQUFXLGdCQUFHQyxvREFBYSxDQW1COUI7QUFFQ0MsVUFBUSxFQUFDLE1BQUksQ0FBRSxDQUZoQjtBQUdDQyxPQUFLLEVBQUMsTUFBSSxDQUFFLENBSGI7QUFJQ0MsUUFBTSxFQUFDLE1BQUksQ0FBRSxDQUpkO0FBS0NDLFFBQU0sRUFBQyxNQUFJ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QUMsSUFBRCxDQUFSO0FBQ0Q7O0FBRUgsV0FBT1MsR0FBRyxDQUFDRSxJQUFYO0FBRUM7O0FBSUQsc0JBQ0ksOERBQUMsV0FBRCxDQUFhLFFBQWI7QUFBc0IsU0FBSyxFQUFFO0FBQUN2QyxjQUFEO0FBQVVDLFdBQVY7QUFBZ0JDLFlBQWhCO0FBQXVCRSxVQUF2QjtBQUE0QkQsWUFBNUI7QUFBbUNHLGdCQUFuQztBQUE4Q0QsYUFBOUM7QUFBc0RFLGdCQUF0RDtBQUFpRUUsZ0JBQWpFO0FBQTRFQyxtQkFBNUU7QUFBMEZDLGdCQUExRjtBQUFxR0MsbUJBQXJHO0FBQW1IQyxtQkFBbkg7QUFBaUlDLHFCQUFqSTtBQUFpSkM7QUFBakosS0FBN0I7QUFBQSxjQUNLRSxLQUFLLENBQUNrQztBQURYO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESjtBQVFILENBeFVNO0FBMFVBLE1BQU1DLFFBQVEsR0FBRyxNQUFNQyxpREFBVSxDQUFDdkQsV0FBRCxDQUFqQyIsImZpbGUiOiIuL2NvbnRleHQvQXV0aC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2NyZWF0ZUNvbnRleHQsIHVzZUNvbnRleHQsIHVzZVN0YXRlLHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcbmltcG9ydCBDb29raWVzIGZyb20gJ2pzLWNvb2tpZSc7XG5pbXBvcnQgeyBDaXJjdWxhclByb2dyZXNzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xuaW1wb3J0IHVwZGF0ZXVzZXIgZnJvbSAnLi4vcGFnZXMvYXBpL3VwZGF0ZXVzZXInO1xuXG5cbmNvbnN0IEF1dGhDb250ZXh0ID0gY3JlYXRlQ29udGV4dDx7XG4gICAgXG4gICAgcmVnaXN0ZXI6KHRva2VuOmFueSk9PnZvaWRcbiAgICBsb2dpbjoodG9rZW46YW55KT0+dm9pZFxuICAgIGxvZ291dDooKT0+dm9pZFxuICAgIHVwZGF0ZTooZGF0YXI6YW55KT0+dm9pZFxuICAgIGdldHByb2ZpbGU6KCk9PnZvaWRcbiAgICBjcmVhdGVwb3N0OihkYXRhcjphbnkpPT52b2lkXG4gICAgY3JlYXRlbGlrZTooZGF0YXI6YW55KT0+dm9pZFxuICAgIGNyZWF0ZXJldHdlZXQ6KGRhdGFyOmFueSk9PnZvaWRcbiAgICBjcmVhdGVjb21tZW50OihkYXRhcjphbnkpPT52b2lkXG4gICAgcmVtb3ZlcmV0d2VldDooZGF0YXI6YW55KT0+dm9pZFxuICAgIHJlbW92ZWxpa2U6KGRhdGFyOmFueSk9PnZvaWRcbiAgICBjcmVhdGVGb2xsb3dpbmc6KGRhdGFyOmFueSk9PnZvaWRcbiAgICBjcmVhdGVGb2xsb3dlcnM6KGRhdGFyOmFueSk9PnZvaWRcbiAgICBwcm9maWxlOmFueVxuICAgIHVzZXI6YW55XG4gICBcbiAgICBcbn0+KHtcbiAgICBcbiAgICByZWdpc3RlcjooKT0+e30sXG4gICAgbG9naW46KCk9Pnt9LFxuICAgIGxvZ291dDooKT0+e30sXG4gICAgdXBkYXRlOigpPT57fSxcbiAgICB1c2VyOnt9LFxuICAgIHByb2ZpbGU6e30sXG4gICAgZ2V0cHJvZmlsZTooKT0+e30sXG4gICAgY3JlYXRlcG9zdDogKGRhdGFyKSA9PiB7fSxcbiAgICBjcmVhdGVsaWtlOigpPT57fSxcbiAgICBjcmVhdGVjb21tZW50OigpPT57fSxcbiAgICByZW1vdmVsaWtlOigpPT57fSxcbiAgICBjcmVhdGVyZXR3ZWV0OigpPT57fSxcbiAgICByZW1vdmVyZXR3ZWV0OigpPT57fSxcbiAgICBjcmVhdGVGb2xsb3dpbmc6KCk9Pnt9LFxuICAgIGNyZWF0ZUZvbGxvd2VyczooKT0+e31cbiAgIFxufSk7XG5cblxuZXhwb3J0IGNvbnN0IEF1dGhQcm92aWRlciA9IChwcm9wczogeyBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlOyB9ICk9PntcbiAgICBjb25zdCBbcG9zdCxzZXRQb3N0XSA9IHVzZVN0YXRlKG51bGwpXG4gICAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGUobnVsbCk7XG4gICAgY29uc3QgW2xpa2UsIHNldExpa2VdID0gdXNlU3RhdGUobnVsbCk7XG4gICAgY29uc3QgW3Byb2ZpbGUsIHNldFByb2ZpbGVdID0gdXNlU3RhdGUobnVsbCk7XG4gICAgY29uc3QgW2NvbW1lbnQsc2V0Q29tbWVudF0gPSB1c2VTdGF0ZShudWxsKTtcbiAgICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKG51bGwpO1xuICAgIGNvbnN0IFtyZXR3ZWV0LHNldFJldHdlZXRdID0gdXNlU3RhdGUobnVsbCk7XG4gICAgY29uc3RbZm9sbG93aW5nLHNldEZvbGxvd2luZ10gPSAgdXNlU3RhdGUobnVsbClcbiAgICBjb25zdFtmb2xsb3dlcnMsc2V0Rm9sbG93ZXJzXSA9ICB1c2VTdGF0ZShudWxsKVxuICAgIFxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG5cbiAgICBhc3luYyBmdW5jdGlvbiBjcmVhdGVGb2xsb3dlcnMoZGF0YXI6YW55KXtcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLnBvc3QoYC9hcGkvY3JlYXRlZm9sbG93ZXJzYCx7XG4gICAgICAgIGRhdGFyXG4gICAgICAgfSlcbiAgICAgIFxuICAgICAgaWYgKHJlcy5kYXRhKSB7XG4gICAgICAgIHNldEZvbGxvd2VycyhyZXMuZGF0YS5mb2xsb3dlcnMpXG4gICAgICAgIFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2V0RXJyb3IoZXJyb3IpXG4gICAgICAgIHNldFByb2ZpbGUobnVsbClcbiAgICAgIH1cbiAgICBcbiAgICBcbiAgICB9XG4gIFxuXG5cblxuICBcbiAgIFxuXG4gIGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUZvbGxvd2luZyhkYXRhcjphbnkpe1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLnBvc3QoYC9hcGkvY3JlYXRlZm9sbG93aW5nYCx7XG4gICAgICBkYXRhclxuICAgICB9KVxuICAgIFxuICAgIGlmIChyZXMuZGF0YSkge1xuICAgICAgc2V0Rm9sbG93aW5nKHJlcy5kYXRhLmZvbGxvd2luZ3MpXG4gICAgICBcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0RXJyb3IoZXJyb3IpXG4gICAgICBzZXRQcm9maWxlKG51bGwpXG4gICAgfVxuICBcbiAgXG4gIH1cblxuXG5cblxuXG4gICAgXG4gIGFzeW5jIGZ1bmN0aW9uIGdldHByb2ZpbGUoKXtcbiAgIFxuICAgIGlmKENvb2tpZXMuZ2V0KCd1c2VyJyk9PXVuZGVmaW5lZCl7XG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgXG5cbiAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoYC9hcGkvcHJvZmlsZWApXG4gICAgXG4gICAgIFxuICAgIFxuICAgICAgaWYgKHJlcy5kYXRhKSB7XG4gICAgICAgIHNldFByb2ZpbGUocmVzLmRhdGEucHJvZmlsZSlcbiAgICAgICAgXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZXRFcnJvcihlcnJvcilcbiAgICAgICAgc2V0UHJvZmlsZShudWxsKVxuICAgICAgfVxuICAgXG4gICAgXG4gIH1cblxuICBcblxuICAgXG5cbiAgICBcbiAgICBhc3luYyBmdW5jdGlvbiBjaGVjaygpe1xuXG4gICAgICBpZihDb29raWVzLmdldCgndXNlcicpPT11bmRlZmluZWQpe1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICBcbiAgICBcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldChgL2FwaS91c2VyYClcbiAgICBcbiAgICAgXG4gICAgXG4gICAgICBpZiAocmVzLmRhdGEpIHtcbiAgICAgICAgc2V0VXNlcihyZXMuZGF0YS51c2VyKVxuICAgICAgICBcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIFxuICAgICAgICBzZXRVc2VyKG51bGwpXG4gICAgICB9XG4gICBcbiAgICB9XG5cbiAgICBhc3luYyBmdW5jdGlvbiB1cGRhdGUoZGF0YXI6YW55KXtcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLnBvc3QoYC9hcGkvdXBkYXRldXNlcmAse1xuICAgICAgIGRhdGFyXG4gICAgICB9KVxuXG4gICAgIFxuICAgIFxuICAgICAgaWYgKHJlcy5kYXRhKSB7XG4gICAgICAgIHNldFVzZXIocmVzLmRhdGEpO1xuICAgICAgICBzZXRQcm9maWxlKHJlcy5kYXRhKVxuICAgICAgICByb3V0ZXIucHVzaCgnLycpXG4gICAgICAgIFxuICAgICAgfWVsc2Uge1xuICAgICAgICAgICAgIFxuICAgICAgICBzZXRFcnJvcihyZXMuZGF0YS5tZXNzYWdlKVxuICAgICAgICBzZXRFcnJvcihudWxsKVxuICAgICAgfVxuICAgIFxuICAgIFxuICAgIH1cbiAgXG4gICAgIFxuICAgIFxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICBcbiAgICAgIGlmKENvb2tpZXMuZ2V0KCd1c2VyJykhPT11bmRlZmluZWQpe1xuICAgICAgICBcbiAgICAgICAgICBjaGVjaygpXG4gICAgICAgICAgXG4gICAgICB9XG4gICAgICAgXG4gICAgfSwgW3VzZXI9PT1udWxsXSlcblxuXG4gIFxuICAgICAgIFxuICAgICBhc3luYyBmdW5jdGlvbiByZWdpc3RlciAodG9rZW46YW55KXtcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MucG9zdChgL2FwaS9yZWdpc3RlcmAsIHtcbiAgICAgICAgICAgIFxuICAgICAgICAgICB0b2tlblxuICAgICAgICAgIH0pXG4gICAgICBcbiAgICAgICAgIFxuICAgICAgICAgIGlmIChyZXMuZGF0YSkge1xuXG4gICAgICAgICAgICBDb29raWVzLnNldCgndXNlcicsIGAke01hdGgucmFuZG9tKCl9YCwgeyBleHBpcmVzOiA3IH0pO1xuXG4gICAgICAgICAgICBcblxuICAgICAgICAgICAgc2V0VXNlcihyZXMuZGF0YSk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHJvdXRlci5wdXNoKFwiL3Byb2ZpbGVtb2RhbFwiKVxuICAgICAgICAgICAgXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICBcbiAgICAgICAgICAgIHNldEVycm9yKHJlcy5kYXRhLm1lc3NhZ2UpXG4gICAgICAgICAgICBzZXRFcnJvcihudWxsKVxuICAgICAgICAgIH1cbiAgICAgICAgXG4gICAgICB9XG5cbiAgICBhc3luYyBmdW5jdGlvbiBjcmVhdGVsaWtlKGRhdGFyOmFueSl7XG5cbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLnBvc3QoYC9hcGkvY3JlYXRlTGlrZWAse1xuICAgICAgICBkYXRhclxuICAgICAgIH0pXG5cbiAgICAgICBpZiAocmVzLmRhdGEpIHtcbiAgICAgICBcbiAgICAgICBzZXRMaWtlKHJlcy5kYXRhKTtcbiAgICAgIFxuICAgICB9IGVsc2Uge1xuICAgICAgICBcbiAgICAgICBzZXRFcnJvcihyZXMuZGF0YS5tZXNzYWdlKVxuICAgICAgIHNldEVycm9yKG51bGwpXG4gICAgIH1cblxuICAgIH1cblxuICAgIGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZXJldHdlZXQoZGF0YXI6YW55KXtcblxuICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MucG9zdChgL2FwaS9jcmVhdGVSZXR3ZWV0YCx7XG4gICAgICAgIGRhdGFyXG4gICAgICAgfSlcblxuICAgICAgIGlmIChyZXMuZGF0YSkge1xuICAgICAgIFxuICAgICAgIHNldFJldHdlZXQocmVzLmRhdGEpO1xuICAgICAgXG4gICAgIH0gZWxzZSB7XG4gICAgICAgIFxuICAgICAgIHNldEVycm9yKHJlcy5kYXRhLm1lc3NhZ2UpXG4gICAgICAgc2V0RXJyb3IobnVsbClcbiAgICAgfVxuXG4gICAgfVxuXG5cblxuXG4gICAgYXN5bmMgZnVuY3Rpb24gcmVtb3ZlcmV0d2VldChkYXRhcjphbnkpe1xuXG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5kZWxldGUoYC9hcGkvcmVtb3ZlUmV0d2VldGAse1xuICAgICAgICBkYXRhOmRhdGFyXG4gICAgICAgfSlcblxuICAgICAgIGlmIChyZXMuZGF0YSkge1xuICAgICAgIFxuICAgICAgIHNldFJldHdlZXQocmVzLmRhdGEpO1xuICAgICAgXG4gICAgIH0gZWxzZSB7XG4gICAgICAgIFxuICAgICAgIHNldEVycm9yKHJlcy5kYXRhLm1lc3NhZ2UpXG4gICAgICAgc2V0RXJyb3IobnVsbClcbiAgICAgfVxuXG4gICAgfVxuXG4gICAgYXN5bmMgZnVuY3Rpb24gcmVtb3ZlbGlrZShkYXRhcjphbnkpe1xuXG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5kZWxldGUoYC9hcGkvcmVtb3ZlTGlrZWAse1xuICAgICAgICBkYXRhOmRhdGFyXG4gICAgICAgfSlcblxuICAgICAgIGlmIChyZXMuZGF0YSkge1xuICAgICAgIFxuICAgICAgIHNldExpa2UocmVzLmRhdGEpO1xuICAgICAgXG4gICAgIH0gZWxzZSB7XG4gICAgICAgIFxuICAgICAgIHNldEVycm9yKHJlcy5kYXRhLm1lc3NhZ2UpXG4gICAgICAgc2V0RXJyb3IobnVsbClcbiAgICAgfVxuXG4gICAgfVxuXG5cblxuXG5cblxuICAgICBhc3luYyBmdW5jdGlvbiBsb2dpbih0b2tlbjphbnkpe1xuICAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MucG9zdChgL2FwaS9sb2dpbmAse1xuICAgICAgICAgICAgIHRva2VuXG4gICAgICAgICB9KVxuICAgIFxuICAgICAgICAgaWYgKHJlcy5kYXRhKSB7XG4gICAgICAgICAgICAgQ29va2llcy5zZXQoJ3VzZXInLCBgJHtNYXRoLnJhbmRvbSgpfWAsIHsgZXhwaXJlczogNyB9KTtcbiAgICAgICAgICAgIHNldFVzZXIocmVzLmRhdGEpXG4gICAgICAgICAgIFxuICAgICAgICAgICBcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgIFxuICAgICAgICAgICAgc2V0RXJyb3IocmVzLmRhdGEubWVzc2FnZSlcbiAgICAgICAgICAgIHNldEVycm9yKG51bGwpXG4gICAgICAgICAgfVxuICAgIFxuICAgIH1cblxuXG4gICAgYXN5bmMgZnVuY3Rpb24gbG9nb3V0ICgpIHtcbiAgICAgXG4gICAgICBDb29raWVzLnJlbW92ZShcInRva2VuXCIpO1xuICAgICAgQ29va2llcy5yZW1vdmUoXCJ1c2VyXCIpO1xuICAgICBcbiAgICAgICAgc2V0VXNlcihudWxsKVxuICAgICAgICByb3V0ZXIucHVzaCgnLycpXG4gICAgICBcbiAgICB9XG4gIFxuICAgIFxuXG5cbiAgICBhc3luYyBmdW5jdGlvbiBjcmVhdGVwb3N0KGRhdGFyOmFueSl7XG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5wb3N0KGAvYXBpL2NyZWF0ZXBvc3RgLHtcbiAgICAgICBkYXRhclxuICAgICAgfSlcblxuICAgICAgICBcbiAgICAgXG4gICAgXG4gICAgICBpZiAocmVzLmRhdGEpIHtcbiAgICAgICAgc2V0UG9zdChyZXMuZGF0YSlcbiAgICAgICAgcm91dGVyLnB1c2goJy8nKVxuICAgICAgICBcbiAgICAgIH1lbHNlIHtcbiAgICAgICAgICAgICBcbiAgICAgICAgc2V0RXJyb3IocmVzLmRhdGEubWVzc2FnZSlcbiAgICAgICAgc2V0RXJyb3IobnVsbClcbiAgICAgIH1cbiAgICBcbiAgICBcbiAgICB9XG5cblxuICAgIGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZWNvbW1lbnQoZGF0YXI6YW55KXtcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLnBvc3QoYC9hcGkvY3JlYXRlY29tbWVudGAse1xuICAgICAgICBkYXRhclxuICAgICAgfSk7XG4gICAgICBcbiAgICAgIGlmIChyZXMuZGF0YSkge1xuICAgICAgICBzZXRDb21tZW50KHJlcy5kYXRhKVxuICAgICAgICBcbiAgICAgICAgXG4gICAgICB9ZWxzZSB7XG4gICAgICAgICAgICAgXG4gICAgICAgIHNldEVycm9yKHJlcy5kYXRhLm1lc3NhZ2UpXG4gICAgICAgIHNldEVycm9yKG51bGwpXG4gICAgICB9XG4gICAgXG4gICAgcmV0dXJuIHJlcy5kYXRhO1xuICAgIFxuICAgIH1cblxuICAgIFxuXG4gICAgcmV0dXJuKFxuICAgICAgICA8QXV0aENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3tyZWdpc3Rlcixsb2dpbixsb2dvdXQsdXNlcix1cGRhdGUsZ2V0cHJvZmlsZSxwcm9maWxlLGNyZWF0ZXBvc3QsY3JlYXRlbGlrZSxjcmVhdGVjb21tZW50LHJlbW92ZWxpa2UsY3JlYXRlcmV0d2VldCxyZW1vdmVyZXR3ZWV0LGNyZWF0ZUZvbGxvd2luZyxjcmVhdGVGb2xsb3dlcnN9fT5cbiAgICAgICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgPC9BdXRoQ29udGV4dC5Qcm92aWRlcj5cbiAgICAgICAgKTtcblxuXG5cbn07XG5cbmV4cG9ydCBjb25zdCB1c2VTdG9yZSA9ICgpID0+IHVzZUNvbnRleHQoQXV0aENvbnRleHQpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./context/Auth.tsx\n");

/***/ })

};
;