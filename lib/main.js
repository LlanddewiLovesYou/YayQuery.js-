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
    // return readyCallbacks.push(selector)
  }
};


$l.extend = (default, ...otherObjs) => {
  otherObjs.forEach((obj) => {
    for (const item in obj) {
      default[item] = obj[item];
    }
  });
  return base;
};

$l.ajax = (options) => {
  const request = new XMLHttpRequest();
  const defaults = {
    success: () => {},
    error: () => {},
    url: '',
    method: 'GET',
    data: {},
    contentType: ''
  }

  $l.extend(defaults, objects)
  options.method = options.method.toUpperCase()

  if (options.method === "GET"){
     options.url += `?${formQueryString(options.data)}`
  }

  request.open(options.method, options.url, true);
  request.onload = (e) => {
    if (request.status === 200) {
      options.success(request.response);
    } else {
      options.error(request.response);
    }
  }
  request.send(JSON.stringify(options.data))
}

yesReadyCallbacks = (func) => {
  if (docReady) {
    func();
  }else {
    readyCallbacks.push(func)
  }
};

formQueryString = (obj) => {
  let result = "";
  for (const info in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, info)) {
      result += `${info}=${obj[info]}&`;
    }
  }
  return result.substring(0, result.length - 1);
};

document.addEventListener('DOMContentLoaded', () => {
  docReady = true;
  readyCallbacks.forEach(func => func());
});
