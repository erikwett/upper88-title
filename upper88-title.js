(function() {
  var element = Object.create(HTMLElement.prototype);

  element.attachedCallback = function() {
    render(this);
  };

  element.attributeChangedCallback = function(attr, oldVal, newVal) {
    render(this);
  };
  // Registers custom element
  document.registerElement('upper88-title', {
    prototype: element
  });
  //implementation
  function render(element) {
    if (element.hasAttribute("value")) {
      var value = element.getAttribute("value");
      element.innerHTML = value;
    }
    document.title = element.innerText || element.textContent;
  }

}());