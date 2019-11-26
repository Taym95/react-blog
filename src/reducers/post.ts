
import { Reducer } from 'redux';
import { produce } from 'immer';
import {
    PostState,
} from '../types';
import {
    POSTS_LOADED,
} from '../actions';


const initialState: PostState = {
    posts: [],
    loading: false
}

const postReducer: Reducer<PostState> = (state: PostState = initialState, action) => {
    switch (action.type) {
        case POSTS_LOADED:
            const nextState = produce(state, draftState => {
                draftState.posts = action.payload
            })
            return nextState;
        default:
            return state
    }
};


export { postReducer };