/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/landing",{

/***/ "./components/Header/Header.js":
/*!*************************************!*\
  !*** ./components/Header/Header.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_Fernz_Desktop_merchNextJs_merch_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ \"./node_modules/@material-ui/core/esm/styles/index.js\");\n/* harmony import */ var _styles_components_Header_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../styles/components/Header.module.css */ \"./styles/components/Header.module.css\");\n/* harmony import */ var _styles_components_Header_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_components_Header_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/AppBar */ \"./node_modules/@material-ui/core/esm/AppBar/index.js\");\n/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Button */ \"./node_modules/@material-ui/core/esm/Button/index.js\");\n/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Toolbar */ \"./node_modules/@material-ui/core/esm/Toolbar/index.js\");\n/* harmony import */ var _material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Hidden */ \"./node_modules/@material-ui/core/esm/Hidden/index.js\");\n/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/icons/Menu */ \"./node_modules/@material-ui/icons/Menu.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _jsxFileName = \"/Users/Fernz./Desktop/merchNextJs/merch/components/Header/Header.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n // @material-ui/core components\n\n // Styles \n\n // Naterial core imports\n\n\n\n\n\n\n // Material icons\n\n\nvar useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__.makeStyles)((_styles_components_Header_module_css__WEBPACK_IMPORTED_MODULE_5___default())); // Header React Component\n\nvar Header = function Header(props) {\n  _s();\n\n  // Hook for mobile-open state\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2___default().useState(false),\n      _React$useState2 = (0,_Users_Fernz_Desktop_merchNextJs_merch_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.default)(_React$useState, 2),\n      mobileOpen = _React$useState2[0],\n      setMobileOpen = _React$useState2[1]; // Hook useEffect\n\n\n  react__WEBPACK_IMPORTED_MODULE_2___default().useEffect(function () {\n    if (props.changeColorOnScroll) {\n      window.addEventListener(\"scroll\", headerColorChange);\n    }\n\n    return function cleanup() {\n      if (props.changeColorOnScroll) {\n        window.removeEventListener(\"scroll\", headerColorChange);\n      }\n    };\n  }); // Method handleDrawerToggle\n\n  var handleDrawerToggle = function handleDrawerToggle() {\n    setMobileOpen(!mobileOpen);\n  }; // Method headerColorChange\n\n\n  var headerColorChange = function headerColorChange() {\n    // Hook to store color\n    var color = props.color,\n        changeColorOnScroll = props.changeColorOnScroll;\n    var windowsScrollTop = window.pageYOffset;\n\n    if (windowsScrollTop > changeColorOnScroll.height) {\n      document.body.getElementsByTagName(\"header\")[0].classList.remove(classes[color]);\n      document.body.getElementsByTagName(\"header\")[0].classList.add(classes[changeColorOnScroll.color]);\n    } else {\n      document.body.getElementsByTagName(\"header\")[0].classList.add(classes[color]);\n      document.body.getElementsByTagName(\"header\")[0].classList.remove(classes[changeColorOnScroll.color]);\n    }\n  }; // Props stored \n\n\n  var color = props.color,\n      rightLinks = props.rightLinks,\n      leftLinks = props.leftLinks,\n      brand = props.brand,\n      fixed = props.fixed,\n      absolute = props.absolute; // Brand component\n\n  var brandComponent = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n    href: \"/\",\n    as: \"/\",\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6__.default, {\n      className: (_styles_components_Header_module_css__WEBPACK_IMPORTED_MODULE_5___default().title),\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n        children: brand\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 64,\n        columnNumber: 46\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 13\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 63,\n    columnNumber: 9\n  }, _this);\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_7__.default, {\n    className: (_styles_components_Header_module_css__WEBPACK_IMPORTED_MODULE_5___default().appBarCabeza),\n    position: \"fixed\",\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_8__.default, {\n      className: (_styles_components_Header_module_css__WEBPACK_IMPORTED_MODULE_5___default().container),\n      children: [leftLinks !== undefined ? brandComponent : null, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_components_Header_module_css__WEBPACK_IMPORTED_MODULE_5___default().flex),\n        children: leftLinks !== undefined ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_9__.default, {\n          smDown: true,\n          implementation: \"css\",\n          children: leftLinks\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 74,\n          columnNumber: 25\n        }, _this) : brandComponent\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 72,\n        columnNumber: 17\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_9__.default, {\n        smDown: true,\n        implementation: \"css\",\n        children: rightLinks\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 82,\n        columnNumber: 17\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_9__.default, {\n        mdUp: true,\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(IconButton, {\n          color: \"inherit\",\n          \"aria-label\": \"open drawer\",\n          onClick: handleDrawerToggle,\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_10__.default, {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 91,\n            columnNumber: 25\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 86,\n          columnNumber: 21\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 85,\n        columnNumber: 17\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 70,\n      columnNumber: 13\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 69,\n    columnNumber: 9\n  }, _this);\n};\n\n_s(Header, \"XcGR/hCHBQqXrANAPEWjtAqF5p8=\");\n\n_c = Header;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\n\nvar _c;\n\n$RefreshReg$(_c, \"Header\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9IZWFkZXIvSGVhZGVyLmpzP2YzMWUiXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInN0eWxlcyIsIkhlYWRlciIsInByb3BzIiwiUmVhY3QiLCJtb2JpbGVPcGVuIiwic2V0TW9iaWxlT3BlbiIsImNoYW5nZUNvbG9yT25TY3JvbGwiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwiaGVhZGVyQ29sb3JDaGFuZ2UiLCJjbGVhbnVwIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImhhbmRsZURyYXdlclRvZ2dsZSIsImNvbG9yIiwid2luZG93c1Njcm9sbFRvcCIsInBhZ2VZT2Zmc2V0IiwiaGVpZ2h0IiwiZG9jdW1lbnQiLCJib2R5IiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJjbGFzc2VzIiwiYWRkIiwicmlnaHRMaW5rcyIsImxlZnRMaW5rcyIsImJyYW5kIiwiZml4ZWQiLCJhYnNvbHV0ZSIsImJyYW5kQ29tcG9uZW50IiwidW5kZWZpbmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtDQUVBOztDQUVBOztDQUVBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Q0FFQTs7QUFDQTtBQUVBLElBQU1BLFNBQVMsR0FBR0Msb0VBQVUsQ0FBQ0MsNkVBQUQsQ0FBNUIsQyxDQUNBOztBQUNBLElBQU1DLE1BQU0sR0FBRyxTQUFUQSxNQUFTLENBQUNDLEtBQUQsRUFBVztBQUFBOztBQUV0QjtBQUZzQix3QkFHY0MscURBQUEsQ0FBZSxLQUFmLENBSGQ7QUFBQTtBQUFBLE1BR2ZDLFVBSGU7QUFBQSxNQUdIQyxhQUhHLHdCQUl0Qjs7O0FBQ0FGLHdEQUFBLENBQWdCLFlBQU07QUFDbEIsUUFBSUQsS0FBSyxDQUFDSSxtQkFBVixFQUErQjtBQUMzQkMsWUFBTSxDQUFDQyxnQkFBUCxDQUF3QixRQUF4QixFQUFrQ0MsaUJBQWxDO0FBQ0g7O0FBQ0QsV0FBTyxTQUFTQyxPQUFULEdBQW1CO0FBQ3RCLFVBQUlSLEtBQUssQ0FBQ0ksbUJBQVYsRUFBK0I7QUFDM0JDLGNBQU0sQ0FBQ0ksbUJBQVAsQ0FBMkIsUUFBM0IsRUFBcUNGLGlCQUFyQztBQUNIO0FBQ0osS0FKRDtBQUtILEdBVEQsRUFMc0IsQ0FldEI7O0FBQ0EsTUFBTUcsa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFxQixHQUFNO0FBQzdCUCxpQkFBYSxDQUFDLENBQUNELFVBQUYsQ0FBYjtBQUNILEdBRkQsQ0FoQnNCLENBbUJ0Qjs7O0FBQ0EsTUFBTUssaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQixHQUFNO0FBQzVCO0FBRDRCLFFBRXBCSSxLQUZvQixHQUVXWCxLQUZYLENBRXBCVyxLQUZvQjtBQUFBLFFBRWJQLG1CQUZhLEdBRVdKLEtBRlgsQ0FFYkksbUJBRmE7QUFHNUIsUUFBTVEsZ0JBQWdCLEdBQUdQLE1BQU0sQ0FBQ1EsV0FBaEM7O0FBQ0EsUUFBSUQsZ0JBQWdCLEdBQUdSLG1CQUFtQixDQUFDVSxNQUEzQyxFQUFtRDtBQUMvQ0MsY0FBUSxDQUFDQyxJQUFULENBQ0tDLG9CQURMLENBQzBCLFFBRDFCLEVBQ29DLENBRHBDLEVBRUtDLFNBRkwsQ0FFZUMsTUFGZixDQUVzQkMsT0FBTyxDQUFDVCxLQUFELENBRjdCO0FBR0FJLGNBQVEsQ0FBQ0MsSUFBVCxDQUNLQyxvQkFETCxDQUMwQixRQUQxQixFQUNvQyxDQURwQyxFQUVLQyxTQUZMLENBRWVHLEdBRmYsQ0FFbUJELE9BQU8sQ0FBQ2hCLG1CQUFtQixDQUFDTyxLQUFyQixDQUYxQjtBQUdILEtBUEQsTUFPTztBQUNISSxjQUFRLENBQUNDLElBQVQsQ0FDS0Msb0JBREwsQ0FDMEIsUUFEMUIsRUFDb0MsQ0FEcEMsRUFFS0MsU0FGTCxDQUVlRyxHQUZmLENBRW1CRCxPQUFPLENBQUNULEtBQUQsQ0FGMUI7QUFHQUksY0FBUSxDQUFDQyxJQUFULENBQ0tDLG9CQURMLENBQzBCLFFBRDFCLEVBQ29DLENBRHBDLEVBRUtDLFNBRkwsQ0FFZUMsTUFGZixDQUVzQkMsT0FBTyxDQUFDaEIsbUJBQW1CLENBQUNPLEtBQXJCLENBRjdCO0FBR0g7QUFDSixHQW5CRCxDQXBCc0IsQ0F3Q3RCOzs7QUF4Q3NCLE1BeUNkQSxLQXpDYyxHQXlDMkNYLEtBekMzQyxDQXlDZFcsS0F6Q2M7QUFBQSxNQXlDUFcsVUF6Q08sR0F5QzJDdEIsS0F6QzNDLENBeUNQc0IsVUF6Q087QUFBQSxNQXlDS0MsU0F6Q0wsR0F5QzJDdkIsS0F6QzNDLENBeUNLdUIsU0F6Q0w7QUFBQSxNQXlDZ0JDLEtBekNoQixHQXlDMkN4QixLQXpDM0MsQ0F5Q2dCd0IsS0F6Q2hCO0FBQUEsTUF5Q3VCQyxLQXpDdkIsR0F5QzJDekIsS0F6QzNDLENBeUN1QnlCLEtBekN2QjtBQUFBLE1BeUM4QkMsUUF6QzlCLEdBeUMyQzFCLEtBekMzQyxDQXlDOEIwQixRQXpDOUIsRUEwQ3RCOztBQUNBLE1BQU1DLGNBQWMsZ0JBQ2hCLDhEQUFDLGtEQUFEO0FBQU0sUUFBSSxFQUFDLEdBQVg7QUFBZSxNQUFFLEVBQUMsR0FBbEI7QUFBQSwyQkFDSSw4REFBQyw2REFBRDtBQUFRLGVBQVMsRUFBRTdCLG1GQUFuQjtBQUFBLDZCQUFpQztBQUFBLGtCQUFLMEI7QUFBTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7O0FBS0Esc0JBRUksOERBQUMsNkRBQUQ7QUFBUSxhQUFTLEVBQUUxQiwwRkFBbkI7QUFBd0MsWUFBUSxFQUFDLE9BQWpEO0FBQUEsMkJBQ0ksOERBQUMsOERBQUQ7QUFBUyxlQUFTLEVBQUVBLHVGQUFwQjtBQUFBLGlCQUNLeUIsU0FBUyxLQUFLSyxTQUFkLEdBQTBCRCxjQUExQixHQUEyQyxJQURoRCxlQUVJO0FBQUssaUJBQVMsRUFBRTdCLGtGQUFoQjtBQUFBLGtCQUNLeUIsU0FBUyxLQUFLSyxTQUFkLGdCQUNHLDhEQUFDLDZEQUFEO0FBQVEsZ0JBQU0sTUFBZDtBQUFlLHdCQUFjLEVBQUMsS0FBOUI7QUFBQSxvQkFDS0w7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURILEdBS0dJO0FBTlI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZKLGVBWUksOERBQUMsNkRBQUQ7QUFBUSxjQUFNLE1BQWQ7QUFBZSxzQkFBYyxFQUFDLEtBQTlCO0FBQUEsa0JBQ0tMO0FBREw7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVpKLGVBZUksOERBQUMsNkRBQUQ7QUFBUSxZQUFJLE1BQVo7QUFBQSwrQkFDSSw4REFBQyxVQUFEO0FBQ0ksZUFBSyxFQUFDLFNBRFY7QUFFSSx3QkFBVyxhQUZmO0FBR0ksaUJBQU8sRUFBRVosa0JBSGI7QUFBQSxpQ0FLSSw4REFBQyw2REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFmSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBRko7QUErQkgsQ0EvRUQ7O0dBQU1YLE07O0tBQUFBLE07QUFpRk4sK0RBQWVBLE1BQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL0hlYWRlci9IZWFkZXIuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG4vLyBAbWF0ZXJpYWwtdWkvY29yZSBjb21wb25lbnRzXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xuLy8gU3R5bGVzIFxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi8uLi9zdHlsZXMvY29tcG9uZW50cy9IZWFkZXIubW9kdWxlLmNzcyc7XG4vLyBOYXRlcmlhbCBjb3JlIGltcG9ydHNcbmltcG9ydCBBcHBCYXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQXBwQmFyJ1xuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uXCI7XG5pbXBvcnQgRHJhd2VyIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9EcmF3ZXJcIjtcbmltcG9ydCBUb29sYmFyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1Rvb2xiYXInXG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5J1xuaW1wb3J0IEhpZGRlbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvSGlkZGVuXCI7XG4vLyBNYXRlcmlhbCBpY29uc1xuaW1wb3J0IE1lbnUgZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9NZW51XCI7XG5cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoc3R5bGVzKTtcbi8vIEhlYWRlciBSZWFjdCBDb21wb25lbnRcbmNvbnN0IEhlYWRlciA9IChwcm9wcykgPT4ge1xuXG4gICAgLy8gSG9vayBmb3IgbW9iaWxlLW9wZW4gc3RhdGVcbiAgICBjb25zdCBbbW9iaWxlT3Blbiwgc2V0TW9iaWxlT3Blbl0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XG4gICAgLy8gSG9vayB1c2VFZmZlY3RcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZiAocHJvcHMuY2hhbmdlQ29sb3JPblNjcm9sbCkge1xuICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgaGVhZGVyQ29sb3JDaGFuZ2UpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiBjbGVhbnVwKCkge1xuICAgICAgICAgICAgaWYgKHByb3BzLmNoYW5nZUNvbG9yT25TY3JvbGwpIHtcbiAgICAgICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBoZWFkZXJDb2xvckNoYW5nZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfSk7XG4gICAgLy8gTWV0aG9kIGhhbmRsZURyYXdlclRvZ2dsZVxuICAgIGNvbnN0IGhhbmRsZURyYXdlclRvZ2dsZSA9ICgpID0+IHtcbiAgICAgICAgc2V0TW9iaWxlT3BlbighbW9iaWxlT3Blbik7XG4gICAgfTtcbiAgICAvLyBNZXRob2QgaGVhZGVyQ29sb3JDaGFuZ2VcbiAgICBjb25zdCBoZWFkZXJDb2xvckNoYW5nZSA9ICgpID0+IHtcbiAgICAgICAgLy8gSG9vayB0byBzdG9yZSBjb2xvclxuICAgICAgICBjb25zdCB7IGNvbG9yLCBjaGFuZ2VDb2xvck9uU2Nyb2xsIH0gPSBwcm9wcztcbiAgICAgICAgY29uc3Qgd2luZG93c1Njcm9sbFRvcCA9IHdpbmRvdy5wYWdlWU9mZnNldDtcbiAgICAgICAgaWYgKHdpbmRvd3NTY3JvbGxUb3AgPiBjaGFuZ2VDb2xvck9uU2Nyb2xsLmhlaWdodCkge1xuICAgICAgICAgICAgZG9jdW1lbnQuYm9keVxuICAgICAgICAgICAgICAgIC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImhlYWRlclwiKVswXVxuICAgICAgICAgICAgICAgIC5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzZXNbY29sb3JdKTtcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHlcbiAgICAgICAgICAgICAgICAuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJoZWFkZXJcIilbMF1cbiAgICAgICAgICAgICAgICAuY2xhc3NMaXN0LmFkZChjbGFzc2VzW2NoYW5nZUNvbG9yT25TY3JvbGwuY29sb3JdKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHlcbiAgICAgICAgICAgICAgICAuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJoZWFkZXJcIilbMF1cbiAgICAgICAgICAgICAgICAuY2xhc3NMaXN0LmFkZChjbGFzc2VzW2NvbG9yXSk7XG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5XG4gICAgICAgICAgICAgICAgLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaGVhZGVyXCIpWzBdXG4gICAgICAgICAgICAgICAgLmNsYXNzTGlzdC5yZW1vdmUoY2xhc3Nlc1tjaGFuZ2VDb2xvck9uU2Nyb2xsLmNvbG9yXSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8vIFByb3BzIHN0b3JlZCBcbiAgICBjb25zdCB7IGNvbG9yLCByaWdodExpbmtzLCBsZWZ0TGlua3MsIGJyYW5kLCBmaXhlZCwgYWJzb2x1dGUgfSA9IHByb3BzO1xuICAgIC8vIEJyYW5kIGNvbXBvbmVudFxuICAgIGNvbnN0IGJyYW5kQ29tcG9uZW50ID0gKFxuICAgICAgICA8TGluayBocmVmPVwiL1wiIGFzPVwiL1wiPlxuICAgICAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0+PGgxPnticmFuZH08L2gxPjwvQnV0dG9uPlxuICAgICAgICA8L0xpbms+XG4gICAgKTtcbiAgICByZXR1cm4gKFxuXG4gICAgICAgIDxBcHBCYXIgY2xhc3NOYW1lPXtzdHlsZXMuYXBwQmFyQ2FiZXphfSBwb3NpdGlvbj1cImZpeGVkXCI+XG4gICAgICAgICAgICA8VG9vbGJhciBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgICAgICAgICAgIHtsZWZ0TGlua3MgIT09IHVuZGVmaW5lZCA/IGJyYW5kQ29tcG9uZW50IDogbnVsbH1cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZsZXh9PlxuICAgICAgICAgICAgICAgICAgICB7bGVmdExpbmtzICE9PSB1bmRlZmluZWQgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8SGlkZGVuIHNtRG93biBpbXBsZW1lbnRhdGlvbj1cImNzc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtsZWZ0TGlua3N9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0hpZGRlbj5cbiAgICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyYW5kQ29tcG9uZW50XG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgey8qIEhpZGRlbiBjb21wb25lbnQgKi99XG4gICAgICAgICAgICAgICAgPEhpZGRlbiBzbURvd24gaW1wbGVtZW50YXRpb249XCJjc3NcIj5cbiAgICAgICAgICAgICAgICAgICAge3JpZ2h0TGlua3N9XG4gICAgICAgICAgICAgICAgPC9IaWRkZW4+XG4gICAgICAgICAgICAgICAgPEhpZGRlbiBtZFVwPlxuICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJpbmhlcml0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJvcGVuIGRyYXdlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVEcmF3ZXJUb2dnbGV9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51IC8+XG4gICAgICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cbiAgICAgICAgICAgICAgICA8L0hpZGRlbj5cbiAgICAgICAgICAgIDwvVG9vbGJhcj5cbiAgICAgICAgPC9BcHBCYXI+XG5cbiAgICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Header/Header.js\n");

/***/ })

});