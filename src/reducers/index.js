import { combineReducers } from 'redux';
import Books from './books.js';
import SelectedBook from './selectedBook.js';

const rootReducer = combineReducers({
    books: Books,
    selectedBook: SelectedBook
});

export default rootReducer;