import './App.css';
import React from 'react';
import BookSelector from './BookSelector';
import Books from './Books';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BookSelector books={Books}/>
      </header>
    </div>
  );
};

export default App;