import React, { useState } from "react";
import './App.css';
import BookSelector from './BookSelector';

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

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BookSelector books={books}/>
      </header>
    </div>
  );
};

export default App;