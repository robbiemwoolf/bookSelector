import React, { useState, useEffect } from "react";
import BookSelector from "./BookSelector";

function Books() {

    const userId = "109437390009032914490";
    const shelf = "1001";
    const url = `https://www.googleapis.com/books/v1/users/${userId}/bookshelves/${shelf}/volumes`;
    
    const [apiData, setApiData] = useState([]);

    useEffect(() => {
        fetch(url)
            .then((response) => response.json())
            .then((data) => setApiData(data));
    }, []); // Passing [] so that it only runs the effect once
    
    let books = [];
    if (apiData.length !== 0) {

    const values = Object.values(apiData);

    const items = values[2];

    const volInfos = items.map(({ volumeInfo }) => volumeInfo) 

    books = volInfos.map(book => book.title);
    }
    
  return <BookSelector books={books} />
}

export default Books;

// google books API documentation https://developers.google.com/books/docs/v1/using#RetrievingBookshelf

// url no template literals: https://www.googleapis.com/books/v1/users/109437390009032914490/bookshelves/1001/volumes