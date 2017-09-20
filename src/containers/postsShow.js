import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchPost, deletePost } from '../actions/index.js';

class PostsShow extends Component {
    componentDidMount() {
        const postId = this.props.match.params.id;
        this.props.fetchPost(postId);
    }
    onDeletePost() {
        const postId = this.props.match.params.id;
        this.props.deletePost(postId, () => {
            this.props.history.push('/');
        });
    }
    render() {
        const { post } = this.props;

        if (!post) {
            return <div>Loading...</div>
        }

        return (
            <div>
                <Link to="/" style={{ float: "left" }}>Back to posts</Link>
                <button onClick={() => this.onDeletePost()}>Delete post</button>
                <div>
                    <h2>{post.title}</h2>
                    <h4>Categories: {post.categories}</h4>
                    <div>{post.content}</div>
                </div>
            </div>
        );
    }
}

function mapStateToProps({ posts }, ownProps) {
    return {
        post: posts[ownProps.match.params.id]
    };
}

export default connect(mapStateToProps, { fetchPost, deletePost })(PostsShow);