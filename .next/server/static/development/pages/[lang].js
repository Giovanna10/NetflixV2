module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/arrow.ts":
/*!*************************!*\
  !*** ./assets/arrow.ts ***!
  \*************************/
/*! exports provided: rightArrow, leftArrow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rightArrow", function() { return rightArrow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "leftArrow", function() { return leftArrow; });
const rightArrow = "https://image.flaticon.com/icons/svg/481/481143.svg";
const leftArrow = "https://image.flaticon.com/icons/svg/481/481146.svg";

/***/ }),

/***/ "./assets/images.ts":
/*!**************************!*\
  !*** ./assets/images.ts ***!
  \**************************/
/*! exports provided: images */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "images", function() { return images; });
const images = ["https://www.gettyimages.it/gi-resources/images/500px/983794168.jpg", "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg", "https://www.gettyimages.it/gi-resources/images/500px/983801190.jpg", "https://cdn.pixabay.com/photo/2015/06/19/21/24/the-road-815297__340.jpg", "https://cdn.pixabay.com/photo/2020/05/25/20/06/storm-5220380__340.jpg", "https://images.unsplash.com/photo-1538370965046-79c0d6907d47?ixlib=rb-1.2.1&w=1000&q=80"];

/***/ }),

/***/ "./components/LocaleSwitcher.tsx":
/*!***************************************!*\
  !*** ./components/LocaleSwitcher.tsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _translations_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../translations/config */ "./translations/config.ts");
/* harmony import */ var _context_LocaleContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../context/LocaleContext */ "./context/LocaleContext.tsx");
var _jsxFileName = "/Users/giovannaradica/Desktop/Projects/NetflixV2/components/LocaleSwitcher.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const LocaleSwitcher = () => {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])();
  const {
    locale
  } = react__WEBPACK_IMPORTED_MODULE_0___default.a.useContext(_context_LocaleContext__WEBPACK_IMPORTED_MODULE_3__["LocaleContext"]);
  const handleLocaleChange = react__WEBPACK_IMPORTED_MODULE_0___default.a.useCallback(e => {
    const regex = new RegExp(`^/(${_translations_config__WEBPACK_IMPORTED_MODULE_2__["locales"].join('|')})`);
    router.push(router.pathname, router.asPath.replace(regex, `/${e.target.value}`));
  }, [router]);
  return __jsx("select", {
    value: locale,
    onChange: handleLocaleChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  }, _translations_config__WEBPACK_IMPORTED_MODULE_2__["locales"].map(locale => __jsx("option", {
    key: locale,
    value: locale,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  }, _translations_config__WEBPACK_IMPORTED_MODULE_2__["languageNames"][locale])));
};

/* harmony default export */ __webpack_exports__["default"] = (LocaleSwitcher);

/***/ }),

/***/ "./components/Navigation.tsx":
/*!***********************************!*\
  !*** ./components/Navigation.tsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _LocaleSwitcher__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LocaleSwitcher */ "./components/LocaleSwitcher.tsx");
var _jsxFileName = "/Users/giovannaradica/Desktop/Projects/NetflixV2/components/Navigation.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
 // import Link from 'next/link'
// import useTranslation from '../hooks/useTranslation'



const Navigation = () => {
  // const { locale, t } = useTranslation()
  return __jsx(_LocaleSwitcher__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Navigation);

/***/ }),

/***/ "./components/atoms/arrow/Arrow.tsx":
/*!******************************************!*\
  !*** ./components/atoms/arrow/Arrow.tsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_arrow__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../assets/arrow */ "./assets/arrow.ts");
var _jsxFileName = "/Users/giovannaradica/Desktop/Projects/NetflixV2/components/atoms/arrow/Arrow.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const ArrowContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  position: absolute;
  top: 0;
  bottom: 0;
  right: ${props => props.right && 0};
  width: 5%;
  background-color: rgba(171, 167, 167, .65);
`;

const Arrow = ({
  right,
  slidePrev,
  slideNext
}) => __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, right ? __jsx(ArrowContainer, {
  right: true,
  onClick: slideNext,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 26
  },
  __self: undefined
}, __jsx("img", {
  src: _assets_arrow__WEBPACK_IMPORTED_MODULE_2__["rightArrow"],
  style: {
    width: 25,
    height: 25
  },
  __source: {
    fileName: _jsxFileName,
    lineNumber: 27
  },
  __self: undefined
})) : __jsx(ArrowContainer, {
  onClick: slidePrev,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 30
  },
  __self: undefined
}, __jsx("img", {
  src: _assets_arrow__WEBPACK_IMPORTED_MODULE_2__["leftArrow"],
  style: {
    width: 25,
    height: 25
  },
  __source: {
    fileName: _jsxFileName,
    lineNumber: 31
  },
  __self: undefined
})));

/* harmony default export */ __webpack_exports__["default"] = (Arrow);

/***/ }),

/***/ "./components/atoms/card/SliderCard.tsx":
/*!**********************************************!*\
  !*** ./components/atoms/card/SliderCard.tsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _text_Text__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../text/Text */ "./components/atoms/text/Text.ts");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/giovannaradica/Desktop/Projects/NetflixV2/components/atoms/card/SliderCard.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const CardContainer = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div`
  background-image: ${props => `url("${props.backgroundImage}")`};
  background-repeat: no-repeat;
  background-size: cover;
  border: ${props => props.border ? `${props.border}px solid` : "0.5px solid"};
  width: ${props => props.width ? `${props.width}` : "100%"};
  height: ${props => props.height ? `${props.height}` : "100%"};
  margin: ${props => props.margin};
`;

const SliderCard = ({
  width,
  height,
  margin,
  backgroundImage
}) => {
  const {
    0: isHover,
    1: setIsHover
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);

  const Details = __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_text_Text__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    color: "#fefefe",
    molecolTitle: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: undefined
  }, "Title"), __jsx(_text_Text__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    color: "#fefefe",
    paragraph: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: undefined
  }, "Duration"));

  const handleMouseEnter = () => {
    setIsHover(true);
  };

  const handleMouseLeave = () => {
    setIsHover(false);
  };

  return __jsx(CardContainer, {
    onMouseOver: () => handleMouseEnter(),
    onMouseLeave: () => handleMouseLeave(),
    width: width,
    height: height,
    margin: margin,
    backgroundImage: backgroundImage,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: undefined
  }, isHover ? Details : null);
};

/* harmony default export */ __webpack_exports__["default"] = (SliderCard);

/***/ }),

/***/ "./components/atoms/text/Text.ts":
/*!***************************************!*\
  !*** ./components/atoms/text/Text.ts ***!
  \***************************************/
/*! exports provided: Text */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Text", function() { return Text; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const Text = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.p`
    font-size: ${props => props.organismTitle ? '2em' : props.molecolTitle ? '1.4em' : '1em'};
    color: ${props => props.color};
    font-weight: ${props => props.organismTitle ? 400 : props.molecolTitle ? 200 : 0}
`;

/***/ }),

/***/ "./components/molecules/slider/Slider.tsx":
/*!************************************************!*\
  !*** ./components/molecules/slider/Slider.tsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_alice_carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-alice-carousel */ "react-alice-carousel");
/* harmony import */ var react_alice_carousel__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_alice_carousel__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_alice_carousel_lib_alice_carousel_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-alice-carousel/lib/alice-carousel.css */ "./node_modules/react-alice-carousel/lib/alice-carousel.css");
/* harmony import */ var react_alice_carousel_lib_alice_carousel_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_alice_carousel_lib_alice_carousel_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _atoms_card_SliderCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../atoms/card/SliderCard */ "./components/atoms/card/SliderCard.tsx");
/* harmony import */ var _atoms_arrow_Arrow__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../atoms/arrow/Arrow */ "./components/atoms/arrow/Arrow.tsx");
/* harmony import */ var _assets_images__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../assets/images */ "./assets/images.ts");
var _jsxFileName = "/Users/giovannaradica/Desktop/Projects/NetflixV2/components/molecules/slider/Slider.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







const Slider = () => {
  const sliderItems = _assets_images__WEBPACK_IMPORTED_MODULE_5__["images"].map(image => __jsx(_atoms_card_SliderCard__WEBPACK_IMPORTED_MODULE_3__["default"], {
    width: "340px",
    height: "200px",
    margin: "2px",
    backgroundImage: image,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }));
  const carouselRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);

  const slidePrev = () => {
    var _carouselRef$current;

    return (_carouselRef$current = carouselRef.current) === null || _carouselRef$current === void 0 ? void 0 : _carouselRef$current.slidePrev();
  };

  const slideNext = () => {
    var _carouselRef$current2;

    return (_carouselRef$current2 = carouselRef.current) === null || _carouselRef$current2 === void 0 ? void 0 : _carouselRef$current2.slideNext();
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_atoms_arrow_Arrow__WEBPACK_IMPORTED_MODULE_4__["default"], {
    slidePrev: slidePrev,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: undefined
  }), __jsx(react_alice_carousel__WEBPACK_IMPORTED_MODULE_1___default.a, {
    responsive: {
      0: {
        items: 5
      },
      1024: {
        items: 7
      }
    },
    dotsDisabled: true,
    duration: 400,
    buttonsDisabled: true,
    ref: carouselRef,
    items: sliderItems,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  }), __jsx(_atoms_arrow_Arrow__WEBPACK_IMPORTED_MODULE_4__["default"], {
    right: true,
    slideNext: slideNext,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: undefined
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Slider);

/***/ }),

/***/ "./components/molecules/sliderWrapper/SliderWrapper.tsx":
/*!**************************************************************!*\
  !*** ./components/molecules/sliderWrapper/SliderWrapper.tsx ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _slider_Slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../slider/Slider */ "./components/molecules/slider/Slider.tsx");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/giovannaradica/Desktop/Projects/NetflixV2/components/molecules/sliderWrapper/SliderWrapper.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const SliderContainer = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div`
  position: relative;
  display: flex;
  flex-direction: row;
`;

const SliderWrapper = () => __jsx(SliderContainer, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12
  },
  __self: undefined
}, __jsx(_slider_Slider__WEBPACK_IMPORTED_MODULE_1__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13
  },
  __self: undefined
}));

/* harmony default export */ __webpack_exports__["default"] = (SliderWrapper);

/***/ }),

/***/ "./context/LocaleContext.tsx":
/*!***********************************!*\
  !*** ./context/LocaleContext.tsx ***!
  \***********************************/
/*! exports provided: LocaleContext, LocaleProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocaleContext", function() { return LocaleContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocaleProvider", function() { return LocaleProvider; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _translations_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../translations/types */ "./translations/types.ts");
var _jsxFileName = "/Users/giovannaradica/Desktop/Projects/NetflixV2/context/LocaleContext.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const LocaleContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext({
  locale: 'it',
  setLocale: () => null
});
const LocaleProvider = ({
  lang,
  children
}) => {
  const [locale, setLocale] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(lang);
  const {
    query
  } = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])();
  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(() => {
    if (locale !== localStorage.getItem('locale')) {
      localStorage.setItem('locale', locale);
    }
  }, [locale]);
  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(() => {
    if (typeof query.lang === 'string' && Object(_translations_types__WEBPACK_IMPORTED_MODULE_2__["isLocale"])(query.lang) && locale !== query.lang) {
      setLocale(query.lang);
    }
  }, [query.lang, locale]);
  return __jsx(LocaleContext.Provider, {
    value: {
      locale,
      setLocale
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: undefined
  }, children);
};

/***/ }),

/***/ "./hocs/withLocale.tsx":
/*!*****************************!*\
  !*** ./hocs/withLocale.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_error__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/error */ "./node_modules/next/error.js");
/* harmony import */ var next_error__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_error__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_dist_next_server_lib_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/next-server/lib/utils */ "./node_modules/next/dist/next-server/lib/utils.js");
/* harmony import */ var next_dist_next_server_lib_utils__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_next_server_lib_utils__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _translations_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../translations/types */ "./translations/types.ts");
/* harmony import */ var _context_LocaleContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../context/LocaleContext */ "./context/LocaleContext.tsx");
var _jsxFileName = "/Users/giovannaradica/Desktop/Projects/NetflixV2/hocs/withLocale.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






/* harmony default export */ __webpack_exports__["default"] = (WrappedPage => {
  const WithLocale = (_ref) => {
    let {
      locale
    } = _ref,
        pageProps = _objectWithoutProperties(_ref, ["locale"]);

    if (!locale) {
      return __jsx(next_error__WEBPACK_IMPORTED_MODULE_1___default.a, {
        statusCode: 404,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: undefined
      });
    }

    return __jsx(_context_LocaleContext__WEBPACK_IMPORTED_MODULE_4__["LocaleProvider"], {
      lang: locale,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: undefined
    }, __jsx(WrappedPage, _extends({}, pageProps, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: undefined
    })));
  };

  WithLocale.getInitialProps = async ctx => {
    let pageProps = {};

    if (WrappedPage.getInitialProps) {
      pageProps = await WrappedPage.getInitialProps(ctx);
    }

    if (typeof ctx.query.lang !== 'string' || !Object(_translations_types__WEBPACK_IMPORTED_MODULE_3__["isLocale"])(ctx.query.lang)) {
      return _objectSpread({}, pageProps, {
        locale: undefined
      });
    }

    return _objectSpread({}, pageProps, {
      locale: ctx.query.lang
    });
  };

  WithLocale.displayName = `withLang(${Object(next_dist_next_server_lib_utils__WEBPACK_IMPORTED_MODULE_2__["getDisplayName"])(WrappedPage)})`;
  return WithLocale;
});

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/amp-context.js":
/*!***************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/amp-context.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  result["default"] = mod;
  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const React = __importStar(__webpack_require__(/*! react */ "react"));

exports.AmpStateContext = React.createContext({});

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/amp.js":
/*!*******************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/amp.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const react_1 = __importDefault(__webpack_require__(/*! react */ "react"));

const amp_context_1 = __webpack_require__(/*! ./amp-context */ "./node_modules/next/dist/next-server/lib/amp-context.js");

function isInAmpMode({
  ampFirst = false,
  hybrid = false,
  hasQuery = false
} = {}) {
  return ampFirst || hybrid && hasQuery;
}

exports.isInAmpMode = isInAmpMode;

function useAmp() {
  // Don't assign the context value to a variable to save bytes
  return isInAmpMode(react_1.default.useContext(amp_context_1.AmpStateContext));
}

exports.useAmp = useAmp;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/head-manager-context.js":
/*!************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/head-manager-context.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  result["default"] = mod;
  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const React = __importStar(__webpack_require__(/*! react */ "react"));

exports.HeadManagerContext = React.createContext(null);

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/head.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/head.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const react_1 = __importDefault(__webpack_require__(/*! react */ "react"));

const side_effect_1 = __importDefault(__webpack_require__(/*! ./side-effect */ "./node_modules/next/dist/next-server/lib/side-effect.js"));

const amp_context_1 = __webpack_require__(/*! ./amp-context */ "./node_modules/next/dist/next-server/lib/amp-context.js");

const head_manager_context_1 = __webpack_require__(/*! ./head-manager-context */ "./node_modules/next/dist/next-server/lib/head-manager-context.js");

const amp_1 = __webpack_require__(/*! ./amp */ "./node_modules/next/dist/next-server/lib/amp.js");

function defaultHead(inAmpMode = false) {
  const head = [react_1.default.createElement("meta", {
    charSet: "utf-8"
  })];

  if (!inAmpMode) {
    head.push(react_1.default.createElement("meta", {
      name: "viewport",
      content: "width=device-width"
    }));
  }

  return head;
}

exports.defaultHead = defaultHead;

function onlyReactElement(list, child) {
  // React children can be "string" or "number" in this case we ignore them for backwards compat
  if (typeof child === 'string' || typeof child === 'number') {
    return list;
  } // Adds support for React.Fragment


  if (child.type === react_1.default.Fragment) {
    return list.concat(react_1.default.Children.toArray(child.props.children).reduce((fragmentList, fragmentChild) => {
      if (typeof fragmentChild === 'string' || typeof fragmentChild === 'number') {
        return fragmentList;
      }

      return fragmentList.concat(fragmentChild);
    }, []));
  }

  return list.concat(child);
}

const METATYPES = ['name', 'httpEquiv', 'charSet', 'itemProp'];
/*
 returns a function for filtering head child elements
 which shouldn't be duplicated, like <title/>
 Also adds support for deduplicated `key` properties
*/

function unique() {
  const keys = new Set();
  const tags = new Set();
  const metaTypes = new Set();
  const metaCategories = {};
  return h => {
    let unique = true;

    if (h.key && typeof h.key !== 'number' && h.key.indexOf('$') > 0) {
      const key = h.key.slice(h.key.indexOf('$') + 1);

      if (keys.has(key)) {
        unique = false;
      } else {
        keys.add(key);
      }
    } // eslint-disable-next-line default-case


    switch (h.type) {
      case 'title':
      case 'base':
        if (tags.has(h.type)) {
          unique = false;
        } else {
          tags.add(h.type);
        }

        break;

      case 'meta':
        for (let i = 0, len = METATYPES.length; i < len; i++) {
          const metatype = METATYPES[i];
          if (!h.props.hasOwnProperty(metatype)) continue;

          if (metatype === 'charSet') {
            if (metaTypes.has(metatype)) {
              unique = false;
            } else {
              metaTypes.add(metatype);
            }
          } else {
            const category = h.props[metatype];
            const categories = metaCategories[metatype] || new Set();

            if (categories.has(category)) {
              unique = false;
            } else {
              categories.add(category);
              metaCategories[metatype] = categories;
            }
          }
        }

        break;
    }

    return unique;
  };
}
/**
 *
 * @param headElements List of multiple <Head> instances
 */


function reduceComponents(headElements, props) {
  return headElements.reduce((list, headElement) => {
    const headElementChildren = react_1.default.Children.toArray(headElement.props.children);
    return list.concat(headElementChildren);
  }, []).reduce(onlyReactElement, []).reverse().concat(defaultHead(props.inAmpMode)).filter(unique()).reverse().map((c, i) => {
    const key = c.key || i;
    return react_1.default.cloneElement(c, {
      key
    });
  });
}

const Effect = side_effect_1.default();
/**
 * This component injects elements to `<head>` of your page.
 * To avoid duplicated `tags` in `<head>` you can use the `key` property, which will make sure every tag is only rendered once.
 */

function Head({
  children
}) {
  return react_1.default.createElement(amp_context_1.AmpStateContext.Consumer, null, ampState => react_1.default.createElement(head_manager_context_1.HeadManagerContext.Consumer, null, updateHead => react_1.default.createElement(Effect, {
    reduceComponentsToState: reduceComponents,
    handleStateChange: updateHead,
    inAmpMode: amp_1.isInAmpMode(ampState)
  }, children)));
}

Head.rewind = Effect.rewind;
exports.default = Head;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/side-effect.js":
/*!***************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/side-effect.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

const react_1 = __webpack_require__(/*! react */ "react");

const isServer = true;

exports.default = () => {
  const mountedInstances = new Set();
  let state;

  function emitChange(component) {
    state = component.props.reduceComponentsToState([...mountedInstances], component.props);

    if (component.props.handleStateChange) {
      component.props.handleStateChange(state);
    }
  }

  return class extends react_1.Component {
    // Used when server rendering
    static rewind() {
      const recordedState = state;
      state = undefined;
      mountedInstances.clear();
      return recordedState;
    }

    constructor(props) {
      super(props);

      if (isServer) {
        mountedInstances.add(this);
        emitChange(this);
      }
    }

    componentDidMount() {
      mountedInstances.add(this);
      emitChange(this);
    }

    componentDidUpdate() {
      emitChange(this);
    }

    componentWillUnmount() {
      mountedInstances.delete(this);
      emitChange(this);
    }

    render() {
      return null;
    }

  };
};

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");
/**
 * Utils
 */


function execOnce(fn) {
  let used = false;
  let result = null;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn.apply(this, args);
    }

    return result;
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

async function loadGetInitialProps(App, ctx) {
  var _a;

  if (true) {
    if ((_a = App.prototype) === null || _a === void 0 ? void 0 : _a.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/zeit/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/zeit/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (exports.urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SP = typeof performance !== 'undefined';
exports.ST = exports.SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "./node_modules/next/dist/pages/_error.js":
/*!************************************************!*\
  !*** ./node_modules/next/dist/pages/_error.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _head = _interopRequireDefault(__webpack_require__(/*! ../next-server/lib/head */ "./node_modules/next/dist/next-server/lib/head.js"));

var statusCodes = {
  400: 'Bad Request',
  404: 'This page could not be found',
  405: 'Method Not Allowed',
  500: 'Internal Server Error'
};

function _getInitialProps(_ref) {
  var {
    res,
    err
  } = _ref;
  var statusCode = res && res.statusCode ? res.statusCode : err ? err.statusCode : 404;
  return {
    statusCode
  };
}
/**
* `Error` component used for handling errors.
*/


class Error extends _react.default.Component {
  render() {
    var {
      statusCode
    } = this.props;
    var title = this.props.title || statusCodes[statusCode] || 'An unexpected error has occurred';
    return _react.default.createElement("div", {
      style: styles.error
    }, _react.default.createElement(_head.default, null, _react.default.createElement("title", null, statusCode, ": ", title)), _react.default.createElement("div", null, _react.default.createElement("style", {
      dangerouslySetInnerHTML: {
        __html: 'body { margin: 0 }'
      }
    }), statusCode ? _react.default.createElement("h1", {
      style: styles.h1
    }, statusCode) : null, _react.default.createElement("div", {
      style: styles.desc
    }, _react.default.createElement("h2", {
      style: styles.h2
    }, title, "."))));
  }

}

exports.default = Error;
Error.displayName = 'ErrorPage';
Error.getInitialProps = _getInitialProps;
Error.origGetInitialProps = _getInitialProps;
var styles = {
  error: {
    color: '#000',
    background: '#fff',
    fontFamily: '-apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", "Fira Sans", Avenir, "Helvetica Neue", "Lucida Grande", sans-serif',
    height: '100vh',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  desc: {
    display: 'inline-block',
    textAlign: 'left',
    lineHeight: '49px',
    height: '49px',
    verticalAlign: 'middle'
  },
  h1: {
    display: 'inline-block',
    borderRight: '1px solid rgba(0, 0, 0,.3)',
    margin: 0,
    marginRight: '20px',
    padding: '10px 23px 10px 0',
    fontSize: '24px',
    fontWeight: 500,
    verticalAlign: 'top'
  },
  h2: {
    fontSize: '14px',
    fontWeight: 'normal',
    lineHeight: 'inherit',
    margin: 0,
    padding: 0
  }
};

/***/ }),

/***/ "./node_modules/next/error.js":
/*!************************************!*\
  !*** ./node_modules/next/error.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/pages/_error */ "./node_modules/next/dist/pages/_error.js")


/***/ }),

/***/ "./node_modules/react-alice-carousel/lib/alice-carousel.css":
/*!******************************************************************!*\
  !*** ./node_modules/react-alice-carousel/lib/alice-carousel.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/[lang]/index.tsx":
/*!********************************!*\
  !*** ./pages/[lang]/index.tsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hocs_withLocale__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../hocs/withLocale */ "./hocs/withLocale.tsx");
/* harmony import */ var _components_Navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Navigation */ "./components/Navigation.tsx");
/* harmony import */ var _components_atoms_text_Text__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/atoms/text/Text */ "./components/atoms/text/Text.ts");
/* harmony import */ var _components_molecules_sliderWrapper_SliderWrapper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/molecules/sliderWrapper/SliderWrapper */ "./components/molecules/sliderWrapper/SliderWrapper.tsx");
var _jsxFileName = "/Users/giovannaradica/Desktop/Projects/NetflixV2/pages/[lang]/index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const IndexPage = () => {
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }, __jsx(_components_Navigation__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }), __jsx(_components_atoms_text_Text__WEBPACK_IMPORTED_MODULE_3__["Text"], {
    organismTitle: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }, "Home Page"), __jsx(_components_molecules_sliderWrapper_SliderWrapper__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_hocs_withLocale__WEBPACK_IMPORTED_MODULE_1__["default"])(IndexPage));

/***/ }),

/***/ "./translations/config.ts":
/*!********************************!*\
  !*** ./translations/config.ts ***!
  \********************************/
/*! exports provided: defaultLocale, locales, languageNames */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultLocale", function() { return defaultLocale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "locales", function() { return locales; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "languageNames", function() { return languageNames; });
const defaultLocale = 'it';
const locales = ['it', 'en'];
const languageNames = {
  en: 'English',
  it: 'Italiano'
};

/***/ }),

/***/ "./translations/types.ts":
/*!*******************************!*\
  !*** ./translations/types.ts ***!
  \*******************************/
/*! exports provided: isLocale */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isLocale", function() { return isLocale; });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config */ "./translations/config.ts");

function isLocale(tested) {
  return _config__WEBPACK_IMPORTED_MODULE_0__["locales"].some(locale => locale === tested);
}

/***/ }),

/***/ 4:
/*!**************************************!*\
  !*** multi ./pages/[lang]/index.tsx ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/giovannaradica/Desktop/Projects/NetflixV2/pages/[lang]/index.tsx */"./pages/[lang]/index.tsx");


/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-alice-carousel":
/*!***************************************!*\
  !*** external "react-alice-carousel" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-alice-carousel");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=[lang].js.map