"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/components/ChatResponse.js":
/*!****************************************!*\
  !*** ./src/components/ChatResponse.js ***!
  \****************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ChatResponseComponent: () => (/* binding */ ChatResponseComponent)\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @swc/helpers/_/_async_to_generator */ \"(app-pages-browser)/./node_modules/@swc/helpers/esm/_async_to_generator.js\");\n/* harmony import */ var _swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @swc/helpers/_/_ts_generator */ \"(app-pages-browser)/./node_modules/tslib/tslib.es6.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* __next_internal_client_entry_do_not_use__ ChatResponseComponent auto */ \n\n\nfunction ChatResponseComponent(_) {\n    return _ChatResponseComponent.apply(this, arguments);\n}\nfunction _ChatResponseComponent() {\n    _ChatResponseComponent = (0,_swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_1__._)(function(param) {\n        var response;\n        return (0,_swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_2__.__generator)(this, function(_state) {\n            response = param.response;\n            return [\n                2,\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    style: {\n                        backgroundColor: \"#777777\",\n                        maxWidth: \"100%\",\n                        height: \"100%\"\n                    },\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        style: styles.container\n                    }, void 0, false, {\n                        fileName: \"/Users/danny/Documents/web-design/math-solver-ai/src/components/ChatResponse.js\",\n                        lineNumber: 6,\n                        columnNumber: 4\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/danny/Documents/web-design/math-solver-ai/src/components/ChatResponse.js\",\n                    lineNumber: 5,\n                    columnNumber: 3\n                }, this)\n            ];\n        });\n    });\n    return _ChatResponseComponent.apply(this, arguments);\n}\n_c = ChatResponseComponent;\nvar styles = {\n    container: {\n        display: \"flex\",\n        flexWrap: \"wrap\",\n        flexDirection: \"row\",\n        backgroundColor: \"white\",\n        alignItems: \"space-evenly\",\n        justifyContent: \"flex-start\",\n        overflow: \"hidden\"\n    }\n};\nvar _c;\n$RefreshReg$(_c, \"ChatResponseComponent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0NoYXRSZXNwb25zZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBRU8sU0FBZUEsc0JBQXNCLENBQVU7V0FBaENBOztTQUFBQTtJQUFBQSx5QkFBZiw0RUFBcUMsS0FBVTtZQUFUQzs7WUFBQUEsV0FBRCxNQUFDQTtZQUM1Qzs7OEJBQ0MsOERBQUNDO29CQUFJQyxPQUFPO3dCQUFDQyxpQkFBaUI7d0JBQVdDLFVBQVU7d0JBQVFDLFFBQVE7b0JBQU07OEJBQ3hFLDRFQUFDSjt3QkFBSUMsT0FBT0ksT0FBT0MsU0FBUzs7Ozs7Ozs7Ozs7OztJQUcvQjtXQU5zQlI7O0tBQUFBO0FBUXRCLElBQU1PLFNBQVM7SUFDZEMsV0FBVztRQUNWQyxTQUFTO1FBQ1RDLFVBQVU7UUFDVkMsZUFBZTtRQUNmUCxpQkFBaUI7UUFDakJRLFlBQVk7UUFDWkMsZ0JBQWdCO1FBQ2hCQyxVQUFVO0lBQ1g7QUFDRCIsInNvdXJjZXMiOlsiL1VzZXJzL2Rhbm55L0RvY3VtZW50cy93ZWItZGVzaWduL21hdGgtc29sdmVyLWFpL3NyYy9jb21wb25lbnRzL0NoYXRSZXNwb25zZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIENoYXRSZXNwb25zZUNvbXBvbmVudCh7cmVzcG9uc2V9KSB7XG5cdHJldHVybiAoXG5cdFx0PGRpdiBzdHlsZT17e2JhY2tncm91bmRDb2xvcjogXCIjNzc3Nzc3XCIsIG1heFdpZHRoOiBcIjEwMCVcIiwgaGVpZ2h0OiBcIjEwMCVcIn19PlxuXHRcdFx0PGRpdiBzdHlsZT17c3R5bGVzLmNvbnRhaW5lcn0+PC9kaXY+XG5cdFx0PC9kaXY+XG5cdCk7XG59XG5cbmNvbnN0IHN0eWxlcyA9IHtcblx0Y29udGFpbmVyOiB7XG5cdFx0ZGlzcGxheTogXCJmbGV4XCIsXG5cdFx0ZmxleFdyYXA6IFwid3JhcFwiLFxuXHRcdGZsZXhEaXJlY3Rpb246IFwicm93XCIsXG5cdFx0YmFja2dyb3VuZENvbG9yOiBcIndoaXRlXCIsXG5cdFx0YWxpZ25JdGVtczogXCJzcGFjZS1ldmVubHlcIixcblx0XHRqdXN0aWZ5Q29udGVudDogXCJmbGV4LXN0YXJ0XCIsXG5cdFx0b3ZlcmZsb3c6IFwiaGlkZGVuXCIsXG5cdH0sXG59O1xuIl0sIm5hbWVzIjpbIkNoYXRSZXNwb25zZUNvbXBvbmVudCIsInJlc3BvbnNlIiwiZGl2Iiwic3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJtYXhXaWR0aCIsImhlaWdodCIsInN0eWxlcyIsImNvbnRhaW5lciIsImRpc3BsYXkiLCJmbGV4V3JhcCIsImZsZXhEaXJlY3Rpb24iLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJvdmVyZmxvdyJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/ChatResponse.js\n"));

/***/ })

});