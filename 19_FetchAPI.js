//Fetch API is used to get resources from the server. It is a promise based API.

let p = fetch("https://jsonplaceholder.typicode.com/todos/")
p.then((response) => {
    console.log(response.status)
    console.log(response.ok)
    return response.json()
}).then((response) => {
    console.log(response)
})


//Get Request using Async Await
const getTodo = async (id) => {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/" + id)
    const data = await response.json()
    console.log(data)
}

getTodo(3)


//Post Request using Async Await
const addTodo = async (todo) => {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/", {
        method: "POST",
        body: JSON.stringify(todo),
        headers: {
            "Content-type": "application/json; charset=UTF-8",
        },
    })
    const data = await response.json()
    console.log(data)
}

addTodo({
    userId: 1,
    title: "New Todo",
    completed: false,
})



