const DOMNodeCollection = require("./dom_node_collection.js");

window.$ = $;

let docReady = false;
let readyCallbacks = [];

window.$l = (selector) => {

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
