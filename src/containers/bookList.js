import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookList extends Component {
    render() {
        return (
            <ul>
                {this.props.books.map(book => <li key={book.title}>{book.title}</li>)}
            </ul>
        );
    }
}

function mapStateToProps(state) {
    return {
        books: state.books
    };
}

export default connect(mapStateToProps)(BookList);