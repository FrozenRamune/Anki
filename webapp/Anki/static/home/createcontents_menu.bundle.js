"use strict";
(self["webpackChunkreact_front"] = self["webpackChunkreact_front"] || []).push([["../home/createcontents_menu"],{

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

  var handleClickImport = function handleClickImport() {
    navigation('import');
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
        sm: '600px'
      },
      width: {
        xs: '150px',
        sm: '400px'
      }
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_CardActionArea_CardActionArea_js__WEBPACK_IMPORTED_MODULE_7__["default"], {
    onClick: handleClickImport,
    sx: {
      height: '100%'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_CardMedia_CardMedia_js__WEBPACK_IMPORTED_MODULE_8__["default"], {
    component: "img",
    height: "40%",
    sx: {
      content: {
        xs: "url(".concat(_assets_images_quizlet_mobile_png__WEBPACK_IMPORTED_MODULE_1__, ")"),
        sm: "url(".concat(_assets_images_quizlet_pc_png__WEBPACK_IMPORTED_MODULE_2__, ")")
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
        sm: '600px'
      },
      width: {
        xs: '150px',
        sm: '400px'
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
        sm: '55px'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kdWxlcy8uLi9ob21lL2NyZWF0ZWNvbnRlbnRzX21lbnUuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7QUFLQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUEsaUVBQWUsWUFBTTtFQUNuQixJQUFNTSxVQUFVLEdBQUdKLDZEQUFXLEVBQTlCOztFQUVBLElBQU1LLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0IsR0FBTTtJQUM5QkQsVUFBVSxDQUFDLFFBQUQsQ0FBVjtFQUNELENBRkQ7O0VBSUEsb0JBQ0UsMkRBQUMsb0VBQUQ7SUFBTSxTQUFTLE1BQWY7SUFBZ0IsT0FBTyxFQUFFLENBQXpCO0lBQTRCLEVBQUUsRUFBRTtNQUFFRSxNQUFNLEVBQUU7SUFBVjtFQUFoQyxnQkFDRSwyREFBQyxvRUFBRDtJQUFNLEVBQUUsTUFBUjtJQUFTLE9BQU8sRUFBQyxNQUFqQjtJQUF3QixjQUFjLEVBQUMsUUFBdkM7SUFBZ0QsVUFBVSxFQUFDO0VBQTNELGdCQUNFLDJEQUFDLGtFQUFEO0lBQ0MsU0FBUyxFQUFFLENBRFo7SUFFQyxFQUFFLEVBQUU7TUFBRUEsTUFBTSxFQUFFO1FBQUVDLEVBQUUsRUFBRSxPQUFOO1FBQWVDLEVBQUUsRUFBRTtNQUFuQixDQUFWO01BQXdDQyxLQUFLLEVBQUU7UUFBRUYsRUFBRSxFQUFFLE9BQU47UUFBZUMsRUFBRSxFQUFFO01BQW5CO0lBQS9DO0VBRkwsZ0JBSUUsMkRBQUMsc0ZBQUQ7SUFBZ0IsT0FBTyxFQUFFSCxpQkFBekI7SUFBNEMsRUFBRSxFQUFFO01BQUVDLE1BQU0sRUFBRTtJQUFWO0VBQWhELGdCQUNFLDJEQUFDLDRFQUFEO0lBQ0UsU0FBUyxFQUFDLEtBRFo7SUFFRSxNQUFNLEVBQUMsS0FGVDtJQUdFLEVBQUUsRUFBRTtNQUNGSSxPQUFPLEVBQUU7UUFDUEgsRUFBRSxnQkFBU04sOERBQVQsTUFESztRQUVQTyxFQUFFLGdCQUFTTiwwREFBVDtNQUZLO0lBRFAsQ0FITjtJQVNFLEdBQUcsRUFBQztFQVROLEVBREYsZUFZRSwyREFBQyxnRkFBRCxxQkFDRSwyREFBQywrRUFBRDtJQUFZLFlBQVksTUFBeEI7SUFBeUIsT0FBTyxFQUFDLElBQWpDO0lBQXNDLFNBQVMsRUFBQztFQUFoRCx5QkFERixlQUlFLDJEQUFDLCtFQUFEO0lBQVksT0FBTyxFQUFDLE9BQXBCO0lBQTRCLEtBQUssRUFBQztFQUFsQyxzSkFKRixDQVpGLENBSkYsQ0FERixDQURGLGVBNkJFLDJEQUFDLG9FQUFEO0lBQ0UsRUFBRSxNQURKO0lBRUUsT0FBTyxFQUFDLE1BRlY7SUFHRSxjQUFjLEVBQUMsUUFIakI7SUFJRSxVQUFVLEVBQUMsUUFKYjtJQUtFLEVBQUUsRUFBRTtNQUFFUyxRQUFRLEVBQUU7SUFBWjtFQUxOLGdCQU9FLDJEQUFDLGtFQUFEO0lBQ0UsU0FBUyxFQUFFLENBRGI7SUFFRSxFQUFFLEVBQUU7TUFDRkwsTUFBTSxFQUFFO1FBQUVDLEVBQUUsRUFBRSxPQUFOO1FBQWVDLEVBQUUsRUFBRTtNQUFuQixDQUROO01BRUZDLEtBQUssRUFBRTtRQUFFRixFQUFFLEVBQUUsT0FBTjtRQUFlQyxFQUFFLEVBQUU7TUFBbkIsQ0FGTDtNQUdGSSxNQUFNLEVBQUU7SUFITjtFQUZOLGdCQVFFLDJEQUFDLHNGQUFEO0lBQWdCLFFBQVEsTUFBeEI7SUFBeUIsRUFBRSxFQUFFO01BQUVOLE1BQU0sRUFBRTtJQUFWO0VBQTdCLGdCQUNFLDJEQUFDLDRFQUFEO0lBQ0UsU0FBUyxFQUFDLEtBRFo7SUFFRSxNQUFNLEVBQUMsS0FGVDtJQUdFLEVBQUUsRUFBRTtNQUNGSSxPQUFPLGdCQUFTUCwwREFBVCxNQURMO01BRUZVLFNBQVMsRUFBRTtJQUZULENBSE47SUFPRSxHQUFHLEVBQUM7RUFQTixFQURGLGVBVUUsMkRBQUMsZ0ZBQUQscUJBQ0UsMkRBQUMsK0VBQUQ7SUFBWSxZQUFZLE1BQXhCO0lBQXlCLE9BQU8sRUFBQyxJQUFqQztJQUFzQyxTQUFTLEVBQUM7RUFBaEQseUJBREYsZUFJRSwyREFBQywrRUFBRDtJQUFZLE9BQU8sRUFBQyxPQUFwQjtJQUE0QixLQUFLLEVBQUM7RUFBbEMsb0ZBSkYsQ0FWRixDQVJGLENBUEYsZUFtQ0UsMkRBQUMsaUVBQUQ7SUFDRSxFQUFFLEVBQUU7TUFDRkMsT0FBTyxFQUFFLE1BRFA7TUFFRkgsUUFBUSxFQUFFLFVBRlI7TUFHRkksR0FBRyxFQUFFLEdBSEg7TUFJRkMsSUFBSSxFQUFFLEdBSko7TUFLRlAsS0FBSyxFQUFFLE1BTEw7TUFNRkgsTUFBTSxFQUFFLE1BTk47TUFPRlcsVUFBVSxFQUFFLFFBUFY7TUFRRkMsY0FBYyxFQUFFO0lBUmQ7RUFETixnQkFZRSwyREFBQywrRUFBRDtJQUNFLFNBQVMsRUFBQyxLQURaO0lBRUUsS0FBSyxFQUFDLE9BRlI7SUFHRSxFQUFFLEVBQUU7TUFBRUMsUUFBUSxFQUFFO1FBQUVaLEVBQUUsRUFBRSxNQUFOO1FBQWNDLEVBQUUsRUFBRTtNQUFsQjtJQUFaO0VBSE4sb0NBWkYsQ0FuQ0YsQ0E3QkYsQ0FERjtBQXlGRCxDQWhHRCIsInNvdXJjZXMiOlsid2VicGFjazovL3JlYWN0LWZyb250Ly4vc3JjL2hvbWUvcGFnZXMvQ3JlYXRlQ29udGVudHNNZW51LmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7XHJcbiAgQm94LCBUeXBvZ3JhcGh5LCBQYXBlciwgQnV0dG9uLCBDYXJkLFxyXG4gIENhcmRNZWRpYSwgQ2FyZENvbnRlbnQsIENhcmRBY3Rpb25BcmVhLCBDYXJkQWN0aW9uc1xyXG59IGZyb20gJ0BtdWkvbWF0ZXJpYWwnXHJcbmltcG9ydCBHcmlkIGZyb20gJ0BtdWkvbWF0ZXJpYWwvVW5zdGFibGVfR3JpZDInXHJcbmltcG9ydCB7IHVzZU5hdmlnYXRlIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIlxyXG5cclxuaW1wb3J0IFF1aXpsZXRMb2dvX01vYmlsZSBmcm9tICcuLi9hc3NldHMvaW1hZ2VzL3F1aXpsZXRfbW9iaWxlLnBuZydcclxuaW1wb3J0IFF1aXpsZXRMb2dvX1BDIGZyb20gJy4uL2Fzc2V0cy9pbWFnZXMvcXVpemxldF9wYy5wbmcnXHJcbmltcG9ydCBDcmVhdGVOZXdJY29uIGZyb20gJy4uL2Fzc2V0cy9pbWFnZXMvY3JlYXRlX25ldy5wbmcnXHJcblxyXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XHJcbiAgY29uc3QgbmF2aWdhdGlvbiA9IHVzZU5hdmlnYXRlKClcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2xpY2tJbXBvcnQgPSAoKSA9PiB7XHJcbiAgICBuYXZpZ2F0aW9uKCdpbXBvcnQnKVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXsyfSBzeD17eyBoZWlnaHQ6ICc4NSUnIH19PlxyXG4gICAgICA8R3JpZCB4cyBkaXNwbGF5PVwiZmxleFwiIGp1c3RpZnlDb250ZW50PVwiY2VudGVyXCIgYWxpZ25JdGVtcz1cImNlbnRlclwiPlxyXG4gICAgICAgIDxDYXJkXHJcbiAgICAgICAgIGVsZXZhdGlvbj17NX1cclxuICAgICAgICAgc3g9e3sgaGVpZ2h0OiB7IHhzOiAnMzAwcHgnLCBzbTogJzYwMHB4JyB9LCB3aWR0aDogeyB4czogJzE1MHB4Jywgc206ICc0MDBweCcgfSB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxDYXJkQWN0aW9uQXJlYSBvbkNsaWNrPXtoYW5kbGVDbGlja0ltcG9ydH0gc3g9e3sgaGVpZ2h0OiAnMTAwJScgfX0+XHJcbiAgICAgICAgICAgIDxDYXJkTWVkaWFcclxuICAgICAgICAgICAgICBjb21wb25lbnQ9XCJpbWdcIlxyXG4gICAgICAgICAgICAgIGhlaWdodD1cIjQwJVwiXHJcbiAgICAgICAgICAgICAgc3g9e3tcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IHtcclxuICAgICAgICAgICAgICAgICAgeHM6IGB1cmwoJHtRdWl6bGV0TG9nb19Nb2JpbGV9KWAsXHJcbiAgICAgICAgICAgICAgICAgIHNtOiBgdXJsKCR7UXVpemxldExvZ29fUEN9KWAsXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICBhbHQ9XCJsb2dvIG9mIHF1aXpsZXRcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8Q2FyZENvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgZ3V0dGVyQm90dG9tIHZhcmlhbnQ9XCJoNVwiIGNvbXBvbmVudD1cImRpdlwiPlxyXG4gICAgICAgICAgICAgICAgSW1wb3J0IGZyb20gUXVpemxldFxyXG4gICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTJcIiBjb2xvcj1cInRleHQuc2Vjb25kYXJ5XCI+XHJcbiAgICAgICAgICAgICAgICDjgq/jgqTjgrrjg6zjg4Pjg4jjgYvjgonml6LlrZjjga7ljZjoqp7luLPjgpLjgqTjg7Pjg53jg7zjg4jjgZfjgb7jgZnjgIJcclxuICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgIDwvQ2FyZENvbnRlbnQ+XHJcbiAgICAgICAgICA8L0NhcmRBY3Rpb25BcmVhPlxyXG4gICAgICAgIDwvQ2FyZD5cclxuICAgICAgPC9HcmlkPlxyXG4gICAgICA8R3JpZFxyXG4gICAgICAgIHhzXHJcbiAgICAgICAgZGlzcGxheT1cImZsZXhcIlxyXG4gICAgICAgIGp1c3RpZnlDb250ZW50PVwiY2VudGVyXCJcclxuICAgICAgICBhbGlnbkl0ZW1zPVwiY2VudGVyXCJcclxuICAgICAgICBzeD17eyBwb3NpdGlvbjogJ3JlbGF0aXZlJyB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgPENhcmRcclxuICAgICAgICAgIGVsZXZhdGlvbj17NX1cclxuICAgICAgICAgIHN4PXt7XHJcbiAgICAgICAgICAgIGhlaWdodDogeyB4czogJzMwMHB4Jywgc206ICc2MDBweCcgfSxcclxuICAgICAgICAgICAgd2lkdGg6IHsgeHM6ICcxNTBweCcsIHNtOiAnNDAwcHgnIH0sXHJcbiAgICAgICAgICAgIGZpbHRlcjogJ2JyaWdodG5lc3MoNTAlKSdcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPENhcmRBY3Rpb25BcmVhIGRpc2FibGVkIHN4PXt7IGhlaWdodDogJzEwMCUnIH19PlxyXG4gICAgICAgICAgICA8Q2FyZE1lZGlhXHJcbiAgICAgICAgICAgICAgY29tcG9uZW50PVwiaW1nXCJcclxuICAgICAgICAgICAgICBoZWlnaHQ9XCI0MCVcIlxyXG4gICAgICAgICAgICAgIHN4PXt7XHJcbiAgICAgICAgICAgICAgICBjb250ZW50OiBgdXJsKCR7Q3JlYXRlTmV3SWNvbn0pYCxcclxuICAgICAgICAgICAgICAgIG9iamVjdEZpdDogJ2NvbnRhaW4nXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICBhbHQ9XCJsb2dvIG9mIHF1aXpsZXRcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8Q2FyZENvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgZ3V0dGVyQm90dG9tIHZhcmlhbnQ9XCJoNVwiIGNvbXBvbmVudD1cImRpdlwiPlxyXG4gICAgICAgICAgICAgICAgQ3JlYXRlIE5ldyBDb250ZW50c1xyXG4gICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTJcIiBjb2xvcj1cInRleHQuc2Vjb25kYXJ5XCI+XHJcbiAgICAgICAgICAgICAgICDmlrDopo/jgavljZjoqp7luLPjgpLkvZzmiJDjgZfjgb7jgZnjgIJcclxuICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgIDwvQ2FyZENvbnRlbnQ+XHJcbiAgICAgICAgICA8L0NhcmRBY3Rpb25BcmVhPlxyXG4gICAgICAgIDwvQ2FyZD5cclxuICAgICAgICA8Qm94XHJcbiAgICAgICAgICBzeD17e1xyXG4gICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgICAgICAgICB0b3A6ICcwJyxcclxuICAgICAgICAgICAgbGVmdDogJzAnLFxyXG4gICAgICAgICAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgICAgICAgICBoZWlnaHQ6ICcxMDAlJyxcclxuICAgICAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJ1xyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8VHlwb2dyYXBoeVxyXG4gICAgICAgICAgICBjb21wb25lbnQ9XCJkaXZcIlxyXG4gICAgICAgICAgICBjb2xvcj1cIndoaXRlXCJcclxuICAgICAgICAgICAgc3g9e3sgZm9udFNpemU6IHsgeHM6ICcyMHB4Jywgc206ICc1NXB4JyB9IH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIOa6luWCmeS4reOBp+OBmVxyXG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICA8L0dyaWQ+XHJcbiAgICA8L0dyaWQ+XHJcbiAgKVxyXG5cclxufSJdLCJuYW1lcyI6WyJSZWFjdCIsIkdyaWQiLCJ1c2VOYXZpZ2F0ZSIsIlF1aXpsZXRMb2dvX01vYmlsZSIsIlF1aXpsZXRMb2dvX1BDIiwiQ3JlYXRlTmV3SWNvbiIsIm5hdmlnYXRpb24iLCJoYW5kbGVDbGlja0ltcG9ydCIsImhlaWdodCIsInhzIiwic20iLCJ3aWR0aCIsImNvbnRlbnQiLCJwb3NpdGlvbiIsImZpbHRlciIsIm9iamVjdEZpdCIsImRpc3BsYXkiLCJ0b3AiLCJsZWZ0IiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwiZm9udFNpemUiXSwic291cmNlUm9vdCI6IiJ9