"use strict";
(self["webpackChunkreact_front"] = self["webpackChunkreact_front"] || []).push([["../home/import_from_quizlet"],{

/***/ "./src/home/pages/ImportFromQuizlet.jsx":
/*!**********************************************!*\
  !*** ./src/home/pages/ImportFromQuizlet.jsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material_Box_Box_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/Box/Box.js */ "./node_modules/@mui/material/Box/Box.js");
/* harmony import */ var _mui_material_Button_Button_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/Button/Button.js */ "./node_modules/@mui/material/Button/Button.js");
/* harmony import */ var _mui_material_TextField_TextField_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/TextField/TextField.js */ "./node_modules/@mui/material/TextField/TextField.js");
/* harmony import */ var _mui_material_Typography_Typography_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/Typography/Typography.js */ "./node_modules/@mui/material/Typography/Typography.js");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-hook-form */ "./node_modules/react-hook-form/dist/index.esm.mjs");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }









/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {
  var _errors$url;

  var navigation = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_2__.useNavigate)();

  var _useForm = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_3__.useForm)({
    criteriaMode: 'all',
    defaultValues: {
      url: ''
    }
  }),
      register = _useForm.register,
      handleSubmit = _useForm.handleSubmit,
      setValue = _useForm.setValue,
      errors = _useForm.formState.errors;

  var onSubmit = function onSubmit(data) {
    console.log("submit: ".concat(data.url));
    (axios__WEBPACK_IMPORTED_MODULE_1___default().defaults.xsrfCookieName) = 'csrftoken';
    (axios__WEBPACK_IMPORTED_MODULE_1___default().defaults.xsrfHeaderName) = 'X-CSRFTOKEN';
    axios__WEBPACK_IMPORTED_MODULE_1___default().post('/api/import', {
      url: data.url
    }).then(function (response) {
      console.log(response);
    })["catch"](function (error) {
      console.log(error);
    });
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Box_Box_js__WEBPACK_IMPORTED_MODULE_4__["default"], {
    sx: {
      width: {
        xs: '90%',
        sm: 'max(500px, 80%)'
      },
      position: 'absolute',
      top: '30%',
      left: '50%',
      transform: 'translateY(-50%) translateX(-50%)',
      textAlign: 'center'
    },
    component: "form",
    noValidate: true,
    onSubmit: handleSubmit(onSubmit)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Typography_Typography_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
    component: "p",
    sx: {
      fontSize: '19px',
      width: '100%',
      marginBottom: {
        xs: '0',
        sm: '10px'
      }
    }
  }, "\u30A4\u30F3\u30DD\u30FC\u30C8\u3057\u305F\u3044\u5358\u8A9E\u5E33\u306EURL\u3092", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Box_Box_js__WEBPACK_IMPORTED_MODULE_4__["default"], {
    component: "br",
    sx: {
      display: {
        xs: 'inline',
        sm: 'none'
      }
    }
  }), "\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044\u3002"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Box_Box_js__WEBPACK_IMPORTED_MODULE_4__["default"], {
    sx: {
      display: 'inline-flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexWrap: 'wrap',
      border: '1px solid gray',
      borderRadius: '5px',
      padding: {
        xs: '5px',
        sm: '5px 15px'
      },
      transform: {
        xs: 'none',
        sm: 'scale(1.3)'
      },
      marginTop: {
        xs: '0',
        sm: '10px'
      },
      width: {
        xs: 'auto',
        sm: '80%'
      }
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Typography_Typography_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
    component: "p",
    sx: {
      fontSize: '15px'
    }
  }, "https://quizlet.com/"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_TextField_TextField_js__WEBPACK_IMPORTED_MODULE_6__["default"], _extends({
    type: "text",
    label: "URL",
    size: "small",
    sx: {
      width: '190px',
      flexGrow: {
        xs: '0',
        sm: '1'
      }
    }
  }, register('url', {
    required: '入力してください',
    pattern: {
      value: /(?<=^((https:\/\/)?quizlet\.com\/)?)[a-zA-Z0-9\-_\/?=&]+$/,
      message: 'URLの形式が有効ではありません'
    }
  }), {
    onChange: function onChange(event) {
      if (/^(https:\/\/)?quizlet\.com\//.test(event.target.value)) {
        setValue('url', event.target.value.replace(/^(https:\/\/)?quizlet\.com\//, ''));
      }
    },
    error: errors.url !== undefined,
    helperText: (_errors$url = errors.url) === null || _errors$url === void 0 ? void 0 : _errors$url.message
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Button_Button_js__WEBPACK_IMPORTED_MODULE_7__["default"], {
    variant: "contained",
    type: "submit",
    sx: {
      position: 'absolute',
      right: '0',
      bottom: '-50px'
    }
  }, "\u9001\u4FE1")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("iframe", {
    name: "form_invisible",
    style: {
      display: 'none'
    }
  }));
});

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kdWxlcy8uLi9ob21lL2ltcG9ydF9mcm9tX3F1aXpsZXQuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFFQSxpRUFBZSxZQUFNO0VBQUE7O0VBQ25CLElBQU1NLFVBQVUsR0FBR0YsNkRBQVcsRUFBOUI7O0VBRUEsZUFLSUgsd0RBQU8sQ0FBQztJQUNWTSxZQUFZLEVBQUUsS0FESjtJQUVWQyxhQUFhLEVBQUU7TUFBRUMsR0FBRyxFQUFFO0lBQVA7RUFGTCxDQUFELENBTFg7RUFBQSxJQUNFQyxRQURGLFlBQ0VBLFFBREY7RUFBQSxJQUVFQyxZQUZGLFlBRUVBLFlBRkY7RUFBQSxJQUdFQyxRQUhGLFlBR0VBLFFBSEY7RUFBQSxJQUllQyxNQUpmLFlBSUVDLFNBSkYsQ0FJZUQsTUFKZjs7RUFVQSxJQUFNRSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFDQyxJQUFELEVBQVU7SUFDekJDLE9BQU8sQ0FBQ0MsR0FBUixtQkFBdUJGLElBQUksQ0FBQ1AsR0FBNUI7SUFDQUosc0VBQUEsR0FBZ0MsV0FBaEM7SUFDQUEsc0VBQUEsR0FBZ0MsYUFBaEM7SUFDQUEsaURBQUEsQ0FBVyxhQUFYLEVBQTBCO01BQ3hCSSxHQUFHLEVBQUVPLElBQUksQ0FBQ1A7SUFEYyxDQUExQixFQUdDYyxJQUhELENBR00sVUFBQUMsUUFBUSxFQUFJO01BQ2hCUCxPQUFPLENBQUNDLEdBQVIsQ0FBWU0sUUFBWjtJQUNELENBTEQsV0FNTyxVQUFBQyxLQUFLLEVBQUk7TUFDZFIsT0FBTyxDQUFDQyxHQUFSLENBQVlPLEtBQVo7SUFDRCxDQVJEO0VBU0QsQ0FiRDs7RUFlQSxvQkFDRSx1SUFDRSwyREFBQyxnRUFBRDtJQUNFLEVBQUUsRUFBRTtNQUNGQyxLQUFLLEVBQUU7UUFBRUMsRUFBRSxFQUFFLEtBQU47UUFBYUMsRUFBRSxFQUFFO01BQWpCLENBREw7TUFFRkMsUUFBUSxFQUFFLFVBRlI7TUFHRkMs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YjtJQUE4QixLQUFLLEVBQUU7TUFBRW5CLE9BQU8sRUFBRTtJQUFYO0VBQXJDLEVBL0RGLENBREY7QUFvRUQsQ0FoR0QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZWFjdC1mcm9udC8uL3NyYy9ob21lL3BhZ2VzL0ltcG9ydEZyb21RdWl6bGV0LmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IEJveCwgQnV0dG9uLCBUZXh0RmllbGQsIFR5cG9ncmFwaHkgfSBmcm9tICdAbXVpL21hdGVyaWFsJ1xyXG5pbXBvcnQgeyB1c2VGb3JtLCBDb250cm9sbGVyLCBFcnJvck1lc3NhZ2UgfSBmcm9tICdyZWFjdC1ob29rLWZvcm0nXHJcbmltcG9ydCB7IHVzZU5hdmlnYXRlIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIlxyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXHJcblxyXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XHJcbiAgY29uc3QgbmF2aWdhdGlvbiA9IHVzZU5hdmlnYXRlKClcclxuXHJcbiAgY29uc3Qge1xyXG4gICAgcmVnaXN0ZXIsXHJcbiAgICBoYW5kbGVTdWJtaXQsXHJcbiAgICBzZXRWYWx1ZSxcclxuICAgIGZvcm1TdGF0ZTogeyBlcnJvcnMgfVxyXG4gIH0gPSB1c2VGb3JtKHtcclxuICAgIGNyaXRlcmlhTW9kZTogJ2FsbCcsXHJcbiAgICBkZWZhdWx0VmFsdWVzOiB7IHVybDogJycgfSxcclxuICB9KVxyXG5cclxuICBjb25zdCBvblN1Ym1pdCA9IChkYXRhKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhgc3VibWl0OiAke2RhdGEudXJsfWApXHJcbiAgICBheGlvcy5kZWZhdWx0cy54c3JmQ29va2llTmFtZSA9ICdjc3JmdG9rZW4nXHJcbiAgICBheGlvcy5kZWZhdWx0cy54c3JmSGVhZGVyTmFtZSA9ICdYLUNTUkZUT0tFTidcclxuICAgIGF4aW9zLnBvc3QoJy9hcGkvaW1wb3J0Jywge1xyXG4gICAgICB1cmw6IGRhdGEudXJsXHJcbiAgICB9KVxyXG4gICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSlcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEJveFxyXG4gICAgICAgIHN4PXt7XHJcbiAgICAgICAgICB3aWR0aDogeyB4czogJzkwJScsIHNtOiAnbWF4KDUwMHB4LCA4MCUpJyB9LFxyXG4gICAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICAgICAgICB0b3A6ICczMCUnLFxyXG4gICAgICAgICAgbGVmdDogJzUwJScsXHJcbiAgICAgICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKC01MCUpIHRyYW5zbGF0ZVgoLTUwJSknLFxyXG4gICAgICAgICAgdGV4dEFsaWduOiAnY2VudGVyJ1xyXG4gICAgICAgIH19XHJcbiAgICAgICAgY29tcG9uZW50PVwiZm9ybVwiXHJcbiAgICAgICAgbm9WYWxpZGF0ZVxyXG4gICAgICAgIG9uU3VibWl0PXtoYW5kbGVTdWJtaXQob25TdWJtaXQpfVxyXG4gICAgICA+XHJcbiAgICAgICAgPFR5cG9ncmFwaHlcclxuICAgICAgICAgIGNvbXBvbmVudD0ncCdcclxuICAgICAgICAgIHN4PXt7IGZvbnRTaXplOiAnMTlweCcsIHdpZHRoOiAnMTAwJScsIG1hcmdpbkJvdHRvbTogeyB4czogJzAnLCBzbTogJzEwcHgnfSB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIOOCpOODs+ODneODvOODiOOBl+OBn+OBhOWNmOiqnuW4s+OBrlVSTOOCklxyXG4gICAgICAgICAgPEJveCBjb21wb25lbnQ9XCJiclwiIHN4PXt7IGRpc3BsYXk6IHsgeHM6ICdpbmxpbmUnLCBzbTogJ25vbmUnIH0gfX0gLz5cclxuICAgICAgICAgIOWFpeWKm+OBl+OBpuOBj+OBoOOBleOBhOOAglxyXG4gICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICA8Qm94XHJcbiAgICAgICAgICBzeD17e1xyXG4gICAgICAgICAgICBkaXNwbGF5OiAnaW5saW5lLWZsZXgnLFxyXG4gICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXHJcbiAgICAgICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgICAgICAgICBmbGV4V3JhcDogJ3dyYXAnLFxyXG4gICAgICAgICAgICBib3JkZXI6ICcxcHggc29saWQgZ3JheScsXHJcbiAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzVweCcsXHJcbiAgICAgICAgICAgIHBhZGRpbmc6IHsgeHM6ICc1cHgnLCBzbTogJzVweCAxNXB4JyB9LFxyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHsgeHM6ICdub25lJywgc206ICdzY2FsZSgxLjMpJyB9LFxyXG4gICAgICAgICAgICBtYXJnaW5Ub3A6IHsgeHM6ICcwJywgc206ICcxMHB4JyB9LFxyXG4gICAgICAgICAgICB3aWR0aDogeyB4czogJ2F1dG8nLCBzbTogJzgwJSd9XHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxUeXBvZ3JhcGh5IGNvbXBvbmVudD0ncCcgc3g9e3sgZm9udFNpemU6ICcxNXB4JyB9fT5odHRwczovL3F1aXpsZXQuY29tLzwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICBsYWJlbD1cIlVSTFwiXHJcbiAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgICAgIHN4PXt7IHdpZHRoOiAnMTkwcHgnLCBmbGV4R3JvdzogeyB4czogJzAnLCBzbTogJzEnIH0gfX1cclxuICAgICAgICAgICAgey4uLnJlZ2lzdGVyKCd1cmwnLCB7XHJcbiAgICAgICAgICAgICAgcmVxdWlyZWQ6ICflhaXlipvjgZfjgabjgY/jgaDjgZXjgYQnLFxyXG4gICAgICAgICAgICAgIHBhdHRlcm46IHsgdmFsdWU6IC8oPzw9XigoaHR0cHM6XFwvXFwvKT9xdWl6bGV0XFwuY29tXFwvKT8pW2EtekEtWjAtOVxcLV9cXC8/PSZdKyQvLCBtZXNzYWdlOiAnVVJM44Gu5b2i5byP44GM5pyJ5Yq544Gn44Gv44GC44KK44G+44Gb44KTJyB9XHJcbiAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgaWYoL14oaHR0cHM6XFwvXFwvKT9xdWl6bGV0XFwuY29tXFwvLy50ZXN0KGV2ZW50LnRhcmdldC52YWx1ZSkpIHtcclxuICAgICAgICAgICAgICAgIHNldFZhbHVlKCd1cmwnLCBldmVudC50YXJnZXQudmFsdWUucmVwbGFjZSgvXihodHRwczpcXC9cXC8pP3F1aXpsZXRcXC5jb21cXC8vLCAnJykpXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBlcnJvcj17ZXJyb3JzLnVybCAhPT0gdW5kZWZpbmVkfVxyXG4gICAgICAgICAgICBoZWxwZXJUZXh0PXtlcnJvcnMudXJsPy5tZXNzYWdlfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L0JveD5cclxuICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcclxuICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgc3g9e3sgcG9zaXRpb246ICdhYnNvbHV0ZScsIHJpZ2h0OiAnMCcsIGJvdHRvbTogJy01MHB4JyB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIOmAgeS/oVxyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICA8L0JveD5cclxuICAgICAgPGlmcmFtZSBuYW1lPVwiZm9ybV9pbnZpc2libGVcIiBzdHlsZT17eyBkaXNwbGF5OiAnbm9uZScgfX0gLz5cclxuICAgIDwvPlxyXG4gIClcclxuXHJcbn0iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VGb3JtIiwiQ29udHJvbGxlciIsIkVycm9yTWVzc2FnZSIsInVzZU5hdmlnYXRlIiwiYXhpb3MiLCJuYXZpZ2F0aW9uIiwiY3JpdGVyaWFNb2RlIiwiZGVmYXVsdFZhbHVlcyIsInVybCIsInJlZ2lzdGVyIiwiaGFuZGxlU3VibWl0Iiwic2V0VmFsdWUiLCJlcnJvcnMiLCJmb3JtU3RhdGUiLCJvblN1Ym1pdCIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwiZGVmYXVsdHMiLCJ4c3JmQ29va2llTmFtZSIsInhzcmZIZWFkZXJOYW1lIiwicG9zdCIsInRoZW4iLCJyZXNwb25zZSIsImVycm9yIiwid2lkdGgiLCJ4cyIsInNtIiwicG9zaXRpb24iLCJ0b3AiLCJsZWZ0IiwidHJhbnNmb3JtIiwidGV4dEFsaWduIiwiZm9udFNpemUiLCJtYXJnaW5Cb3R0b20iLCJkaXNwbGF5IiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkl0ZW1zIiwiZmxleFdyYXAiLCJib3JkZXIiLCJib3JkZXJSYWRpdXMiLCJwYWRkaW5nIiwibWFyZ2luVG9wIiwiZmxleEdyb3ciLCJyZXF1aXJlZCIsInBhdHRlcm4iLCJ2YWx1ZSIsIm1lc3NhZ2UiLCJldmVudCIsInRlc3QiLCJ0YXJnZXQiLCJyZXBsYWNlIiwidW5kZWZpbmVkIiwicmlnaHQiLCJib3R0b20iXSwic291cmNlUm9vdCI6IiJ9