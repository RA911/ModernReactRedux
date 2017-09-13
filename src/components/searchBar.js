import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = { searchTerm: '' };
        this.onInputChange = this.onInputChange.bind(this);
    }
    render() {
        return <input value={this.state.searchTerm} onChange={this.onInputChange} />
    }
    onInputChange(ev) {
        const searchTerm = ev.target.value;
        this.setState({ searchTerm });
        this.props.onSearchBarChange(searchTerm);
    }
}

export default SearchBar;