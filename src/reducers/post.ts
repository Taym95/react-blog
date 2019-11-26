
import {
    PostState,
    PostActionTypes,
    LOAD_POSTS,
    LOAD_POST,
    POSTS_LOADED,
    ADD_POST,
    DELETE_POST
} from '../types';


const initialState: PostState = {
    posts: [],
    loading: false
}

export function postReducer(
    state = initialState,
    action: PostActionTypes
): PostState {
    switch (action.type) {
        case LOAD_POSTS:
            return state;
        case POSTS_LOADED:
            return state;
        default:
            return state
    }
}