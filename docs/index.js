const axios = require("axios");

// google books API documentation https://developers.google.com/books/docs/v1/using#RetrievingBookshelf

const userId = "109437390009032914490";
const shelf = "1001";
const BASE_URL = `https://www.googleapis.com/books/v1/users/${userId}/bookshelves/${shelf}/volumes`

// url no template literals: https://www.googleapis.com/books/v1/users/109437390009032914490/bookshelves/1001/volumes

// data object key "items" is an array of objects (each book with info). Inside each object we find the "volumeInfo" object that has a "title" key/value pair, a "subtitle" key/value pair, an "authors" key that holds an array of authors, and a "categories" key that holds an array of categories

// focus on accessing the title first so that you can use your google books library to deliver the title of a random book rather than using a local array that you built

// async function googleAPI() {
//     const { data } = await axios.get(url)
//     const { volumInfo: {title, subtitle, authors, categories}} = data
//     axios
//         .get(url)
//         .then(response => {
//             console.log(response)
//         });
// }

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
    return `Read: ${book}`;
};

// Select the button
//querySelector searches the DOM using a string representing a CSS selector
const btn = document.querySelector("button");

// Add an event listener
btn.addEventListener("click", (event) => {
        document.getElementById("message").innerHTML = bookSelector(books);
 });