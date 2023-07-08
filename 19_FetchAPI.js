//Fetch API is used to get resources from the server. It is a promise based API.

let p = fetch("https://fakerapi.it/api/v1/texts?_quantity=1&_characters=50")
p.then((response) => {
    console.log(response.status)
    console.log(response.ok)
    return response.json()
}).then((response) => {
    console.log(response)
})