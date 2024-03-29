//Mouse Events
onclick //when the mouse clicks on an element
ondblclick //when the mouse double-clicks on an element
onmousedown //when the mouse button is pressed down on an element
onmouseup //when the mouse button is released over an element
onmouseover //when the mouse pointer moves over an element
onmouseout //when the mouse pointer moves out of an element
onmousemove //when the mouse pointer moves while it is over an element

//Keyboard Events
onkeydown //when a user is pressing/holding down a key
onkeyup //when a user releases a key


//Event Handlers

let btn = document.getElementById("btn");
let x = function () {
    alert("Hello World");
}

btn.onclick = addEventListener("click", x);    //add event listener to the button & call the function x
btn.onclick = removeEventListener("click", x); //remove event listener from the button & remove the function x