import React from 'react';
import { connect } from 'react-redux';
import { Item } from 'semantic-ui-react';
import { PostCard, MyHeader, Loading, MyModal } from '../components';
import { Categories } from '../containers';
import { useFetching } from '../hooks';
import { loadPostsAction } from '../actions';
import { ApplicationState, PostType } from '../types';

interface Props {
  posts: PostType[];
  categorizedPosts: PostType[];
}

const PostListContainers: React.FC<Props> = ({ posts, categorizedPosts }) => {
  useFetching(loadPostsAction);
  const postsItems =
    categorizedPosts.length === 0
      ? posts.map(post => <PostCard key={post.id} {...post} />)
      : categorizedPosts.map(post => <PostCard key={post.id} {...post} />);
  return (
    <>
      <MyHeader />
      <MyModal />
      <Categories />
      <Item.Group divided>
        {posts.length === 0 ? <Loading /> : postsItems}
      </Item.Group>
    </>
  );
};

function mapStateToProps(state: ApplicationState) {
  return {
    posts: state.posts.posts,
    categorizedPosts: state.posts.categorizedPosts
  };
}
const PostList = connect(mapStateToProps)(PostListContainers);

export { PostList };
