import React, { Component } from 'react';
import _ from 'lodash';
import SearchBar from './searchBar.js';
import VideoList from './videoList.js';
import VideoDetail from './videoDetail.js';
import youtubeSearch from '../../services/youtubeSearch.js';

export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            videos: [],
            selectedVideo: null
        };

        this.fetchVideos = this.fetchVideos.bind(this);

        this.fetchVideos('LZ Khan');
    }
    render() {
        const onSearchBarChange = _.debounce(searchTerm => this.fetchVideos(searchTerm), 300);

        return (
            <div>
                <SearchBar onSearchBarChange={onSearchBarChange} />
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList videos={this.state.videos} onVideoSelected={selectedVideo => this.setState({ selectedVideo })} />
            </div>
        );
    }
    fetchVideos(searchTerm) {
        debugger;
        youtubeSearch.fetch(searchTerm, (videos) => {
            this.setState({
                videos,
                selectedVideo: videos[0]
            });
        });
    }
}