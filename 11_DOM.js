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

let element1 = document.getElementById("id1");
id1.matches(".className"); // returns true if the element has the given class
id1.closest(".className"); // returns element that is the closest ancestor that matches the given class
id1.contain(element2); // returns true if the element contains the given element

document.getElementById("id").innerHTML; // returns the inner HTML of the element with the given id
document.getElementById("id").innerText = "new text"; // changes the inner text of the element with the given id
document.getElementById("id").outerHTML; // returns the outer HTML of the element with the given id (including the element itself)
document.getElementById("id").outerText = "<p>new text</p>"; // changes the  element with the given id (including the element itself)

element1.hasAttribute("class"); // returns true if the element has the given attribute
element1.getAttribute("class"); // returns the value of the given attribute
element1.setAttribute("class", "newClass"); // sets the value of the given attribute
element1.removeAttribute("class"); // removes the given attribute
element1.attributes; // returns a list of all attributes of the element

let a = document.getElementsByTagName("div")[0]; // returns the first div element
a.innerHTML = a.innerHTML + '<p>new text</p>'; // adds a new paragraph to the div element
let b = document.createElement("div"); // creates a new div element
b.innerHTML = '<p>new text</p>'; // adds a new paragraph to the div element
a.append(b); // adds b as the last child of a
a.prepend(b); // adds b as the first child of a
a.before(b); // adds b as the previous sibling of a
a.after(b); // adds b as the next sibling of a
a.replaceWith(b); // replaces a with b

a.insertAdjacentHTML("beforebegin", '<p>new text</p>'); // adds a new paragraph before a
a.insertAdjacentHTML("afterend", '<p>new text</p>'); // adds a new paragraph after a
a.insertAdjacentHTML("afterbegin", '<p>new text</p>'); // adds a new paragraph as the first child of a
a.insertAdjacentHTML("beforeend", '<p>new text</p>'); // adds a new paragraph as the last child of a

let c = document.getElementById("id1");
c.classList.add("newClass"); // adds a new class to the element
c.classList.remove("newClass"); // removes a class from the element
c.classList.toggle("newClass"); // adds a class to the element if it doesn't exist, otherwise removes it
c.classList.contains("newClass"); // returns true if the element has the given class
c.className = "newClass newClass2"; // sets the class of the element

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