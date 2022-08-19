"use strict";
(self["webpackChunkreact_front"] = self["webpackChunkreact_front"] || []).push([["../home/create_contents_menu"],{

/***/ "./src/home/pages/CreateContentsMenu.jsx":
/*!***********************************************!*\
  !*** ./src/home/pages/CreateContentsMenu.jsx ***!
  \***********************************************/
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kdWxlcy8uLi9ob21lL2NyZWF0ZV9jb250ZW50c19tZW51LmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7O0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBLGlFQUFlLFlBQU07RUFDbkIsSUFBTU0sVUFBVSxHQUFHSiw2REFBVyxFQUE5Qjs7RUFFQSxJQUFNSyxtQkFBbUIsR0FBRyxTQUF0QkEsbUJBQXNCLEdBQU07SUFDaENELFVBQVUsQ0FBQyxHQUFELENBQVY7RUFDRCxDQUZEOztFQUlBLElBQU1FLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsR0FBTTtJQUM3QkYsVUFBVSxDQUFDLENBQUMsQ0FBRixDQUFWO0VBQ0QsQ0FGRDs7RUFJQSxvQkFDRSwyREFBQyxvRUFBRDtJQUFNLFNBQVMsTUFBZjtJQUFnQixPQUFPLEVBQUUsQ0FBekI7SUFBNEIsRUFBRSxFQUFFO01BQUVHLE1BQU0sRUFBRTtJQUFWO0VBQWhDLGdCQUNFLDJEQUFDLG9FQUFEO0lBQU0sRUFBRSxNQUFSO0lBQVMsT0FBTyxFQUFDLE1BQWpCO0lBQXdCLGNBQWMsRUFBQyxRQUF2QztJQUFnRCxVQUFVLEVBQUM7RUFBM0QsZ0JBQ0UsMkRBQUMsa0VBQUQ7SUFBTSxTQUFTLEVBQUUsQ0FBakI7SUFBb0IsRUFBRSxFQUFFO01BQUVBLE1BQU0sRUFBRTtRQUFFQyxFQUFFLEVBQUUsT0FBTjtRQUFlQyxFQUFFLEVBQUU7TUFBbkIsQ0FBVjtNQUF3Q0MsS0FBSyxFQUFFO1FBQUVGLEVBQUUsRUFBRSxPQUFOO1FBQWVDLEVBQUUsRUFBRTtNQUFuQjtJQUEvQztFQUF4QixnQkFDRSwyREFBQyxzRkFBRDtJQUFnQixFQUFFLEVBQUU7TUFBRUYsTUFBTSxFQUFFO0lBQVY7RUFBcEIsZ0JBQ0UsMkRBQUMsNEVBQUQ7SUFDRSxTQUFTLEVBQUMsS0FEWjtJQUVFLE1BQU0sRUFBQyxLQUZUO0lBR0UsRUFBRSxFQUFFO01BQ0ZJLE9BQU8sRUFBRTtRQUNQSCxFQUFFLGdCQUFTUCw4REFBVCxNQURLO1FBRVBRLEVBQUUsZ0JBQVNQLDBEQUFUO01BRks7SUFEUCxDQUhOO0lBU0UsR0FBRyxFQUFDO0VBVE4sRUFERixlQVlFLDJEQUFDLGdGQUFELHFCQUNFLDJEQUFDLCtFQUFEO0lBQVksWUFBWSxNQUF4QjtJQUF5QixPQUFPLEVBQUMsSUFBakM7SUFBc0MsU0FBUyxFQUFDO0VBQWhELHlCQURGLGVBSUUsMkRBQUMsK0VBQUQ7SUFBWSxPQUFPLEVBQUMsT0FBcEI7SUFBNEIsS0FBSyxFQUFDO0VBQWxDLHNKQUpGLENBWkYsQ0FERixDQURGLENBREYsZUEwQkUsMkRBQUMsb0VBQUQ7SUFBTSxFQUFFLE1BQVI7SUFBUyxPQUFPLEVBQUMsTUFBakI7SUFBd0IsY0FBYyxFQUFDLFFBQXZDO0lBQWdELFVBQVUsRUFBQyxRQUEzRDtJQUFvRSxFQUFFLEVBQUU7TUFBRVUsUUFBUSxFQUFFO0lBQVo7RUFBeEUsZ0JBQ0UsMkRBQUMsa0VBQUQ7SUFBTSxTQUFTLEVBQUUsQ0FBakI7SUFBb0IsRUFBRSxFQUFFO01BQUVMLE1BQU0sRUFBRTtRQUFFQyxFQUFFLEVBQUUsT0FBTjtRQUFlQyxFQUFFLEVBQUU7TUFBbkIsQ0FBVjtNQUF3Q0MsS0FBSyxFQUFFO1FBQUVGLEVBQUUsRUFBRSxPQUFOO1FBQWVDLEVBQUUsRUFBRTtNQUFuQixDQUEvQztNQUE2RUksTUFBTSxFQUFFO0lBQXJGO0VBQXhCLGdCQUNFLDJEQUFDLHNGQUFEO0lBQWdCLFFBQVEsTUFBeEI7SUFBeUIsRUFBRSxFQUFFO01BQUVOLE1BQU0sRUFBRTtJQUFWO0VBQTdCLGdCQUNFLDJEQUFDLDRFQUFEO0lBQ0UsU0FBUyxFQUFDLEtBRFo7SUFFRSxNQUFNLEVBQUMsS0FGVDtJQUdFLEVBQUUsRUFBRTtNQUNGSSxPQUFPLGdCQUFTUiwwREFBVCxNQURMO01BRUZXLFNBQVMsRUFBRTtJQUZULENBSE47SUFPRSxHQUFHLEVBQUM7RUFQTixFQURGLGVBVUUsMkRBQUMsZ0ZBQUQscUJBQ0UsMkRBQUMsK0VBQUQ7SUFBWSxZQUFZLE1BQXhCO0lBQXlCLE9BQU8sRUFBQyxJQUFqQztJQUFzQyxTQUFTLEVBQUM7RUFBaEQseUJBREYsZUFJRSwyREFBQywrRUFBRDtJQUFZLE9BQU8sRUFBQyxPQUFwQjtJQUE0QixLQUFLLEVBQUM7RUFBbEMsb0ZBSkYsQ0FWRixDQURGLENBREYsZUFzQkUsMkRBQUMsaUVBQUQ7SUFBSyxFQUFFLEVBQUU7TUFBRUMsT0FBTyxFQUFFLE1BQVg7TUFBbUJILFFBQVEsRUFBRSxVQUE3QjtNQUF5Q0ksR0FBRyxFQUFFLEdBQTlDO01BQW1EQyxJQUFJLEVBQUUsR0FBekQ7TUFBOERQLEtBQUssRUFBRSxNQUFyRTtNQUE2RUgsTUFBTSxFQUFFLE1BQXJGO01BQTZGVyxVQUFVLEVBQUUsUUFBekc7TUFBbUhDLGNBQWMsRUFBRTtJQUFuSTtFQUFULGdCQUF5SiwyREFBQywrRUFBRDtJQUFZLFNBQVMsRUFBQyxLQUF0QjtJQUE0QixLQUFLLEVBQUMsT0FBbEM7SUFBMEMsRUFBRSxFQUFFO01BQUVDLFFBQVEsRUFBRTtRQUFFWixFQUFFLEVBQUUsTUFBTjtRQUFjQyxFQUFFLEVBQUU7TUFBbEI7SUFBWjtFQUE5QyxvQ0FBekosQ0F0QkYsQ0ExQkYsQ0FERjtBQXNERCxDQWpFRCIsInNvdXJjZXMiOlsid2VicGFjazovL3JlYWN0LWZyb250Ly4vc3JjL2hvbWUvcGFnZXMvQ3JlYXRlQ29udGVudHNNZW51LmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IEJveCwgVHlwb2dyYXBoeSwgUGFwZXIsIEJ1dHRvbiwgQ2FyZCwgQ2FyZE1lZGlhLCBDYXJkQ29udGVudCwgQ2FyZEFjdGlvbkFyZWEsIENhcmRBY3Rpb25zIH0gZnJvbSAnQG11aS9tYXRlcmlhbCdcclxuaW1wb3J0IEdyaWQgZnJvbSAnQG11aS9tYXRlcmlhbC9VbnN0YWJsZV9HcmlkMidcclxuaW1wb3J0IHsgdXNlTmF2aWdhdGUgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiXHJcblxyXG5pbXBvcnQgUXVpemxldExvZ29fTW9iaWxlIGZyb20gJy4uL2Fzc2V0cy9pbWFnZXMvcXVpemxldF9tb2JpbGUucG5nJ1xyXG5pbXBvcnQgUXVpemxldExvZ29fUEMgZnJvbSAnLi4vYXNzZXRzL2ltYWdlcy9xdWl6bGV0X3BjLnBuZydcclxuaW1wb3J0IENyZWF0ZU5ld0ljb24gZnJvbSAnLi4vYXNzZXRzL2ltYWdlcy9jcmVhdGVfbmV3LnBuZydcclxuXHJcbmV4cG9ydCBkZWZhdWx0ICgpID0+IHtcclxuICBjb25zdCBuYXZpZ2F0aW9uID0gdXNlTmF2aWdhdGUoKVxyXG5cclxuICBjb25zdCBoYW5kbGVNb3ZlVG9Ub3BQYWdlID0gKCkgPT4ge1xyXG4gICAgbmF2aWdhdGlvbignLycpXHJcbiAgfVxyXG5cclxuICBjb25zdCBoYW5kbGVNb3ZlVG9QcmV2ID0gKCkgPT4ge1xyXG4gICAgbmF2aWdhdGlvbigtMSlcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17Mn0gc3g9e3sgaGVpZ2h0OiAnODUlJyB9fT5cclxuICAgICAgPEdyaWQgeHMgZGlzcGxheT1cImZsZXhcIiBqdXN0aWZ5Q29udGVudD1cImNlbnRlclwiIGFsaWduSXRlbXM9XCJjZW50ZXJcIj5cclxuICAgICAgICA8Q2FyZCBlbGV2YXRpb249ezV9IHN4PXt7IGhlaWdodDogeyB4czogJzMwMHB4JywgbWQ6ICc2MDBweCcgfSwgd2lkdGg6IHsgeHM6ICcxNTBweCcsIG1kOiAnNDAwcHgnIH0gfX0gPlxyXG4gICAgICAgICAgPENhcmRBY3Rpb25BcmVhIHN4PXt7IGhlaWdodDogJzEwMCUnIH19PlxyXG4gICAgICAgICAgICA8Q2FyZE1lZGlhXHJcbiAgICAgICAgICAgICAgY29tcG9uZW50PVwiaW1nXCJcclxuICAgICAgICAgICAgICBoZWlnaHQ9XCI0MCVcIlxyXG4gICAgICAgICAgICAgIHN4PXt7XHJcbiAgICAgICAgICAgICAgICBjb250ZW50OiB7XHJcbiAgICAgICAgICAgICAgICAgIHhzOiBgdXJsKCR7UXVpemxldExvZ29fTW9iaWxlfSlgLFxyXG4gICAgICAgICAgICAgICAgICBtZDogYHVybCgke1F1aXpsZXRMb2dvX1BDfSlgLFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgYWx0PVwibG9nbyBvZiBxdWl6bGV0XCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPENhcmRDb250ZW50PlxyXG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGd1dHRlckJvdHRvbSB2YXJpYW50PVwiaDVcIiBjb21wb25lbnQ9XCJkaXZcIj5cclxuICAgICAgICAgICAgICAgIEltcG9ydCBmcm9tIFF1aXpsZXRcclxuICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkyXCIgY29sb3I9XCJ0ZXh0LnNlY29uZGFyeVwiPlxyXG4gICAgICAgICAgICAgICAg44Kv44Kk44K644Os44OD44OI44GL44KJ5pei5a2Y44Gu5Y2Y6Kqe5biz44KS44Kk44Oz44Od44O844OI44GX44G+44GZ44CCXHJcbiAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICA8L0NhcmRDb250ZW50PlxyXG4gICAgICAgICAgPC9DYXJkQWN0aW9uQXJlYT5cclxuICAgICAgICA8L0NhcmQ+XHJcbiAgICAgIDwvR3JpZD5cclxuICAgICAgPEdyaWQgeHMgZGlzcGxheT1cImZsZXhcIiBqdXN0aWZ5Q29udGVudD1cImNlbnRlclwiIGFsaWduSXRlbXM9XCJjZW50ZXJcIiBzeD17eyBwb3NpdGlvbjogJ3JlbGF0aXZlJyB9fT5cclxuICAgICAgICA8Q2FyZCBlbGV2YXRpb249ezV9IHN4PXt7IGhlaWdodDogeyB4czogJzMwMHB4JywgbWQ6ICc2MDBweCcgfSwgd2lkdGg6IHsgeHM6ICcxNTBweCcsIG1kOiAnNDAwcHgnIH0sIGZpbHRlcjogJ2JyaWdodG5lc3MoNTAlKScgfX0gPlxyXG4gICAgICAgICAgPENhcmRBY3Rpb25BcmVhIGRpc2FibGVkIHN4PXt7IGhlaWdodDogJzEwMCUnIH19PlxyXG4gICAgICAgICAgICA8Q2FyZE1lZGlhXHJcbiAgICAgICAgICAgICAgY29tcG9uZW50PVwiaW1nXCJcclxuICAgICAgICAgICAgICBoZWlnaHQ9XCI0MCVcIlxyXG4gICAgICAgICAgICAgIHN4PXt7XHJcbiAgICAgICAgICAgICAgICBjb250ZW50OiBgdXJsKCR7Q3JlYXRlTmV3SWNvbn0pYCxcclxuICAgICAgICAgICAgICAgIG9iamVjdEZpdDogJ2NvbnRhaW4nXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICBhbHQ9XCJsb2dvIG9mIHF1aXpsZXRcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8Q2FyZENvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgZ3V0dGVyQm90dG9tIHZhcmlhbnQ9XCJoNVwiIGNvbXBvbmVudD1cImRpdlwiPlxyXG4gICAgICAgICAgICAgICAgQ3JlYXRlIE5ldyBDb250ZW50c1xyXG4gICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTJcIiBjb2xvcj1cInRleHQuc2Vjb25kYXJ5XCI+XHJcbiAgICAgICAgICAgICAgICDmlrDopo/jgavljZjoqp7luLPjgpLkvZzmiJDjgZfjgb7jgZnjgIJcclxuICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgIDwvQ2FyZENvbnRlbnQ+XHJcbiAgICAgICAgICA8L0NhcmRBY3Rpb25BcmVhPlxyXG4gICAgICAgIDwvQ2FyZD5cclxuICAgICAgICA8Qm94IHN4PXt7IGRpc3BsYXk6ICdmbGV4JywgcG9zaXRpb246ICdhYnNvbHV0ZScsIHRvcDogJzAnLCBsZWZ0OiAnMCcsIHdpZHRoOiAnMTAwJScsIGhlaWdodDogJzEwMCUnLCBhbGlnbkl0ZW1zOiAnY2VudGVyJywganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInIH19ID48VHlwb2dyYXBoeSBjb21wb25lbnQ9XCJkaXZcIiBjb2xvcj1cIndoaXRlXCIgc3g9e3sgZm9udFNpemU6IHsgeHM6ICcyMHB4JywgbWQ6ICc1NXB4JyB9IH19Pua6luWCmeS4reOBp+OBmTwvVHlwb2dyYXBoeT48L0JveD5cclxuICAgICAgPC9HcmlkPlxyXG4gICAgPC9HcmlkPlxyXG4gIClcclxuXHJcbn0iXSwibmFtZXMiOlsiUmVhY3QiLCJHcmlkIiwidXNlTmF2aWdhdGUiLCJRdWl6bGV0TG9nb19Nb2JpbGUiLCJRdWl6bGV0TG9nb19QQyIsIkNyZWF0ZU5ld0ljb24iLCJuYXZpZ2F0aW9uIiwiaGFuZGxlTW92ZVRvVG9wUGFnZSIsImhhbmRsZU1vdmVUb1ByZXYiLCJoZWlnaHQiLCJ4cyIsIm1kIiwid2lkdGgiLCJjb250ZW50IiwicG9zaXRpb24iLCJmaWx0ZXIiLCJvYmplY3RGaXQiLCJkaXNwbGF5IiwidG9wIiwibGVmdCIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsImZvbnRTaXplIl0sInNvdXJjZVJvb3QiOiIifQ==