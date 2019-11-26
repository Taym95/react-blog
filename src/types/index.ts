import {
    PostState as State,
    PostActionTypes as Actions,
    PostType as Post
} from './actions/postTypes'

export type PostState = State;
export type PostActionTypes = Actions;
export type PostType = Post;

export {
    LOAD_POST,
    LOAD_POSTS,
    POSTS_LOADED,
    DELETE_POST,
    ADD_POST,
} from "./actions/postTypes";