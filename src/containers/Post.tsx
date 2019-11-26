import React from 'react';
import { PostCard } from '../components';
import { PostType } from '../types';

const Post = (post: PostType) => {
    return (
        <PostCard  {...post} />
    )
}

export { Post };