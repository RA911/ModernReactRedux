import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import { fetchPosts } from '../actions/index.js';

class PostsList extends Component {
    componentDidMount() {
        this.props.fetchPosts();
    }
    renderPosts() {
        let postsList = [],
            postsObject = this.props.posts,
            currentPost;

        for (var id in postsObject) {
            currentPost = postsObject[id];

            postsList.push(
                <li key={id}>
                    <Link to={`/posts/${id}`} >{currentPost.title}</Link>
                </li>
            );
        }

        return postsList;
    }
    render() {
        return (
            <div>
                <Link to="/posts/new">Create new post</Link>
                <ul>
                    {this.renderPosts()}
                </ul>
            </div>
        );
    }
}

function mapStateToProps({ posts }) {
    return { posts };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchPosts }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PostsList);