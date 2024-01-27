// Access the custom attribute to retrieve the parameter
var scriptTag = document.currentScript;
var parameter = scriptTag.getAttribute('data-parameter');

var elements = document.getElementsByClassName('getelement');

    // Check if any element was found with the specified class name
    if (elements.length > 0) {
        // Select the first element from the collection (assuming only one element has this class)
        var targetElement = elements[0];

        // Set the value of the element (for non-form elements, set innerText, innerHTML, or textContent)
        targetElement.innerText = `New value set via JavaScript ${parameter}`
    } else {
        console.error('Element with class name "example-class" not found.');
    }
// Now you can use the 'parameter' variable in this script
console.log("Parameter in encrypt.js:", parameter);
