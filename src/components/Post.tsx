import React from 'react';
import { Card, Image } from 'semantic-ui-react'
import { PostType } from '../types';
import { MyModal } from '../components';

const Post = (post: PostType) => {
    return (
        <Card fluid>
            {/*I am using a random image for all post*/}
            <Image src='https://www.blogtyrant.com/wp-content/uploads/2017/02/how-to-write-a-good-blog-post.png' />
            <Card.Content>
                <Card.Header>{post ? post.title : ""}</Card.Header>
                <Card.Meta>{post ? post.datePosted : ""}</Card.Meta>
                <Card.Description>
                    {post ? post.content : ""}
                </Card.Description>
            </Card.Content>
            <MyModal post={post} />
        </Card>
    )
}


export { Post };
