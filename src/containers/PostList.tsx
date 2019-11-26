import React from 'react';
import { Item } from 'semantic-ui-react';
import { PostCard, MyHeader } from '../components';

const PostList = () => {
    const data = [{ "id": 1, "title": "title1", "content": "content1" }, { "id": 2, "title": "title2", "content": "content2" }];
    const posts = data.map((d) => <PostCard key={d.title} {...d} />);
    return (
        <>
            <MyHeader />
            <Item.Group divided>{posts}
            </Item.Group>
        </>
    )
}

export { PostList };
