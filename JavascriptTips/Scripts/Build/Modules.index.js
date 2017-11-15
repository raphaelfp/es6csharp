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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//@ts-check

var Pessoa = exports.Pessoa = function () {
    /**
     * Uma pessoa
     * @param {string} nome
     * @param {number} idade
     */
    function Pessoa(nome, idade) {
        _classCallCheck(this, Pessoa);

        this.nome = nome;
        this.idade = idade;
    }

    /**
     * Se apresenta
     * @returns {string}
     */


    _createClass(Pessoa, [{
        key: "seApresenta",
        value: function seApresenta() {
            return "Ol\xE1, meu nome \xE9 " + this.nome;
        }

        /**
         * Dá um oi
         * @returns {string}
         */

    }, {
        key: "dizOi",
        value: function dizOi() {
            return "Olar!!!";
        }

        /**
         * Você acha realmente que eu sei fazer conta????
         * @param {number} x
         * @param {number} y
         * @returns {number}
         */

    }, {
        key: "add",
        value: function add(x, y) {
            return Math.floor(Math.random() * 50);
        }
    }]);

    return Pessoa;
}();

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Pessoa = __webpack_require__(0);

var _Engenheiro = __webpack_require__(2);

//@ts-check
(function () {
    console.log("----------Pessoa----------");
    var pessoa = new _Pessoa.Pessoa("John", 24);
    pessoa.seApresenta();
    pessoa.add(5, 7);
    console.log("--------------------------");

    console.log("--------Engenehrio--------");
    var engenheiro = new _Engenheiro.Engenheiro("Robert", 48, "de Computação");
    engenheiro.seApresenta();
    engenheiro.add(5, 7);
    console.log("--------------------------");
})();

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Engenheiro = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Pessoa2 = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } //@ts-check

var Engenheiro = function (_Pessoa) {
    _inherits(Engenheiro, _Pessoa);

    /**
    * Um Engenheiro
    * @param {string} nome - O nome do engenheiro
    * @param {number} idade - A idade do engenheiro
    * @param {string} area - A área de atuação do engenheiro
    */
    function Engenheiro(nome, idade, area) {
        _classCallCheck(this, Engenheiro);

        var _this = _possibleConstructorReturn(this, (Engenheiro.__proto__ || Object.getPrototypeOf(Engenheiro)).call(this, nome, idade));

        _this.area = area;
        return _this;
    }

    /**
     * Se apresenta, falando o nome e a área de atuação
     * @returns {string}
     */


    _createClass(Engenheiro, [{
        key: "introduceYourself",
        value: function introduceYourself() {
            return "Ol\xE1, meu nome \xE9 " + this.nome + " e eu sou um Engenheiro " + this.area;
        }

        /**
         * Facinho, só pegar a minha 50G.
         * @param {number} x
         * @param {number} y
         * @returns {number}
         */

    }, {
        key: "add",
        value: function add(x, y) {
            console.log(x + y);
        }
    }]);

    return Engenheiro;
}(_Pessoa2.Pessoa);

exports.Engenheiro = Engenheiro;

/***/ })
/******/ ]);
//# sourceMappingURL=Modules.index.js.map