//Cookies are used to store information in the browser.


console.log(document.cookie) //Returns all the cookies in the browser
document.cookie = "key = value"  //Sets the cookie in the browser
document.cookie = "username = John Doe" //Sets the cookie in the browser with key as username and value as John Doe
document.cookie = "username = Harry Potter" //Sets the cookie in the browser with key as username and value as Harry Potter (overwrites the previous value)
document.cookie = "username = John Doe; expires = Thu, 18 Dec 2021 12:00:00 UTC" //Sets the cookie with expiry date
document.cookie = "username = John Doe; expires = Thu, 18 Dec 2021 12:00:00 UTC; path = /admin" //Sets the cookie with path (cookie will be available only in /admin path)

let key = prompt("Enter the key")
let value = prompt("Enter the value")

document.cookie = `${key} = ${value}`
document.cookie = `${encodeURI(key)} = ${encodeURI(value)}` //Encodes the key and value so that special characters can be used
console.log(document.cookie)