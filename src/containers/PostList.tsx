import React from 'react';
import { connect } from 'react-redux';
import { Item } from 'semantic-ui-react';
import { PostCard, MyHeader, Loading } from '../components';
import { useFetching } from '../hooks';
import { loadPostsAction } from '../actions';
import { ApplicationState, PostType } from '../types';
import { MyModal } from '../components';

interface IProps {
    posts: PostType[]
}

const PostListContainers: React.FC<IProps> = ({ posts }) => {
    useFetching(loadPostsAction);
    const postsItems = posts.map((post) => <PostCard key={post.id} {...post} />);
    return (
        <>
            <MyHeader />
            <MyModal />
            <Item.Group divided>
                {posts.length === 0 ? <Loading /> : postsItems}
            </Item.Group>
            <MyModal />
        </>
    )
}

const mapStateToProps = (state: ApplicationState) => state.posts;

const PostList = connect(mapStateToProps)(PostListContainers);

export { PostList };
