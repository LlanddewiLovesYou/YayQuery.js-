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
