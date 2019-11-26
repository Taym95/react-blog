import React from 'react';
import { Item } from 'semantic-ui-react';
import { Post } from './Post';

const PostList = () => {
    const data = [{ "title": "title1", "content": "content1" }, { "title": "title2", "content": "content2" }];
    const ListItems = data.map((d) => <Post key={d.title} {...d} />);
    return <Item.Group divided>{ListItems}</Item.Group>
}

export { PostList };
