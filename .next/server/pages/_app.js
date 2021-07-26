module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/bootstrap/dist/css/bootstrap.min.css":
/*!***********************************************************!*\
  !*** ./node_modules/bootstrap/dist/css/bootstrap.min.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/styles.css */ "./styles/styles.css");
/* harmony import */ var _styles_styles_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_styles_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_responsive_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/responsive.css */ "./styles/responsive.css");
/* harmony import */ var _styles_responsive_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_responsive_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_fonts_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/fonts.css */ "./styles/fonts.css");
/* harmony import */ var _styles_fonts_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_fonts_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_MessengerChat__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/MessengerChat */ "./utils/MessengerChat.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _utils_gtm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/gtm */ "./utils/gtm.js");
var _jsxFileName = "C:\\Users\\BO0004\\Desktop\\repositorios\\iframe-endesapt\\pages\\_app.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }










function MyApp({
  Component,
  pageProps
}) {
  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(() => {
    const handleRouteChange = url => Object(_utils_gtm__WEBPACK_IMPORTED_MODULE_7__["GTMPageView"])(url);

    next_router__WEBPACK_IMPORTED_MODULE_6___default.a.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      next_router__WEBPACK_IMPORTED_MODULE_6___default.a.events.off("routeChangeComplete", handleRouteChange);
    };
  }, []);
  let fb = Object(react__WEBPACK_IMPORTED_MODULE_5__["useRef"])("fb-msgr");
  return __jsx(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, __jsx(_utils_MessengerChat__WEBPACK_IMPORTED_MODULE_4__["default"], {
    pageId: "103993817624712",
    ref: fb,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }
  }), __jsx(Component, _extends({}, pageProps, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (MyApp);

/***/ }),

/***/ "./styles/fonts.css":
/*!**************************!*\
  !*** ./styles/fonts.css ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./styles/responsive.css":
/*!*******************************!*\
  !*** ./styles/responsive.css ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./styles/styles.css":
/*!***************************!*\
  !*** ./styles/styles.css ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./utils/MessengerChat.js":
/*!********************************!*\
  !*** ./utils/MessengerChat.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\BO0004\\Desktop\\repositorios\\iframe-endesapt\\utils\\MessengerChat.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



/**
 * Utils
 */

const removeElementByIds = ids => {
  ids.forEach(id => {
    const element = document.getElementById(id);

    if (element && element.parentNode) {
      element.parentNode.removeChild(element);
    }
  });
};
/**
 * Messenger Chat Plugin
 */


class MessengerChat extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
    this.setFbAsyncInit = this.setFbAsyncInit.bind(this);
    this.reloadSDKAsynchronously = this.reloadSDKAsynchronously.bind(this);
    this.loadSDKAsynchronously = this.loadSDKAsynchronously.bind(this);
    this.createMarkup = this.createMarkup.bind(this);
    this.controlPlugin = this.controlPlugin.bind(this);
    this.subscribeEvents = this.subscribeEvents.bind(this);
    this.removeFacebookSDK = this.removeFacebookSDK.bind(this);
    this.state = {
      fbLoaded: false,
      shouldShowDialog: undefined
    };
  }

  componentDidMount() {
    this.setFbAsyncInit();
    this.reloadSDKAsynchronously();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.pageId !== this.props.pageId || // prevProps.appId !== this.props.appId ||
    prevProps.shouldShowDialog !== this.props.shouldShowDialog || prevProps.htmlRef !== this.props.htmlRef || prevProps.minimized !== this.props.minimized || prevProps.themeColor !== this.props.themeColor || prevProps.loggedInGreeting !== this.props.loggedInGreeting || prevProps.loggedOutGreeting !== this.props.loggedOutGreeting || prevProps.greetingDialogDisplay !== this.props.greetingDialogDisplay || prevProps.greetingDialogDelay !== this.props.greetingDialogDelay || prevProps.autoLogAppEvents !== this.props.autoLogAppEvents || prevProps.xfbml !== this.props.xfbml || prevProps.version !== this.props.version || prevProps.language !== this.props.language) {
      this.setFbAsyncInit();
      this.reloadSDKAsynchronously();
    }
  }

  setFbAsyncInit() {
    const {
      autoLogAppEvents,
      xfbml,
      version
    } = this.props;

    window.fbAsyncInit = () => {
      window.FB.init({
        // appId,
        autoLogAppEvents,
        xfbml,
        version: `v${version}`
      });
      this.setState({
        fbLoaded: true
      });
    };
  }

  loadSDKAsynchronously() {
    // const { language } = this.props

    /* eslint-disable */
    (function (d, s, id) {
      var js,
          fjs = d.getElementsByTagName(s)[0];

      if (d.getElementById(id)) {
        return;
      }

      js = d.createElement(s);
      js.id = id;
      js.src = `https://connect.facebook.net/en_GB/sdk/xfbml.customerchat.js`;
      fjs.parentNode.insertBefore(js, fjs);
    })(document, "script", "facebook-jssdk");
    /* eslint-enable */

  }

  removeFacebookSDK() {
    removeElementByIds(["facebook-jssdk", "fb-root"]);
    delete window.FB;
  }

  reloadSDKAsynchronously() {
    this.removeFacebookSDK();
    this.loadSDKAsynchronously();
  }

  controlPlugin() {
    const {
      shouldShowDialog
    } = this.props;

    if (shouldShowDialog) {
      window.FB.CustomerChat.showDialog();
    } else {
      window.FB.CustomerChat.hideDialog();
    }
  }

  subscribeEvents() {
    const {
      onCustomerChatDialogShow,
      onCustomerChatDialogHide
    } = this.props;

    if (onCustomerChatDialogShow) {
      window.FB.Event.subscribe("customerchat.dialogShow", onCustomerChatDialogShow);
    }

    if (onCustomerChatDialogHide) {
      window.FB.Event.subscribe("customerchat.dialogHide", onCustomerChatDialogHide);
    }
  }

  createMarkup() {
    const {
      pageId,
      htmlRef,
      minimized,
      themeColor,
      loggedInGreeting,
      loggedOutGreeting,
      greetingDialogDisplay,
      greetingDialogDelay
    } = this.props;
    const refAttribute = htmlRef !== undefined ? `ref="${htmlRef}"` : "";
    const minimizedAttribute = minimized !== undefined ? `minimized="${minimized}"` : "";
    const themeColorAttribute = themeColor !== undefined ? `theme_color="${themeColor}"` : "";
    const loggedInGreetingAttribute = loggedInGreeting !== undefined ? `logged_in_greeting="${loggedInGreeting}"` : "";
    const loggedOutGreetingAttribute = loggedOutGreeting !== undefined ? `logged_out_greeting="${loggedOutGreeting}"` : "";
    const greetingDialogDisplayAttribute = greetingDialogDisplay !== undefined ? `greeting_dialog_display="${greetingDialogDisplay}"` : "";
    const greetingDialogDelayAttribute = greetingDialogDelay !== undefined ? `greeting_dialog_delay="${greetingDialogDelay}"` : "";
    return {
      __html: `<div
             className="fb-customerchat"
             page_id="${pageId}"
             ${refAttribute}
             ${minimizedAttribute}
             ${themeColorAttribute}
             ${loggedInGreetingAttribute}
             ${loggedOutGreetingAttribute}
             ${greetingDialogDisplayAttribute}
             ${greetingDialogDelayAttribute}
           ></div>`
    };
  }

  render() {
    const {
      fbLoaded,
      shouldShowDialog
    } = this.state;

    if (fbLoaded && shouldShowDialog !== this.props.shouldShowDialog) {
      document.addEventListener("DOMNodeInserted", event => {
        const element = event.target;

        if (element.className && typeof element.className === "string" && element.className.includes("fb_dialog")) {
          this.controlPlugin();
        }
      }, false);
      this.subscribeEvents();
    } // Add a random key to rerender. Reference:
    // https://stackoverflow.com/questions/30242530/dangerouslysetinnerhtml-doesnt-update-during-render


    return __jsx("div", {
      key: Date(),
      dangerouslySetInnerHTML: this.createMarkup(),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 246,
        columnNumber: 12
      }
    });
  }

}

_defineProperty(MessengerChat, "propTypes", {
  pageId: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  // appId:                    PropTypes.string.isRequired,
  shouldShowDialog: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  htmlRef: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  minimized: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  themeColor: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  loggedInGreeting: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  loggedOutGreeting: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  greetingDialogDisplay: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(["show", "hide", "fade"]),
  greetingDialogDelay: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  autoLogAppEvents: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  xfbml: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  version: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  // language:                 PropTypes.string,
  onCustomerChatDialogShow: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  onCustomerChatDialogHide: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
});

_defineProperty(MessengerChat, "defaultProps", {
  shouldShowDialog: false,
  htmlRef: undefined,
  minimized: undefined,
  themeColor: undefined,
  loggedInGreeting: undefined,
  loggedOutGreeting: undefined,
  greetingDialogDisplay: undefined,
  greetingDialogDelay: undefined,
  autoLogAppEvents: true,
  xfbml: true,
  version: "4.0",
  onCustomerChatDialogShow: undefined,
  onCustomerChatDialogHide: undefined
});

/* harmony default export */ __webpack_exports__["default"] = (MessengerChat);

/***/ }),

/***/ "./utils/gtm.js":
/*!**********************!*\
  !*** ./utils/gtm.js ***!
  \**********************/
/*! exports provided: GTMPageView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GTMPageView", function() { return GTMPageView; });
const GTMPageView = url => {
  const pageEvent = {
    event: "pageview",
    page: url
  }; //@ts-ignore

  window && window.dataLayer && window.dataLayer.push(pageEvent);
  return pageEvent;
};

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvX2FwcC5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9NZXNzZW5nZXJDaGF0LmpzIiwid2VicGFjazovLy8uL3V0aWxzL2d0bS5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInByb3AtdHlwZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIl0sIm5hbWVzIjpbIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwidXNlRWZmZWN0IiwiaGFuZGxlUm91dGVDaGFuZ2UiLCJ1cmwiLCJHVE1QYWdlVmlldyIsIlJvdXRlciIsImV2ZW50cyIsIm9uIiwib2ZmIiwiZmIiLCJ1c2VSZWYiLCJyZW1vdmVFbGVtZW50QnlJZHMiLCJpZHMiLCJmb3JFYWNoIiwiaWQiLCJlbGVtZW50IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInBhcmVudE5vZGUiLCJyZW1vdmVDaGlsZCIsIk1lc3NlbmdlckNoYXQiLCJjb25zdHJ1Y3RvciIsInByb3BzIiwic2V0RmJBc3luY0luaXQiLCJiaW5kIiwicmVsb2FkU0RLQXN5bmNocm9ub3VzbHkiLCJsb2FkU0RLQXN5bmNocm9ub3VzbHkiLCJjcmVhdGVNYXJrdXAiLCJjb250cm9sUGx1Z2luIiwic3Vic2NyaWJlRXZlbnRzIiwicmVtb3ZlRmFjZWJvb2tTREsiLCJzdGF0ZSIsImZiTG9hZGVkIiwic2hvdWxkU2hvd0RpYWxvZyIsInVuZGVmaW5lZCIsImNvbXBvbmVudERpZE1vdW50IiwiY29tcG9uZW50RGlkVXBkYXRlIiwicHJldlByb3BzIiwicGFnZUlkIiwiaHRtbFJlZiIsIm1pbmltaXplZCIsInRoZW1lQ29sb3IiLCJsb2dnZWRJbkdyZWV0aW5nIiwibG9nZ2VkT3V0R3JlZXRpbmciLCJncmVldGluZ0RpYWxvZ0Rpc3BsYXkiLCJncmVldGluZ0RpYWxvZ0RlbGF5IiwiYXV0b0xvZ0FwcEV2ZW50cyIsInhmYm1sIiwidmVyc2lvbiIsImxhbmd1YWdlIiwid2luZG93IiwiZmJBc3luY0luaXQiLCJGQiIsImluaXQiLCJzZXRTdGF0ZSIsImQiLCJzIiwianMiLCJmanMiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsImNyZWF0ZUVsZW1lbnQiLCJzcmMiLCJpbnNlcnRCZWZvcmUiLCJDdXN0b21lckNoYXQiLCJzaG93RGlhbG9nIiwiaGlkZURpYWxvZyIsIm9uQ3VzdG9tZXJDaGF0RGlhbG9nU2hvdyIsIm9uQ3VzdG9tZXJDaGF0RGlhbG9nSGlkZSIsIkV2ZW50Iiwic3Vic2NyaWJlIiwicmVmQXR0cmlidXRlIiwibWluaW1pemVkQXR0cmlidXRlIiwidGhlbWVDb2xvckF0dHJpYnV0ZSIsImxvZ2dlZEluR3JlZXRpbmdBdHRyaWJ1dGUiLCJsb2dnZWRPdXRHcmVldGluZ0F0dHJpYnV0ZSIsImdyZWV0aW5nRGlhbG9nRGlzcGxheUF0dHJpYnV0ZSIsImdyZWV0aW5nRGlhbG9nRGVsYXlBdHRyaWJ1dGUiLCJfX2h0bWwiLCJyZW5kZXIiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJ0YXJnZXQiLCJjbGFzc05hbWUiLCJpbmNsdWRlcyIsIkRhdGUiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJpc1JlcXVpcmVkIiwiYm9vbCIsIm9uZU9mIiwibnVtYmVyIiwiZnVuYyIsInBhZ2VFdmVudCIsInBhZ2UiLCJkYXRhTGF5ZXIiLCJwdXNoIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FB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TyxFQUFFTCxTQUZXO0FBR3BCTSxXQUFTLEVBQUVOLFNBSFM7QUFJcEJPLFlBQVUsRUFBRVAsU0FKUTtBQUtwQlEsa0JBQWdCLEVBQUVSLFNBTEU7QUFNcEJTLG1CQUFpQixFQUFFVCxTQU5DO0FBT3BCVSx1QkFBcUIsRUFBRVYsU0FQSDtBQVFwQlcscUJBQW1CLEVBQUVYLFNBUkQ7QUFTcEJZLGtCQUFnQixFQUFFLElBVEU7QUFVcEJDLE9BQUssRUFBRSxJQVZhO0FBV3BCQyxTQUFPLEVBQUUsS0FYVztBQVlwQmtCLDBCQUF3QixFQUFFaEMsU0FaTjtBQWFwQmlDLDBCQUF3QixFQUFFakM7QUFiTixDOztBQW1OVGQsNEVBQWYsRTs7Ozs7Ozs7Ozs7O0FDelBBO0FBQUE7QUFBTyxNQUFNaEIsV0FBVyxHQUFJRCxHQUFELElBQVM7QUFDbEMsUUFBTXlGLFNBQVMsR0FBRztBQUNoQlosU0FBSyxFQUFFLFVBRFM7QUFFaEJhLFFBQUksRUFBRTFGO0FBRlUsR0FBbEIsQ0FEa0MsQ0FLbEM7O0FBQ0ErQyxRQUFNLElBQUlBLE1BQU0sQ0FBQzRDLFNBQWpCLElBQThCNUMsTUFBTSxDQUFDNEMsU0FBUCxDQUFpQkMsSUFBakIsQ0FBc0JILFNBQXRCLENBQTlCO0FBQ0EsU0FBT0EsU0FBUDtBQUNELENBUk0sQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBUCx3Qzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSxrQyIsImZpbGUiOiJwYWdlcy9fYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiaW1wb3J0IFwiYm9vdHN0cmFwL2Rpc3QvY3NzL2Jvb3RzdHJhcC5taW4uY3NzXCI7XHJcbmltcG9ydCBcIi4uL3N0eWxlcy9zdHlsZXMuY3NzXCI7XHJcbmltcG9ydCBcIi4uL3N0eWxlcy9yZXNwb25zaXZlLmNzc1wiO1xyXG5pbXBvcnQgXCIuLi9zdHlsZXMvZm9udHMuY3NzXCI7XHJcblxyXG5pbXBvcnQgTWVzc2VuZ2VyQ2hhdCBmcm9tIFwiLi4vdXRpbHMvTWVzc2VuZ2VyQ2hhdFwiO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlUmVmLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgR1RNUGFnZVZpZXcgfSBmcm9tIFwiLi4vdXRpbHMvZ3RtXCI7XHJcblxyXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgaGFuZGxlUm91dGVDaGFuZ2UgPSAodXJsKSA9PiBHVE1QYWdlVmlldyh1cmwpO1xyXG4gICAgUm91dGVyLmV2ZW50cy5vbihcInJvdXRlQ2hhbmdlQ29tcGxldGVcIiwgaGFuZGxlUm91dGVDaGFuZ2UpO1xyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgUm91dGVyLmV2ZW50cy5vZmYoXCJyb3V0ZUNoYW5nZUNvbXBsZXRlXCIsIGhhbmRsZVJvdXRlQ2hhbmdlKTtcclxuICAgIH07XHJcbiAgfSwgW10pO1xyXG4gIGxldCBmYiA9IHVzZVJlZihcImZiLW1zZ3JcIik7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxNZXNzZW5nZXJDaGF0IHBhZ2VJZD17XCIxMDM5OTM4MTc2MjQ3MTJcIn0gcmVmPXtmYn0gLz5cclxuICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7XHJcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xyXG5cclxuLyoqXHJcbiAqIFV0aWxzXHJcbiAqL1xyXG5jb25zdCByZW1vdmVFbGVtZW50QnlJZHMgPSAoaWRzKSA9PiB7XHJcbiAgaWRzLmZvckVhY2goKGlkKSA9PiB7XHJcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpO1xyXG4gICAgaWYgKGVsZW1lbnQgJiYgZWxlbWVudC5wYXJlbnROb2RlKSB7XHJcbiAgICAgIGVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlbGVtZW50KTtcclxuICAgIH1cclxuICB9KTtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBNZXNzZW5nZXIgQ2hhdCBQbHVnaW5cclxuICovXHJcbmNsYXNzIE1lc3NlbmdlckNoYXQgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XHJcbiAgICBwYWdlSWQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICAgIC8vIGFwcElkOiAgICAgICAgICAgICAgICAgICAgUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gICAgc2hvdWxkU2hvd0RpYWxvZzogUHJvcFR5cGVzLmJvb2wsXHJcbiAgICBodG1sUmVmOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgbWluaW1pemVkOiBQcm9wVHlwZXMuYm9vbCxcclxuICAgIHRoZW1lQ29sb3I6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICBsb2dnZWRJbkdyZWV0aW5nOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgbG9nZ2VkT3V0R3JlZXRpbmc6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICBncmVldGluZ0RpYWxvZ0Rpc3BsYXk6IFByb3BUeXBlcy5vbmVPZihbXCJzaG93XCIsIFwiaGlkZVwiLCBcImZhZGVcIl0pLFxyXG4gICAgZ3JlZXRpbmdEaWFsb2dEZWxheTogUHJvcFR5cGVzLm51bWJlcixcclxuICAgIGF1dG9Mb2dBcHBFdmVudHM6IFByb3BUeXBlcy5ib29sLFxyXG4gICAgeGZibWw6IFByb3BUeXBlcy5ib29sLFxyXG4gICAgdmVyc2lvbjogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIC8vIGxhbmd1YWdlOiAgICAgICAgICAgICAgICAgUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIG9uQ3VzdG9tZXJDaGF0RGlhbG9nU2hvdzogUHJvcFR5cGVzLmZ1bmMsXHJcbiAgICBvbkN1c3RvbWVyQ2hhdERpYWxvZ0hpZGU6IFByb3BUeXBlcy5mdW5jLFxyXG4gIH07XHJcblxyXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XHJcbiAgICBzaG91bGRTaG93RGlhbG9nOiBmYWxzZSxcclxuICAgIGh0bWxSZWY6IHVuZGVmaW5lZCxcclxuICAgIG1pbmltaXplZDogdW5kZWZpbmVkLFxyXG4gICAgdGhlbWVDb2xvcjogdW5kZWZpbmVkLFxyXG4gICAgbG9nZ2VkSW5HcmVldGluZzogdW5kZWZpbmVkLFxyXG4gICAgbG9nZ2VkT3V0R3JlZXRpbmc6IHVuZGVmaW5lZCxcclxuICAgIGdyZWV0aW5nRGlhbG9nRGlzcGxheTogdW5kZWZpbmVkLFxyXG4gICAgZ3JlZXRpbmdEaWFsb2dEZWxheTogdW5kZWZpbmVkLFxyXG4gICAgYXV0b0xvZ0FwcEV2ZW50czogdHJ1ZSxcclxuICAgIHhmYm1sOiB0cnVlLFxyXG4gICAgdmVyc2lvbjogXCI0LjBcIixcclxuICAgIG9uQ3VzdG9tZXJDaGF0RGlhbG9nU2hvdzogdW5kZWZpbmVkLFxyXG4gICAgb25DdXN0b21lckNoYXREaWFsb2dIaWRlOiB1bmRlZmluZWQsXHJcbiAgfTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuXHJcbiAgICB0aGlzLnNldEZiQXN5bmNJbml0ID0gdGhpcy5zZXRGYkFzeW5jSW5pdC5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5yZWxvYWRTREtBc3luY2hyb25vdXNseSA9IHRoaXMucmVsb2FkU0RLQXN5bmNocm9ub3VzbHkuYmluZCh0aGlzKTtcclxuICAgIHRoaXMubG9hZFNES0FzeW5jaHJvbm91c2x5ID0gdGhpcy5sb2FkU0RLQXN5bmNocm9ub3VzbHkuYmluZCh0aGlzKTtcclxuICAgIHRoaXMuY3JlYXRlTWFya3VwID0gdGhpcy5jcmVhdGVNYXJrdXAuYmluZCh0aGlzKTtcclxuICAgIHRoaXMuY29udHJvbFBsdWdpbiA9IHRoaXMuY29udHJvbFBsdWdpbi5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5zdWJzY3JpYmVFdmVudHMgPSB0aGlzLnN1YnNjcmliZUV2ZW50cy5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5yZW1vdmVGYWNlYm9va1NESyA9IHRoaXMucmVtb3ZlRmFjZWJvb2tTREsuYmluZCh0aGlzKTtcclxuXHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBmYkxvYWRlZDogZmFsc2UsXHJcbiAgICAgIHNob3VsZFNob3dEaWFsb2c6IHVuZGVmaW5lZCxcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgIHRoaXMuc2V0RmJBc3luY0luaXQoKTtcclxuICAgIHRoaXMucmVsb2FkU0RLQXN5bmNocm9ub3VzbHkoKTtcclxuICB9XHJcblxyXG4gIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMpIHtcclxuICAgIGlmIChcclxuICAgICAgcHJldlByb3BzLnBhZ2VJZCAhPT0gdGhpcy5wcm9wcy5wYWdlSWQgfHxcclxuICAgICAgLy8gcHJldlByb3BzLmFwcElkICE9PSB0aGlzLnByb3BzLmFwcElkIHx8XHJcbiAgICAgIHByZXZQcm9wcy5zaG91bGRTaG93RGlhbG9nICE9PSB0aGlzLnByb3BzLnNob3VsZFNob3dEaWFsb2cgfHxcclxuICAgICAgcHJldlByb3BzLmh0bWxSZWYgIT09IHRoaXMucHJvcHMuaHRtbFJlZiB8fFxyXG4gICAgICBwcmV2UHJvcHMubWluaW1pemVkICE9PSB0aGlzLnByb3BzLm1pbmltaXplZCB8fFxyXG4gICAgICBwcmV2UHJvcHMudGhlbWVDb2xvciAhPT0gdGhpcy5wcm9wcy50aGVtZUNvbG9yIHx8XHJcbiAgICAgIHByZXZQcm9wcy5sb2dnZWRJbkdyZWV0aW5nICE9PSB0aGlzLnByb3BzLmxvZ2dlZEluR3JlZXRpbmcgfHxcclxuICAgICAgcHJldlByb3BzLmxvZ2dlZE91dEdyZWV0aW5nICE9PSB0aGlzLnByb3BzLmxvZ2dlZE91dEdyZWV0aW5nIHx8XHJcbiAgICAgIHByZXZQcm9wcy5ncmVldGluZ0RpYWxvZ0Rpc3BsYXkgIT09IHRoaXMucHJvcHMuZ3JlZXRpbmdEaWFsb2dEaXNwbGF5IHx8XHJcbiAgICAgIHByZXZQcm9wcy5ncmVldGluZ0RpYWxvZ0RlbGF5ICE9PSB0aGlzLnByb3BzLmdyZWV0aW5nRGlhbG9nRGVsYXkgfHxcclxuICAgICAgcHJldlByb3BzLmF1dG9Mb2dBcHBFdmVudHMgIT09IHRoaXMucHJvcHMuYXV0b0xvZ0FwcEV2ZW50cyB8fFxyXG4gICAgICBwcmV2UHJvcHMueGZibWwgIT09IHRoaXMucHJvcHMueGZibWwgfHxcclxuICAgICAgcHJldlByb3BzLnZlcnNpb24gIT09IHRoaXMucHJvcHMudmVyc2lvbiB8fFxyXG4gICAgICBwcmV2UHJvcHMubGFuZ3VhZ2UgIT09IHRoaXMucHJvcHMubGFuZ3VhZ2VcclxuICAgICkge1xyXG4gICAgICB0aGlzLnNldEZiQXN5bmNJbml0KCk7XHJcbiAgICAgIHRoaXMucmVsb2FkU0RLQXN5bmNocm9ub3VzbHkoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNldEZiQXN5bmNJbml0KCkge1xyXG4gICAgY29uc3QgeyBhdXRvTG9nQXBwRXZlbnRzLCB4ZmJtbCwgdmVyc2lvbiB9ID0gdGhpcy5wcm9wcztcclxuXHJcbiAgICB3aW5kb3cuZmJBc3luY0luaXQgPSAoKSA9PiB7XHJcbiAgICAgIHdpbmRvdy5GQi5pbml0KHtcclxuICAgICAgICAvLyBhcHBJZCxcclxuICAgICAgICBhdXRvTG9nQXBwRXZlbnRzLFxyXG4gICAgICAgIHhmYm1sLFxyXG4gICAgICAgIHZlcnNpb246IGB2JHt2ZXJzaW9ufWAsXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGZiTG9hZGVkOiB0cnVlIH0pO1xyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGxvYWRTREtBc3luY2hyb25vdXNseSgpIHtcclxuICAgIC8vIGNvbnN0IHsgbGFuZ3VhZ2UgfSA9IHRoaXMucHJvcHNcclxuICAgIC8qIGVzbGludC1kaXNhYmxlICovXHJcbiAgICAoZnVuY3Rpb24gKGQsIHMsIGlkKSB7XHJcbiAgICAgIHZhciBqcyxcclxuICAgICAgICBmanMgPSBkLmdldEVsZW1lbnRzQnlUYWdOYW1lKHMpWzBdO1xyXG4gICAgICBpZiAoZC5nZXRFbGVtZW50QnlJZChpZCkpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAganMgPSBkLmNyZWF0ZUVsZW1lbnQocyk7XHJcbiAgICAgIGpzLmlkID0gaWQ7XHJcbiAgICAgIGpzLnNyYyA9IGBodHRwczovL2Nvbm5lY3QuZmFjZWJvb2submV0L2VuX0dCL3Nkay94ZmJtbC5jdXN0b21lcmNoYXQuanNgO1xyXG4gICAgICBmanMucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoanMsIGZqcyk7XHJcbiAgICB9KShkb2N1bWVudCwgXCJzY3JpcHRcIiwgXCJmYWNlYm9vay1qc3Nka1wiKTtcclxuICAgIC8qIGVzbGludC1lbmFibGUgKi9cclxuICB9XHJcblxyXG4gIHJlbW92ZUZhY2Vib29rU0RLKCkge1xyXG4gICAgcmVtb3ZlRWxlbWVudEJ5SWRzKFtcImZhY2Vib29rLWpzc2RrXCIsIFwiZmItcm9vdFwiXSk7XHJcbiAgICBkZWxldGUgd2luZG93LkZCO1xyXG4gIH1cclxuXHJcbiAgcmVsb2FkU0RLQXN5bmNocm9ub3VzbHkoKSB7XHJcbiAgICB0aGlzLnJlbW92ZUZhY2Vib29rU0RLKCk7XHJcbiAgICB0aGlzLmxvYWRTREtBc3luY2hyb25vdXNseSgpO1xyXG4gIH1cclxuXHJcbiAgY29udHJvbFBsdWdpbigpIHtcclxuICAgIGNvbnN0IHsgc2hvdWxkU2hvd0RpYWxvZyB9ID0gdGhpcy5wcm9wcztcclxuXHJcbiAgICBpZiAoc2hvdWxkU2hvd0RpYWxvZykge1xyXG4gICAgICB3aW5kb3cuRkIuQ3VzdG9tZXJDaGF0LnNob3dEaWFsb2coKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHdpbmRvdy5GQi5DdXN0b21lckNoYXQuaGlkZURpYWxvZygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc3Vic2NyaWJlRXZlbnRzKCkge1xyXG4gICAgY29uc3QgeyBvbkN1c3RvbWVyQ2hhdERpYWxvZ1Nob3csIG9uQ3VzdG9tZXJDaGF0RGlhbG9nSGlkZSB9ID0gdGhpcy5wcm9wcztcclxuXHJcbiAgICBpZiAob25DdXN0b21lckNoYXREaWFsb2dTaG93KSB7XHJcbiAgICAgIHdpbmRvdy5GQi5FdmVudC5zdWJzY3JpYmUoXHJcbiAgICAgICAgXCJjdXN0b21lcmNoYXQuZGlhbG9nU2hvd1wiLFxyXG4gICAgICAgIG9uQ3VzdG9tZXJDaGF0RGlhbG9nU2hvd1xyXG4gICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChvbkN1c3RvbWVyQ2hhdERpYWxvZ0hpZGUpIHtcclxuICAgICAgd2luZG93LkZCLkV2ZW50LnN1YnNjcmliZShcclxuICAgICAgICBcImN1c3RvbWVyY2hhdC5kaWFsb2dIaWRlXCIsXHJcbiAgICAgICAgb25DdXN0b21lckNoYXREaWFsb2dIaWRlXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjcmVhdGVNYXJrdXAoKSB7XHJcbiAgICBjb25zdCB7XHJcbiAgICAgIHBhZ2VJZCxcclxuICAgICAgaHRtbFJlZixcclxuICAgICAgbWluaW1pemVkLFxyXG4gICAgICB0aGVtZUNvbG9yLFxyXG4gICAgICBsb2dnZWRJbkdyZWV0aW5nLFxyXG4gICAgICBsb2dnZWRPdXRHcmVldGluZyxcclxuICAgICAgZ3JlZXRpbmdEaWFsb2dEaXNwbGF5LFxyXG4gICAgICBncmVldGluZ0RpYWxvZ0RlbGF5LFxyXG4gICAgfSA9IHRoaXMucHJvcHM7XHJcblxyXG4gICAgY29uc3QgcmVmQXR0cmlidXRlID0gaHRtbFJlZiAhPT0gdW5kZWZpbmVkID8gYHJlZj1cIiR7aHRtbFJlZn1cImAgOiBcIlwiO1xyXG5cclxuICAgIGNvbnN0IG1pbmltaXplZEF0dHJpYnV0ZSA9XHJcbiAgICAgIG1pbmltaXplZCAhPT0gdW5kZWZpbmVkID8gYG1pbmltaXplZD1cIiR7bWluaW1pemVkfVwiYCA6IFwiXCI7XHJcblxyXG4gICAgY29uc3QgdGhlbWVDb2xvckF0dHJpYnV0ZSA9XHJcbiAgICAgIHRoZW1lQ29sb3IgIT09IHVuZGVmaW5lZCA/IGB0aGVtZV9jb2xvcj1cIiR7dGhlbWVDb2xvcn1cImAgOiBcIlwiO1xyXG5cclxuICAgIGNvbnN0IGxvZ2dlZEluR3JlZXRpbmdBdHRyaWJ1dGUgPVxyXG4gICAgICBsb2dnZWRJbkdyZWV0aW5nICE9PSB1bmRlZmluZWRcclxuICAgICAgICA/IGBsb2dnZWRfaW5fZ3JlZXRpbmc9XCIke2xvZ2dlZEluR3JlZXRpbmd9XCJgXHJcbiAgICAgICAgOiBcIlwiO1xyXG5cclxuICAgIGNvbnN0IGxvZ2dlZE91dEdyZWV0aW5nQXR0cmlidXRlID1cclxuICAgICAgbG9nZ2VkT3V0R3JlZXRpbmcgIT09IHVuZGVmaW5lZFxyXG4gICAgICAgID8gYGxvZ2dlZF9vdXRfZ3JlZXRpbmc9XCIke2xvZ2dlZE91dEdyZWV0aW5nfVwiYFxyXG4gICAgICAgIDogXCJcIjtcclxuXHJcbiAgICBjb25zdCBncmVldGluZ0RpYWxvZ0Rpc3BsYXlBdHRyaWJ1dGUgPVxyXG4gICAgICBncmVldGluZ0RpYWxvZ0Rpc3BsYXkgIT09IHVuZGVmaW5lZFxyXG4gICAgICAgID8gYGdyZWV0aW5nX2RpYWxvZ19kaXNwbGF5PVwiJHtncmVldGluZ0RpYWxvZ0Rpc3BsYXl9XCJgXHJcbiAgICAgICAgOiBcIlwiO1xyXG5cclxuICAgIGNvbnN0IGdyZWV0aW5nRGlhbG9nRGVsYXlBdHRyaWJ1dGUgPVxyXG4gICAgICBncmVldGluZ0RpYWxvZ0RlbGF5ICE9PSB1bmRlZmluZWRcclxuICAgICAgICA/IGBncmVldGluZ19kaWFsb2dfZGVsYXk9XCIke2dyZWV0aW5nRGlhbG9nRGVsYXl9XCJgXHJcbiAgICAgICAgOiBcIlwiO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIF9faHRtbDogYDxkaXZcclxuICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZiLWN1c3RvbWVyY2hhdFwiXHJcbiAgICAgICAgICAgICBwYWdlX2lkPVwiJHtwYWdlSWR9XCJcclxuICAgICAgICAgICAgICR7cmVmQXR0cmlidXRlfVxyXG4gICAgICAgICAgICAgJHttaW5pbWl6ZWRBdHRyaWJ1dGV9XHJcbiAgICAgICAgICAgICAke3RoZW1lQ29sb3JBdHRyaWJ1dGV9XHJcbiAgICAgICAgICAgICAke2xvZ2dlZEluR3JlZXRpbmdBdHRyaWJ1dGV9XHJcbiAgICAgICAgICAgICAke2xvZ2dlZE91dEdyZWV0aW5nQXR0cmlidXRlfVxyXG4gICAgICAgICAgICAgJHtncmVldGluZ0RpYWxvZ0Rpc3BsYXlBdHRyaWJ1dGV9XHJcbiAgICAgICAgICAgICAke2dyZWV0aW5nRGlhbG9nRGVsYXlBdHRyaWJ1dGV9XHJcbiAgICAgICAgICAgPjwvZGl2PmAsXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgeyBmYkxvYWRlZCwgc2hvdWxkU2hvd0RpYWxvZyB9ID0gdGhpcy5zdGF0ZTtcclxuXHJcbiAgICBpZiAoZmJMb2FkZWQgJiYgc2hvdWxkU2hvd0RpYWxvZyAhPT0gdGhpcy5wcm9wcy5zaG91bGRTaG93RGlhbG9nKSB7XHJcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXHJcbiAgICAgICAgXCJET01Ob2RlSW5zZXJ0ZWRcIixcclxuICAgICAgICAoZXZlbnQpID0+IHtcclxuICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBldmVudC50YXJnZXQ7XHJcbiAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NOYW1lICYmXHJcbiAgICAgICAgICAgIHR5cGVvZiBlbGVtZW50LmNsYXNzTmFtZSA9PT0gXCJzdHJpbmdcIiAmJlxyXG4gICAgICAgICAgICBlbGVtZW50LmNsYXNzTmFtZS5pbmNsdWRlcyhcImZiX2RpYWxvZ1wiKVxyXG4gICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY29udHJvbFBsdWdpbigpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZmFsc2VcclxuICAgICAgKTtcclxuICAgICAgdGhpcy5zdWJzY3JpYmVFdmVudHMoKTtcclxuICAgIH1cclxuICAgIC8vIEFkZCBhIHJhbmRvbSBrZXkgdG8gcmVyZW5kZXIuIFJlZmVyZW5jZTpcclxuICAgIC8vIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzMwMjQyNTMwL2Rhbmdlcm91c2x5c2V0aW5uZXJodG1sLWRvZXNudC11cGRhdGUtZHVyaW5nLXJlbmRlclxyXG4gICAgcmV0dXJuIDxkaXYga2V5PXtEYXRlKCl9IGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt0aGlzLmNyZWF0ZU1hcmt1cCgpfSAvPjtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1lc3NlbmdlckNoYXQ7XHJcbiIsImV4cG9ydCBjb25zdCBHVE1QYWdlVmlldyA9ICh1cmwpID0+IHtcclxuICBjb25zdCBwYWdlRXZlbnQgPSB7XHJcbiAgICBldmVudDogXCJwYWdldmlld1wiLFxyXG4gICAgcGFnZTogdXJsLFxyXG4gIH07XHJcbiAgLy9AdHMtaWdub3JlXHJcbiAgd2luZG93ICYmIHdpbmRvdy5kYXRhTGF5ZXIgJiYgd2luZG93LmRhdGFMYXllci5wdXNoKHBhZ2VFdmVudCk7XHJcbiAgcmV0dXJuIHBhZ2VFdmVudDtcclxufTtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJvcC10eXBlc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9