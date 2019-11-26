import React, { memo } from 'react';
import { Button, Icon, Item } from 'semantic-ui-react';
import { MyLink } from './MyLink';
import { PostType } from '../types';

const MemoizedPostCard = (post: PostType) => {
  const postLink = `/post/${post.id}`;
  return (
    <Item>
      {/*I am using a random image for all post*/}
      <Item.Image src='https://www.blogtyrant.com/wp-content/uploads/2017/02/how-to-write-a-good-blog-post.png' />
      <Item.Content>
        <Item.Header as='a'>{post.title}</Item.Header>
        <Item.Description>{post.content.substring(0, 30)}...</Item.Description>
        <Item.Extra>
          <Button floated='right' color='red'>Delete!</Button>
        </Item.Extra>
        <Item.Extra>
          <Button primary floated='right'>
            <MyLink to={postLink}> Read more <Icon name='angle right' /></MyLink>
          </Button>
        </Item.Extra>
      </Item.Content>
    </Item>
  )
}
// Performance: 
// We can speed up the component re-rendring process 
// by using React.memo(), wih will memoized our component
const PostCard = memo(MemoizedPostCard);

export { PostCard };
