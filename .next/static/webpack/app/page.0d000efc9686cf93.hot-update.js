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

/***/ "(app-pages-browser)/./src/components/SelectProblem.js":
/*!*****************************************!*\
  !*** ./src/components/SelectProblem.js ***!
  \*****************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   SelectProblemComponent: () => (/* binding */ SelectProblemComponent)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _AI__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../AI */ \"(app-pages-browser)/./src/AI.js\");\n\n\nfunction SelectProblemComponent(param) {\n    var file = param.file, problems = param.problems, resultCallback = param.resultCallback, onStartCallback = param.onStartCallback, onCloseCallback = param.onCloseCallback;\n    if (problems === undefined) {\n        return null;\n    }\n    console.log(problems);\n    var problemComponents = [];\n    for(var i = 0; i < problems.length; i++){\n        problemComponents.push(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ProblemComponent, {\n            file: file,\n            problemLabel: problems[i],\n            onStartCallback: onStartCallback,\n            resultCallback: resultCallback\n        }, i, false, {\n            fileName: \"/Users/danny/Documents/web-design/math-solver-ai/src/components/SelectProblem.js\",\n            lineNumber: 19,\n            columnNumber: 4\n        }, this));\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            backgroundColor: \"#777777\",\n            maxWidth: \"100%\",\n            height: \"100%\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: styles.container,\n                children: problemComponents\n            }, void 0, false, {\n                fileName: \"/Users/danny/Documents/web-design/math-solver-ai/src/components/SelectProblem.js\",\n                lineNumber: 31,\n                columnNumber: 4\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MathJax, {\n                renderMode: \"post\",\n                children: parse(response)\n            }, void 0, false, {\n                fileName: \"/Users/danny/Documents/web-design/math-solver-ai/src/components/SelectProblem.js\",\n                lineNumber: 32,\n                columnNumber: 4\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/danny/Documents/web-design/math-solver-ai/src/components/SelectProblem.js\",\n        lineNumber: 30,\n        columnNumber: 3\n    }, this);\n}\n_c = SelectProblemComponent;\nfunction ProblemComponent(param) {\n    var file = param.file, problemLabel = param.problemLabel, resultCallback = param.resultCallback, onStartCallback = param.onStartCallback;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        onClick: function() {\n            onStartCallback();\n            resultCallback(problemLabel);\n        /*promptWithImage(file, problemLabel).then((result) => {\n\t\t\t\t\tresultCallback(result);\n\t\t\t\t});*/ },\n        style: styles.problemLabelBox,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n            children: problemLabel\n        }, void 0, false, {\n            fileName: \"/Users/danny/Documents/web-design/math-solver-ai/src/components/SelectProblem.js\",\n            lineNumber: 49,\n            columnNumber: 4\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/danny/Documents/web-design/math-solver-ai/src/components/SelectProblem.js\",\n        lineNumber: 39,\n        columnNumber: 3\n    }, this);\n}\n_c1 = ProblemComponent;\nvar styles = {\n    container: {\n        display: \"flex\",\n        flexWrap: \"wrap\",\n        flexDirection: \"row\",\n        gap: \"5%\",\n        //paddingLeft: \"5%\",\n        backgroundColor: \"white\",\n        alignItems: \"space-evenly\",\n        justifyContent: \"flex-start\",\n        overflow: \"hidden\"\n    },\n    problemLabelBox: {\n        width: \"14%\",\n        aspectRatio: 1,\n        backgroundColor: \"#939393\",\n        border: \"none\"\n    }\n};\nvar _c, _c1;\n$RefreshReg$(_c, \"SelectProblemComponent\");\n$RefreshReg$(_c1, \"ProblemComponent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL1NlbGVjdFByb2JsZW0uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFzQztBQUUvQixTQUFTQyx1QkFBdUIsS0FNdEM7UUFMQUMsT0FEc0MsTUFDdENBLE1BQ0FDLFdBRnNDLE1BRXRDQSxVQUNBQyxpQkFIc0MsTUFHdENBLGdCQUNBQyxrQkFKc0MsTUFJdENBLGlCQUNBQyxrQkFMc0MsTUFLdENBO0lBRUEsSUFBSUgsYUFBYUksV0FBVztRQUMzQixPQUFPO0lBQ1I7SUFFQUMsUUFBUUMsR0FBRyxDQUFDTjtJQUVaLElBQUlPLG9CQUFvQixFQUFFO0lBQzFCLElBQUssSUFBSUMsSUFBSSxHQUFHQSxJQUFJUixTQUFTUyxNQUFNLEVBQUVELElBQUs7UUFDekNELGtCQUFrQkcsSUFBSSxlQUNyQiw4REFBQ0M7WUFFQVosTUFBTUE7WUFDTmEsY0FBY1osUUFBUSxDQUFDUSxFQUFFO1lBQ3pCTixpQkFBaUJBO1lBQ2pCRCxnQkFBZ0JBO1dBSlhPOzs7OztJQU9SO0lBRUEscUJBQ0MsOERBQUNLO1FBQUlDLE9BQU87WUFBQ0MsaUJBQWlCO1lBQVdDLFVBQVU7WUFBUUMsUUFBUTtRQUFNOzswQkFDeEUsOERBQUNKO2dCQUFJQyxPQUFPSSxPQUFPQyxTQUFTOzBCQUFHWjs7Ozs7OzBCQUMvQiw4REFBQ2E7Z0JBQVFDLFlBQVc7MEJBQVFDLE1BQU1DOzs7Ozs7Ozs7Ozs7QUFHckM7S0FoQ2dCekI7QUFrQ2hCLFNBQVNhLGlCQUFpQixLQUFxRDtRQUFwRFosT0FBRCxNQUFDQSxNQUFNYSxlQUFQLE1BQU9BLGNBQWNYLGlCQUFyQixNQUFxQkEsZ0JBQWdCQyxrQkFBckMsTUFBcUNBO0lBQzlELHFCQUNDLDhEQUFDc0I7UUFDQUMsU0FBUztZQUNSdkI7WUFDQUQsZUFBZVc7UUFDZjs7T0FFRyxHQUNKO1FBQ0FFLE9BQU9JLE9BQU9RLGVBQWU7a0JBRTdCLDRFQUFDQztzQkFBSWY7Ozs7Ozs7Ozs7O0FBR1I7TUFmU0Q7QUFpQlQsSUFBTU8sU0FBUztJQUNkQyxXQUFXO1FBQ1ZTLFNBQVM7UUFDVEMsVUFBVTtRQUNWQyxlQUFlO1FBQ2ZDLEtBQUs7UUFDTCxvQkFBb0I7UUFDcEJoQixpQkFBaUI7UUFDakJpQixZQUFZO1FBQ1pDLGdCQUFnQjtRQUNoQkMsVUFBVTtJQUNYO0lBQ0FSLGlCQUFpQjtRQUNoQlMsT0FBTztRQUNQQyxhQUFhO1FBQ2JyQixpQkFBaUI7UUFDakJzQixRQUFRO0lBQ1Q7QUFDRCIsInNvdXJjZXMiOlsiL1VzZXJzL2Rhbm55L0RvY3VtZW50cy93ZWItZGVzaWduL21hdGgtc29sdmVyLWFpL3NyYy9jb21wb25lbnRzL1NlbGVjdFByb2JsZW0uanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtwcm9tcHRXaXRoSW1hZ2V9IGZyb20gXCIuLi9BSVwiO1xuXG5leHBvcnQgZnVuY3Rpb24gU2VsZWN0UHJvYmxlbUNvbXBvbmVudCh7XG5cdGZpbGUsXG5cdHByb2JsZW1zLFxuXHRyZXN1bHRDYWxsYmFjayxcblx0b25TdGFydENhbGxiYWNrLFxuXHRvbkNsb3NlQ2FsbGJhY2ssXG59KSB7XG5cdGlmIChwcm9ibGVtcyA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblxuXHRjb25zb2xlLmxvZyhwcm9ibGVtcyk7XG5cblx0bGV0IHByb2JsZW1Db21wb25lbnRzID0gW107XG5cdGZvciAobGV0IGkgPSAwOyBpIDwgcHJvYmxlbXMubGVuZ3RoOyBpKyspIHtcblx0XHRwcm9ibGVtQ29tcG9uZW50cy5wdXNoKFxuXHRcdFx0PFByb2JsZW1Db21wb25lbnRcblx0XHRcdFx0a2V5PXtpfVxuXHRcdFx0XHRmaWxlPXtmaWxlfVxuXHRcdFx0XHRwcm9ibGVtTGFiZWw9e3Byb2JsZW1zW2ldfVxuXHRcdFx0XHRvblN0YXJ0Q2FsbGJhY2s9e29uU3RhcnRDYWxsYmFja31cblx0XHRcdFx0cmVzdWx0Q2FsbGJhY2s9e3Jlc3VsdENhbGxiYWNrfVxuXHRcdFx0Lz5cblx0XHQpO1xuXHR9XG5cblx0cmV0dXJuIChcblx0XHQ8ZGl2IHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOiBcIiM3Nzc3NzdcIiwgbWF4V2lkdGg6IFwiMTAwJVwiLCBoZWlnaHQ6IFwiMTAwJVwifX0+XG5cdFx0XHQ8ZGl2IHN0eWxlPXtzdHlsZXMuY29udGFpbmVyfT57cHJvYmxlbUNvbXBvbmVudHN9PC9kaXY+XG5cdFx0XHQ8TWF0aEpheCByZW5kZXJNb2RlPVwicG9zdFwiPntwYXJzZShyZXNwb25zZSl9PC9NYXRoSmF4PlxuXHRcdDwvZGl2PlxuXHQpO1xufVxuXG5mdW5jdGlvbiBQcm9ibGVtQ29tcG9uZW50KHtmaWxlLCBwcm9ibGVtTGFiZWwsIHJlc3VsdENhbGxiYWNrLCBvblN0YXJ0Q2FsbGJhY2t9KSB7XG5cdHJldHVybiAoXG5cdFx0PGJ1dHRvblxuXHRcdFx0b25DbGljaz17KCkgPT4ge1xuXHRcdFx0XHRvblN0YXJ0Q2FsbGJhY2soKTtcblx0XHRcdFx0cmVzdWx0Q2FsbGJhY2socHJvYmxlbUxhYmVsKTtcblx0XHRcdFx0Lypwcm9tcHRXaXRoSW1hZ2UoZmlsZSwgcHJvYmxlbUxhYmVsKS50aGVuKChyZXN1bHQpID0+IHtcblx0XHRcdFx0XHRyZXN1bHRDYWxsYmFjayhyZXN1bHQpO1xuXHRcdFx0XHR9KTsqL1xuXHRcdFx0fX1cblx0XHRcdHN0eWxlPXtzdHlsZXMucHJvYmxlbUxhYmVsQm94fVxuXHRcdD5cblx0XHRcdDxoMT57cHJvYmxlbUxhYmVsfTwvaDE+XG5cdFx0PC9idXR0b24+XG5cdCk7XG59XG5cbmNvbnN0IHN0eWxlcyA9IHtcblx0Y29udGFpbmVyOiB7XG5cdFx0ZGlzcGxheTogXCJmbGV4XCIsXG5cdFx0ZmxleFdyYXA6IFwid3JhcFwiLFxuXHRcdGZsZXhEaXJlY3Rpb246IFwicm93XCIsXG5cdFx0Z2FwOiBcIjUlXCIsXG5cdFx0Ly9wYWRkaW5nTGVmdDogXCI1JVwiLFxuXHRcdGJhY2tncm91bmRDb2xvcjogXCJ3aGl0ZVwiLFxuXHRcdGFsaWduSXRlbXM6IFwic3BhY2UtZXZlbmx5XCIsXG5cdFx0anVzdGlmeUNvbnRlbnQ6IFwiZmxleC1zdGFydFwiLFxuXHRcdG92ZXJmbG93OiBcImhpZGRlblwiLFxuXHR9LFxuXHRwcm9ibGVtTGFiZWxCb3g6IHtcblx0XHR3aWR0aDogXCIxNCVcIixcblx0XHRhc3BlY3RSYXRpbzogMSxcblx0XHRiYWNrZ3JvdW5kQ29sb3I6IFwiIzkzOTM5M1wiLFxuXHRcdGJvcmRlcjogXCJub25lXCIsXG5cdH0sXG59O1xuIl0sIm5hbWVzIjpbInByb21wdFdpdGhJbWFnZSIsIlNlbGVjdFByb2JsZW1Db21wb25lbnQiLCJmaWxlIiwicHJvYmxlbXMiLCJyZXN1bHRDYWxsYmFjayIsIm9uU3RhcnRDYWxsYmFjayIsIm9uQ2xvc2VDYWxsYmFjayIsInVuZGVmaW5lZCIsImNvbnNvbGUiLCJsb2ciLCJwcm9ibGVtQ29tcG9uZW50cyIsImkiLCJsZW5ndGgiLCJwdXNoIiwiUHJvYmxlbUNvbXBvbmVudCIsInByb2JsZW1MYWJlbCIsImRpdiIsInN0eWxlIiwiYmFja2dyb3VuZENvbG9yIiwibWF4V2lkdGgiLCJoZWlnaHQiLCJzdHlsZXMiLCJjb250YWluZXIiLCJNYXRoSmF4IiwicmVuZGVyTW9kZSIsInBhcnNlIiwicmVzcG9uc2UiLCJidXR0b24iLCJvbkNsaWNrIiwicHJvYmxlbUxhYmVsQm94IiwiaDEiLCJkaXNwbGF5IiwiZmxleFdyYXAiLCJmbGV4RGlyZWN0aW9uIiwiZ2FwIiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50Iiwib3ZlcmZsb3ciLCJ3aWR0aCIsImFzcGVjdFJhdGlvIiwiYm9yZGVyIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/SelectProblem.js\n"));

/***/ })

});