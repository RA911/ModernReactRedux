import { FETCH_POSTS, FETCH_POST, DELETE_POST } from '../actions/index.js';

function combineState(posts) {
    let postsObject = {};

    posts.forEach(post => postsObject[post.id] = post);

    return postsObject;
}

export default function (state = {}, action) {
    switch (action.type) {
        case DELETE_POST:
            let newState = { ...state };
            delete newState[action.payload];
            return newState;
        case FETCH_POST:
            const fetchedPost = action.payload.data;
            return { ...state, [fetchedPost.id]: fetchedPost };
        case FETCH_POSTS:
            return combineState(action.payload.data);
        default:
            return state;
    }
}