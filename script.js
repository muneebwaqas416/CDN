// Access the custom attribute to retrieve the parameter
var scriptTag = document.currentScript;
var parameter = scriptTag.getAttribute('data-parameter');

document.getElementById("demo").innerHTML = parameter

console.log(parameter)

