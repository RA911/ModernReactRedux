import { combineReducers } from 'redux';
import BooksReducer from './books.js';

const rootReducer = combineReducers({
    books: BooksReducer
});

export default rootReducer;