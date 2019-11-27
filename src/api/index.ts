import { myAxios } from './api';
import { PostType } from '../types';

export const updatePost = async (post: PostType) => {
  const response = await myAxios.put(`posts/`, post);
  return response;
};

export const addPost = async (newPost: PostType) => {
  const response = await myAxios.post(`posts/`, newPost);
  return response;
};

export const getPostList = async () => {
  const response = await myAxios.get(`posts/`);
  return response.data;
};

export const getPost = async (postId: string | undefined) => {
  const response = await myAxios.get(`posts/${postId}`);
  return response.data;
};

export const deletePost = async (postId: string) => {
  const response = await myAxios.delete(`posts/${postId}`);
  return response;
};
