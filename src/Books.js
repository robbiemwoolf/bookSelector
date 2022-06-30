import { useState, useEffect } from "react";

// google books API documentation https://developers.google.com/books/docs/v1/using#RetrievingBookshelf

// url no template literals: https://www.googleapis.com/books/v1/users/109437390009032914490/bookshelves/1001/volumes
  
// data object key "items" is an array of objects (each book with info). Inside each object we find the "volumeInfo" object that has a "title" key/value pair, a "subtitle" key/value pair, an "authors" key that holds an array of authors, and a "categories" key that holds an array of categories
  
// focus on accessing the title first so that you can use your google books library to deliver the title of a random book rather than using a local array that you built


function Books() {
  const userId = "109437390009032914490";
  const shelf = "1001";
  const url = `https://www.googleapis.com/books/v1/users/${userId}/bookshelves/${shelf}/volumes`;
   
  const [data, setData] = useState({})

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then(setData);
  }, []);
  console.log(data)
}

export default Books;