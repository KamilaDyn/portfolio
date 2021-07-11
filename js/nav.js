/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/nav.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function () {
  var navLink = document.querySelectorAll('.nav-link'),
      mobilMenu = document.querySelector('.mobile-menu'),
      navbar = document.querySelector('.navbar'),
      faBars = document.querySelector('i.fa-bars'),
      faTimes = document.querySelector('i.fa-times'),
      backDrop = document.querySelector('.backdrop'),
      body = document.querySelector('#body'),
      links = document.querySelectorAll('.link');
  navLink.forEach(function (i) {
    return i.addEventListener("click", function (e) {
      for (var j = 0; j < navLink.length; j++) {
        navLink[j].classList.remove('active');
      }

      e.currentTarget.classList.add('active');
    });
  });
  mobilMenu.addEventListener('click', function () {
    navbar.classList.toggle('is-active');
    faBars.classList.toggle('hide');
    faTimes.classList.toggle('show');
    backDrop.style.display = 'block';
    body.classList.toggle('body-no-scroll');
  });
  links.forEach(function (i) {
    return i.addEventListener('click', function (e) {
      navbar.classList.remove('is-active');
      faBars.classList.toggle('hide');
      faTimes.classList.toggle('show');
      backDrop.style.display = 'none';
      body.classList.remove('body-no-scroll');
    });
  });
  backDrop.addEventListener('click', function () {
    navbar.classList.remove('is-active');
    faBars.classList.toggle('hide');
    faTimes.classList.toggle('show');
    body.classList.remove('body-no-scroll');
    backDrop.style.display = 'none';
  });

  function windowSize() {
    var width = window.innerWidth;

    if (width >= 800) {
      navbar.classList.remove('is-active');
      backDrop.style.display = 'none';
      body.classList.remove('body-no-scroll');
      faBars.classList.remove('hide');
      faTimes.classList.remove('show');
    }
  }

  window.onresize = windowSize; //scroll animated

  var alink = document.querySelectorAll('a[href*="#"]'); // alink.filter((i, a) => a.getAttribute('href').startsWith('#') || a.href.startsWith(`${location.href}#`))

  alink.forEach(function (i) {
    return i.addEventListener('click', function (e) {
      if (e.currentTarget.getAttribute('href').startsWith('#') || a.href.startsWith("".concat(location.href, "#"))) {
        e.preventDefault();
        e.currentTarget.getAttribute('href');
        var currentId = e.currentTarget.getAttribute('href');
        document.querySelector(currentId).scrollIntoView({
          behavior: 'smooth'
        }, 1000);
      }
    });
  });
})();

/***/ }),

/***/ "./src/js/nav.js":
/*!***********************!*\
  !*** ./src/js/nav.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _navigation_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navigation.js */ "./src/js/navigation.js");
/* harmony import */ var _navigation_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_navigation_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.js */ "./src/js/index.js");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _sass_style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! .././sass/style.scss */ "./src/sass/style.scss");
/* harmony import */ var _sass_style_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_sass_style_scss__WEBPACK_IMPORTED_MODULE_2__);




/***/ }),

/***/ "./src/js/navigation.js":
/*!******************************!*\
  !*** ./src/js/navigation.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function () {
  window.addEventListener('scroll', function () {
    var s1 = document.querySelector('.addColor'),
        menu = document.querySelector('.nav'),
        link = document.querySelectorAll('.link'),
        button = document.querySelector('.btn-down-container '),
        s2 = document.querySelector('.description-project');

    if (window.pageYOffset >= s1.offsetTop) {
      menu.style.background = 'linear-gradient(to left, #722f37, #970001)';

      for (var i = 0; i < link.length; i++) {
        link[i].style.color = '#722f37';
      } // $(.btn-down-container ).css('display', 'block');


      if (button) {
        button.classList.add('btn-down-container-visible');
      }
    } else {
      menu.style.background = 'transparent';

      for (var _i = 0; _i < link.length; _i++) {
        link[_i].style.color = '#C29545';
      }

      if (button) {
        button.classList.remove('btn-down-container-visible');
      }
    }
  });
})();

/***/ }),

/***/ "./src/sass/style.scss":
/*!*****************************!*\
  !*** ./src/sass/style.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });
//# sourceMappingURL=nav.js.map