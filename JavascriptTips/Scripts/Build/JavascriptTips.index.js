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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


(function () {
    var $resultadoBlock = $("#resultado-block");
    var $resultadoNonBlock = $("#resultado-nonblock");

    var chamadasBlock = 0;
    var chamadasNonBlock = 0;

    function simulaChamadaAjax(cbSucesso) {
        setTimeout(function () {
            cbSucesso();
        }, Math.floor(Math.random() * 5 + 5) * 1000);
    }

    $("#block").on("click", function () {
        chamadasBlock++;
        simulaChamadaAjax(function () {
            $resultadoBlock.html("Realizou " + chamadasBlock + " chamadas");
        });
    });

    $("#nonblock").on("click", function () {
        $(this).attr("disabled", true);
        chamadasNonBlock++;
        simulaChamadaAjax(function () {
            $(this).attr("disabled", false);
            $resultadoNonBlock.html("Realizou " + chamadasNonBlock + " chamada");
        }.bind(this));
    });

    $("#limpar").on("click", function () {
        chamadasBlock = 0;
        chamadasNonBlock = 0;
        $resultadoBlock.html("");
        $resultadoNonBlock.html("");
    });
})();

/***/ })

/******/ });
//# sourceMappingURL=JavascriptTips.index.js.map