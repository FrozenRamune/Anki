"use strict";
(self["webpackChunkreact_front"] = self["webpackChunkreact_front"] || []).push([["../home/createcontents"],{

/***/ "./src/home/pages/CreateContents.jsx":
/*!*******************************************!*\
  !*** ./src/home/pages/CreateContents.jsx ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material_Box_Box_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material/Box/Box.js */ "./node_modules/@mui/material/Box/Box.js");
/* harmony import */ var _mui_material_Typography_Typography_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material/Typography/Typography.js */ "./node_modules/@mui/material/Typography/Typography.js");
/* harmony import */ var _mui_material_Card_Card_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/Card/Card.js */ "./node_modules/@mui/material/Card/Card.js");
/* harmony import */ var _mui_material_CardMedia_CardMedia_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material/CardMedia/CardMedia.js */ "./node_modules/@mui/material/CardMedia/CardMedia.js");
/* harmony import */ var _mui_material_CardContent_CardContent_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material/CardContent/CardContent.js */ "./node_modules/@mui/material/CardContent/CardContent.js");
/* harmony import */ var _mui_material_CardActionArea_CardActionArea_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/CardActionArea/CardActionArea.js */ "./node_modules/@mui/material/CardActionArea/CardActionArea.js");
/* harmony import */ var _mui_material_Unstable_Grid2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/Unstable_Grid2 */ "./node_modules/@mui/material/Unstable_Grid2/Grid2.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/index.js");
/* harmony import */ var _assets_images_quizlet_mobile_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/images/quizlet_mobile.png */ "./src/home/assets/images/quizlet_mobile.png");
/* harmony import */ var _assets_images_quizlet_pc_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/images/quizlet_pc.png */ "./src/home/assets/images/quizlet_pc.png");
/* harmony import */ var _assets_images_create_new_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/images/create_new.png */ "./src/home/assets/images/create_new.png");















/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {
  var navigation = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_4__.useNavigate)();

  var handleMoveToTopPage = function handleMoveToTopPage() {
    navigation('/');
  };

  var handleMoveToPrev = function handleMoveToPrev() {
    navigation(-1);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Unstable_Grid2__WEBPACK_IMPORTED_MODULE_5__["default"], {
    container: true,
    spacing: 2,
    sx: {
      height: '85%'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Unstable_Grid2__WEBPACK_IMPORTED_MODULE_5__["default"], {
    xs: true,
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Card_Card_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
    elevation: 5,
    sx: {
      height: {
        xs: '300px',
        md: '600px'
      },
      width: {
        xs: '150px',
        md: '400px'
      }
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_CardActionArea_CardActionArea_js__WEBPACK_IMPORTED_MODULE_7__["default"], {
    sx: {
      height: '100%'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_CardMedia_CardMedia_js__WEBPACK_IMPORTED_MODULE_8__["default"], {
    component: "img",
    height: "40%",
    sx: {
      content: {
        xs: "url(".concat(_assets_images_quizlet_mobile_png__WEBPACK_IMPORTED_MODULE_1__, ")"),
        md: "url(".concat(_assets_images_quizlet_pc_png__WEBPACK_IMPORTED_MODULE_2__, ")")
      }
    },
    alt: "logo of quizlet"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_CardContent_CardContent_js__WEBPACK_IMPORTED_MODULE_9__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Typography_Typography_js__WEBPACK_IMPORTED_MODULE_10__["default"], {
    gutterBottom: true,
    variant: "h5",
    component: "div"
  }, "Import from Quizlet"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Typography_Typography_js__WEBPACK_IMPORTED_MODULE_10__["default"], {
    variant: "body2",
    color: "text.secondary"
  }, "\u30AF\u30A4\u30BA\u30EC\u30C3\u30C8\u304B\u3089\u65E2\u5B58\u306E\u5358\u8A9E\u5E33\u3092\u30A4\u30F3\u30DD\u30FC\u30C8\u3057\u307E\u3059\u3002"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Unstable_Grid2__WEBPACK_IMPORTED_MODULE_5__["default"], {
    xs: true,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    sx: {
      position: 'relative'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Card_Card_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
    elevation: 5,
    sx: {
      height: {
        xs: '300px',
        md: '600px'
      },
      width: {
        xs: '150px',
        md: '400px'
      },
      filter: 'brightness(50%)'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_CardActionArea_CardActionArea_js__WEBPACK_IMPORTED_MODULE_7__["default"], {
    disabled: true,
    sx: {
      height: '100%'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_CardMedia_CardMedia_js__WEBPACK_IMPORTED_MODULE_8__["default"], {
    component: "img",
    height: "40%",
    sx: {
      content: "url(".concat(_assets_images_create_new_png__WEBPACK_IMPORTED_MODULE_3__, ")"),
      objectFit: 'contain'
    },
    alt: "logo of quizlet"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_CardContent_CardContent_js__WEBPACK_IMPORTED_MODULE_9__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Typography_Typography_js__WEBPACK_IMPORTED_MODULE_10__["default"], {
    gutterBottom: true,
    variant: "h5",
    component: "div"
  }, "Create New Contents"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Typography_Typography_js__WEBPACK_IMPORTED_MODULE_10__["default"], {
    variant: "body2",
    color: "text.secondary"
  }, "\u65B0\u898F\u306B\u5358\u8A9E\u5E33\u3092\u4F5C\u6210\u3057\u307E\u3059\u3002")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Box_Box_js__WEBPACK_IMPORTED_MODULE_11__["default"], {
    sx: {
      display: 'flex',
      position: 'absolute',
      top: '0',
      left: '0',
      width: '100%',
      height: '100%',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Typography_Typography_js__WEBPACK_IMPORTED_MODULE_10__["default"], {
    component: "div",
    color: "white",
    sx: {
      fontSize: {
        xs: '20px',
        md: '55px'
      }
    }
  }, "\u6E96\u5099\u4E2D\u3067\u3059"))));
});

/***/ }),

/***/ "./src/home/assets/images/create_new.png":
/*!***********************************************!*\
  !*** ./src/home/assets/images/create_new.png ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/create_new.png";

/***/ }),

/***/ "./src/home/assets/images/quizlet_mobile.png":
/*!***************************************************!*\
  !*** ./src/home/assets/images/quizlet_mobile.png ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/quizlet_mobile.png";

/***/ }),

/***/ "./src/home/assets/images/quizlet_pc.png":
/*!***********************************************!*\
  !*** ./src/home/assets/images/quizlet_pc.png ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/quizlet_pc.png";

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kdWxlcy8uLi9ob21lL2NyZWF0ZWNvbnRlbnRzLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7O0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBLGlFQUFlLFlBQU07RUFDbkIsSUFBTU0sVUFBVSxHQUFHSiw2REFBVyxFQUE5Qjs7RUFFQSxJQUFNSyxtQkFBbUIsR0FBRyxTQUF0QkEsbUJBQXNCLEdBQU07SUFDaENELFVBQVUsQ0FBQyxHQUFELENBQVY7RUFDRCxDQUZEOztFQUlBLElBQU1FLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsR0FBTTtJQUM3QkYsVUFBVSxDQUFDLENBQUMsQ0FBRixDQUFWO0VBQ0QsQ0FGRDs7RUFJQSxvQkFDRSwyREFBQyxvRUFBRDtJQUFNLFNBQVMsTUFBZjtJQUFnQixPQUFPLEVBQUUsQ0FBekI7SUFBNEIsRUFBRSxFQUFFO01BQUVHLE1BQU0sRUFBRTtJQUFWO0VBQWhDLGdCQUNFLDJEQUFDLG9FQUFEO0lBQU0sRUFBRSxNQUFSO0lBQVMsT0FBTyxFQUFDLE1BQWpCO0lBQXdCLGNBQWMsRUFBQyxRQUF2QztJQUFnRCxVQUFVLEVBQUM7RUFBM0QsZ0JBQ0UsMkRBQUMsa0VBQUQ7SUFBTSxTQUFTLEVBQUUsQ0FBakI7SUFBb0IsRUFBRSxFQUFFO01BQUVBLE1BQU0sRUFBRTtRQUFFQyxFQUFFLEVBQUUsT0FBTjtRQUFlQyxFQUFFLEVBQUU7TUFBbkIsQ0FBVjtNQUF3Q0MsS0FBSyxFQUFFO1FBQUVGLEVBQUUsRUFBRSxPQUFOO1FBQWVDLEVBQUUsRUFBRTtNQUFuQjtJQUEvQztFQUF4QixnQkFDRSwyREFBQyxzRkFBRDtJQUFnQixFQUFFLEVBQUU7TUFBRUYsTUFBTSxFQUFFO0lBQVY7RUFBcEIsZ0JBQ0UsMkRBQUMsNEVBQUQ7SUFDRSxTQUFTLEVBQUMsS0FEWjtJQUVFLE1BQU0sRUFBQyxLQUZUO0lBR0UsRUFBRSxFQUFFO01BQ0ZJLE9BQU8sRUFBRTtRQUNQSCxFQUFFLGdCQUFTUCw4REFBVCxNQURLO1FBRVBRLEVBQUUsZ0JBQVNQLDBEQUFUO01BRks7SUFEUCxDQUhOO0lBU0UsR0FBRyxFQUFDO0VBVE4sRUFERixlQVlFLDJEQUFDLGdGQUFELHFCQUNFLDJEQUFDLCtFQUFEO0lBQVksWUFBWSxNQUF4QjtJQUF5QixPQUFPLEVBQUMsSUFBakM7SUFBc0MsU0FBUyxFQUFDO0VBQWhELHlCQURGLGVBSUUsMkRBQUMsK0VBQUQ7SUFBWSxPQUFPLEVBQUMsT0FBcEI7SUFBNEIsS0FBSyxFQUFDO0VBQWxDLHNKQUpGLENBWkYsQ0FERixDQURGLENBREYsZUEwQkUsMkRBQUMsb0VBQUQ7SUFBTSxFQUFFLE1BQVI7SUFBUyxPQUFPLEVBQUMsTUFBakI7SUFBd0IsY0FBYyxFQUFDLFFBQXZDO0lBQWdELFVBQVUsRUFBQyxRQUEzRDtJQUFvRSxFQUFFLEVBQUU7TUFBRVUsUUFBUSxFQUFFO0lBQVo7RUFBeEUsZ0JBQ0UsMkRBQUMsa0VBQUQ7SUFBTSxTQUFTLEVBQUUsQ0FBakI7SUFBb0IsRUFBRSxFQUFFO01BQUVMLE1BQU0sRUFBRTtRQUFFQyxFQUFFLEVBQUUsT0FBTjtRQUFlQyxFQUFFLEVBQUU7TUFBbkIsQ0FBVjtNQUF3Q0MsS0FBSyxFQUFFO1FBQUVGLEVBQUUsRUFBRSxPQUFOO1FBQWVDLEVBQUUsRUFBRTtNQUFuQixDQUEvQztNQUE2RUksTUFBTSxFQUFFO0lBQXJGO0VBQXhCLGdCQUNFLDJEQUFDLHNGQUFEO0lBQWdCLFFBQVEsTUFBeEI7SUFBeUIsRUFBRSxFQUFFO01BQUVOLE1BQU0sRUFBRTtJQUFWO0VBQTdCLGdCQUNFLDJEQUFDLDRFQUFEO0lBQ0UsU0FBUyxFQUFDLEtBRFo7SUFFRSxNQUFNLEVBQUMsS0FGVDtJQUdFLEVBQUUsRUFBRTtNQUNGSSxPQUFPLGdCQUFTUiwwREFBVCxNQURMO01BRUZXLFNBQVMsRUFBRTtJQUZULENBSE47SUFPRSxHQUFHLEVBQUM7RUFQTixFQURGLGVBVUUsMkRBQUMsZ0ZBQUQscUJBQ0UsMkRBQUMsK0VBQUQ7SUFBWSxZQUFZLE1BQXhCO0lBQXlCLE9BQU8sRUFBQyxJQUFqQztJQUFzQyxTQUFTLEVBQUM7RUFBaEQseUJBREYsZUFJRSwyREFBQywrRUFBRDtJQUFZLE9BQU8sRUFBQyxPQUFwQjtJQUE0QixLQUFLLEVBQUM7RUFBbEMsb0ZBSkYsQ0FWRixDQURGLENBREYsZUFzQkUsMkRBQUMsaUVBQUQ7SUFBSyxFQUFFLEVBQUU7TUFBRUMsT0FBTyxFQUFFLE1BQVg7TUFBbUJILFFBQVEsRUFBRSxVQUE3QjtNQUF5Q0ksR0FBRyxFQUFFLEdBQTlDO01BQW1EQyxJQUFJLEVBQUUsR0FBekQ7TUFBOERQLEtBQUssRUFBRSxNQUFyRTtNQUE2RUgsTUFBTSxFQUFFLE1BQXJGO01BQTZGVyxVQUFVLEVBQUUsUUFBekc7TUFBbUhDLGNBQWMsRUFBRTtJQUFuSTtFQUFULGdCQUF5SiwyREFBQywrRUFBRDtJQUFZLFNBQVMsRUFBQyxLQUF0QjtJQUE0QixLQUFLLEVBQUMsT0FBbEM7SUFBMEMsRUFBRSxFQUFFO01BQUVDLFFBQVEsRUFBRTtRQUFFWixFQUFFLEVBQUUsTUFBTjtRQUFjQyxFQUFFLEVBQUU7TUFBbEI7SUFBWjtFQUE5QyxvQ0FBekosQ0F0QkYsQ0ExQkYsQ0FERjtBQXNERCxDQWpFRCIsInNvdXJjZXMiOlsid2VicGFjazovL3JlYWN0LWZyb250Ly4vc3JjL2hvbWUvcGFnZXMvQ3JlYXRlQ29udGVudHMuanN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgQm94LCBUeXBvZ3JhcGh5LCBQYXBlciwgQnV0dG9uLCBDYXJkLCBDYXJkTWVkaWEsIENhcmRDb250ZW50LCBDYXJkQWN0aW9uQXJlYSwgQ2FyZEFjdGlvbnMgfSBmcm9tICdAbXVpL21hdGVyaWFsJ1xyXG5pbXBvcnQgR3JpZCBmcm9tICdAbXVpL21hdGVyaWFsL1Vuc3RhYmxlX0dyaWQyJ1xyXG5pbXBvcnQgeyB1c2VOYXZpZ2F0ZSB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCJcclxuXHJcbmltcG9ydCBRdWl6bGV0TG9nb19Nb2JpbGUgZnJvbSAnLi4vYXNzZXRzL2ltYWdlcy9xdWl6bGV0X21vYmlsZS5wbmcnXHJcbmltcG9ydCBRdWl6bGV0TG9nb19QQyBmcm9tICcuLi9hc3NldHMvaW1hZ2VzL3F1aXpsZXRfcGMucG5nJ1xyXG5pbXBvcnQgQ3JlYXRlTmV3SWNvbiBmcm9tICcuLi9hc3NldHMvaW1hZ2VzL2NyZWF0ZV9uZXcucG5nJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xyXG4gIGNvbnN0IG5hdmlnYXRpb24gPSB1c2VOYXZpZ2F0ZSgpXHJcblxyXG4gIGNvbnN0IGhhbmRsZU1vdmVUb1RvcFBhZ2UgPSAoKSA9PiB7XHJcbiAgICBuYXZpZ2F0aW9uKCcvJylcclxuICB9XHJcblxyXG4gIGNvbnN0IGhhbmRsZU1vdmVUb1ByZXYgPSAoKSA9PiB7XHJcbiAgICBuYXZpZ2F0aW9uKC0xKVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXsyfSBzeD17eyBoZWlnaHQ6ICc4NSUnIH19PlxyXG4gICAgICA8R3JpZCB4cyBkaXNwbGF5PVwiZmxleFwiIGp1c3RpZnlDb250ZW50PVwiY2VudGVyXCIgYWxpZ25JdGVtcz1cImNlbnRlclwiPlxyXG4gICAgICAgIDxDYXJkIGVsZXZhdGlvbj17NX0gc3g9e3sgaGVpZ2h0OiB7IHhzOiAnMzAwcHgnLCBtZDogJzYwMHB4JyB9LCB3aWR0aDogeyB4czogJzE1MHB4JywgbWQ6ICc0MDBweCcgfSB9fSA+XHJcbiAgICAgICAgICA8Q2FyZEFjdGlvbkFyZWEgc3g9e3sgaGVpZ2h0OiAnMTAwJScgfX0+XHJcbiAgICAgICAgICAgIDxDYXJkTWVkaWFcclxuICAgICAgICAgICAgICBjb21wb25lbnQ9XCJpbWdcIlxyXG4gICAgICAgICAgICAgIGhlaWdodD1cIjQwJVwiXHJcbiAgICAgICAgICAgICAgc3g9e3tcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IHtcclxuICAgICAgICAgICAgICAgICAgeHM6IGB1cmwoJHtRdWl6bGV0TG9nb19Nb2JpbGV9KWAsXHJcbiAgICAgICAgICAgICAgICAgIG1kOiBgdXJsKCR7UXVpemxldExvZ29fUEN9KWAsXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICBhbHQ9XCJsb2dvIG9mIHF1aXpsZXRcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8Q2FyZENvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgZ3V0dGVyQm90dG9tIHZhcmlhbnQ9XCJoNVwiIGNvbXBvbmVudD1cImRpdlwiPlxyXG4gICAgICAgICAgICAgICAgSW1wb3J0IGZyb20gUXVpemxldFxyXG4gICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTJcIiBjb2xvcj1cInRleHQuc2Vjb25kYXJ5XCI+XHJcbiAgICAgICAgICAgICAgICDjgq/jgqTjgrrjg6zjg4Pjg4jjgYvjgonml6LlrZjjga7ljZjoqp7luLPjgpLjgqTjg7Pjg53jg7zjg4jjgZfjgb7jgZnjgIJcclxuICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgIDwvQ2FyZENvbnRlbnQ+XHJcbiAgICAgICAgICA8L0NhcmRBY3Rpb25BcmVhPlxyXG4gICAgICAgIDwvQ2FyZD5cclxuICAgICAgPC9HcmlkPlxyXG4gICAgICA8R3JpZCB4cyBkaXNwbGF5PVwiZmxleFwiIGp1c3RpZnlDb250ZW50PVwiY2VudGVyXCIgYWxpZ25JdGVtcz1cImNlbnRlclwiIHN4PXt7IHBvc2l0aW9uOiAncmVsYXRpdmUnIH19PlxyXG4gICAgICAgIDxDYXJkIGVsZXZhdGlvbj17NX0gc3g9e3sgaGVpZ2h0OiB7IHhzOiAnMzAwcHgnLCBtZDogJzYwMHB4JyB9LCB3aWR0aDogeyB4czogJzE1MHB4JywgbWQ6ICc0MDBweCcgfSwgZmlsdGVyOiAnYnJpZ2h0bmVzcyg1MCUpJyB9fSA+XHJcbiAgICAgICAgICA8Q2FyZEFjdGlvbkFyZWEgZGlzYWJsZWQgc3g9e3sgaGVpZ2h0OiAnMTAwJScgfX0+XHJcbiAgICAgICAgICAgIDxDYXJkTWVkaWFcclxuICAgICAgICAgICAgICBjb21wb25lbnQ9XCJpbWdcIlxyXG4gICAgICAgICAgICAgIGhlaWdodD1cIjQwJVwiXHJcbiAgICAgICAgICAgICAgc3g9e3tcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IGB1cmwoJHtDcmVhdGVOZXdJY29ufSlgLFxyXG4gICAgICAgICAgICAgICAgb2JqZWN0Rml0OiAnY29udGFpbidcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgIGFsdD1cImxvZ28gb2YgcXVpemxldFwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxDYXJkQ29udGVudD5cclxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBndXR0ZXJCb3R0b20gdmFyaWFudD1cImg1XCIgY29tcG9uZW50PVwiZGl2XCI+XHJcbiAgICAgICAgICAgICAgICBDcmVhdGUgTmV3IENvbnRlbnRzXHJcbiAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MlwiIGNvbG9yPVwidGV4dC5zZWNvbmRhcnlcIj5cclxuICAgICAgICAgICAgICAgIOaWsOimj+OBq+WNmOiqnuW4s+OCkuS9nOaIkOOBl+OBvuOBmeOAglxyXG4gICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgPC9DYXJkQ29udGVudD5cclxuICAgICAgICAgIDwvQ2FyZEFjdGlvbkFyZWE+XHJcbiAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgIDxCb3ggc3g9e3sgZGlzcGxheTogJ2ZsZXgnLCBwb3NpdGlvbjogJ2Fic29sdXRlJywgdG9wOiAnMCcsIGxlZnQ6ICcwJywgd2lkdGg6ICcxMDAlJywgaGVpZ2h0OiAnMTAwJScsIGFsaWduSXRlbXM6ICdjZW50ZXInLCBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicgfX0gPjxUeXBvZ3JhcGh5IGNvbXBvbmVudD1cImRpdlwiIGNvbG9yPVwid2hpdGVcIiBzeD17eyBmb250U2l6ZTogeyB4czogJzIwcHgnLCBtZDogJzU1cHgnIH0gfX0+5rqW5YKZ5Lit44Gn44GZPC9UeXBvZ3JhcGh5PjwvQm94PlxyXG4gICAgICA8L0dyaWQ+XHJcbiAgICA8L0dyaWQ+XHJcbiAgKVxyXG5cclxufSJdLCJuYW1lcyI6WyJSZWFjdCIsIkdyaWQiLCJ1c2VOYXZpZ2F0ZSIsIlF1aXpsZXRMb2dvX01vYmlsZSIsIlF1aXpsZXRMb2dvX1BDIiwiQ3JlYXRlTmV3SWNvbiIsIm5hdmlnYXRpb24iLCJoYW5kbGVNb3ZlVG9Ub3BQYWdlIiwiaGFuZGxlTW92ZVRvUHJldiIsImhlaWdodCIsInhzIiwibWQiLCJ3aWR0aCIsImNvbnRlbnQiLCJwb3NpdGlvbiIsImZpbHRlciIsIm9iamVjdEZpdCIsImRpc3BsYXkiLCJ0b3AiLCJsZWZ0IiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwiZm9udFNpemUiXSwic291cmNlUm9vdCI6IiJ9