import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index.js';

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = { searchTerm: '' };

        this.onFormSubmitted = this.onFormSubmitted.bind(this);
    }
    onFormSubmitted(ev) {
        ev.preventDefault();
        this.props.fetchWeather(this.state.searchTerm);
        this.setState({ searchTerm: '' });
    }
    render() {
        return (
            <form onSubmit={this.onFormSubmitted}>
                <input
                    type="text"
                    value={this.state.searchTerm}
                    onChange={(ev) => this.setState({ searchTerm: ev.target.value })}
                />
                <input type="submit" value="Search" />
            </form>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);