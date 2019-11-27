import { PostType } from '../types';

// actions
export const LOAD_POSTS = 'LOAD_POSTS';
export const LOAD_POST = 'LOAD_POST';
export const POSTS_LOADED = 'POSTS_LOADED';
export const ADD_POST = 'ADD_POST';
export const UPDATE_POST = 'UPDATE_POST';
export const DELETE_POST = 'DELETE_POST';

export const loadPostsAction = () => ({ type: LOAD_POSTS });

export const postsLoadedAction = (posts: PostType[]) => ({ type: POSTS_LOADED, payload: posts });

export const loadPostAction = (post: PostType) => ({ type: LOAD_POST, payload: post });

export const addPostAction = (post: PostType) => ({ type: ADD_POST, payload: post });

export const updatePostAction = (post: PostType) => ({ type: UPDATE_POST, payload: post });

export const deletePostAction = (id: string) => ({ type: DELETE_POST, payload: id });
