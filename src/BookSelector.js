import React, { useState } from "react";

//takes in an array, chooses a random index, and returns message
function BookSelector( {books} ) {

    console.log(books)
    
    let random = '';
    if (books.length !== 0) {
        random = books[Math.floor(Math.random()*books.length)];
    };
    
    const [clicked, setClicked] = useState(false);
    	
    function handleClick() {
        setClicked(!clicked);
    }

    return (
    <>
        <p>
            {(clicked) ? random : "What should you read?"}
        </p>
        <button onClick={ handleClick }>
          Random Book
        </button>
    </>
    )
};

export default BookSelector;