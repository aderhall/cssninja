expanders = document.getElementsByClassName('expand');

for (var el = 0; el < expanders.length; el ++) {
  // Get the element to expand
  var element = expanders[el];
  console.log(element);
  // Get the parent element
  var parent = element.parentNode;
  console.log(parent);
  // Get the sibling elements
  var siblings = parent.childNodes;
  console.log(siblings);

  // Test if parent is vertical. If not, assume horizontal.
  if (parent.className.split(' ').indexOf('vertical') > -1) {
    var target = parent.offsetHeight;
    var v = true;
    var an = 'height';
  } else {
    var target = parent.offsetWidth;
    var v = false;
    var an = 'width'
  }

  console.log(target);
  // Add up all of the sibling dimensions
  var total = 0;
  console.log(siblings.length);
  for (var s = 0; s < siblings.length; s ++) {
    var sibling = siblings[s];
    if (sibling.nodeName !== '#text') {
      if (sibling.className.split(' ').indexOf('expand') == -1) {
        console.log(sibling);
        total += px(sibling, an);
        console.log(total);
      }
    }
  }
  var remainder = (target-total).toString() + 'px'
  console.log(remainder);
  // If vertical, add the size gap to the child's height. If horizontal, its width.
  if (v) {
    element.style.height = remainder;
  } else {
    element.style.height = remainder;
  }
}

function px(el, styleProp) {
  return parseFloat(getStyle(el, styleProp).slice(0, -2));
}
function getStyle(el, styleProp) {
  // Function borrowed from stackoverflow user CMS
  var value, defaultView = (el.ownerDocument || document).defaultView;
  // W3C standard way:
  if (defaultView && defaultView.getComputedStyle) {
    // sanitize property name to css notation
    // (hypen separated words eg. font-Size)
    styleProp = styleProp.replace(/([A-Z])/g, "-$1").toLowerCase();
    return defaultView.getComputedStyle(el, null).getPropertyValue(styleProp);
  } else if (el.currentStyle) { // IE
    // sanitize property name to camelCase
    styleProp = styleProp.replace(/\-(\w)/g, function(str, letter) {
      return letter.toUpperCase();
    });
    value = el.currentStyle[styleProp];
    // convert other units to pixels on IE
    if (/^\d+(em|pt|%|ex|px)?$/i.test(value)) {
      return (function(value) {
        var oldLeft = el.style.left, oldRsLeft = el.runtimeStyle.left;
        el.runtimeStyle.left = el.currentStyle.left;
        el.style.left = value || 0;
        value = el.style.pixelLeft + "px";
        el.style.left = oldLeft;
        el.runtimeStyle.left = oldRsLeft;
        return value;
      })(value);
    }
    return value;
  }
}