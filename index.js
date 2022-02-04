
const message = document.querySelector("#message")

const addMovie = (event) => {
    event.preventDefault()
    let inputField = document.querySelector("input");
    let movie = document.createElement("li");
    let movieTitle = document.createElement("span");
    movieTitle.textContent = inputField.value;
    movieTitle.addEventListener("click", crossOffMovie);
    movie.appendChild(movieTitle);
   
   const deleteBtn = document.createElement("button");
   deleteBtn.textContent = ("X");
   deleteBtn.addEventListener("click", deleteMovie);
   movie.appendChild(deleteBtn);
   
    document.querySelector("ul").appendChild(movie);
    inputField.value = ("");
   
    

}

document.querySelector("form").addEventListener("submit", addMovie);

const deleteMovie = (event) => {
    event.target.parentNode.remove()
    message.textContent = ("Movie Deleted!")
}

const crossOffMovie = (event) => {
    event.target.classList.toggle("checked");
    if (event.target.classList.toggle.contains("checked") === true)
        return "You watched this movie!" 
    else {(event.target.classList.toggle.contains("checked") !== true)
        return "Movie added back in list!"
    } 
        
    
}
