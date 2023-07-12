//sessionStorage is used to store data & it is deleted when the browser is closed.

sessionStorage.setItem("key", "value") //Sets the key value pair in the sessionStorage
sessionStorage.setItem("username", "John Doe") //Sets username as key and John Doe as value in the sessionStorage
sessionStorage.getItem("username") //Returns the value of the key username
sessionStorage.removeItem("username") //Removes the key username from the sessionStorage
sessionStorage.clear() //Removes all the key value pairs from the sessionStorage
sessionStorage.length //Returns the number of key value pairs in the sessionStorage
sessionStorage.key(0) //Returns the key at index 0