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
exports.id = "pages/landing";
exports.ids = ["pages/landing"];
exports.modules = {

/***/ "./components/Header/Header.js":
/*!*************************************!*\
  !*** ./components/Header/Header.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ \"./node_modules/@material-ui/core/esm/styles/index.js\");\n/* harmony import */ var _styles_components_Header_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../styles/components/Header.module.css */ \"./styles/components/Header.module.css\");\n/* harmony import */ var _styles_components_Header_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_components_Header_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/AppBar */ \"./node_modules/@material-ui/core/esm/AppBar/index.js\");\n/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Button */ \"./node_modules/@material-ui/core/esm/Button/index.js\");\n/* harmony import */ var _material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/Drawer */ \"./node_modules/@material-ui/core/esm/Drawer/index.js\");\n/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Toolbar */ \"./node_modules/@material-ui/core/esm/Toolbar/index.js\");\n/* harmony import */ var _material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Hidden */ \"./node_modules/@material-ui/core/esm/Hidden/index.js\");\n/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/IconButton */ \"./node_modules/@material-ui/core/esm/IconButton/index.js\");\n/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons/Menu */ \"@material-ui/icons/Menu\");\n/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _jsxFileName = \"/Users/Fernz./Desktop/merchNextJs/merch/components/Header/Header.js\";\n\n // Styles \n\n\n // Naterial core imports\n\n\n\n\n\n\n\n // Material icons\n\n\nconst useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__.makeStyles)((_styles_components_Header_module_css__WEBPACK_IMPORTED_MODULE_5___default())); // Header React Component\n\nconst Header = props => {\n  // Hook for mobile-open state\n  const [mobileOpen, setMobileOpen] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false); // Hook useEffect\n\n  react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(() => {\n    if (props.changeColorOnScroll) {\n      window.addEventListener(\"scroll\", headerColorChange);\n    }\n\n    return function cleanup() {\n      if (props.changeColorOnScroll) {\n        window.removeEventListener(\"scroll\", headerColorChange);\n      }\n    };\n  }); // Method handleDrawerToggle\n\n  const handleDrawerToggle = () => {\n    setMobileOpen(!mobileOpen);\n  }; // Method headerColorChange\n\n\n  const headerColorChange = () => {\n    // Hook to store color\n    const {\n      color,\n      changeColorOnScroll\n    } = props;\n    const windowsScrollTop = window.pageYOffset;\n\n    if (windowsScrollTop > changeColorOnScroll.height) {\n      document.body.getElementsByTagName(\"header\")[0].classList.remove(classes[color]);\n      document.body.getElementsByTagName(\"header\")[0].classList.add(classes[changeColorOnScroll.color]);\n    } else {\n      document.body.getElementsByTagName(\"header\")[0].classList.add(classes[color]);\n      document.body.getElementsByTagName(\"header\")[0].classList.remove(classes[changeColorOnScroll.color]);\n    }\n  }; // Props stored \n\n\n  const {\n    color,\n    rightLinks,\n    leftLinks,\n    brand,\n    fixed,\n    absolute\n  } = props; // Brand component\n\n  const brandComponent = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n    href: \"/\",\n    as: \"/\",\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6__.default, {\n      className: (_styles_components_Header_module_css__WEBPACK_IMPORTED_MODULE_5___default().title),\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n        children: brand\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 65,\n        columnNumber: 46\n      }, undefined)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 13\n    }, undefined)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 64,\n    columnNumber: 9\n  }, undefined);\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_7__.default, {\n    className: (_styles_components_Header_module_css__WEBPACK_IMPORTED_MODULE_5___default().appBarCabeza),\n    position: \"fixed\",\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_8__.default, {\n      className: (_styles_components_Header_module_css__WEBPACK_IMPORTED_MODULE_5___default().container),\n      children: [leftLinks !== undefined ? brandComponent : null, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_components_Header_module_css__WEBPACK_IMPORTED_MODULE_5___default().flex),\n        children: leftLinks !== undefined ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_9__.default, {\n          smDown: true,\n          implementation: \"css\",\n          children: leftLinks\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 75,\n          columnNumber: 25\n        }, undefined) : brandComponent\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 73,\n        columnNumber: 17\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_9__.default, {\n        smDown: true,\n        implementation: \"css\",\n        children: rightLinks\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 83,\n        columnNumber: 17\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_9__.default, {\n        mdUp: true,\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_10__.default, {\n          color: \"inherit\",\n          \"aria-label\": \"open drawer\",\n          onClick: handleDrawerToggle,\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_3___default()), {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 92,\n            columnNumber: 25\n          }, undefined)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 87,\n          columnNumber: 21\n        }, undefined)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 86,\n        columnNumber: 17\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 71,\n      columnNumber: 13\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_9__.default, {\n      mdUp: true,\n      implementation: \"js\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_11__.default, {\n        variant: \"temporary\",\n        anchor: \"right\",\n        open: mobileOpen,\n        classes: {\n          paper: (_styles_components_Header_module_css__WEBPACK_IMPORTED_MODULE_5___default().drawerPaper)\n        },\n        onClose: handleDrawerToggle,\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          className: (_styles_components_Header_module_css__WEBPACK_IMPORTED_MODULE_5___default().appResponsive),\n          children: [leftLinks, rightLinks]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 108,\n          columnNumber: 21\n        }, undefined)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 99,\n        columnNumber: 17\n      }, undefined)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 98,\n      columnNumber: 13\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 70,\n    columnNumber: 9\n  }, undefined);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tZXJjaGFuZGlzZS8uL2NvbXBvbmVudHMvSGVhZGVyL0hlYWRlci5qcz9mMzFlIl0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJzdHlsZXMiLCJIZWFkZXIiLCJwcm9wcyIsIm1vYmlsZU9wZW4iLCJzZXRNb2JpbGVPcGVuIiwiUmVhY3QiLCJjaGFuZ2VDb2xvck9uU2Nyb2xsIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsImhlYWRlckNvbG9yQ2hhbmdlIiwiY2xlYW51cCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJoYW5kbGVEcmF3ZXJUb2dnbGUiLCJjb2xvciIsIndpbmRvd3NTY3JvbGxUb3AiLCJwYWdlWU9mZnNldCIsImhlaWdodCIsImRvY3VtZW50IiwiYm9keSIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiY2xhc3NlcyIsImFkZCIsInJpZ2h0TGlua3MiLCJsZWZ0TGlua3MiLCJicmFuZCIsImZpeGVkIiwiYWJzb2x1dGUiLCJicmFuZENvbXBvbmVudCIsInVuZGVmaW5lZCIsInBhcGVyIiwiZHJhd2VyUGFwZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Q0FFQTs7QUFDQTtDQUVBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtDQUdBOztBQUNBO0FBRUEsTUFBTUEsU0FBUyxHQUFHQyxvRUFBVSxDQUFDQyw2RUFBRCxDQUE1QixDLENBQ0E7O0FBQ0EsTUFBTUMsTUFBTSxHQUFJQyxLQUFELElBQVc7QUFFdEI7QUFDQSxRQUFNLENBQUNDLFVBQUQsRUFBYUMsYUFBYixJQUE4QkMscURBQUEsQ0FBZSxLQUFmLENBQXBDLENBSHNCLENBSXRCOztBQUNBQSx3REFBQSxDQUFnQixNQUFNO0FBQ2xCLFFBQUlILEtBQUssQ0FBQ0ksbUJBQVYsRUFBK0I7QUFDM0JDLFlBQU0sQ0FBQ0MsZ0JBQVAsQ0FBd0IsUUFBeEIsRUFBa0NDLGlC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QUssRUFBQyxTQURWO0FBRUksd0JBQVcsYUFGZjtBQUdJLGlCQUFPLEVBQUVaLGtCQUhiO0FBQUEsaUNBS0ksOERBQUMsZ0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUxKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQWZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFESixlQTRCSSw4REFBQyw2REFBRDtBQUFRLFVBQUksTUFBWjtBQUFhLG9CQUFjLEVBQUMsSUFBNUI7QUFBQSw2QkFDSSw4REFBQyw4REFBRDtBQUNJLGVBQU8sRUFBQyxXQURaO0FBRUksY0FBTSxFQUFFLE9BRlo7QUFHSSxZQUFJLEVBQUVULFVBSFY7QUFJSSxlQUFPLEVBQUU7QUFDTDRCLGVBQUssRUFBRS9CLHlGQUFrQmdDO0FBRHBCLFNBSmI7QUFPSSxlQUFPLEVBQUVwQixrQkFQYjtBQUFBLCtCQVNJO0FBQUssbUJBQVMsRUFBRVosMkZBQWhCO0FBQUEscUJBQ0t5QixTQURMLEVBRUtELFVBRkw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBVEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBNUJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZKO0FBaURILENBakdEOztBQW1HQSwrREFBZXZCLE1BQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL0hlYWRlci9IZWFkZXIuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG4vLyBTdHlsZXMgXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi8uLi9zdHlsZXMvY29tcG9uZW50cy9IZWFkZXIubW9kdWxlLmNzcyc7XG4vLyBOYXRlcmlhbCBjb3JlIGltcG9ydHNcbmltcG9ydCBBcHBCYXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQXBwQmFyJ1xuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uXCI7XG5pbXBvcnQgRHJhd2VyIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9EcmF3ZXJcIjtcbmltcG9ydCBUb29sYmFyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1Rvb2xiYXInXG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5J1xuaW1wb3J0IEhpZGRlbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvSGlkZGVuXCI7XG5pbXBvcnQgSWNvbkJ1dHRvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvSWNvbkJ1dHRvblwiO1xuXG4vLyBNYXRlcmlhbCBpY29uc1xuaW1wb3J0IE1lbnUgZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9NZW51XCI7XG5cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoc3R5bGVzKTtcbi8vIEhlYWRlciBSZWFjdCBDb21wb25lbnRcbmNvbnN0IEhlYWRlciA9IChwcm9wcykgPT4ge1xuXG4gICAgLy8gSG9vayBmb3IgbW9iaWxlLW9wZW4gc3RhdGVcbiAgICBjb25zdCBbbW9iaWxlT3Blbiwgc2V0TW9iaWxlT3Blbl0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XG4gICAgLy8gSG9vayB1c2VFZmZlY3RcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZiAocHJvcHMuY2hhbmdlQ29sb3JPblNjcm9sbCkge1xuICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgaGVhZGVyQ29sb3JDaGFuZ2UpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiBjbGVhbnVwKCkge1xuICAgICAgICAgICAgaWYgKHByb3BzLmNoYW5nZUNvbG9yT25TY3JvbGwpIHtcbiAgICAgICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBoZWFkZXJDb2xvckNoYW5nZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfSk7XG4gICAgLy8gTWV0aG9kIGhhbmRsZURyYXdlclRvZ2dsZVxuICAgIGNvbnN0IGhhbmRsZURyYXdlclRvZ2dsZSA9ICgpID0+IHtcbiAgICAgICAgc2V0TW9iaWxlT3BlbighbW9iaWxlT3Blbik7XG4gICAgfTtcbiAgICAvLyBNZXRob2QgaGVhZGVyQ29sb3JDaGFuZ2VcbiAgICBjb25zdCBoZWFkZXJDb2xvckNoYW5nZSA9ICgpID0+IHtcbiAgICAgICAgLy8gSG9vayB0byBzdG9yZSBjb2xvclxuICAgICAgICBjb25zdCB7IGNvbG9yLCBjaGFuZ2VDb2xvck9uU2Nyb2xsIH0gPSBwcm9wcztcbiAgICAgICAgY29uc3Qgd2luZG93c1Njcm9sbFRvcCA9IHdpbmRvdy5wYWdlWU9mZnNldDtcbiAgICAgICAgaWYgKHdpbmRvd3NTY3JvbGxUb3AgPiBjaGFuZ2VDb2xvck9uU2Nyb2xsLmhlaWdodCkge1xuICAgICAgICAgICAgZG9jdW1lbnQuYm9keVxuICAgICAgICAgICAgICAgIC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImhlYWRlclwiKVswXVxuICAgICAgICAgICAgICAgIC5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzZXNbY29sb3JdKTtcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHlcbiAgICAgICAgICAgICAgICAuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJoZWFkZXJcIilbMF1cbiAgICAgICAgICAgICAgICAuY2xhc3NMaXN0LmFkZChjbGFzc2VzW2NoYW5nZUNvbG9yT25TY3JvbGwuY29sb3JdKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHlcbiAgICAgICAgICAgICAgICAuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJoZWFkZXJcIilbMF1cbiAgICAgICAgICAgICAgICAuY2xhc3NMaXN0LmFkZChjbGFzc2VzW2NvbG9yXSk7XG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5XG4gICAgICAgICAgICAgICAgLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaGVhZGVyXCIpWzBdXG4gICAgICAgICAgICAgICAgLmNsYXNzTGlzdC5yZW1vdmUoY2xhc3Nlc1tjaGFuZ2VDb2xvck9uU2Nyb2xsLmNvbG9yXSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8vIFByb3BzIHN0b3JlZCBcbiAgICBjb25zdCB7IGNvbG9yLCByaWdodExpbmtzLCBsZWZ0TGlua3MsIGJyYW5kLCBmaXhlZCwgYWJzb2x1dGUgfSA9IHByb3BzO1xuICAgIC8vIEJyYW5kIGNvbXBvbmVudFxuICAgIGNvbnN0IGJyYW5kQ29tcG9uZW50ID0gKFxuICAgICAgICA8TGluayBocmVmPVwiL1wiIGFzPVwiL1wiPlxuICAgICAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0+PGgxPnticmFuZH08L2gxPjwvQnV0dG9uPlxuICAgICAgICA8L0xpbms+XG4gICAgKTtcbiAgICByZXR1cm4gKFxuXG4gICAgICAgIDxBcHBCYXIgY2xhc3NOYW1lPXtzdHlsZXMuYXBwQmFyQ2FiZXphfSBwb3NpdGlvbj1cImZpeGVkXCI+XG4gICAgICAgICAgICA8VG9vbGJhciBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgICAgICAgICAgIHtsZWZ0TGlua3MgIT09IHVuZGVmaW5lZCA/IGJyYW5kQ29tcG9uZW50IDogbnVsbH1cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZsZXh9PlxuICAgICAgICAgICAgICAgICAgICB7bGVmdExpbmtzICE9PSB1bmRlZmluZWQgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8SGlkZGVuIHNtRG93biBpbXBsZW1lbnRhdGlvbj1cImNzc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtsZWZ0TGlua3N9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0hpZGRlbj5cbiAgICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyYW5kQ29tcG9uZW50XG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgey8qIEhpZGRlbiBjb21wb25lbnQgKi99XG4gICAgICAgICAgICAgICAgPEhpZGRlbiBzbURvd24gaW1wbGVtZW50YXRpb249XCJjc3NcIj5cbiAgICAgICAgICAgICAgICAgICAge3JpZ2h0TGlua3N9XG4gICAgICAgICAgICAgICAgPC9IaWRkZW4+XG4gICAgICAgICAgICAgICAgPEhpZGRlbiBtZFVwPlxuICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJpbmhlcml0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJvcGVuIGRyYXdlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVEcmF3ZXJUb2dnbGV9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51IC8+XG4gICAgICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cbiAgICAgICAgICAgICAgICA8L0hpZGRlbj5cbiAgICAgICAgICAgIDwvVG9vbGJhcj5cbiAgICAgICAgICAgIHsvKiBNZWRpdW0gSGlkZGVuICovfVxuXG4gICAgICAgICAgICA8SGlkZGVuIG1kVXAgaW1wbGVtZW50YXRpb249XCJqc1wiPlxuICAgICAgICAgICAgICAgIDxEcmF3ZXJcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cInRlbXBvcmFyeVwiXG4gICAgICAgICAgICAgICAgICAgIGFuY2hvcj17XCJyaWdodFwifVxuICAgICAgICAgICAgICAgICAgICBvcGVuPXttb2JpbGVPcGVufVxuICAgICAgICAgICAgICAgICAgICBjbGFzc2VzPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXBlcjogc3R5bGVzLmRyYXdlclBhcGVyXG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgIG9uQ2xvc2U9e2hhbmRsZURyYXdlclRvZ2dsZX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYXBwUmVzcG9uc2l2ZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICB7bGVmdExpbmtzfVxuICAgICAgICAgICAgICAgICAgICAgICAge3JpZ2h0TGlua3N9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvRHJhd2VyPlxuICAgICAgICAgICAgPC9IaWRkZW4+XG4gICAgICAgIDwvQXBwQmFyPlxuXG4gICAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Header/Header.js\n");

/***/ }),

/***/ "./pages/landing.js":
/*!**************************!*\
  !*** ./pages/landing.js ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Header_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Header/Header */ \"./components/Header/Header.js\");\n\nvar _jsxFileName = \"/Users/Fernz./Desktop/merchNextJs/merch/pages/landing.js\";\n\n\n\nconst Landing = props => {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header_Header__WEBPACK_IMPORTED_MODULE_2__.default, {\n      brand: \"NextJS Material Kit\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 13\n    }, undefined)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 7,\n    columnNumber: 9\n  }, undefined);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Landing);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tZXJjaGFuZGlzZS8uL3BhZ2VzL2xhbmRpbmcuanM/YTUzNCJdLCJuYW1lcyI6WyJMYW5kaW5nIiwicHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFHQSxNQUFNQSxPQUFPLEdBQUlDLEtBQUQsSUFBVztBQUN2QixzQkFDSTtBQUFBLDJCQUNJLDhEQUFDLDhEQUFEO0FBQVEsV0FBSyxFQUFDO0FBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESjtBQUtILENBTkQ7O0FBUUEsK0RBQWVELE9BQWYiLCJmaWxlIjoiLi9wYWdlcy9sYW5kaW5nLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi4vY29tcG9uZW50cy9IZWFkZXIvSGVhZGVyXCI7XG5cblxuY29uc3QgTGFuZGluZyA9IChwcm9wcykgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8SGVhZGVyIGJyYW5kPVwiTmV4dEpTIE1hdGVyaWFsIEtpdFwiIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IExhbmRpbmc7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/landing.js\n");

/***/ }),

/***/ "./styles/components/Header.module.css":
/*!*********************************************!*\
  !*** ./styles/components/Header.module.css ***!
  \*********************************************/
/***/ (function(module) {

eval("// Exports\nmodule.exports = {\n\t\"title\": \"Header_title__1GQvv\",\n\t\"appBarCabeza\": \"Header_appBarCabeza__1JYrC\",\n\t\"appResponsive\": \"Header_appResponsive__kiz6D\",\n\t\"container\": \"Header_container__2rksu\",\n\t\"flex\": \"Header_flex__2h6ZJ\",\n\t\"drawerPaper\": \"Header_drawerPaper__1qOm6\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tZXJjaGFuZGlzZS8uL3N0eWxlcy9jb21wb25lbnRzL0hlYWRlci5tb2R1bGUuY3NzPzkzYmQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Ii4vc3R5bGVzL2NvbXBvbmVudHMvSGVhZGVyLm1vZHVsZS5jc3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJ0aXRsZVwiOiBcIkhlYWRlcl90aXRsZV9fMUdRdnZcIixcblx0XCJhcHBCYXJDYWJlemFcIjogXCJIZWFkZXJfYXBwQmFyQ2FiZXphX18xSllyQ1wiLFxuXHRcImFwcFJlc3BvbnNpdmVcIjogXCJIZWFkZXJfYXBwUmVzcG9uc2l2ZV9fa2l6NkRcIixcblx0XCJjb250YWluZXJcIjogXCJIZWFkZXJfY29udGFpbmVyX18ycmtzdVwiLFxuXHRcImZsZXhcIjogXCJIZWFkZXJfZmxleF9fMmg2WkpcIixcblx0XCJkcmF3ZXJQYXBlclwiOiBcIkhlYWRlcl9kcmF3ZXJQYXBlcl9fMXFPbTZcIlxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./styles/components/Header.module.css\n");

/***/ }),

/***/ "@material-ui/icons/Menu":
/*!******************************************!*\
  !*** external "@material-ui/icons/Menu" ***!
  \******************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@material-ui/icons/Menu");;

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

/***/ "clsx":
/*!***********************!*\
  !*** external "clsx" ***!
  \***********************/
/***/ (function(module) {

"use strict";
module.exports = require("clsx");;

/***/ }),

/***/ "hoist-non-react-statics":
/*!******************************************!*\
  !*** external "hoist-non-react-statics" ***!
  \******************************************/
/***/ (function(module) {

"use strict";
module.exports = require("hoist-non-react-statics");;

/***/ }),

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ "../next-server/lib/router/utils/get-asset-path-from-route":
/*!**************************************************************************************!*\
  !*** external "next/dist/next-server/lib/router/utils/get-asset-path-from-route.js" ***!
  \**************************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/***/ (function(module) {

"use strict";
module.exports = require("prop-types");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-dom");;

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-is");;

/***/ }),

/***/ "react-transition-group":
/*!*****************************************!*\
  !*** external "react-transition-group" ***!
  \*****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-transition-group");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ }),

/***/ "?ca47":
/*!******************************************!*\
  !*** ./utils/resolve-rewrites (ignored) ***!
  \******************************************/
/***/ (function() {

/* (ignored) */

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_material-ui_core_esm_AppBar_index_js-node_modules_material-ui_core_esm_B-c56ac4"], function() { return __webpack_exec__("./pages/landing.js"); });
module.exports = __webpack_exports__;

})();