import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectBook } from '../actions/index.js';

class BookList extends Component {
    render() {
        return (
            <ul>
                {this.props.books.map(book =>
                    <li key={book.title} onClick={() => this.props.selectBook(book)}>
                        {book.title}
                    </li>
                )}
            </ul>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ selectBook }, dispatch);
}

function mapStateToProps(state) {
    return { books: state.books };
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList);