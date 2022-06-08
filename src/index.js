document  //document gives access to the DOM

// const axios = require("axios");

// google books API documentation https://developers.google.com/books/docs/v1/using#RetrievingBookshelf

// const userId = "109437390009032914490";
// const shelfId = "1001";
// const BASE_URL = "https://www.googleapis.com/books/v1/users/";

// want to access specific public bookshelf

// function googleAPI() {
//     axios
//         .get(`${BASE_URL}${userId}/bookshelves/${shelfId}`)
//         .then(response => {
//             console.log(response)
//         });
// }

// console.log(googleAPI())

const books = [
    "The Vegetarian",
    "Strange Stars",
    "An Unquiet Mind",
    "Suncatcher",
    "Squad",
    "House of Leaves",
    "Magic: A History",
    "Human Remains comics",
]

// takes in an array, chooses a random index, and returns message
function bookSelector(books) {
    let book = books[Math.floor(Math.random()*books.length)];
    return `Read: ${book}`;;
}

// Select the button
//querySelector searches the DOM using a string representing a CSS selector
const btn = document.querySelector("button");

// Add an event listener
btn.addEventListener("click", (event) => {
        document.getElementById("message").innerHTML = bookSelector(books);
 });