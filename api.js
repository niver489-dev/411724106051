fetch("https://jsonplaceholder.typicode.com/posts/3",
    {
        method: "PATCH",
        headers: {
            'content-Type' : 'application/json'
        },
        body: JSON.stringify({
            title: 'Title',
            
        })
    }
)
.then(response => response.json())
.then(data => {console.log(data)})