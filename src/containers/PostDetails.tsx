import React from 'react';
import {
    useParams
} from "react-router-dom";
import { MyHeader, Loading, Post } from '../components';
import { PostType } from '../types';
import { useFetchPostDetail } from '../hooks';

const PostDetails = () => {
    let { id } = useParams();
    // I wanted to use react hook to fetch data here,
    // just to show that we can manage state without redux and saga.
    const [postDetail, isError] = useFetchPostDetail(id);

    if (isError) {
        return <>
            <MyHeader />
            <div>Post not Found!</div>
        </>
    } else {
        return <>
            <MyHeader />
            {postDetail ? <Post {...postDetail as PostType} /> : <Loading />}
        </>
    }
}

export { PostDetails };