// Access the custom attribute to retrieve the parameter
var scriptTag = document.currentScript;
var parameter = scriptTag.getAttribute('data-parameter');

var element = document.getElementByClassName('getelement')
element.innerText = `This is the value passed as paramter ${parameter}`

// Now you can use the 'parameter' variable in this script
console.log("Parameter in encrypt.js:", parameter);
