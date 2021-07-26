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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/form.js":
/*!****************************!*\
  !*** ./components/form.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _controllers_postData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controllers/postData */ "./controllers/postData.js");
/* harmony import */ var _helpMethods_validator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpMethods/validator */ "./helpMethods/validator.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\BO0004\\Desktop\\repositorios\\iframe-endesapt\\components\\form.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const Form = ({
  campaignAndUTMdata,
  formType,
  context
}) => {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();
  const {
    0: triedToSubmit,
    1: setTriedToSubmit
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: showPrivacidad,
    1: setShowPrivacidad
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: showTerminos,
    1: setShowTerminos
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: name,
    1: setName
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  const {
    0: phoneNumber,
    1: setPhoneNumber
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  const {
    0: souCliente,
    1: setSouCliente
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  const {
    0: termosEcondicoes,
    1: setTermosEcondicoes
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: errorMessages,
    1: setErrorMessage
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({});

  const handleInputChange = event => {
    if (event.target.name === "name") {
      setName(event.target.value);
    } else if (event.target.name === "phoneNumber") {
      setPhoneNumber(event.target.value);
    } else if (event.target.name === "termosEcondicoes") {
      let newTermosEcondicoes = !termosEcondicoes;
      setTermosEcondicoes(newTermosEcondicoes);
    }
  };

  const callInsertLead = event => {
    setTriedToSubmit(true);
    let ErrorMessageOnSubmit = Object(_helpMethods_validator__WEBPACK_IMPORTED_MODULE_2__["inputValidator"])({
      phoneNumber,
      termosEcondicoes,
      name
    });
    event.preventDefault();

    if (ErrorMessageOnSubmit.phoneNumber === "" && ErrorMessageOnSubmit.termosEcondicoes === "" && ErrorMessageOnSubmit.name === "") {
      Object(_controllers_postData__WEBPACK_IMPORTED_MODULE_1__["insertLead"])(campaignAndUTMdata, {
        name,
        phoneNumber,
        termosEcondicoes,
        formType,
        context
      }, router);
      return;
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (triedToSubmit) {
      setErrorMessage(Object(_helpMethods_validator__WEBPACK_IMPORTED_MODULE_2__["inputValidator"])({
        name,
        phoneNumber,
        termosEcondicoes
      }));
    }

    return () => {};
  }, [name, phoneNumber, termosEcondicoes, triedToSubmit]);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("form", {
    method: "post",
    name: "formBox",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "inputField",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 9
    }
  }, errorMessages && errorMessages.name && __jsx("div", {
    className: "tooltip_error",
    style: {
      display: "block"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 13
    }
  }, " ", __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 15
    }
  }, errorMessages.name), " "), __jsx("input", {
    id: "formBox_name",
    value: name,
    type: "text",
    name: "name",
    maxLength: "100",
    placeholder: "Nombre",
    onChange: handleInputChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 11
    }
  })), __jsx("div", {
    className: "inputField",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 9
    }
  }, errorMessages && errorMessages.phoneNumber && __jsx("div", {
    className: "tooltip_error",
    style: {
      display: "block"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 13
    }
  }, " ", __jsx("span", {
    "ng-message": "required",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 15
    }
  }, errorMessages.phoneNumber), " "), __jsx("input", {
    id: "formBox_telefone",
    name: "phoneNumber",
    value: phoneNumber,
    maxLength: "9",
    placeholder: "Telef\xF3no",
    onChange: handleInputChange,
    inputMode: "numeric",
    pattern: "[0-9]*" // type="number"
    ,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 11
    }
  })), __jsx("div", {
    className: " disclaimer termos-condicoes",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 9
    }
  }, errorMessages && errorMessages.termosEcondicoes && __jsx("div", {
    className: "tooltip_error",
    style: {
      display: "block"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 13
    }
  }, " ", __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 15
    }
  }, errorMessages.termosEcondicoes), " "), __jsx("input", {
    type: "checkbox",
    checked: termosEcondicoes,
    name: "termosEcondicoes",
    onChange: handleInputChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 11
    }
  }), " ", "Li e aceito a Politica de Privacidade"), __jsx("div", {
    className: "formButton",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 9
    }
  }, __jsx("button", {
    onClick: callInsertLead,
    type: "submit",
    id: "enviar_form",
    className: "btn_enviar capture_event",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 11
    }
  }, " ", "Liguem-me gratuitamente", " "))));
};

/* harmony default export */ __webpack_exports__["default"] = (Form);

/***/ }),

/***/ "./config.js":
/*!*******************!*\
  !*** ./config.js ***!
  \*******************/
/*! exports provided: defaultData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultData", function() { return defaultData; });
const defaultData = {
  CONTEXT: "outbound-powen-callme",
  INCOMINGCONTEXT: "callme-powen",
  campaign: "powen",
  defaultCampaignData: {
    on: 1,
    c2c: 1,
    number: 1,
    sabado: 0,
    start: "10:00:00",
    end: "19:00:00",
    source: "POWEN",
    sub_source: "POWEN"
  },
  phoneNumbers: {
    default: {
      phone: "200 000 000",
      mobile: "200 000 000"
    }
  }
};

/***/ }),

/***/ "./controllers/fetchData.js":
/*!**********************************!*\
  !*** ./controllers/fetchData.js ***!
  \**********************************/
/*! exports provided: getData, getSearchParams */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getData", function() { return getData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSearchParams", function() { return getSearchParams; });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const getData = (campaignData, setCampaignData, params, setFetching) => {
  if (params[""]) {
    let options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        params,
        secret: "4MZxSGRw"
      })
    };
    fetch(`${"https://apidev.l4sportugal.com"}/api/campaign/${campaignData.campaign}`, options).then(result => result.json()).then(final => {
      let campaignDataCopy = _objectSpread({}, campaignData);

      campaignDataCopy.defaultCampaignData = final;
      setCampaignData(campaignDataCopy);
      setFetching(false);
      return;
    }).catch(err => {
      //console.log("erro", err);
      setFetching(false);
      return;
    });
  } else {
    params.secret = "4MZxSGRw";
    let options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(params)
    };
    fetch(`${"https://apidev.l4sportugal.com"}/api/campaign/${campaignData.campaign}`, options).then(result => result.json()).then(final => {
      let campaignDataCopy = _objectSpread({}, campaignData);

      campaignDataCopy.defaultCampaignData = final;
      setCampaignData(campaignDataCopy);
      setFetching(false);
      return;
    }).catch(err => {
      //console.log("erro", err);
      setFetching(false);
      return;
    });
  }
};
const getSearchParams = (params, setParams) => {
  const querySearchParams = window.location.search.substring(1).split("&");
  const searchParams = {};
  querySearchParams.map(param => {
    param = param.split("=");
    searchParams[decodeURIComponent(param[0])] = decodeURIComponent(param[1]);
  }); //can return correct searchParams with utm_source, adgroup etc,
  //or it may return and empty object with a property that has undefined value {"": "undefined"}

  setParams(searchParams);
  return searchParams;
};

/***/ }),

/***/ "./controllers/postData.js":
/*!*********************************!*\
  !*** ./controllers/postData.js ***!
  \*********************************/
/*! exports provided: insertLead */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "insertLead", function() { return insertLead; });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const insertLead = (campaignData, formData, router) => {
  let fullData = _objectSpread({}, campaignData);

  fullData.formData = formData;
  let dataToSend = {};
  dataToSend.name = fullData.formData.name ? fullData.formData.name : "";
  dataToSend.phone = fullData.formData.phoneNumber ? fullData.formData.phoneNumber : "";
  dataToSend.condicoes = fullData.formData.termosEcondicoes ? fullData.formData.termosEcondicoes : "";
  dataToSend.email = fullData.formData.email ? fullData.formData.email : "";
  dataToSend.type = fullData.formData.formType ? fullData.formData.formType : "";
  dataToSend.context = fullData.formData.context ? fullData.formData.context : "";

  for (const utm in fullData.params) {
    dataToSend[utm] = fullData.params[utm];
  }

  dataToSend.convcode = fullData.campaignData.defaultCampaignData.convcode ? fullData.campaignData.defaultCampaignData.convcode : "";
  dataToSend.ip = fullData.campaignData.defaultCampaignData.ip;
  dataToSend.source = fullData.campaignData.defaultCampaignData.source;
  dataToSend.surname = fullData.campaignData.comercializador;
  dataToSend.secret = "4MZxSGRw";
  console.log(dataToSend);
  let options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(dataToSend)
  };
  {
    fetch(`${"https://apidev.l4sportugal.com"}/api/insert`, options).then(result => {
      /*router.push(
        `/gracias/?convtype=${dataToSend.tsource}${
          dataToSend.convcode !== "" ? "&conv=" + dataToSend.convcode : ""
        }`
      );*/
      return true;
    }).catch(err => {
      router.push("/404");
      return false;
    });
  }
};

/***/ }),

/***/ "./helpMethods/validator.js":
/*!**********************************!*\
  !*** ./helpMethods/validator.js ***!
  \**********************************/
/*! exports provided: inputValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inputValidator", function() { return inputValidator; });
const inputValidator = ({
  name,
  phoneNumber,
  termosEcondicoes,
  email
}) => {
  const errorMessages = {
    name: "",
    phoneNumber: "",
    termosEcondicoes: "",
    email: ""
  }; //nome não pode estar vazios

  if (name === "") {
    errorMessages.name = "Rellene el nombre";
  } else {
    errorMessages.name = "";
  } //regex número


  const phoneNumberRegex = /[6|7|8|9][0-9]{8}/;

  if (phoneNumber === "") {
    errorMessages.phoneNumber = "Rellene el teléfono";
  } else if (!phoneNumberRegex.test(phoneNumber)) {
    errorMessages.phoneNumber = "El número debe contener 9 dígitos.";
  } else {
    errorMessages.phoneNumber = "";
  } //
  //verificar email


  const emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (!emailRegex.test(email) && email !== "") {
    errorMessages.email = "Complete con un email válido";
  } else {
    errorMessages.email = "";
  } //termos e condições têm que estar seleccionados


  if (termosEcondicoes === false) {
    errorMessages.termosEcondicoes = "Seleccione el campo";
  } else {
    errorMessages.termosEcondicoes = "";
  }

  return errorMessages;
};

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config */ "./config.js");
/* harmony import */ var _controllers_fetchData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../controllers/fetchData */ "./controllers/fetchData.js");
/* harmony import */ var _components_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/form */ "./components/form.js");
var _jsxFileName = "C:\\Users\\BO0004\\Desktop\\repositorios\\iframe-endesapt\\pages\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





function Home() {
  const {
    0: campaignData,
    1: setCampaignData
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(_config__WEBPACK_IMPORTED_MODULE_2__["defaultData"]);
  const {
    0: params,
    1: setParams
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  const {
    0: fectching,
    1: setFetching
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    Object(_controllers_fetchData__WEBPACK_IMPORTED_MODULE_3__["getData"])(campaignData, setCampaignData, Object(_controllers_fetchData__WEBPACK_IMPORTED_MODULE_3__["getSearchParams"])(params, setParams), setFetching);
    return () => {};
  });
  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 5
    }
  }, __jsx(_components_form__WEBPACK_IMPORTED_MODULE_4__["default"], {
    campaignAndUTMdata: {
      campaignData: campaignData,
      params: params
    },
    formType: "c2c",
    context: "c2c",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 5
    }
  }));
}

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

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

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9mb3JtLmpzIiwid2VicGFjazovLy8uL2NvbmZpZy5qcyIsIndlYnBhY2s6Ly8vLi9jb250cm9sbGVycy9mZXRjaERhdGEuanMiLCJ3ZWJwYWNrOi8vLy4vY29udHJvbGxlcnMvcG9zdERhdGEuanMiLCJ3ZWJwYWNrOi8vLy4vaGVscE1ldGhvZHMvdmFsaWRhdG9yLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL2luZGV4LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiJdLCJuYW1lcyI6WyJGb3JtIiwiY2FtcGFpZ25BbmRVVE1kYXRhIiwiZm9ybVR5cGUiLCJjb250ZXh0Iiwicm91dGVyIiwidXNlUm91dGVyIiwidHJpZWRUb1N1Ym1pdCIsInNldFRyaWVkVG9TdWJtaXQiLCJ1c2VTdGF0ZSIsInNob3dQcml2YWNpZGFkIiwic2V0U2hvd1ByaXZhY2lkYWQiLCJzaG93VGVybWlub3MiLCJzZXRTaG93VGVybWlub3MiLCJuYW1lIiwic2V0TmFtZSIsInBob25lTnVtYmVyIiwic2V0UGhvbmVOdW1iZXIiLCJzb3VDbGllbnRlIiwic2V0U291Q2xpZW50ZSIsInRlcm1vc0Vjb25kaWNvZXMiLCJzZXRUZXJtb3NFY29uZGljb2VzIiwiZXJyb3JNZXNzYWdlcyIsInNldEVycm9yTWVzc2FnZSIsImhhbmRsZUlucHV0Q2hhbmdlIiwiZXZlbnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsIm5ld1Rlcm1vc0Vjb25kaWNvZXMiLCJjYWxsSW5zZXJ0TGVhZCIsIkVycm9yTWVzc2FnZU9uU3VibWl0IiwiaW5wdXRWYWxpZGF0b3IiLCJwcmV2ZW50RGVmYXVsdCIsImluc2VydExlYWQiLCJ1c2VFZmZlY3QiLCJkaXNwbGF5IiwiZGVmYXVsdERhdGEiLCJDT05URVhUIiwiSU5DT01JTkdDT05URVhUIiwiY2FtcGFpZ24iLCJkZWZhdWx0Q2FtcGFpZ25EYXRhIiwib24iLCJjMmMiLCJudW1iZXIiLCJzYWJhZG8iLCJzdGFydCIsImVuZCIsInNvdXJjZSIsInN1Yl9zb3VyY2UiLCJwaG9uZU51bWJlcnMiLCJkZWZhdWx0IiwicGhvbmUiLCJtb2JpbGUiLCJnZXREYXRhIiwiY2FtcGFpZ25EYXRhIiwic2V0Q2FtcGFpZ25EYXRhIiwicGFyYW1zIiwic2V0RmV0Y2hpbmciLCJvcHRpb25zIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5Iiwic2VjcmV0IiwicHJvY2VzcyIsIk5FWFRfUFVCTElDX0FQSV9TRUNSRVQiLCJmZXRjaCIsInRoZW4iLCJyZXN1bHQiLCJqc29uIiwiZmluYWwiLCJjYW1wYWlnbkRhdGFDb3B5IiwiY2F0Y2giLCJlcnIiLCJnZXRTZWFyY2hQYXJhbXMiLCJzZXRQYXJhbXMiLCJxdWVyeVNlYXJjaFBhcmFtcyIsIndpbmRvdyIsImxvY2F0aW9uIiwic2VhcmNoIiwic3Vic3RyaW5nIiwic3BsaXQiLCJzZWFyY2hQYXJhbXMiLCJtYXAiLCJwYXJhbSIsImRlY29kZVVSSUNvbXBvbmVudCIsImZvcm1EYXRhIiwiZnVsbERhdGEiLCJkYXRhVG9TZW5kIiwiY29uZGljb2VzIiwiZW1haWwiLCJ0eXBlIiwidXRtIiwiY29udmNvZGUiLCJpcCIsInN1cm5hbWUiLCJjb21lcmNpYWxpemFkb3IiLCJjb25zb2xlIiwibG9nIiwicHVzaCIsInBob25lTnVtYmVyUmVnZXgiLCJ0ZXN0IiwiZW1haWxSZWdleCIsIkhvbWUiLCJmZWN0Y2hpbmciXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztR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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBR2UsU0FBU2tGLElBQVQsR0FBZ0I7QUFDN0IsUUFBTTtBQUFBLE9BQUNsRCxZQUFEO0FBQUEsT0FBZUM7QUFBZixNQUFrQzlDLHNEQUFRLENBQUMyQixtREFBRCxDQUFoRDtBQUNBLFFBQU07QUFBQSxPQUFDb0IsTUFBRDtBQUFBLE9BQVNvQjtBQUFULE1BQXNCbkUsc0RBQVEsQ0FBQyxJQUFELENBQXBDO0FBQ0EsUUFBTTtBQUFBLE9BQUNnRyxTQUFEO0FBQUEsT0FBWWhEO0FBQVosTUFBMkJoRCxzREFBUSxDQUFDLElBQUQsQ0FBekM7QUFFQXlCLHlEQUFTLENBQUMsTUFBTTtBQUNkbUIsMEVBQU8sQ0FDTEMsWUFESyxFQUVMQyxlQUZLLEVBR0xvQiw4RUFBZSxDQUFDbkIsTUFBRCxFQUFTb0IsU0FBVCxDQUhWLEVBSUxuQixXQUpLLENBQVA7QUFNQSxXQUFPLE1BQU0sQ0FDWixDQUREO0FBRUQsR0FUUSxDQUFUO0FBYUEsU0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0EsTUFBQyx3REFBRDtBQUFNLHNCQUFrQixFQUFFO0FBQ2hCSCxrQkFBWSxFQUFFQSxZQURFO0FBRWhCRSxZQUFNLEVBQUVBO0FBRlEsS0FBMUI7QUFHVyxZQUFRLEVBQUMsS0FIcEI7QUFHMEIsV0FBTyxFQUFDLEtBSGxDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFEQSxDQURGO0FBUUQsQzs7Ozs7Ozs7Ozs7QUNqQ0Qsc0M7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsa0MiLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgaW5zZXJ0TGVhZCB9IGZyb20gXCIuLi9jb250cm9sbGVycy9wb3N0RGF0YVwiO1xyXG5pbXBvcnQgeyBpbnB1dFZhbGlkYXRvciB9IGZyb20gXCIuLi9oZWxwTWV0aG9kcy92YWxpZGF0b3JcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcblxyXG5cclxuY29uc3QgRm9ybSA9ICh7IGNhbXBhaWduQW5kVVRNZGF0YSwgZm9ybVR5cGUsIGNvbnRleHQgfSkgPT4ge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IFt0cmllZFRvU3VibWl0LCBzZXRUcmllZFRvU3VibWl0XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbc2hvd1ByaXZhY2lkYWQsIHNldFNob3dQcml2YWNpZGFkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbc2hvd1Rlcm1pbm9zLCBzZXRTaG93VGVybWlub3NdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtuYW1lLCBzZXROYW1lXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtwaG9uZU51bWJlciwgc2V0UGhvbmVOdW1iZXJdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3NvdUNsaWVudGUsIHNldFNvdUNsaWVudGVdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW3Rlcm1vc0Vjb25kaWNvZXMsIHNldFRlcm1vc0Vjb25kaWNvZXNdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtlcnJvck1lc3NhZ2VzLCBzZXRFcnJvck1lc3NhZ2VdID0gdXNlU3RhdGUoe30pO1xyXG4gXHJcbiAgY29uc3QgaGFuZGxlSW5wdXRDaGFuZ2UgPSAoZXZlbnQpID0+IHtcclxuICAgIGlmIChldmVudC50YXJnZXQubmFtZSA9PT0gXCJuYW1lXCIpIHtcclxuICAgICAgc2V0TmFtZShldmVudC50YXJnZXQudmFsdWUpO1xyXG4gICAgfSBlbHNlIGlmIChldmVudC50YXJnZXQubmFtZSA9PT0gXCJwaG9uZU51bWJlclwiKSB7XHJcbiAgICAgIHNldFBob25lTnVtYmVyKGV2ZW50LnRhcmdldC52YWx1ZSk7XHJcbiAgICB9IGVsc2UgaWYgKGV2ZW50LnRhcmdldC5uYW1lID09PSBcInRlcm1vc0Vjb25kaWNvZXNcIikge1xyXG4gICAgICBsZXQgbmV3VGVybW9zRWNvbmRpY29lcyA9ICF0ZXJtb3NFY29uZGljb2VzO1xyXG4gICAgICBzZXRUZXJtb3NFY29uZGljb2VzKG5ld1Rlcm1vc0Vjb25kaWNvZXMpO1xyXG4gICAgfSBcclxuICB9O1xyXG4gIGNvbnN0IGNhbGxJbnNlcnRMZWFkID0gKGV2ZW50KSA9PiB7XHJcbiAgICBzZXRUcmllZFRvU3VibWl0KHRydWUpO1xyXG4gICAgbGV0IEVycm9yTWVzc2FnZU9uU3VibWl0ID0gaW5wdXRWYWxpZGF0b3Ioe1xyXG4gICAgICBwaG9uZU51bWJlcixcclxuICAgICAgdGVybW9zRWNvbmRpY29lcyxcclxuICAgICAgbmFtZSxcclxuICAgIH0pO1xyXG5cclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBpZiAoXHJcbiAgICAgIEVycm9yTWVzc2FnZU9uU3VibWl0LnBob25lTnVtYmVyID09PSBcIlwiICYmXHJcbiAgICAgIEVycm9yTWVzc2FnZU9uU3VibWl0LnRlcm1vc0Vjb25kaWNvZXMgPT09IFwiXCIgJiZcclxuICAgICAgRXJyb3JNZXNzYWdlT25TdWJtaXQubmFtZSA9PT0gXCJcIlxyXG4gICAgKSB7XHJcbiAgICAgIGluc2VydExlYWQoXHJcbiAgICAgICAgY2FtcGFpZ25BbmRVVE1kYXRhLFxyXG4gICAgICAgIHsgbmFtZSwgcGhvbmVOdW1iZXIsIHRlcm1vc0Vjb25kaWNvZXMsIGZvcm1UeXBlLCBjb250ZXh0IH0sXHJcbiAgICAgICAgcm91dGVyXHJcbiAgICAgICk7XHJcblxyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmICh0cmllZFRvU3VibWl0KSB7XHJcbiAgICAgIHNldEVycm9yTWVzc2FnZShcclxuICAgICAgICBpbnB1dFZhbGlkYXRvcih7XHJcbiAgICAgICAgICBuYW1lLFxyXG4gICAgICAgICAgcGhvbmVOdW1iZXIsXHJcbiAgICAgICAgICB0ZXJtb3NFY29uZGljb2VzLFxyXG4gICAgICAgIH0pXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gKCkgPT4ge307XHJcbiAgfSwgW25hbWUsIHBob25lTnVtYmVyLCB0ZXJtb3NFY29uZGljb2VzLCB0cmllZFRvU3VibWl0XSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8Zm9ybSBtZXRob2Q9XCJwb3N0XCIgbmFtZT1cImZvcm1Cb3hcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0RmllbGRcIj5cclxuICAgICAgICAgIHtlcnJvck1lc3NhZ2VzICYmIGVycm9yTWVzc2FnZXMubmFtZSAmJiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9vbHRpcF9lcnJvclwiIHN0eWxlPXt7IGRpc3BsYXk6IFwiYmxvY2tcIiB9fT5cclxuICAgICAgICAgICAgICB7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgPHNwYW4+e2Vycm9yTWVzc2FnZXMubmFtZX08L3NwYW4+e1wiIFwifVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgaWQ9XCJmb3JtQm94X25hbWVcIlxyXG4gICAgICAgICAgICB2YWx1ZT17bmFtZX1cclxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICBuYW1lPVwibmFtZVwiXHJcbiAgICAgICAgICAgIG1heExlbmd0aD1cIjEwMFwiXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTm9tYnJlXCJcclxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dEZpZWxkXCI+XHJcbiAgICAgICAgICB7ZXJyb3JNZXNzYWdlcyAmJiBlcnJvck1lc3NhZ2VzLnBob25lTnVtYmVyICYmIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b29sdGlwX2Vycm9yXCIgc3R5bGU9e3sgZGlzcGxheTogXCJibG9ja1wiIH19PlxyXG4gICAgICAgICAgICAgIHtcIiBcIn1cclxuICAgICAgICAgICAgICA8c3BhbiBuZy1tZXNzYWdlPVwicmVxdWlyZWRcIj5cclxuICAgICAgICAgICAgICAgIHtlcnJvck1lc3NhZ2VzLnBob25lTnVtYmVyfVxyXG4gICAgICAgICAgICAgIDwvc3Bhbj57XCIgXCJ9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICBpZD1cImZvcm1Cb3hfdGVsZWZvbmVcIlxyXG4gICAgICAgICAgICBuYW1lPVwicGhvbmVOdW1iZXJcIlxyXG4gICAgICAgICAgICB2YWx1ZT17cGhvbmVOdW1iZXJ9XHJcbiAgICAgICAgICAgIG1heExlbmd0aD1cIjlcIlxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlRlbGVmw7Nub1wiXHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX1cclxuICAgICAgICAgICAgaW5wdXRNb2RlPVwibnVtZXJpY1wiXHJcbiAgICAgICAgICAgIHBhdHRlcm49XCJbMC05XSpcIlxyXG4gICAgICAgICAgICAvLyB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXRGaWVsZFwiPlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIGlkPVwiZm9ybUJveF9lbWFpbFwiXHJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgdmFsdWU9e2VtYWlsfVxyXG4gICAgICAgICAgICBtYXhMZW5ndGg9XCIxMDBcIlxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkUtbWFpbFwiXHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+ICovfVxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIiBkaXNjbGFpbWVyIHRlcm1vcy1jb25kaWNvZXNcIj5cclxuICAgICAgICAgIHtlcnJvck1lc3NhZ2VzICYmIGVycm9yTWVzc2FnZXMudGVybW9zRWNvbmRpY29lcyAmJiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9vbHRpcF9lcnJvclwiIHN0eWxlPXt7IGRpc3BsYXk6IFwiYmxvY2tcIiB9fT5cclxuICAgICAgICAgICAgICB7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgPHNwYW4+e2Vycm9yTWVzc2FnZXMudGVybW9zRWNvbmRpY29lc308L3NwYW4+e1wiIFwifVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcclxuICAgICAgICAgICAgY2hlY2tlZD17dGVybW9zRWNvbmRpY29lc31cclxuICAgICAgICAgICAgbmFtZT1cInRlcm1vc0Vjb25kaWNvZXNcIlxyXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9XHJcbiAgICAgICAgICAvPntcIiBcIn1cclxuICAgICAgICAgTGkgZSBhY2VpdG8gYSBQb2xpdGljYSBkZSBQcml2YWNpZGFkZVxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm1CdXR0b25cIj5cclxuICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgb25DbGljaz17Y2FsbEluc2VydExlYWR9XHJcbiAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgICBpZD1cImVudmlhcl9mb3JtXCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuX2VudmlhciBjYXB0dXJlX2V2ZW50XCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge1wiIFwifVxyXG4gICAgICAgICAgICBMaWd1ZW0tbWUgZ3JhdHVpdGFtZW50ZXtcIiBcIn1cclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Zvcm0+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRm9ybTtcclxuIiwiZXhwb3J0IGNvbnN0IGRlZmF1bHREYXRhID0ge1xyXG4gIENPTlRFWFQ6IFwib3V0Ym91bmQtcG93ZW4tY2FsbG1lXCIsXHJcbiAgSU5DT01JTkdDT05URVhUOiBcImNhbGxtZS1wb3dlblwiLFxyXG4gIGNhbXBhaWduOiBcInBvd2VuXCIsXHJcbiAgZGVmYXVsdENhbXBhaWduRGF0YToge1xyXG4gICAgb246IDEsXHJcbiAgICBjMmM6IDEsXHJcbiAgICBudW1iZXI6IDEsXHJcbiAgICBzYWJhZG86IDAsXHJcbiAgICBzdGFydDogXCIxMDowMDowMFwiLFxyXG4gICAgZW5kOiBcIjE5OjAwOjAwXCIsXHJcbiAgICBzb3VyY2U6IFwiUE9XRU5cIixcclxuICAgIHN1Yl9zb3VyY2U6IFwiUE9XRU5cIixcclxuICB9LFxyXG4gIHBob25lTnVtYmVyczoge1xyXG4gICAgZGVmYXVsdDogeyBwaG9uZTogXCIyMDAgMDAwIDAwMFwiLCBtb2JpbGU6IFwiMjAwIDAwMCAwMDBcIiB9LFxyXG4gIH0sXHJcbn07XHJcbiIsImV4cG9ydCBjb25zdCBnZXREYXRhID0gKGNhbXBhaWduRGF0YSwgc2V0Q2FtcGFpZ25EYXRhLCBwYXJhbXMsIHNldEZldGNoaW5nKSA9PiB7XHJcbiAgaWYgKHBhcmFtc1tcIlwiXSkge1xyXG4gICAgbGV0IG9wdGlvbnMgPSB7XHJcbiAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgfSxcclxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgIHBhcmFtcyxcclxuICAgICAgICBzZWNyZXQ6IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FQSV9TRUNSRVQsXHJcbiAgICAgIH0pLFxyXG4gICAgfTtcclxuICAgIGZldGNoKFxyXG4gICAgICBgJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BUElfVVJMfS9hcGkvY2FtcGFpZ24vJHtjYW1wYWlnbkRhdGEuY2FtcGFpZ259YCxcclxuICAgICAgb3B0aW9uc1xyXG4gICAgKVxyXG4gICAgICAudGhlbigocmVzdWx0KSA9PiByZXN1bHQuanNvbigpKVxyXG4gICAgICAudGhlbigoZmluYWwpID0+IHtcclxuICAgICAgICBsZXQgY2FtcGFpZ25EYXRhQ29weSA9IHsgLi4uY2FtcGFpZ25EYXRhIH07XHJcbiAgICAgICAgY2FtcGFpZ25EYXRhQ29weS5kZWZhdWx0Q2FtcGFpZ25EYXRhID0gZmluYWw7XHJcblxyXG4gICAgICAgIHNldENhbXBhaWduRGF0YShjYW1wYWlnbkRhdGFDb3B5KTtcclxuICAgICAgICBzZXRGZXRjaGluZyhmYWxzZSk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgIC8vY29uc29sZS5sb2coXCJlcnJvXCIsIGVycik7XHJcbiAgICAgICAgc2V0RmV0Y2hpbmcoZmFsc2UpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfSk7XHJcbiAgfSBlbHNlIHtcclxuICAgIHBhcmFtcy5zZWNyZXQgPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BUElfU0VDUkVUO1xyXG5cclxuICAgIGxldCBvcHRpb25zID0ge1xyXG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHBhcmFtcyksXHJcbiAgICB9O1xyXG4gICAgZmV0Y2goXHJcbiAgICAgIGAke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FQSV9VUkx9L2FwaS9jYW1wYWlnbi8ke2NhbXBhaWduRGF0YS5jYW1wYWlnbn1gLFxyXG4gICAgICBvcHRpb25zXHJcbiAgICApXHJcbiAgICAgIC50aGVuKChyZXN1bHQpID0+IHJlc3VsdC5qc29uKCkpXHJcbiAgICAgIC50aGVuKChmaW5hbCkgPT4ge1xyXG4gICAgICAgIGxldCBjYW1wYWlnbkRhdGFDb3B5ID0geyAuLi5jYW1wYWlnbkRhdGEgfTtcclxuICAgICAgICBjYW1wYWlnbkRhdGFDb3B5LmRlZmF1bHRDYW1wYWlnbkRhdGEgPSBmaW5hbDtcclxuICAgICAgICBzZXRDYW1wYWlnbkRhdGEoY2FtcGFpZ25EYXRhQ29weSk7XHJcbiAgICAgICAgc2V0RmV0Y2hpbmcoZmFsc2UpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKFwiZXJyb1wiLCBlcnIpO1xyXG4gICAgICAgIHNldEZldGNoaW5nKGZhbHNlKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH0pO1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTZWFyY2hQYXJhbXMgPSAocGFyYW1zLCBzZXRQYXJhbXMpID0+IHtcclxuICBjb25zdCBxdWVyeVNlYXJjaFBhcmFtcyA9IHdpbmRvdy5sb2NhdGlvbi5zZWFyY2guc3Vic3RyaW5nKDEpLnNwbGl0KFwiJlwiKTtcclxuXHJcbiAgY29uc3Qgc2VhcmNoUGFyYW1zID0ge307XHJcblxyXG4gIHF1ZXJ5U2VhcmNoUGFyYW1zLm1hcCgocGFyYW0pID0+IHtcclxuICAgIHBhcmFtID0gcGFyYW0uc3BsaXQoXCI9XCIpO1xyXG5cclxuICAgIHNlYXJjaFBhcmFtc1tkZWNvZGVVUklDb21wb25lbnQocGFyYW1bMF0pXSA9IGRlY29kZVVSSUNvbXBvbmVudChwYXJhbVsxXSk7XHJcbiAgfSk7XHJcblxyXG4gIC8vY2FuIHJldHVybiBjb3JyZWN0IHNlYXJjaFBhcmFtcyB3aXRoIHV0bV9zb3VyY2UsIGFkZ3JvdXAgZXRjLFxyXG4gIC8vb3IgaXQgbWF5IHJldHVybiBhbmQgZW1wdHkgb2JqZWN0IHdpdGggYSBwcm9wZXJ0eSB0aGF0IGhhcyB1bmRlZmluZWQgdmFsdWUge1wiXCI6IFwidW5kZWZpbmVkXCJ9XHJcblxyXG4gIHNldFBhcmFtcyhzZWFyY2hQYXJhbXMpO1xyXG4gIHJldHVybiBzZWFyY2hQYXJhbXM7XHJcbn07XHJcbiIsImV4cG9ydCBjb25zdCBpbnNlcnRMZWFkID0gKGNhbXBhaWduRGF0YSwgZm9ybURhdGEsIHJvdXRlcikgPT4ge1xyXG4gIGxldCBmdWxsRGF0YSA9IHsgLi4uY2FtcGFpZ25EYXRhIH07XHJcbiAgZnVsbERhdGEuZm9ybURhdGEgPSBmb3JtRGF0YTtcclxuXHJcbiAgbGV0IGRhdGFUb1NlbmQgPSB7fTtcclxuICBkYXRhVG9TZW5kLm5hbWUgPSBmdWxsRGF0YS5mb3JtRGF0YS5uYW1lID8gZnVsbERhdGEuZm9ybURhdGEubmFtZSA6IFwiXCI7XHJcbiAgZGF0YVRvU2VuZC5waG9uZSA9IGZ1bGxEYXRhLmZvcm1EYXRhLnBob25lTnVtYmVyXHJcbiAgICA/IGZ1bGxEYXRhLmZvcm1EYXRhLnBob25lTnVtYmVyXHJcbiAgICA6IFwiXCI7XHJcbiAgZGF0YVRvU2VuZC5jb25kaWNvZXMgPSBmdWxsRGF0YS5mb3JtRGF0YS50ZXJtb3NFY29uZGljb2VzXHJcbiAgICA/IGZ1bGxEYXRhLmZvcm1EYXRhLnRlcm1vc0Vjb25kaWNvZXNcclxuICAgIDogXCJcIjtcclxuICBkYXRhVG9TZW5kLmVtYWlsID0gZnVsbERhdGEuZm9ybURhdGEuZW1haWwgPyBmdWxsRGF0YS5mb3JtRGF0YS5lbWFpbCA6IFwiXCI7XHJcbiAgZGF0YVRvU2VuZC50eXBlID0gZnVsbERhdGEuZm9ybURhdGEuZm9ybVR5cGVcclxuICAgID8gZnVsbERhdGEuZm9ybURhdGEuZm9ybVR5cGVcclxuICAgIDogXCJcIjtcclxuXHJcbiAgZGF0YVRvU2VuZC5jb250ZXh0ID0gZnVsbERhdGEuZm9ybURhdGEuY29udGV4dFxyXG4gICAgPyBmdWxsRGF0YS5mb3JtRGF0YS5jb250ZXh0XHJcbiAgICA6IFwiXCI7XHJcbiAgZm9yIChjb25zdCB1dG0gaW4gZnVsbERhdGEucGFyYW1zKSB7XHJcbiAgICBkYXRhVG9TZW5kW3V0bV0gPSBmdWxsRGF0YS5wYXJhbXNbdXRtXTtcclxuICB9XHJcbiAgZGF0YVRvU2VuZC5jb252Y29kZSA9IGZ1bGxEYXRhLmNhbXBhaWduRGF0YS5kZWZhdWx0Q2FtcGFpZ25EYXRhLmNvbnZjb2RlXHJcbiAgICA/IGZ1bGxEYXRhLmNhbXBhaWduRGF0YS5kZWZhdWx0Q2FtcGFpZ25EYXRhLmNvbnZjb2RlXHJcbiAgICA6IFwiXCI7XHJcbiAgZGF0YVRvU2VuZC5pcCA9IGZ1bGxEYXRhLmNhbXBhaWduRGF0YS5kZWZhdWx0Q2FtcGFpZ25EYXRhLmlwO1xyXG4gIGRhdGFUb1NlbmQuc291cmNlID0gZnVsbERhdGEuY2FtcGFpZ25EYXRhLmRlZmF1bHRDYW1wYWlnbkRhdGEuc291cmNlO1xyXG4gIGRhdGFUb1NlbmQuc3VybmFtZSA9IGZ1bGxEYXRhLmNhbXBhaWduRGF0YS5jb21lcmNpYWxpemFkb3I7XHJcbiAgZGF0YVRvU2VuZC5zZWNyZXQgPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BUElfU0VDUkVUO1xyXG4gIGNvbnNvbGUubG9nKGRhdGFUb1NlbmQpO1xyXG4gIGxldCBvcHRpb25zID0ge1xyXG4gICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgIGhlYWRlcnM6IHtcclxuICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICB9LFxyXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YVRvU2VuZCksXHJcbiAgfTtcclxuICB7XHJcbiAgICBmZXRjaChgJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BUElfVVJMfS9hcGkvaW5zZXJ0YCwgb3B0aW9ucylcclxuICAgICAgLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgIC8qcm91dGVyLnB1c2goXHJcbiAgICAgICAgICBgL2dyYWNpYXMvP2NvbnZ0eXBlPSR7ZGF0YVRvU2VuZC50c291cmNlfSR7XHJcbiAgICAgICAgICAgIGRhdGFUb1NlbmQuY29udmNvZGUgIT09IFwiXCIgPyBcIiZjb252PVwiICsgZGF0YVRvU2VuZC5jb252Y29kZSA6IFwiXCJcclxuICAgICAgICAgIH1gXHJcbiAgICAgICAgKTsqL1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgIHJvdXRlci5wdXNoKFwiLzQwNFwiKTtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxufTtcclxuIiwiZXhwb3J0IGNvbnN0IGlucHV0VmFsaWRhdG9yID0gKHtcclxuICBuYW1lLFxyXG4gIHBob25lTnVtYmVyLFxyXG4gIHRlcm1vc0Vjb25kaWNvZXMsXHJcbiAgZW1haWwsXHJcbn0pID0+IHtcclxuICBjb25zdCBlcnJvck1lc3NhZ2VzID0ge1xyXG4gICAgbmFtZTogXCJcIixcclxuICAgIHBob25lTnVtYmVyOiBcIlwiLFxyXG4gICAgdGVybW9zRWNvbmRpY29lczogXCJcIixcclxuICAgIGVtYWlsOiBcIlwiLFxyXG4gIH07XHJcbiAgLy9ub21lIG7Do28gcG9kZSBlc3RhciB2YXppb3NcclxuICBpZiAobmFtZSA9PT0gXCJcIikge1xyXG4gICAgZXJyb3JNZXNzYWdlcy5uYW1lID0gXCJSZWxsZW5lIGVsIG5vbWJyZVwiO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBlcnJvck1lc3NhZ2VzLm5hbWUgPSBcIlwiO1xyXG4gIH1cclxuXHJcbiAgLy9yZWdleCBuw7ptZXJvXHJcblxyXG4gIGNvbnN0IHBob25lTnVtYmVyUmVnZXggPSAvWzZ8N3w4fDldWzAtOV17OH0vO1xyXG4gIGlmIChwaG9uZU51bWJlciA9PT0gXCJcIikge1xyXG4gICAgZXJyb3JNZXNzYWdlcy5waG9uZU51bWJlciA9IFwiUmVsbGVuZSBlbCB0ZWzDqWZvbm9cIjtcclxuICB9IGVsc2UgaWYgKCFwaG9uZU51bWJlclJlZ2V4LnRlc3QocGhvbmVOdW1iZXIpKSB7XHJcbiAgICBlcnJvck1lc3NhZ2VzLnBob25lTnVtYmVyID0gXCJFbCBuw7ptZXJvIGRlYmUgY29udGVuZXIgOSBkw61naXRvcy5cIjtcclxuICB9IGVsc2Uge1xyXG4gICAgZXJyb3JNZXNzYWdlcy5waG9uZU51bWJlciA9IFwiXCI7XHJcbiAgfVxyXG4gIC8vXHJcblxyXG4gIC8vdmVyaWZpY2FyIGVtYWlsXHJcbiAgY29uc3QgZW1haWxSZWdleCA9IC9eKChbXjw+KClbXFxdXFxcXC4sOzpcXHNAXFxcIl0rKFxcLltePD4oKVtcXF1cXFxcLiw7Olxcc0BcXFwiXSspKil8KFxcXCIuK1xcXCIpKUAoKFxcW1swLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31cXF0pfCgoW2EtekEtWlxcLTAtOV0rXFwuKStbYS16QS1aXXsyLH0pKSQvO1xyXG5cclxuICBpZiAoIWVtYWlsUmVnZXgudGVzdChlbWFpbCkgJiYgZW1haWwgIT09IFwiXCIpIHtcclxuICAgIGVycm9yTWVzc2FnZXMuZW1haWwgPSBcIkNvbXBsZXRlIGNvbiB1biBlbWFpbCB2w6FsaWRvXCI7XHJcbiAgfSBlbHNlIHtcclxuICAgIGVycm9yTWVzc2FnZXMuZW1haWwgPSBcIlwiO1xyXG4gIH1cclxuXHJcbiAgLy90ZXJtb3MgZSBjb25kacOnw7VlcyB0w6ptIHF1ZSBlc3RhciBzZWxlY2Npb25hZG9zXHJcbiAgaWYgKHRlcm1vc0Vjb25kaWNvZXMgPT09IGZhbHNlKSB7XHJcbiAgICBlcnJvck1lc3NhZ2VzLnRlcm1vc0Vjb25kaWNvZXMgPSBcIlNlbGVjY2lvbmUgZWwgY2FtcG9cIjtcclxuICB9IGVsc2Uge1xyXG4gICAgZXJyb3JNZXNzYWdlcy50ZXJtb3NFY29uZGljb2VzID0gXCJcIjtcclxuICB9XHJcbiAgcmV0dXJuIGVycm9yTWVzc2FnZXM7XHJcbn07XHJcbiIsImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBkZWZhdWx0RGF0YSB9IGZyb20gXCIuLi9jb25maWdcIjtcclxuaW1wb3J0IHsgZ2V0RGF0YSwgZ2V0U2VhcmNoUGFyYW1zIH0gZnJvbSBcIi4uL2NvbnRyb2xsZXJzL2ZldGNoRGF0YVwiO1xyXG5pbXBvcnQgRm9ybSBmcm9tIFwiLi4vY29tcG9uZW50cy9mb3JtXCI7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcclxuICBjb25zdCBbY2FtcGFpZ25EYXRhLCBzZXRDYW1wYWlnbkRhdGFdID0gdXNlU3RhdGUoZGVmYXVsdERhdGEpO1xyXG4gIGNvbnN0IFtwYXJhbXMsIHNldFBhcmFtc10gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbZmVjdGNoaW5nLCBzZXRGZXRjaGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGdldERhdGEoXHJcbiAgICAgIGNhbXBhaWduRGF0YSxcclxuICAgICAgc2V0Q2FtcGFpZ25EYXRhLFxyXG4gICAgICBnZXRTZWFyY2hQYXJhbXMocGFyYW1zLCBzZXRQYXJhbXMpLFxyXG4gICAgICBzZXRGZXRjaGluZ1xyXG4gICAgKVxyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgIH07XHJcbiAgfSwgKTtcclxuXHJcblxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgIDxGb3JtIGNhbXBhaWduQW5kVVRNZGF0YT17e1xyXG4gICAgICAgICAgICAgIGNhbXBhaWduRGF0YTogY2FtcGFpZ25EYXRhLFxyXG4gICAgICAgICAgICAgIHBhcmFtczogcGFyYW1zLFxyXG4gICAgICAgICAgICB9fSBmb3JtVHlwZT1cImMyY1wiIGNvbnRleHQ9XCJjMmNcIj48L0Zvcm0+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9