"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkreact_front"] = self["webpackChunkreact_front"] || []).push([["modules/redux-thunk"],{

/***/ "./node_modules/redux-thunk/es/index.js":
/*!**********************************************!*\
  !*** ./node_modules/redux-thunk/es/index.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/** A function that accepts a potential \"extra argument\" value to be injected later,\r\n * and returns an instance of the thunk middleware that uses that value\r\n */\nfunction createThunkMiddleware(extraArgument) {\n  // Standard Redux middleware definition pattern:\n  // See: https://redux.js.org/tutorials/fundamentals/part-4-store#writing-custom-middleware\n  var middleware = function middleware(_ref) {\n    var dispatch = _ref.dispatch,\n        getState = _ref.getState;\n    return function (next) {\n      return function (action) {\n        // The thunk middleware looks for any functions that were passed to `store.dispatch`.\n        // If this \"action\" is really a function, call it and return the result.\n        if (typeof action === 'function') {\n          // Inject the store's `dispatch` and `getState` methods, as well as any \"extra arg\"\n          return action(dispatch, getState, extraArgument);\n        } // Otherwise, pass the action down the middleware chain as usual\n\n\n        return next(action);\n      };\n    };\n  };\n\n  return middleware;\n}\n\nvar thunk = createThunkMiddleware(); // Attach the factory function so users can create a customized version\n// with whatever \"extra arg\" they want to inject into their thunks\n\nthunk.withExtraArgument = createThunkMiddleware;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (thunk);\n\n//# sourceURL=webpack://react-front/./node_modules/redux-thunk/es/index.js?");

/***/ })

}]);