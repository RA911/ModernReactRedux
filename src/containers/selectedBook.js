import React, { Component } from 'react';
import { connect } from 'react-redux';

class SelectedBook extends Component {
    render() {
        if(!this.props.book) {
            return <div>Please select a book first in order to show it's details.</div>
        }
        
        const { title, pages } = this.props.book;

        return (
            <div>
                <h3>Details for book</h3>
                <div>Title: {title}</div>
                <div>Pages: {pages}</div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { book: state.selectedBook };
}

export default connect(mapStateToProps)(SelectedBook);