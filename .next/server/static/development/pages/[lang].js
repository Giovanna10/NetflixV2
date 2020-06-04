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

/***/ "./api/apiInterceptor.ts":
/*!*******************************!*\
  !*** ./api/apiInterceptor.ts ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

const {
  BASE_URL
} = process.env;
const tmdb = axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({
  baseURL: BASE_URL
});
/* harmony default export */ __webpack_exports__["default"] = (tmdb);

/***/ }),

/***/ "./api/popular.ts":
/*!************************!*\
  !*** ./api/popular.ts ***!
  \************************/
/*! exports provided: getPopularMovie, getYoutubeVideoId */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPopularMovie", function() { return getPopularMovie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getYoutubeVideoId", function() { return getYoutubeVideoId; });
/* harmony import */ var _apiInterceptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./apiInterceptor */ "./api/apiInterceptor.ts");

const {
  KEY
} = process.env;
const getPopularMovie = async () => {
  const params = {
    api_key: KEY
  };
  const response = await _apiInterceptor__WEBPACK_IMPORTED_MODULE_0__["default"].get("/popular", {
    params
  });
  const popularMovies = response.data.results.map(movie => {
    const video = movie.video === false ? "" : movie.video;
    return {
      id: movie.id,
      release_date: movie.release_date,
      overview: movie.overview,
      video: video,
      poster_path: movie.poster_path,
      backdrop_path: movie.backdrop_path,
      original_language: movie.original_language,
      original_title: movie.original_title,
      genre_ids: movie.genre_ids
    };
  });
  return popularMovies;
};
const getYoutubeVideoId = async id => {
  const params = {
    api_key: KEY
  };
  const response = await _apiInterceptor__WEBPACK_IMPORTED_MODULE_0__["default"].get(`/${id}/videos`, {
    params
  });
  const videoId = response.data.results.length !== 0 && response.data.results[0].key;
  return videoId;
};

/***/ }),

/***/ "./api/upcoming.ts":
/*!*************************!*\
  !*** ./api/upcoming.ts ***!
  \*************************/
/*! exports provided: getUpcomingMovie */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUpcomingMovie", function() { return getUpcomingMovie; });
/* harmony import */ var _apiInterceptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./apiInterceptor */ "./api/apiInterceptor.ts");

const {
  KEY
} = process.env;
const getUpcomingMovie = async () => {
  const params = {
    api_key: KEY
  };
  const response = await _apiInterceptor__WEBPACK_IMPORTED_MODULE_0__["default"].get("/upcoming", {
    params
  });
  const upcomingMovies = response.data.results.map(movie => {
    const video = movie.video === false ? "" : movie.video;
    return {
      id: movie.id,
      release_date: movie.release_date,
      overview: movie.overview,
      video: video,
      poster_path: movie.poster_path,
      backdrop_path: movie.backdrop_path,
      original_language: movie.original_language,
      original_title: movie.original_title,
      genre_ids: movie.genre_ids
    };
  });
  return upcomingMovies;
};

/***/ }),

/***/ "./assets/arrow-left.svg":
/*!*******************************!*\
  !*** ./assets/arrow-left.svg ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var _ref =
/*#__PURE__*/
react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  d: "M268.708 256l136.083-128.531c14.104-14.104 21.875-32.854 21.875-52.802C426.667 33.5 393.167 0 352 0c-19.875 0-38.583 7.719-52.667 21.75L107.208 203.198c-10.396 10.385-17.438 23.448-20.375 37.813-1 4.979-1.5 10.021-1.5 14.99s.5 10.01 1.5 15.042c2.938 14.323 9.979 27.375 20.583 37.958l191.792 181.125C313.313 504.229 332.063 512 352 512c41.167 0 74.667-33.5 74.667-74.667 0-19.958-7.771-38.708-22.083-53.01L268.708 256z",
  fill: "#fff"
});

function SvgArrowLeft(props) {
  return (
    /*#__PURE__*/
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", _extends({
      viewBox: "0 0 512 512"
    }, props), _ref)
  );
}

/* harmony default export */ __webpack_exports__["default"] = (SvgArrowLeft);

/***/ }),

/***/ "./assets/arrow-right.svg":
/*!********************************!*\
  !*** ./assets/arrow-right.svg ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var _ref =
/*#__PURE__*/
react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  d: "M425.167 240.958c-2.938-14.313-9.979-27.375-20.583-37.969L212.792 21.865C198.688 7.76 179.938 0 160 0c-41.167 0-74.667 33.5-74.667 74.667 0 19.958 7.771 38.708 22.083 53.01L243.292 256 107.208 384.531c-14.104 14.104-21.875 32.854-21.875 52.802C85.333 478.5 118.833 512 160 512c19.896 0 38.583-7.729 52.688-21.76l192.104-181.438c10.396-10.385 17.438-23.438 20.375-37.76 1-4.885 1.5-9.948 1.5-15.042 0-4.969-.5-10.01-1.5-15.042z",
  fill: "#fff"
});

function SvgArrowRight(props) {
  return (
    /*#__PURE__*/
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", _extends({
      viewBox: "0 0 512 512"
    }, props), _ref)
  );
}

/* harmony default export */ __webpack_exports__["default"] = (SvgArrowRight);

/***/ }),

/***/ "./assets/information.svg":
/*!********************************!*\
  !*** ./assets/information.svg ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var _ref =
/*#__PURE__*/
react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  d: "M262.118 0C117.588 0 0 117.588 0 262.118s117.588 262.118 262.118 262.118 262.118-117.588 262.118-262.118S406.647 0 262.118 0zm17.05 417.639c-12.453 2.076-37.232 7.261-49.815 8.303-10.651.882-20.702-5.215-26.829-13.967a32.756 32.756 0 01-3.968-29.997l49.547-136.242h-51.515c-.044-28.389 21.25-49.263 48.485-57.274 12.997-3.824 37.212-9.057 49.809-8.255 7.547.48 20.702 5.215 26.829 13.967a32.756 32.756 0 013.968 29.997l-49.547 136.242h51.499c.01 28.356-20.49 52.564-48.463 57.226zm15.714-253.815c-18.096 0-32.765-14.671-32.765-32.765 0-18.096 14.669-32.765 32.765-32.765s32.765 14.669 32.765 32.765c0 18.095-14.668 32.765-32.765 32.765z"
});

function SvgInformation(props) {
  return (
    /*#__PURE__*/
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", _extends({
      height: 512,
      viewBox: "0 0 524.235 524.235",
      width: 512
    }, props), _ref)
  );
}

/* harmony default export */ __webpack_exports__["default"] = (SvgInformation);

/***/ }),

/***/ "./assets/play-circle.svg":
/*!********************************!*\
  !*** ./assets/play-circle.svg ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var _ref =
/*#__PURE__*/
react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", {
  fill: "#d8d8d8"
},
/*#__PURE__*/
react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  d: "M256 0C114.833 0 0 114.844 0 256s114.833 256 256 256 256-114.844 256-256S397.167 0 256 0zm0 490.667C126.604 490.667 21.333 385.396 21.333 256S126.604 21.333 256 21.333 490.667 126.604 490.667 256 385.396 490.667 256 490.667z"
}),
/*#__PURE__*/
react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  d: "M357.771 247.031l-149.333-96c-3.271-2.135-7.5-2.25-10.875-.396A10.653 10.653 0 00192 160v192c0 3.906 2.125 7.49 5.563 9.365a10.68 10.68 0 005.104 1.302c2 0 4.021-.563 5.771-1.698l149.333-96c3.042-1.958 4.896-5.344 4.896-8.969s-1.854-7.01-4.896-8.969zm-144.438 85.427V179.542L332.271 256l-118.938 76.458z"
}));

function SvgPlayCircle(props) {
  return (
    /*#__PURE__*/
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", _extends({
      viewBox: "0 0 512 512"
    }, props), _ref)
  );
}

/* harmony default export */ __webpack_exports__["default"] = (SvgPlayCircle);

/***/ }),

/***/ "./assets/play.svg":
/*!*************************!*\
  !*** ./assets/play.svg ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var _ref =
/*#__PURE__*/
react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  d: "M405.284 201.188L130.804 13.28C118.128 4.596 105.356 0 94.74 0 74.216 0 61.52 16.472 61.52 44.044v406.124c0 27.54 12.68 43.98 33.156 43.98 10.632 0 23.2-4.6 35.904-13.308l274.608-187.904c17.66-12.104 27.44-28.392 27.44-45.884.004-17.48-9.664-33.764-27.344-45.864z"
});

function SvgPlay(props) {
  return (
    /*#__PURE__*/
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", _extends({
      viewBox: "0 0 494.148 494.148"
    }, props), _ref)
  );
}

/* harmony default export */ __webpack_exports__["default"] = (SvgPlay);

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

/***/ "./components/atoms/Arrow.tsx":
/*!************************************!*\
  !*** ./components/atoms/Arrow.tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Icon */ "./components/atoms/Icon.tsx");
var _jsxFileName = "/Users/giovannaradica/Desktop/Projects/NetflixV2/components/atoms/Arrow.tsx";

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
  background-color: rgba(0, 0, 0, 0.65);
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
    lineNumber: 30
  },
  __self: undefined
}, __jsx(_Icon__WEBPACK_IMPORTED_MODULE_2__["default"], {
  name: "rightArrow",
  width: 30,
  height: 30,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 31
  },
  __self: undefined
})) : __jsx(ArrowContainer, {
  onClick: slidePrev,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 34
  },
  __self: undefined
}, __jsx(_Icon__WEBPACK_IMPORTED_MODULE_2__["default"], {
  name: "leftArrow",
  width: 30,
  height: 30,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 35
  },
  __self: undefined
})));

/* harmony default export */ __webpack_exports__["default"] = (Arrow);

/***/ }),

/***/ "./components/atoms/Button.tsx":
/*!*************************************!*\
  !*** ./components/atoms/Button.tsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Icon */ "./components/atoms/Icon.tsx");
var _jsxFileName = "/Users/giovannaradica/Desktop/Projects/NetflixV2/components/atoms/Button.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const ButtonComponent = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.button`
  height: ${props => props.height ? props.height : "20px"};
  width: ${props => props.width ? props.width : "50px"};
  display: flex;
  flex-direction: raw;
  justify-content: ${props => props.justifyContent};
  align-items: center;
  border-radius: ${props => props.rounded};
  background: ${props => props.backgroundColor};
  cursor: pointer;
  opacity: ${props => props.opacity};
  &:focus {
    outline: 0;
  }
`;
const TextComponent = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.p`
  color: ${props => props.textColor};
  font-size: ${props => props.textSize};
`;

const Button = ({
  height,
  width,
  text,
  textSize,
  textColor,
  icon,
  iconHeight,
  iconWidth,
  rounded,
  backgroundColor,
  justifyContent,
  opacity
}) => {
  return __jsx(ButtonComponent, {
    height: height,
    width: width,
    rounded: rounded,
    backgroundColor: backgroundColor,
    justifyContent: justifyContent,
    opacity: opacity,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: undefined
  }, icon && __jsx(_Icon__WEBPACK_IMPORTED_MODULE_2__["default"], {
    name: icon,
    height: iconHeight,
    width: iconWidth,
    color: "#000000",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: undefined
  }), __jsx(TextComponent, {
    textColor: textColor,
    textSize: textSize,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: undefined
  }, text));
};

/* harmony default export */ __webpack_exports__["default"] = (Button);

/***/ }),

/***/ "./components/atoms/Icon.tsx":
/*!***********************************!*\
  !*** ./components/atoms/Icon.tsx ***!
  \***********************************/
/*! exports provided: Icons, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Icons", function() { return Icons; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets_play_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/play.svg */ "./assets/play.svg");
/* harmony import */ var _assets_play_circle_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/play-circle.svg */ "./assets/play-circle.svg");
/* harmony import */ var _assets_information_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/information.svg */ "./assets/information.svg");
/* harmony import */ var _assets_arrow_right_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../assets/arrow-right.svg */ "./assets/arrow-right.svg");
/* harmony import */ var _assets_arrow_left_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../assets/arrow-left.svg */ "./assets/arrow-left.svg");
var _jsxFileName = "/Users/giovannaradica/Desktop/Projects/NetflixV2/components/atoms/Icon.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }







const Icons = {
  playIcon: _assets_play_svg__WEBPACK_IMPORTED_MODULE_1__["default"],
  playCircle: _assets_play_circle_svg__WEBPACK_IMPORTED_MODULE_2__["default"],
  infoIcon: _assets_information_svg__WEBPACK_IMPORTED_MODULE_3__["default"],
  rightArrow: _assets_arrow_right_svg__WEBPACK_IMPORTED_MODULE_4__["default"],
  leftArrow: _assets_arrow_left_svg__WEBPACK_IMPORTED_MODULE_5__["default"]
};

const Icon = (_ref) => {
  let props = Object.assign({}, _ref);
  const {
    name
  } = props;
  const IconComponent = Icons[name];
  return IconComponent ? __jsx(IconComponent, _extends({}, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: undefined
  })) : __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: undefined
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Icon);

/***/ }),

/***/ "./components/atoms/SliderCard.tsx":
/*!*****************************************!*\
  !*** ./components/atoms/SliderCard.tsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _api_popular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../api/popular */ "./api/popular.ts");
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Text */ "./components/atoms/Text.ts");
/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Icon */ "./components/atoms/Icon.tsx");
var _jsxFileName = "/Users/giovannaradica/Desktop/Projects/NetflixV2/components/atoms/SliderCard.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const CardContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
  border: ${props => props.border ? `${props.border}px solid` : "0"};
  width: ${props => props.width ? `${props.width}` : "100%"};
  height: ${props => props.height ? `${props.height}` : "100%"};
  margin: ${props => props.margin};
`;
const Opacity = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
  position: absolute;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.50);
  height: 100%;
  width: ${props => props.width};
  z-index: 1;
`;
const ImageContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.img`
  position: absolute;
  width: ${props => props.width ? `${props.width}` : "100%"};
  height: ${props => props.height ? `${props.height}` : "100%"};
  z-index: 0;
`;
const IconContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
  height: 60%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;
const PlayerContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.iframe`
  width: ${props => props.width ? `${props.width}px` : "100%"};
  height: ${props => props.height ? `${props.height}px` : "100%"};
  transform: scale(1.3);
  & .ytp-chrome-top{
    display: none;
  }
`;

const SliderCard = ({
  width,
  height,
  backgroundImage,
  videoMovieKey,
  movieTitle
}) => {
  const {
    0: isHover,
    1: setIsHover
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: videoId,
    1: setVideoId
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");

  const handleMouseEnter = () => {
    setIsHover(true);
  };

  const handleMouseLeave = () => {
    setIsHover(false);
  };

  const getVideoMovie = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(async () => {
    let id = "";

    if (videoMovieKey !== undefined) {
      id = await Object(_api_popular__WEBPACK_IMPORTED_MODULE_2__["getYoutubeVideoId"])(videoMovieKey);
    }

    setVideoId(id);
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    getVideoMovie();
  }, []);
  return __jsx(CardContainer, {
    onMouseEnter: () => handleMouseEnter(),
    onMouseLeave: () => handleMouseLeave(),
    height: height,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: undefined
  }, isHover ? __jsx(PlayerContainer, {
    frameBorder: "0",
    allowFullScreen: true,
    src: `https://www.youtube.com/embed/${videoId}?autoplay=1&showinfo=0&controls=0&mute=1`,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: undefined
  }) : __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(ImageContainer, {
    src: backgroundImage,
    height: height,
    width: width,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123
    },
    __self: undefined
  }), __jsx(Opacity, {
    width: width,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    },
    __self: undefined
  }, __jsx(IconContainer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: undefined
  }, __jsx(_Icon__WEBPACK_IMPORTED_MODULE_4__["default"], {
    name: "playCircle",
    height: 45,
    width: 45,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
    },
    __self: undefined
  })), __jsx(_Text__WEBPACK_IMPORTED_MODULE_3__["Text"], {
    size: 20,
    color: "#e3e3e3",
    weight: "bold",
    marginTop: "10%",
    marginLeft: "5%",
    family: "Arial, sans-serif",
    overflow: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128
    },
    __self: undefined
  }, movieTitle))));
};

/* harmony default export */ __webpack_exports__["default"] = (SliderCard);

/***/ }),

/***/ "./components/atoms/Text.ts":
/*!**********************************!*\
  !*** ./components/atoms/Text.ts ***!
  \**********************************/
/*! exports provided: Text */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Text", function() { return Text; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const Text = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.p`
  font-size: ${props => `${props.size}px`};
  font-family: ${props => props.family};
  color: ${props => props.color};
  font-weight: ${props => props.weight};
  margin-top: ${props => props.marginTop};
  margin-bottom: ${props => props.marginBottom};
  margin-right: ${props => props.marginRight};
  margin-left: ${props => props.marginLeft};
  height: ${props => props.height};
  line-height: ${props => props.lineHeight};
  white-space: ${props => props.whiteSpace};
  overflow: ${props => props.overflow};
  text-overflow: ${props => props.textOverflow};
`;

/***/ }),

/***/ "./components/molecules/Slider.tsx":
/*!*****************************************!*\
  !*** ./components/molecules/Slider.tsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_alice_carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-alice-carousel */ "react-alice-carousel");
/* harmony import */ var react_alice_carousel__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_alice_carousel__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _atoms_SliderCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../atoms/SliderCard */ "./components/atoms/SliderCard.tsx");
/* harmony import */ var _atoms_Arrow__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../atoms/Arrow */ "./components/atoms/Arrow.tsx");
/* harmony import */ var react_alice_carousel_lib_alice_carousel_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-alice-carousel/lib/alice-carousel.css */ "./node_modules/react-alice-carousel/lib/alice-carousel.css");
/* harmony import */ var react_alice_carousel_lib_alice_carousel_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_alice_carousel_lib_alice_carousel_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "/Users/giovannaradica/Desktop/Projects/NetflixV2/components/molecules/Slider.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const {
  IMAGE_BASE_URL
} = process.env;
const SliderContainer = styled_components__WEBPACK_IMPORTED_MODULE_5___default.a.div`
  position: relative;
  display: flex;
  flex-direction: row;
`;

const Slider = ({
  movies
}) => {
  const sliderItems = movies.map(movie => {
    return __jsx(_atoms_SliderCard__WEBPACK_IMPORTED_MODULE_2__["default"], {
      width: "250px",
      height: "130px",
      backgroundImage: `${IMAGE_BASE_URL}${movie.backdrop_path}`,
      videoMovieKey: movie.id,
      movieTitle: movie.original_title,
      description: movie.overview,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: undefined
    });
  });
  const carouselRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);

  const slidePrev = () => {
    var _carouselRef$current;

    return (_carouselRef$current = carouselRef.current) === null || _carouselRef$current === void 0 ? void 0 : _carouselRef$current.slidePrev();
  };

  const slideNext = () => {
    var _carouselRef$current2;

    return (_carouselRef$current2 = carouselRef.current) === null || _carouselRef$current2 === void 0 ? void 0 : _carouselRef$current2.slideNext();
  };

  return __jsx(SliderContainer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: undefined
  }, __jsx(_atoms_Arrow__WEBPACK_IMPORTED_MODULE_3__["default"], {
    slidePrev: slidePrev,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
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
    infinite: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: undefined
  }), __jsx(_atoms_Arrow__WEBPACK_IMPORTED_MODULE_3__["default"], {
    right: true,
    slideNext: slideNext,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: undefined
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Slider);

/***/ }),

/***/ "./components/molecules/SliderWrapper.tsx":
/*!************************************************!*\
  !*** ./components/molecules/SliderWrapper.tsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Slider */ "./components/molecules/Slider.tsx");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _atoms_Text__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../atoms/Text */ "./components/atoms/Text.ts");
/* harmony import */ var _api_popular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../api/popular */ "./api/popular.ts");
/* harmony import */ var _api_upcoming__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../api/upcoming */ "./api/upcoming.ts");
var _jsxFileName = "/Users/giovannaradica/Desktop/Projects/NetflixV2/components/molecules/SliderWrapper.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const SliderContainer = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div`
  margin-top: 50px;
  margin-bottom: 50px;
`;

const SliderWrapper = () => {
  const {
    0: popularMovie,
    1: setPopulars
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const {
    0: upcomingMovie,
    1: setUpcoming
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const getPopulars = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(async () => {
    const populars = await Object(_api_popular__WEBPACK_IMPORTED_MODULE_4__["getPopularMovie"])();
    setPopulars(populars);
  }, []);
  const getUpcoming = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(async () => {
    const upcoming = await Object(_api_upcoming__WEBPACK_IMPORTED_MODULE_5__["getUpcomingMovie"])();
    setUpcoming(upcoming);
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    getPopulars();
    getUpcoming();
  }, [getPopulars, getUpcoming]);
  return __jsx(SliderContainer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: undefined
  }, __jsx(_atoms_Text__WEBPACK_IMPORTED_MODULE_3__["Text"], {
    size: 20,
    color: "#fefefe",
    weight: 600,
    style: {
      marginLeft: '0.8em'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: undefined
  }, "Popular"), __jsx(_Slider__WEBPACK_IMPORTED_MODULE_1__["default"], {
    movies: popularMovie,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: undefined
  }), __jsx(_atoms_Text__WEBPACK_IMPORTED_MODULE_3__["Text"], {
    size: 20,
    color: "#fefefe",
    weight: 600,
    style: {
      marginLeft: '0.8em'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: undefined
  }, "Upcoming"), __jsx(_Slider__WEBPACK_IMPORTED_MODULE_1__["default"], {
    movies: upcomingMovie,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: undefined
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (SliderWrapper);

/***/ }),

/***/ "./components/organisms/DailyEventWindow.tsx":
/*!***************************************************!*\
  !*** ./components/organisms/DailyEventWindow.tsx ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _atoms_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../atoms/Button */ "./components/atoms/Button.tsx");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/giovannaradica/Desktop/Projects/NetflixV2/components/organisms/DailyEventWindow.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const DailyEventWindowContainer = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div`
  display: flex;
  flex-direction: column;
  height: 650px;
  width: 100%;
  background-image: url("https://img2.tgcom24.mediaset.it/binary/fotogallery/istockphoto/41.$plit/C_2_fotogallery_3084643_9_image.jpg?20171215053032");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;
const TextsContainer = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div`
  display: flex;
  flex-direction: column;
  margin-top: 50px;
  margin-left: 50px;
  margin-right: 50px;
`;
const ButtonsContainer = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 30%;
  margin-top: 75px;
`;

const DailyEventWindow = () => {
  return __jsx(DailyEventWindowContainer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: undefined
  }, __jsx(TextsContainer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: undefined
  }, __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: undefined
  }, " DailyEventWindow "), __jsx("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: undefined
  }, " Subtitle "), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: undefined
  }, "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam, optio facere! Consectetur sequi ratione porro, sunt fugiat saepe illum aspernatur magni quis quas dolore distinctio!")), __jsx(ButtonsContainer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: undefined
  }, __jsx(_atoms_Button__WEBPACK_IMPORTED_MODULE_1__["default"], {
    height: "55px",
    width: "115px",
    backgroundColor: "#fefefe",
    text: "Play",
    textColor: "#000000",
    textSize: 18,
    icon: "playIcon",
    iconHeight: 20,
    iconWidth: 20,
    justifyContent: "space-around",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: undefined
  }), __jsx(_atoms_Button__WEBPACK_IMPORTED_MODULE_1__["default"], {
    height: "55px",
    width: "115px",
    backgroundColor: "#fefefe",
    text: "Other Info",
    textColor: "#000000",
    textSize: 18,
    icon: "infoIcon",
    iconHeight: 20,
    iconWidth: 20,
    justifyContent: "space-around",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: undefined
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (DailyEventWindow);

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
/* harmony import */ var _components_molecules_SliderWrapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/molecules/SliderWrapper */ "./components/molecules/SliderWrapper.tsx");
/* harmony import */ var _components_organisms_DailyEventWindow__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/organisms/DailyEventWindow */ "./components/organisms/DailyEventWindow.tsx");
var _jsxFileName = "/Users/giovannaradica/Desktop/Projects/NetflixV2/pages/[lang]/index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const IndexPage = () => {
  return __jsx("body", {
    style: {
      overflow: 'auto',
      margin: 0,
      backgroundColor: '#000000'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, __jsx(_components_Navigation__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }), __jsx(_components_organisms_DailyEventWindow__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }), __jsx(_components_molecules_SliderWrapper__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
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

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

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