"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-pages-browser)/./app/globals.css":
/*!*************************!*\
  !*** ./app/globals.css ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"597b63dd0e7a\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9nbG9iYWxzLmNzcyIsIm1hcHBpbmdzIjoiO0FBQUEsK0RBQWUsY0FBYztBQUM3QixJQUFJLElBQVUsSUFBSSxpQkFBaUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2dsb2JhbHMuY3NzPzVlMGYiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgXCI1OTdiNjNkZDBlN2FcIlxuaWYgKG1vZHVsZS5ob3QpIHsgbW9kdWxlLmhvdC5hY2NlcHQoKSB9XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/globals.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./app/components/navbar/UserNav.tsx":
/*!*******************************************!*\
  !*** ./app/components/navbar/UserNav.tsx ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _MenuLink__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MenuLink */ \"(app-pages-browser)/./app/components/navbar/MenuLink.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nconst UserNav = ()=>{\n    _s();\n    const [menuOpen, setMenuOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false); //state for menu button\n    const menuRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null); //reference to the menu element\n    // Effect to handle clicks outside of the menu\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const handleClickOutside = (event)=>{\n            if (menuRef.current && !menuRef.current.contains(event.target)) {\n                setMenuOpen(false);\n            }\n        };\n        document.addEventListener(\"mousedown\", handleClickOutside); //calling the handlClickOutside function on a mousedown event\n        return ()=>{\n            document.removeEventListener(\"mousedown\", handleClickOutside); //cleanup to remove handleClickOutside function for mousedown event\n        };\n    }, [\n        menuRef\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"p-2 flex space-x-6 relative incline-block rounded-full\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"flex items-center hover:scale-125 duration-200\",\n                onClick: ()=>setMenuOpen(!menuOpen),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                    xmlns: \"http://www.w3.org/2000/svg\",\n                    fill: \"none\",\n                    viewBox: \"0 0 24 24\",\n                    strokeWidth: \"1.5\",\n                    stroke: \"white\",\n                    className: \"size-6\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                        strokeLinecap: \"round\",\n                        strokeLinejoin: \"round\",\n                        d: \"M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5\"\n                    }, void 0, false, {\n                        fileName: \"/Users/muhammadkhalid/Desktop/Projects/DjangoEncryption/frontend/app/components/navbar/UserNav.tsx\",\n                        lineNumber: 34,\n                        columnNumber: 21\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/muhammadkhalid/Desktop/Projects/DjangoEncryption/frontend/app/components/navbar/UserNav.tsx\",\n                    lineNumber: 33,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/muhammadkhalid/Desktop/Projects/DjangoEncryption/frontend/app/components/navbar/UserNav.tsx\",\n                lineNumber: 29,\n                columnNumber: 13\n            }, undefined),\n            menuOpen && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                ref: menuRef,\n                className: \"w-[220px] absolute top-[65px] right-0 bg-custom1 rounded-xl shadow-nd flex flex-col cursor-pointer\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MenuLink__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        label: \"Home\",\n                        href: \"/\",\n                        onClick: ()=>setMenuOpen(false)\n                    }, void 0, false, {\n                        fileName: \"/Users/muhammadkhalid/Desktop/Projects/DjangoEncryption/frontend/app/components/navbar/UserNav.tsx\",\n                        lineNumber: 40,\n                        columnNumber: 21\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MenuLink__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        label: \"About\",\n                        href: \"/about\",\n                        onClick: ()=>setMenuOpen(false)\n                    }, void 0, false, {\n                        fileName: \"/Users/muhammadkhalid/Desktop/Projects/DjangoEncryption/frontend/app/components/navbar/UserNav.tsx\",\n                        lineNumber: 47,\n                        columnNumber: 21\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/muhammadkhalid/Desktop/Projects/DjangoEncryption/frontend/app/components/navbar/UserNav.tsx\",\n                lineNumber: 39,\n                columnNumber: 17\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/muhammadkhalid/Desktop/Projects/DjangoEncryption/frontend/app/components/navbar/UserNav.tsx\",\n        lineNumber: 28,\n        columnNumber: 9\n    }, undefined);\n};\n_s(UserNav, \"m+Bw3p56aCldBbEoFNtGoL2OdKs=\");\n_c = UserNav;\n/* harmony default export */ __webpack_exports__[\"default\"] = (UserNav);\nvar _c;\n$RefreshReg$(_c, \"UserNav\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL25hdmJhci9Vc2VyTmF2LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBRW9EO0FBQ2xCO0FBSWxDLE1BQU1JLFVBQVU7O0lBQ1osTUFBTSxDQUFDQyxVQUFVQyxZQUFZLEdBQUdOLCtDQUFRQSxDQUFDLFFBQVEsdUJBQXVCO0lBQ3hFLE1BQU1PLFVBQVVMLDZDQUFNQSxDQUFpQixPQUFPLCtCQUErQjtJQUU3RSw4Q0FBOEM7SUFDOUNELGdEQUFTQSxDQUFDO1FBQ04sTUFBTU8scUJBQXFCLENBQUNDO1lBQ3hCLElBQUlGLFFBQVFHLE9BQU8sSUFBSSxDQUFDSCxRQUFRRyxPQUFPLENBQUNDLFFBQVEsQ0FBQ0YsTUFBTUcsTUFBTSxHQUFXO2dCQUNwRU4sWUFBWTtZQUNoQjtRQUNKO1FBRUFPLFNBQVNDLGdCQUFnQixDQUFDLGFBQWFOLHFCQUFxQiw2REFBNkQ7UUFFekgsT0FBTztZQUNISyxTQUFTRSxtQkFBbUIsQ0FBQyxhQUFhUCxxQkFBcUIsbUVBQW1FO1FBQ3RJO0lBQ0osR0FBRztRQUFDRDtLQUFRO0lBRVoscUJBQ0ksOERBQUNTO1FBQUlDLFdBQVU7OzBCQUNYLDhEQUFDQztnQkFDR0QsV0FBVTtnQkFDVkUsU0FBUyxJQUFNYixZQUFZLENBQUNEOzBCQUU1Qiw0RUFBQ2U7b0JBQUlDLE9BQU07b0JBQTZCQyxNQUFLO29CQUFPQyxTQUFRO29CQUFZQyxhQUFZO29CQUFNQyxRQUFPO29CQUFRUixXQUFVOzhCQUMvRyw0RUFBQ1M7d0JBQUtDLGVBQWM7d0JBQVFDLGdCQUFlO3dCQUFRQyxHQUFFOzs7Ozs7Ozs7Ozs7Ozs7O1lBSTVEeEIsMEJBQ0csOERBQUNXO2dCQUFJYyxLQUFLdkI7Z0JBQVNVLFdBQVU7O2tDQUN6Qiw4REFBQ2QsaURBQVFBO3dCQUNMNEIsT0FBTTt3QkFDTkMsTUFBSzt3QkFDTGIsU0FBUyxJQUNMYixZQUFZOzs7Ozs7a0NBR3BCLDhEQUFDSCxpREFBUUE7d0JBQ0w0QixPQUFNO3dCQUNOQyxNQUFLO3dCQUNMYixTQUFTLElBQ0xiLFlBQVk7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU94QztHQWxETUY7S0FBQUE7QUFvRE4sK0RBQWVBLE9BQU9BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NvbXBvbmVudHMvbmF2YmFyL1VzZXJOYXYudHN4PzcwNDUiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnO1xuXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBNZW51TGluayBmcm9tIFwiLi9NZW51TGlua1wiO1xuXG5cblxuY29uc3QgVXNlck5hdiA9ICgpID0+IHtcbiAgICBjb25zdCBbbWVudU9wZW4sIHNldE1lbnVPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTsgLy9zdGF0ZSBmb3IgbWVudSBidXR0b25cbiAgICBjb25zdCBtZW51UmVmID0gdXNlUmVmPEhUTUxEaXZFbGVtZW50PihudWxsKTsgLy9yZWZlcmVuY2UgdG8gdGhlIG1lbnUgZWxlbWVudFxuXG4gICAgLy8gRWZmZWN0IHRvIGhhbmRsZSBjbGlja3Mgb3V0c2lkZSBvZiB0aGUgbWVudVxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IGhhbmRsZUNsaWNrT3V0c2lkZSA9IChldmVudDogTW91c2VFdmVudCkgPT4ge1xuICAgICAgICAgICAgaWYgKG1lbnVSZWYuY3VycmVudCAmJiAhbWVudVJlZi5jdXJyZW50LmNvbnRhaW5zKGV2ZW50LnRhcmdldCBhcyBOb2RlKSkgeyAvL2NoZWNrcyBpZiBtZW51UmVmIHBvaW50aW5nIHRvIHZhbGllZCBlbGVtZW50LCBjaGVja3MgaWYgY2xpY2sgZXZlbnQncyB0YXJnZXQgaXMgb3V0c2lkZSB0aGUgcmVmZXJlbmNlZCBtZW51IGVsZW1lbnRcbiAgICAgICAgICAgICAgICBzZXRNZW51T3BlbihmYWxzZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgaGFuZGxlQ2xpY2tPdXRzaWRlKTsgLy9jYWxsaW5nIHRoZSBoYW5kbENsaWNrT3V0c2lkZSBmdW5jdGlvbiBvbiBhIG1vdXNlZG93biBldmVudFxuICAgIFxuICAgICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCBoYW5kbGVDbGlja091dHNpZGUpOyAvL2NsZWFudXAgdG8gcmVtb3ZlIGhhbmRsZUNsaWNrT3V0c2lkZSBmdW5jdGlvbiBmb3IgbW91c2Vkb3duIGV2ZW50XG4gICAgICAgIH07XG4gICAgfSwgW21lbnVSZWZdKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC0yIGZsZXggc3BhY2UteC02IHJlbGF0aXZlIGluY2xpbmUtYmxvY2sgcm91bmRlZC1mdWxsXCI+XG4gICAgICAgICAgICA8YnV0dG9uIFxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGhvdmVyOnNjYWxlLTEyNSBkdXJhdGlvbi0yMDBcIlxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldE1lbnVPcGVuKCFtZW51T3Blbil9IC8vaWYgbWVudU9wZW4gZmFsc2UsIGl0IHdpbGwgYmUgc2V0IHRvIHRydWVcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgZmlsbD1cIm5vbmVcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgc3Ryb2tlV2lkdGg9XCIxLjVcIiBzdHJva2U9XCJ3aGl0ZVwiIGNsYXNzTmFtZT1cInNpemUtNlwiPlxuICAgICAgICAgICAgICAgICAgICA8cGF0aCBzdHJva2VMaW5lY2FwPVwicm91bmRcIiBzdHJva2VMaW5lam9pbj1cInJvdW5kXCIgZD1cIk0zLjc1IDYuNzVoMTYuNU0zLjc1IDEyaDE2LjVtLTE2LjUgNS4yNWgxNi41XCIgLz5cbiAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgICAgICB7bWVudU9wZW4gJiYgKFxuICAgICAgICAgICAgICAgIDxkaXYgcmVmPXttZW51UmVmfSBjbGFzc05hbWU9XCJ3LVsyMjBweF0gYWJzb2x1dGUgdG9wLVs2NXB4XSByaWdodC0wIGJnLWN1c3RvbTEgcm91bmRlZC14bCBzaGFkb3ctbmQgZmxleCBmbGV4LWNvbCBjdXJzb3ItcG9pbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICA8TWVudUxpbmsgXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD0nSG9tZSdcbiAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9Jy8nXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRNZW51T3BlbihmYWxzZSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPE1lbnVMaW5rIFxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9J0Fib3V0J1xuICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cIi9hYm91dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRNZW51T3BlbihmYWxzZSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgVXNlck5hdjsiXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJNZW51TGluayIsIlVzZXJOYXYiLCJtZW51T3BlbiIsInNldE1lbnVPcGVuIiwibWVudVJlZiIsImhhbmRsZUNsaWNrT3V0c2lkZSIsImV2ZW50IiwiY3VycmVudCIsImNvbnRhaW5zIiwidGFyZ2V0IiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImRpdiIsImNsYXNzTmFtZSIsImJ1dHRvbiIsIm9uQ2xpY2siLCJzdmciLCJ4bWxucyIsImZpbGwiLCJ2aWV3Qm94Iiwic3Ryb2tlV2lkdGgiLCJzdHJva2UiLCJwYXRoIiwic3Ryb2tlTGluZWNhcCIsInN0cm9rZUxpbmVqb2luIiwiZCIsInJlZiIsImxhYmVsIiwiaHJlZiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/navbar/UserNav.tsx\n"));

/***/ })

});