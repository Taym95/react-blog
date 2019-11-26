import { useEffect, useState } from 'react';
import { getPost } from '../api'

const useFetchPostDetail = (postId: string | undefined) => {
    const [postDetail, setpostDetail] = useState({
        "id": 0xFFFF,
        "title": "",
        "datePosted": "",
        "categories": [],
        "content": ""
    });
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        getPost(postId).then(postDetail => {
            setpostDetail(postDetail);
        }).catch(error => {
            setIsError(true);
        });
    }, [postId])

    return [postDetail, isError];
}

export { useFetchPostDetail };