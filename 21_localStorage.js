//localStorage is used to store data with no expiration date & it is available in the browser even after the browser is closed.

localStorage.setItem("key", "value") //Sets the key value pair in the localStorage
localStorage.setItem("username", "John Doe") //Sets username as key and John Doe as value in the localStorage
localStorage.getItem("username") //Returns the value of the key username
localStorage.removeItem("username") //Removes the key username from the localStorage
localStorage.clear() //Removes all the key value pairs from the localStorage
localStorage.length //Returns the number of key value pairs in the localStorage
localStorage.key(0) //Returns the key at index 0