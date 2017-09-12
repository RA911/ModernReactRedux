import React, { Component } from 'react';
import SearchBar from './searchBar.js';
import VideoList from './videoList.js';
import youtubeSearch from '../../services/youtubeSearch.js';

export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = { searchTerm: 'LZ Khan', videos: [] };

        this.onSearchBarChange = this.onSearchBarChange.bind(this);
        this.fetchVideos = this.fetchVideos.bind(this);

        this.fetchVideos(this.state.searchTerm);
    }
    render() {
        return (
            <div>
                <SearchBar value={this.state.searchTerm} onChange={this.onSearchBarChange} />
                <VideoList videos={this.state.videos} />
            </div>
        );
    }
    onSearchBarChange(ev) {
        const searchTerm = ev.target.value;
        this.setState({ searchTerm });
        this.fetchVideos(searchTerm);
    }
    fetchVideos(searchTerm) {
        youtubeSearch.fetch(searchTerm, (videos) => {
            this.setState({ videos });
        });
    }
}