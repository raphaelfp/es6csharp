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

var Person = exports.Person = function () {
    /**
     * A Person
     * @param {string} name
     * @param {number} age
     */
    function Person(name, age) {
        _classCallCheck(this, Person);

        this.name = name;
        this.age = age;
    }

    /**
     * Return the person's name
     * @returns {string}
     */


    _createClass(Person, [{
        key: "introduceYourself",
        value: function introduceYourself() {
            return "Hi, my name is " + this.name;
        }

        /**
         * Return chit chat talk
         * @returns {string}
         */

    }, {
        key: "talk",
        value: function talk() {
            return "Hey beauty!!!";
        }

        /**
         * Do you really think that I know math???
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

    return Person;
}();

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Person = __webpack_require__(0);

var _Engineer = __webpack_require__(2);

//@ts-check
(function () {
    console.log("----------Person----------");
    var person = new _Person.Person("John", 24);
    person.introduceYourself();
    person.add(5, 7);
    console.log("--------------------------");

    console.log("---------Engineer---------");
    var engineer = new _Engineer.Engineer("Robert", 48, "Computer");
    engineer.introduceYourself();
    engineer.add(5, 7);
    console.log("--------------------------");
})();

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Engineer = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Person2 = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } //@ts-check

/**
* An Engineer
* @param {string} name - The engineer's name
* @param {number} age - The engineer's age
* @param {string} field - The engineer's field
*/
var Engineer = function (_Person) {
    _inherits(Engineer, _Person);

    function Engineer(name, age, field) {
        _classCallCheck(this, Engineer);

        var _this = _possibleConstructorReturn(this, (Engineer.__proto__ || Object.getPrototypeOf(Engineer)).call(this, name, age));

        _this.field = field;
        return _this;
    }

    /**
     * Return the engineer's name and field
     * @returns {string}
     */


    _createClass(Engineer, [{
        key: "introduceYourself",
        value: function introduceYourself() {
            return "Hi, my name is " + this.name + " and I'm a " + this.field + " Engineer";
        }

        /**
         * Easy peasy lemon squeezy!!! Let me just grab my HP50G.
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

    return Engineer;
}(_Person2.Person);

exports.Engineer = Engineer;

/***/ })
/******/ ]);
//# sourceMappingURL=Modules.index.js.map