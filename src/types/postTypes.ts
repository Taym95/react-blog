import { LOAD_POSTS, POSTS_LOADED, LOAD_POST, ADD_POST, DELETE_POST } from '../actions';

// export interface Category {
//     name: string;
// }

export interface PostType {
    id: string;
    title: string;
    content: string;
    datePosted: string;
    categories: string[];
}

export interface PostState {
    posts: PostType[];
    loading: boolean;
}

export interface ApplicationState {
    posts: PostState;
}

interface LoadPostsAction {
    type: typeof LOAD_POSTS;
}

interface PostsLoadedAction {
    type: typeof POSTS_LOADED;
}

interface LoadPostAction {
    type: typeof LOAD_POST;
}

interface AddPostAction {
    type: typeof ADD_POST;
    payload: PostType;
}

interface DeletePostAction {
    type: typeof DELETE_POST;
}

export type PostActionTypes = LoadPostsAction | PostsLoadedAction | LoadPostAction | AddPostAction | DeletePostAction;
