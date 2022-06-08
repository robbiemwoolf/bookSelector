document  //document gives access to the DOM

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



    
