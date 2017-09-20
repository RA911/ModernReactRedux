import axios from 'axios';

export const FETCH_POSTS = 'FETCH_POSTS';
export const FETCH_POST = 'FETCH_POST';
export const DELETE_POST = 'DELETE_POST';

const CREATE_POST = 'CREATE_POST';
const POSTS_API_ROOT_URL = 'http://reduxblog.herokuapp.com/api/posts';
const POSTS_API_KEY = '?key=ra911';

export function fetchPosts() {
    const request = axios.get(`${POSTS_API_ROOT_URL}${POSTS_API_KEY}`);

    return {
        type: FETCH_POSTS,
        payload: request
    };
}

export function createPost(values, cb) {
    const request = axios.post(`${POSTS_API_ROOT_URL}${POSTS_API_KEY}`, values)
        .then(() => cb());

    return {
        type: CREATE_POST,
        payload: request
    };
}

export function fetchPost(id) {
    const request = axios.get(`${POSTS_API_ROOT_URL}/${id}${POSTS_API_KEY}`);

    return {
        type: FETCH_POST,
        payload: request
    };
}

export function deletePost(id, cb) {
    const request = axios.delete(`${POSTS_API_ROOT_URL}/${id}${POSTS_API_KEY}`)
        .then(() => cb());

    return {
        type: DELETE_POST,
        payload: id
    };
}