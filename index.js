console.log('hello world')

let message = document.querySelector("#message")
document.querySelector("form").addEventListener("submit", addMovie)



function addMovie(event) {
    event.preventDefault()
    const inputField = document.querySelector("input");
    let movie = document.createElement("li");
    let movieTitle = document.createElement("span");
    movieTitle.textContent = inputField.value
    movieTitle.addEventListener("click", crossOffMovie)
    // movieTitle = document.createTextNode("input");
    movie.appendChild(movieTitle)
    const deleteBtn = document.createElement("button")
    deleteBtn.textContent = "X"
    deleteBtn.addEventListener("click", deleteMovie)
    movie.appendChild(deleteBtn)
    const list = document.querySelector("ul")
    list.appendChild(movie)
}

function deleteMovie(event) {
    event.target.parentNode.remove()
    message.textContent = "Movie delete!"
}



function crossOffMovie(event) {
    event.target.classList.toggle("checked")
    if (event.target.classList.contains("checked")) {
        return message.textContent = "Movie watched!"
    } else {
        return message.textContent = "Movie added back!"
    }
}