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
/* harmony import */ var _obrigado__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./obrigado */ "./components/obrigado.js");
var _jsxFileName = "C:\\Users\\AndreL4S\\Desktop\\repositorios\\iframe-endesapt\\components\\form.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const Form = ({
  campaignAndUTMdata,
  formType,
  context
}) => {
  const {
    0: showObrigado,
    1: setShowObrigado
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();
  const {
    0: triedToSubmit,
    1: setTriedToSubmit
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
      setTermosEcondicoes(!termosEcondicoes);
    }
  };

  const callInsertLead = event => {
    setShowObrigado(true);
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
  return __jsx("div", {
    className: "iframe",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 5
    }
  }, showObrigado ? __jsx(_obrigado__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 9
    }
  }) : __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 9
    }
  }, "Quer aderir \xE0 Endesa", __jsx("form", {
    method: "post",
    name: "formBox",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "inputField",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 13
    }
  }, errorMessages && errorMessages.name && __jsx("div", {
    className: "tooltip_error",
    style: {
      display: "block"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 17
    }
  }, " ", __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 19
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
      lineNumber: 79,
      columnNumber: 15
    }
  })), __jsx("div", {
    className: "inputField",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 13
    }
  }, errorMessages && errorMessages.phoneNumber && __jsx("div", {
    className: "tooltip_error",
    style: {
      display: "block"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 17
    }
  }, " ", __jsx("span", {
    "ng-message": "required",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 19
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
      lineNumber: 99,
      columnNumber: 15
    }
  })), __jsx("div", {
    className: " disclaimer termos-condicoes",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 13
    }
  }, errorMessages && errorMessages.termosEcondicoes && __jsx("div", {
    className: "tooltip_error",
    style: {
      display: "block"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 17
    }
  }, " ", __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 19
    }
  }, errorMessages.termosEcondicoes), " "), __jsx("input", {
    type: "checkbox",
    checked: termosEcondicoes,
    name: "termosEcondicoes",
    onChange: handleInputChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 15
    }
  }), " ", "Li e aceito a Politica de Privacidade"), __jsx("div", {
    className: "formButton",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 13
    }
  }, __jsx("button", {
    onClick: callInsertLead,
    type: "submit",
    id: "enviar_form",
    className: "btn_enviar capture_event",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 15
    }
  }, " ", "Liguem-me gratuitamente", " ")))));
};

/* harmony default export */ __webpack_exports__["default"] = (Form);

/***/ }),

/***/ "./components/obrigado.js":
/*!********************************!*\
  !*** ./components/obrigado.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\AndreL4S\\Desktop\\repositorios\\iframe-endesapt\\components\\obrigado.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const Obrigado = () => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("h1", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 7
    }
  }, "Muito Obrigada!"), __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 7
    }
  }, "Os seus dados foram registados.", __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 9
    }
  }), "Entraremos em contacto consigo o mais r\xE1pido possivel. At\xE9 j\xE1!"));
};

/* harmony default export */ __webpack_exports__["default"] = (Obrigado);

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
  CONTEXT: "outbound-endesaleads-callme",
  INCOMINGCONTEXT: "callme-endesaleads",
  campaign: "endesaleads",
  defaultCampaignData: {
    on: 1,
    c2c: 1,
    number: 1,
    sabado: 0,
    start: "10:00:00",
    end: "19:00:00",
    source: "ENDESALEADS",
    sub_source: "ENDESALEADS"
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
  dataToSend.type = fullData.formData.formType ? fullData.formData.formType : "";
  dataToSend.context = fullData.formData.context ? fullData.formData.context : "";

  for (const utm in fullData.params) {
    dataToSend[utm] = fullData.params[utm];
  }

  dataToSend.ip = fullData.campaignData.defaultCampaignData.ip;
  dataToSend.source = fullData.campaignData.defaultCampaignData.source;
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
var _jsxFileName = "C:\\Users\\AndreL4S\\Desktop\\repositorios\\iframe-endesapt\\pages\\index.js";

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
  /* useEffect(() => {
    getData(
      campaignData,
      setCampaignData,
      getSearchParams(params, setParams),
      setFetching
    )
    return () => {
    };
  }, );
  */

  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
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
      lineNumber: 25,
      columnNumber: 7
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9mb3JtLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvb2JyaWdhZG8uanMiLCJ3ZWJwYWNrOi8vLy4vY29uZmlnLmpzIiwid2VicGFjazovLy8uL2NvbnRyb2xsZXJzL2ZldGNoRGF0YS5qcyIsIndlYnBhY2s6Ly8vLi9jb250cm9sbGVycy9wb3N0RGF0YS5qcyIsIndlYnBhY2s6Ly8vLi9oZWxwTWV0aG9kcy92YWxpZGF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIl0sIm5hbWVzIjpbIkZvcm0iLCJjYW1wYWlnbkFuZFVUTWRhdGEiLCJmb3JtVHlwZSIsImNvbnRleHQiLCJzaG93T2JyaWdhZG8iLCJzZXRTaG93T2JyaWdhZG8iLCJ1c2VTdGF0ZSIsInJvdXRlciIsInVzZVJvdXRlciIsInRyaWVkVG9TdWJtaXQiLCJzZXRUcmllZFRvU3VibWl0IiwibmFtZSIsInNldE5hbWUiLCJwaG9uZU51bWJlciIsInNldFBob25lTnVtYmVyIiwic291Q2xpZW50ZSIsInNldFNvdUNsaWVudGUiLCJ0ZXJtb3NFY29uZGljb2VzIiwic2V0VGVybW9zRWNvbmRpY29lcyIsImVycm9yTWVzc2FnZXMiLCJzZXRFcnJvck1lc3NhZ2UiLCJoYW5kbGVJbnB1dENoYW5nZSIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiLCJjYWxsSW5zZXJ0TGVhZCIsIkVycm9yTWVzc2FnZU9uU3VibWl0IiwiaW5wdXRWYWxpZGF0b3IiLCJwcmV2ZW50RGVmYXVsdCIsImluc2VydExlYWQiLCJ1c2VFZmZlY3QiLCJkaXNwbGF5IiwiT2JyaWdhZG8iLCJkZWZhdWx0RGF0YSIsIkNPTlRFWFQiLCJJTkNPTUlOR0NPTlRFWFQiLCJjYW1wYWlnbiIsImRlZmF1bHRDYW1wYWlnbkRhdGEiLCJvbiIsImMyYyIsIm51bWJlciIsInNhYmFkbyIsInN0YXJ0IiwiZW5kIiwic291cmNlIiwic3ViX3NvdXJjZSIsInBob25lTnVtYmVycyIsImRlZmF1bHQiLCJwaG9uZSIsIm1vYmlsZSIsImdldERhdGEiLCJjYW1wYWlnbkRhdGEiLCJzZXRDYW1wYWlnbkRhdGEiLCJwYXJhbXMiLCJzZXRGZXRjaGluZyIsIm9wdGlvbnMiLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJzZWNyZXQiLCJwcm9jZXNzIiwiTkVYVF9QVUJMSUNfQVBJX1NFQ1JFVCIsImZldGNoIiwidGhlbiIsInJlc3VsdCIsImpzb24iLCJmaW5hbCIsImNhbXBhaWduRGF0YUNvcHkiLCJjYXRjaCIsImVyciIsImdldFNlYXJjaFBhcmFtcyIsInNldFBhcmFtcyIsInF1ZXJ5U2VhcmNoUGFyYW1zIiwid2luZG93IiwibG9jYXRpb24iLCJzZWFyY2giLCJzdWJzdHJpbmciLCJzcGxpdCIsInNlYXJjaFBhcmFtcyIsIm1hcCIsInBhcmFtIiwiZGVjb2RlVVJJQ29tcG9uZW50IiwiZm9ybURhdGEiLCJmdWxsRGF0YSIsImRhdGFUb1NlbmQiLCJjb25kaWNvZXMiLCJ0eXBlIiwidXRtIiwiaXAiLCJjb25zb2xlIiwibG9nIiwicHVzaCIsImVtYWlsIiwicGhvbmVOdW1iZXJSZWdleCIsInRlc3QiLCJlbWFpbFJlZ2V4IiwiSG9tZSIsImZlY3RjaGluZyJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtR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VCxHQUFnQjtBQUM3QixRQUFNO0FBQUEsT0FBQy9DLFlBQUQ7QUFBQSxPQUFlQztBQUFmLE1BQWtDOUMsc0RBQVEsQ0FBQzJCLG1EQUFELENBQWhEO0FBQ0EsUUFBTTtBQUFBLE9BQUNvQixNQUFEO0FBQUEsT0FBU29CO0FBQVQsTUFBc0JuRSxzREFBUSxDQUFDLElBQUQsQ0FBcEM7QUFDQSxRQUFNO0FBQUEsT0FBQzZGLFNBQUQ7QUFBQSxPQUFZN0M7QUFBWixNQUEyQmhELHNEQUFRLENBQUMsSUFBRCxDQUF6QztBQUVBO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUUsU0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyx3REFBRDtBQUNFLHNCQUFrQixFQUFFO0FBQ2xCNkMsa0JBQVksRUFBRUEsWUFESTtBQUVsQkUsWUFBTSxFQUFFQTtBQUZVLEtBRHRCO0FBS0UsWUFBUSxFQUFDLEtBTFg7QUFNRSxXQUFPLEVBQUMsS0FOVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FERjtBQVlELEM7Ozs7Ozs7Ozs7O0FDbENELHNDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLGtDIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IGluc2VydExlYWQgfSBmcm9tIFwiLi4vY29udHJvbGxlcnMvcG9zdERhdGFcIjtcclxuaW1wb3J0IHsgaW5wdXRWYWxpZGF0b3IgfSBmcm9tIFwiLi4vaGVscE1ldGhvZHMvdmFsaWRhdG9yXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgT2JyaWdhZG8gZnJvbSBcIi4vb2JyaWdhZG9cIjtcclxuXHJcbmNvbnN0IEZvcm0gPSAoeyBjYW1wYWlnbkFuZFVUTWRhdGEsIGZvcm1UeXBlLCBjb250ZXh0IH0pID0+IHtcclxuICBjb25zdCBbc2hvd09icmlnYWRvLCBzZXRTaG93T2JyaWdhZG9dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IFt0cmllZFRvU3VibWl0LCBzZXRUcmllZFRvU3VibWl0XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbbmFtZSwgc2V0TmFtZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbcGhvbmVOdW1iZXIsIHNldFBob25lTnVtYmVyXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtzb3VDbGllbnRlLCBzZXRTb3VDbGllbnRlXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFt0ZXJtb3NFY29uZGljb2VzLCBzZXRUZXJtb3NFY29uZGljb2VzXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbZXJyb3JNZXNzYWdlcywgc2V0RXJyb3JNZXNzYWdlXSA9IHVzZVN0YXRlKHt9KTtcclxuXHJcbiAgY29uc3QgaGFuZGxlSW5wdXRDaGFuZ2UgPSAoZXZlbnQpID0+IHtcclxuICAgIGlmIChldmVudC50YXJnZXQubmFtZSA9PT0gXCJuYW1lXCIpIHtcclxuICAgICAgc2V0TmFtZShldmVudC50YXJnZXQudmFsdWUpO1xyXG4gICAgfSBlbHNlIGlmIChldmVudC50YXJnZXQubmFtZSA9PT0gXCJwaG9uZU51bWJlclwiKSB7XHJcbiAgICAgIHNldFBob25lTnVtYmVyKGV2ZW50LnRhcmdldC52YWx1ZSk7XHJcbiAgICB9IGVsc2UgaWYgKGV2ZW50LnRhcmdldC5uYW1lID09PSBcInRlcm1vc0Vjb25kaWNvZXNcIikge1xyXG4gICAgICBzZXRUZXJtb3NFY29uZGljb2VzKCF0ZXJtb3NFY29uZGljb2VzKTtcclxuICAgIH1cclxuICB9O1xyXG4gIGNvbnN0IGNhbGxJbnNlcnRMZWFkID0gKGV2ZW50KSA9PiB7XHJcbiAgICBzZXRTaG93T2JyaWdhZG8odHJ1ZSk7XHJcbiAgICBzZXRUcmllZFRvU3VibWl0KHRydWUpO1xyXG4gICAgbGV0IEVycm9yTWVzc2FnZU9uU3VibWl0ID0gaW5wdXRWYWxpZGF0b3Ioe1xyXG4gICAgICBwaG9uZU51bWJlcixcclxuICAgICAgdGVybW9zRWNvbmRpY29lcyxcclxuICAgICAgbmFtZSxcclxuICAgIH0pO1xyXG5cclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBpZiAoXHJcbiAgICAgIEVycm9yTWVzc2FnZU9uU3VibWl0LnBob25lTnVtYmVyID09PSBcIlwiICYmXHJcbiAgICAgIEVycm9yTWVzc2FnZU9uU3VibWl0LnRlcm1vc0Vjb25kaWNvZXMgPT09IFwiXCIgJiZcclxuICAgICAgRXJyb3JNZXNzYWdlT25TdWJtaXQubmFtZSA9PT0gXCJcIlxyXG4gICAgKSB7XHJcbiAgICAgIGluc2VydExlYWQoXHJcbiAgICAgICAgY2FtcGFpZ25BbmRVVE1kYXRhLFxyXG4gICAgICAgIHsgbmFtZSwgcGhvbmVOdW1iZXIsIHRlcm1vc0Vjb25kaWNvZXMsIGZvcm1UeXBlLCBjb250ZXh0IH0sXHJcbiAgICAgICAgcm91dGVyXHJcbiAgICAgICk7XHJcblxyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmICh0cmllZFRvU3VibWl0KSB7XHJcbiAgICAgIHNldEVycm9yTWVzc2FnZShcclxuICAgICAgICBpbnB1dFZhbGlkYXRvcih7XHJcbiAgICAgICAgICBuYW1lLFxyXG4gICAgICAgICAgcGhvbmVOdW1iZXIsXHJcbiAgICAgICAgICB0ZXJtb3NFY29uZGljb2VzLFxyXG4gICAgICAgIH0pXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gKCkgPT4ge307XHJcbiAgfSwgW25hbWUsIHBob25lTnVtYmVyLCB0ZXJtb3NFY29uZGljb2VzLCB0cmllZFRvU3VibWl0XSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImlmcmFtZVwiPlxyXG4gICAgICB7c2hvd09icmlnYWRvID8gKFxyXG4gICAgICAgIDxPYnJpZ2Fkbz48L09icmlnYWRvPlxyXG4gICAgICApIDogKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICBRdWVyIGFkZXJpciDDoCBFbmRlc2FcclxuICAgICAgICAgIDxmb3JtIG1ldGhvZD1cInBvc3RcIiBuYW1lPVwiZm9ybUJveFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0RmllbGRcIj5cclxuICAgICAgICAgICAgICB7ZXJyb3JNZXNzYWdlcyAmJiBlcnJvck1lc3NhZ2VzLm5hbWUgJiYgKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b29sdGlwX2Vycm9yXCIgc3R5bGU9e3sgZGlzcGxheTogXCJibG9ja1wiIH19PlxyXG4gICAgICAgICAgICAgICAgICB7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuPntlcnJvck1lc3NhZ2VzLm5hbWV9PC9zcGFuPntcIiBcIn1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICBpZD1cImZvcm1Cb3hfbmFtZVwiXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17bmFtZX1cclxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgIG5hbWU9XCJuYW1lXCJcclxuICAgICAgICAgICAgICAgIG1heExlbmd0aD1cIjEwMFwiXHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIk5vbWJyZVwiXHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0RmllbGRcIj5cclxuICAgICAgICAgICAgICB7ZXJyb3JNZXNzYWdlcyAmJiBlcnJvck1lc3NhZ2VzLnBob25lTnVtYmVyICYmIChcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9vbHRpcF9lcnJvclwiIHN0eWxlPXt7IGRpc3BsYXk6IFwiYmxvY2tcIiB9fT5cclxuICAgICAgICAgICAgICAgICAge1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICA8c3BhbiBuZy1tZXNzYWdlPVwicmVxdWlyZWRcIj5cclxuICAgICAgICAgICAgICAgICAgICB7ZXJyb3JNZXNzYWdlcy5waG9uZU51bWJlcn1cclxuICAgICAgICAgICAgICAgICAgPC9zcGFuPntcIiBcIn1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICBpZD1cImZvcm1Cb3hfdGVsZWZvbmVcIlxyXG4gICAgICAgICAgICAgICAgbmFtZT1cInBob25lTnVtYmVyXCJcclxuICAgICAgICAgICAgICAgIHZhbHVlPXtwaG9uZU51bWJlcn1cclxuICAgICAgICAgICAgICAgIG1heExlbmd0aD1cIjlcIlxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJUZWxlZsOzbm9cIlxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgaW5wdXRNb2RlPVwibnVtZXJpY1wiXHJcbiAgICAgICAgICAgICAgICBwYXR0ZXJuPVwiWzAtOV0qXCJcclxuICAgICAgICAgICAgICAgIC8vIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJpbnB1dEZpZWxkXCI+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgaWQ9XCJmb3JtQm94X2VtYWlsXCJcclxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxyXG4gICAgICAgICAgICB2YWx1ZT17ZW1haWx9XHJcbiAgICAgICAgICAgIG1heExlbmd0aD1cIjEwMFwiXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRS1tYWlsXCJcclxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj4gKi99XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIiBkaXNjbGFpbWVyIHRlcm1vcy1jb25kaWNvZXNcIj5cclxuICAgICAgICAgICAgICB7ZXJyb3JNZXNzYWdlcyAmJiBlcnJvck1lc3NhZ2VzLnRlcm1vc0Vjb25kaWNvZXMgJiYgKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b29sdGlwX2Vycm9yXCIgc3R5bGU9e3sgZGlzcGxheTogXCJibG9ja1wiIH19PlxyXG4gICAgICAgICAgICAgICAgICB7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuPntlcnJvck1lc3NhZ2VzLnRlcm1vc0Vjb25kaWNvZXN9PC9zcGFuPntcIiBcIn1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxyXG4gICAgICAgICAgICAgICAgY2hlY2tlZD17dGVybW9zRWNvbmRpY29lc31cclxuICAgICAgICAgICAgICAgIG5hbWU9XCJ0ZXJtb3NFY29uZGljb2VzXCJcclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX1cclxuICAgICAgICAgICAgICAvPntcIiBcIn1cclxuICAgICAgICAgICAgICBMaSBlIGFjZWl0byBhIFBvbGl0aWNhIGRlIFByaXZhY2lkYWRlXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtQnV0dG9uXCI+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17Y2FsbEluc2VydExlYWR9XHJcbiAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAgICAgICAgIGlkPVwiZW52aWFyX2Zvcm1cIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuX2VudmlhciBjYXB0dXJlX2V2ZW50XCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICBMaWd1ZW0tbWUgZ3JhdHVpdGFtZW50ZXtcIiBcIn1cclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICl9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRm9ybTtcclxuIiwiY29uc3QgT2JyaWdhZG8gPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxoMT5NdWl0byBPYnJpZ2FkYSE8L2gxPlxyXG4gICAgICA8cD5cclxuICAgICAgICBPcyBzZXVzIGRhZG9zIGZvcmFtIHJlZ2lzdGFkb3MuXHJcbiAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgRW50cmFyZW1vcyBlbSBjb250YWN0byBjb25zaWdvIG8gbWFpcyByw6FwaWRvIHBvc3NpdmVsLiBBdMOpIGrDoSFcclxuICAgICAgPC9wPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgT2JyaWdhZG87XHJcbiIsImV4cG9ydCBjb25zdCBkZWZhdWx0RGF0YSA9IHtcclxuICBDT05URVhUOiBcIm91dGJvdW5kLWVuZGVzYWxlYWRzLWNhbGxtZVwiLFxyXG4gIElOQ09NSU5HQ09OVEVYVDogXCJjYWxsbWUtZW5kZXNhbGVhZHNcIixcclxuICBjYW1wYWlnbjogXCJlbmRlc2FsZWFkc1wiLFxyXG4gIGRlZmF1bHRDYW1wYWlnbkRhdGE6IHtcclxuICAgIG9uOiAxLFxyXG4gICAgYzJjOiAxLFxyXG4gICAgbnVtYmVyOiAxLFxyXG4gICAgc2FiYWRvOiAwLFxyXG4gICAgc3RhcnQ6IFwiMTA6MDA6MDBcIixcclxuICAgIGVuZDogXCIxOTowMDowMFwiLFxyXG4gICAgc291cmNlOiBcIkVOREVTQUxFQURTXCIsXHJcbiAgICBzdWJfc291cmNlOiBcIkVOREVTQUxFQURTXCIsXHJcbiAgfSxcclxuICBwaG9uZU51bWJlcnM6IHtcclxuICAgIGRlZmF1bHQ6IHsgcGhvbmU6IFwiMjAwIDAwMCAwMDBcIiwgbW9iaWxlOiBcIjIwMCAwMDAgMDAwXCIgfSxcclxuICB9LFxyXG59O1xyXG4iLCJleHBvcnQgY29uc3QgZ2V0RGF0YSA9IChjYW1wYWlnbkRhdGEsIHNldENhbXBhaWduRGF0YSwgcGFyYW1zLCBzZXRGZXRjaGluZykgPT4ge1xyXG4gIGlmIChwYXJhbXNbXCJcIl0pIHtcclxuICAgIGxldCBvcHRpb25zID0ge1xyXG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICBwYXJhbXMsXHJcbiAgICAgICAgc2VjcmV0OiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BUElfU0VDUkVULFxyXG4gICAgICB9KSxcclxuICAgIH07XHJcbiAgICBmZXRjaChcclxuICAgICAgYCR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVBJX1VSTH0vYXBpL2NhbXBhaWduLyR7Y2FtcGFpZ25EYXRhLmNhbXBhaWdufWAsXHJcbiAgICAgIG9wdGlvbnNcclxuICAgIClcclxuICAgICAgLnRoZW4oKHJlc3VsdCkgPT4gcmVzdWx0Lmpzb24oKSlcclxuICAgICAgLnRoZW4oKGZpbmFsKSA9PiB7XHJcbiAgICAgICAgbGV0IGNhbXBhaWduRGF0YUNvcHkgPSB7IC4uLmNhbXBhaWduRGF0YSB9O1xyXG4gICAgICAgIGNhbXBhaWduRGF0YUNvcHkuZGVmYXVsdENhbXBhaWduRGF0YSA9IGZpbmFsO1xyXG5cclxuICAgICAgICBzZXRDYW1wYWlnbkRhdGEoY2FtcGFpZ25EYXRhQ29weSk7XHJcbiAgICAgICAgc2V0RmV0Y2hpbmcoZmFsc2UpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKFwiZXJyb1wiLCBlcnIpO1xyXG4gICAgICAgIHNldEZldGNoaW5nKGZhbHNlKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH0pO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBwYXJhbXMuc2VjcmV0ID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVBJX1NFQ1JFVDtcclxuXHJcbiAgICBsZXQgb3B0aW9ucyA9IHtcclxuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICB9LFxyXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShwYXJhbXMpLFxyXG4gICAgfTtcclxuICAgIGZldGNoKFxyXG4gICAgICBgJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BUElfVVJMfS9hcGkvY2FtcGFpZ24vJHtjYW1wYWlnbkRhdGEuY2FtcGFpZ259YCxcclxuICAgICAgb3B0aW9uc1xyXG4gICAgKVxyXG4gICAgICAudGhlbigocmVzdWx0KSA9PiByZXN1bHQuanNvbigpKVxyXG4gICAgICAudGhlbigoZmluYWwpID0+IHtcclxuICAgICAgICBsZXQgY2FtcGFpZ25EYXRhQ29weSA9IHsgLi4uY2FtcGFpZ25EYXRhIH07XHJcbiAgICAgICAgY2FtcGFpZ25EYXRhQ29weS5kZWZhdWx0Q2FtcGFpZ25EYXRhID0gZmluYWw7XHJcbiAgICAgICAgc2V0Q2FtcGFpZ25EYXRhKGNhbXBhaWduRGF0YUNvcHkpO1xyXG4gICAgICAgIHNldEZldGNoaW5nKGZhbHNlKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhcImVycm9cIiwgZXJyKTtcclxuICAgICAgICBzZXRGZXRjaGluZyhmYWxzZSk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9KTtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U2VhcmNoUGFyYW1zID0gKHBhcmFtcywgc2V0UGFyYW1zKSA9PiB7XHJcbiAgY29uc3QgcXVlcnlTZWFyY2hQYXJhbXMgPSB3aW5kb3cubG9jYXRpb24uc2VhcmNoLnN1YnN0cmluZygxKS5zcGxpdChcIiZcIik7XHJcblxyXG4gIGNvbnN0IHNlYXJjaFBhcmFtcyA9IHt9O1xyXG5cclxuICBxdWVyeVNlYXJjaFBhcmFtcy5tYXAoKHBhcmFtKSA9PiB7XHJcbiAgICBwYXJhbSA9IHBhcmFtLnNwbGl0KFwiPVwiKTtcclxuXHJcbiAgICBzZWFyY2hQYXJhbXNbZGVjb2RlVVJJQ29tcG9uZW50KHBhcmFtWzBdKV0gPSBkZWNvZGVVUklDb21wb25lbnQocGFyYW1bMV0pO1xyXG4gIH0pO1xyXG5cclxuICAvL2NhbiByZXR1cm4gY29ycmVjdCBzZWFyY2hQYXJhbXMgd2l0aCB1dG1fc291cmNlLCBhZGdyb3VwIGV0YyxcclxuICAvL29yIGl0IG1heSByZXR1cm4gYW5kIGVtcHR5IG9iamVjdCB3aXRoIGEgcHJvcGVydHkgdGhhdCBoYXMgdW5kZWZpbmVkIHZhbHVlIHtcIlwiOiBcInVuZGVmaW5lZFwifVxyXG5cclxuICBzZXRQYXJhbXMoc2VhcmNoUGFyYW1zKTtcclxuICByZXR1cm4gc2VhcmNoUGFyYW1zO1xyXG59O1xyXG4iLCJleHBvcnQgY29uc3QgaW5zZXJ0TGVhZCA9IChjYW1wYWlnbkRhdGEsIGZvcm1EYXRhLCByb3V0ZXIpID0+IHtcclxuICBsZXQgZnVsbERhdGEgPSB7IC4uLmNhbXBhaWduRGF0YSB9O1xyXG4gIGZ1bGxEYXRhLmZvcm1EYXRhID0gZm9ybURhdGE7XHJcblxyXG4gIGxldCBkYXRhVG9TZW5kID0ge307XHJcbiAgZGF0YVRvU2VuZC5uYW1lID0gZnVsbERhdGEuZm9ybURhdGEubmFtZSA/IGZ1bGxEYXRhLmZvcm1EYXRhLm5hbWUgOiBcIlwiO1xyXG4gIGRhdGFUb1NlbmQucGhvbmUgPSBmdWxsRGF0YS5mb3JtRGF0YS5waG9uZU51bWJlclxyXG4gICAgPyBmdWxsRGF0YS5mb3JtRGF0YS5waG9uZU51bWJlclxyXG4gICAgOiBcIlwiO1xyXG4gIGRhdGFUb1NlbmQuY29uZGljb2VzID0gZnVsbERhdGEuZm9ybURhdGEudGVybW9zRWNvbmRpY29lc1xyXG4gICAgPyBmdWxsRGF0YS5mb3JtRGF0YS50ZXJtb3NFY29uZGljb2VzXHJcbiAgICA6IFwiXCI7XHJcbiAgZGF0YVRvU2VuZC50eXBlID0gZnVsbERhdGEuZm9ybURhdGEuZm9ybVR5cGVcclxuICAgID8gZnVsbERhdGEuZm9ybURhdGEuZm9ybVR5cGVcclxuICAgIDogXCJcIjtcclxuXHJcbiAgZGF0YVRvU2VuZC5jb250ZXh0ID0gZnVsbERhdGEuZm9ybURhdGEuY29udGV4dFxyXG4gICAgPyBmdWxsRGF0YS5mb3JtRGF0YS5jb250ZXh0XHJcbiAgICA6IFwiXCI7XHJcbiAgZm9yIChjb25zdCB1dG0gaW4gZnVsbERhdGEucGFyYW1zKSB7XHJcbiAgICBkYXRhVG9TZW5kW3V0bV0gPSBmdWxsRGF0YS5wYXJhbXNbdXRtXTtcclxuICB9XHJcblxyXG4gIGRhdGFUb1NlbmQuaXAgPSBmdWxsRGF0YS5jYW1wYWlnbkRhdGEuZGVmYXVsdENhbXBhaWduRGF0YS5pcDtcclxuICBkYXRhVG9TZW5kLnNvdXJjZSA9IGZ1bGxEYXRhLmNhbXBhaWduRGF0YS5kZWZhdWx0Q2FtcGFpZ25EYXRhLnNvdXJjZTtcclxuICBkYXRhVG9TZW5kLnNlY3JldCA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FQSV9TRUNSRVQ7XHJcbiAgY29uc29sZS5sb2coZGF0YVRvU2VuZCk7XHJcbiAgbGV0IG9wdGlvbnMgPSB7XHJcbiAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgaGVhZGVyczoge1xyXG4gICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgIH0sXHJcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeShkYXRhVG9TZW5kKSxcclxuICB9O1xyXG4gIHtcclxuICAgIGZldGNoKGAke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FQSV9VUkx9L2FwaS9pbnNlcnRgLCBvcHRpb25zKVxyXG4gICAgICAudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgLypyb3V0ZXIucHVzaChcclxuICAgICAgICAgIGAvZ3JhY2lhcy8/Y29udnR5cGU9JHtkYXRhVG9TZW5kLnRzb3VyY2V9JHtcclxuICAgICAgICAgICAgZGF0YVRvU2VuZC5jb252Y29kZSAhPT0gXCJcIiA/IFwiJmNvbnY9XCIgKyBkYXRhVG9TZW5kLmNvbnZjb2RlIDogXCJcIlxyXG4gICAgICAgICAgfWBcclxuICAgICAgICApOyovXHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgcm91dGVyLnB1c2goXCIvNDA0XCIpO1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG59O1xyXG4iLCJleHBvcnQgY29uc3QgaW5wdXRWYWxpZGF0b3IgPSAoe1xyXG4gIG5hbWUsXHJcbiAgcGhvbmVOdW1iZXIsXHJcbiAgdGVybW9zRWNvbmRpY29lcyxcclxuICBlbWFpbCxcclxufSkgPT4ge1xyXG4gIGNvbnN0IGVycm9yTWVzc2FnZXMgPSB7XHJcbiAgICBuYW1lOiBcIlwiLFxyXG4gICAgcGhvbmVOdW1iZXI6IFwiXCIsXHJcbiAgICB0ZXJtb3NFY29uZGljb2VzOiBcIlwiLFxyXG4gICAgZW1haWw6IFwiXCIsXHJcbiAgfTtcclxuICAvL25vbWUgbsOjbyBwb2RlIGVzdGFyIHZhemlvc1xyXG4gIGlmIChuYW1lID09PSBcIlwiKSB7XHJcbiAgICBlcnJvck1lc3NhZ2VzLm5hbWUgPSBcIlJlbGxlbmUgZWwgbm9tYnJlXCI7XHJcbiAgfSBlbHNlIHtcclxuICAgIGVycm9yTWVzc2FnZXMubmFtZSA9IFwiXCI7XHJcbiAgfVxyXG5cclxuICAvL3JlZ2V4IG7Dum1lcm9cclxuXHJcbiAgY29uc3QgcGhvbmVOdW1iZXJSZWdleCA9IC9bNnw3fDh8OV1bMC05XXs4fS87XHJcbiAgaWYgKHBob25lTnVtYmVyID09PSBcIlwiKSB7XHJcbiAgICBlcnJvck1lc3NhZ2VzLnBob25lTnVtYmVyID0gXCJSZWxsZW5lIGVsIHRlbMOpZm9ub1wiO1xyXG4gIH0gZWxzZSBpZiAoIXBob25lTnVtYmVyUmVnZXgudGVzdChwaG9uZU51bWJlcikpIHtcclxuICAgIGVycm9yTWVzc2FnZXMucGhvbmVOdW1iZXIgPSBcIkVsIG7Dum1lcm8gZGViZSBjb250ZW5lciA5IGTDrWdpdG9zLlwiO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBlcnJvck1lc3NhZ2VzLnBob25lTnVtYmVyID0gXCJcIjtcclxuICB9XHJcbiAgLy9cclxuXHJcbiAgLy92ZXJpZmljYXIgZW1haWxcclxuICBjb25zdCBlbWFpbFJlZ2V4ID0gL14oKFtePD4oKVtcXF1cXFxcLiw7Olxcc0BcXFwiXSsoXFwuW148PigpW1xcXVxcXFwuLDs6XFxzQFxcXCJdKykqKXwoXFxcIi4rXFxcIikpQCgoXFxbWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcXSl8KChbYS16QS1aXFwtMC05XStcXC4pK1thLXpBLVpdezIsfSkpJC87XHJcblxyXG4gIGlmICghZW1haWxSZWdleC50ZXN0KGVtYWlsKSAmJiBlbWFpbCAhPT0gXCJcIikge1xyXG4gICAgZXJyb3JNZXNzYWdlcy5lbWFpbCA9IFwiQ29tcGxldGUgY29uIHVuIGVtYWlsIHbDoWxpZG9cIjtcclxuICB9IGVsc2Uge1xyXG4gICAgZXJyb3JNZXNzYWdlcy5lbWFpbCA9IFwiXCI7XHJcbiAgfVxyXG5cclxuICAvL3Rlcm1vcyBlIGNvbmRpw6fDtWVzIHTDqm0gcXVlIGVzdGFyIHNlbGVjY2lvbmFkb3NcclxuICBpZiAodGVybW9zRWNvbmRpY29lcyA9PT0gZmFsc2UpIHtcclxuICAgIGVycm9yTWVzc2FnZXMudGVybW9zRWNvbmRpY29lcyA9IFwiU2VsZWNjaW9uZSBlbCBjYW1wb1wiO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBlcnJvck1lc3NhZ2VzLnRlcm1vc0Vjb25kaWNvZXMgPSBcIlwiO1xyXG4gIH1cclxuICByZXR1cm4gZXJyb3JNZXNzYWdlcztcclxufTtcclxuIiwiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IGRlZmF1bHREYXRhIH0gZnJvbSBcIi4uL2NvbmZpZ1wiO1xyXG5pbXBvcnQgeyBnZXREYXRhLCBnZXRTZWFyY2hQYXJhbXMgfSBmcm9tIFwiLi4vY29udHJvbGxlcnMvZmV0Y2hEYXRhXCI7XHJcbmltcG9ydCBGb3JtIGZyb20gXCIuLi9jb21wb25lbnRzL2Zvcm1cIjtcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcclxuICBjb25zdCBbY2FtcGFpZ25EYXRhLCBzZXRDYW1wYWlnbkRhdGFdID0gdXNlU3RhdGUoZGVmYXVsdERhdGEpO1xyXG4gIGNvbnN0IFtwYXJhbXMsIHNldFBhcmFtc10gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbZmVjdGNoaW5nLCBzZXRGZXRjaGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcclxuXHJcbiAgLyogdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGdldERhdGEoXHJcbiAgICAgIGNhbXBhaWduRGF0YSxcclxuICAgICAgc2V0Q2FtcGFpZ25EYXRhLFxyXG4gICAgICBnZXRTZWFyY2hQYXJhbXMocGFyYW1zLCBzZXRQYXJhbXMpLFxyXG4gICAgICBzZXRGZXRjaGluZ1xyXG4gICAgKVxyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgIH07XHJcbiAgfSwgKTtcclxuKi9cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxGb3JtXHJcbiAgICAgICAgY2FtcGFpZ25BbmRVVE1kYXRhPXt7XHJcbiAgICAgICAgICBjYW1wYWlnbkRhdGE6IGNhbXBhaWduRGF0YSxcclxuICAgICAgICAgIHBhcmFtczogcGFyYW1zLFxyXG4gICAgICAgIH19XHJcbiAgICAgICAgZm9ybVR5cGU9XCJjMmNcIlxyXG4gICAgICAgIGNvbnRleHQ9XCJjMmNcIlxyXG4gICAgICA+PC9Gb3JtPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==