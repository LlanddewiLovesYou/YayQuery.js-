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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

const DOMNodeCollection = __webpack_require__(1);

window.$ = $;

let docReady = false;
let readyCallbacks = [];

window.$y = (selector) => {

  if (typeof selector === "string") {
    const elementList = document.querySelectorAll(selector);
    return new DOMNodeCollection(elementList);
  }else if ((selector)instanceof(HTMLElement)){
    return new DOMNodeCollection([selector]);
  }else if(typeof selector === "function"){

  }
};

yesReadyCallbacks = (func) => {
  if (docReady) {
    func();
  }else {
    readyCallbacks.push(func)
  }
};

document.addEventListener('DOMContentLoaded', () => {
  docReady = true;
  readyCallbacks.forEach(func => func());
});


/***/ }),
/* 1 */
/***/ (function(module, exports) {

class DOMNodeCollection {
  constructor(nodes) {
    this.nodes = nodes;
    console.log(this.nodes);
  }

  html(string) {
    if (typeof string === "undefined"){
      return this.nodes[0];
    } else {
     for (var i = 0; i < this.nodes.length; i++) {
       this.nodes[i].innerHTML = string;
     }
    }
  }

  empty() {
    this.html("");
  }

  append(newEl) {
    if (typeof newEl === "object" ) {
      for (let i = 0; i < this.nodes.length; i++) {
        this.nodes[i].innerHTML += $y(newEl).outerHTML;
      }
    }else if(typeof newEl === "string") {
      for (let i = 0; i < this.nodes.length; i++) {
        this.nodes[i].innerHTML += newEl.outerHTML;
      }
    }else if((newEl)instanceof(HTMLElement)){
      for (let i = 0; i < this.nodes.length; i++) {
        this.nodes[i].innerHTML += newEl.outerHTML;
      }
    }
  }

  addClass(arg) {
    for (var i = 0; i < this.nodes.length; i++) {
      this.nodes[i].className = arg;
    }
  }

  attr(attrName, attrValue){
    this.nodes.forEach((el) => el.setAttributes(attrName, attrValue));
  }

  removeClass(...args) {
    for (var i = 0; i < this.nodes.length; i++) {
      if (typeof args === "undefined") {
        this.nodes[i].className = "";
      }else {
        const classes = this.nodes[i].className.split(" ");
        const included = classes.filter((el) => !args.includes(el));
        this.nodes[i].className = included;
      }

    }

  }

  children() {
    let childs = [];
    const temp = this.nodes.forEach((el) => {
      childs.push(el.children);
    });
    let childrens = new DOMNodeCollection(childs);
    return childrens;
  }

  parent() {
    let parents = [];
    for (var i = 0; i < this.nodes.length; i++) {
      parents.push(this.nodes[i].parentNode);
    }
    let parentHood = new DOMNodeCollection(parents);
    return parentHood;

  }

  find(selector) {
    let results = [];
    for (var i = 0; i < this.nodes.length; i++) {
      results.push(this.nodes[i].querySelectorAll(selector));
    }
    return results;
  }

  remove() {
    this.nodes[0].parentNode.removeChild(this.nodes[0]);
  }

  on (e, callback) {
    for (var i = 0; i < this.nodes.length; i++) {
      this.nodes[i].addEventListener(e,callback);
    }
  }

  off (e, callback) {
    for (var i = 0; i < this.nodes.length; i++) {
      this.nodes[i].addEventListener(e,callback);
    }
  }
}

module.exports = DOMNodeCollection;


/***/ })
/******/ ]);