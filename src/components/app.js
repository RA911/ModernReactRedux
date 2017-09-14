import React from 'react';
import BookList from '../containers/bookList.js';
import SelectedBook from '../containers/selectedBook.js';

const App = () => (
    <div>
        <BookList />
        <SelectedBook />
    </div>
);

export default App;