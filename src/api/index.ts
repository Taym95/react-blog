import { myAxios } from './api';


export const getPostList = async () => {
    const response = await myAxios.get(`posts/`);
    return response.data;
};

export const getPost = async (postId: string | undefined) => {
    const response = await myAxios.get(`posts/${postId}`);
    return response.data;
};