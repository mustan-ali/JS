document.getElementById("id"); // returns the element with the given id
document.getElementsByClassName("class"); // returns a list of elements with the given class
document.getElementsByTagName("tag"); // returns a list of elements with the given tag
document.getElementsByName("name"); // returns a list of elements with the given name

document.getElementById("id").innerHTML = "new text"; // changes the inner HTML of the element with the given id
document.getElementById("id").style.color = "red"; // changes the style of the element with the given id

document.querySelector("selector"); // returns the first element that matches the given CSS selector
document.querySelectorAll("selector"); // returns a list of elements that matches the given CSS selector
document.querySelector(".selector"); // returns the first element that matches class selector
document.querySelector("#selector"); // returns the first element that matches id selector

document.querySelector("element.class"); // returns the first element that matches class selector inside element
document.querySelector("element,element"); // returns the first element that matches either of the selectors
document.querySelector("element1 element2"); // returns the first element that have element2 inside element1
document.querySelector("element1 > element2"); // returns the first element that have element2 as a direct child of element1
document.querySelector("element1 + element2"); // returns the first element that have element2 as a direct sibling of element1 

document.querySelectorAll(".selector")[0]; // returns the first element that matches class selector (alternative to querySelector)
document.querySelector(".text").style.color = "red"; // changes the style of the first element that matches class selector


/*
firstChild  - returns the first child of a node
lastChild   - returns the last child of a node
nextSibling - returns the next node at the same tree level
previousSibling - returns the previous node at the same tree level
parentNode  - returns the parent node of a specified node
childNodes  - returns a collection of a node's child nodes
previousElementSibling - returns the previous element at the same tree level
nextElementSibling - returns the next element at the same tree level
*/