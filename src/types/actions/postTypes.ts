export interface Category {
    name: string
}

export interface PostType {
    title: string
    content: string
    // datePosted: Date
    // categories: Category[]
}

export interface PostState {
    posts: PostType[],
    loading: boolean
}

// actions
export const LOAD_POSTS = 'LOAD_POSTS';
export const LOAD_POST = 'LOAD_POST';
export const POSTS_LOADED = 'POSTS_LOADED';
export const ADD_POST = 'ADD_POST';
export const DELETE_POST = 'DELETE_POST';

interface LoadPostsAction {
    type: typeof LOAD_POSTS
}

interface PostsLoadedAction {
    type: typeof POSTS_LOADED
}

interface LoadPostAction {
    type: typeof LOAD_POST
}

interface AddPostAction {
    type: typeof ADD_POST
    payload: PostType
}

interface DeletePostAction {
    type: typeof DELETE_POST
}

export type PostActionTypes = LoadPostsAction |
    PostsLoadedAction |
    LoadPostAction | AddPostAction
    | DeletePostAction;

