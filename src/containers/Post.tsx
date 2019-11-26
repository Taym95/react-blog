import React from 'react';
import {
    useParams
} from "react-router-dom";
import { MyHeader } from '../components';

const Post = () => {
    let { id } = useParams();

    return (
        <>
            <MyHeader />
            <div>
                {id}
            </div>
        </>
    )
}

export { Post };