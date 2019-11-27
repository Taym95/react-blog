import { expectSaga } from 'redux-saga-test-plan';
import { getPostsSaga, deletePostSaga } from '../postSaga';
import {
  LOAD_POSTS,
  POSTS_LOADED,
  DELETE_POST
} from '../../actions';


it('should fetch posts when LOAD_POSTS action is dispatched', () => {
  const mochPosts = [{
    id: '0',
    title: 'Test 1',
    datePosted: '',
    categories: [],
    content: '',
  }, {
    id: '1',
    title: 'Test 2',
    datePosted: '',
    categories: [],
    content: '',
  }];

  const postsApi = {
    fetchPosts: () => (mochPosts),
  };

  return expectSaga(getPostsSaga, postsApi.fetchPosts)
    .dispatch({
      type: LOAD_POSTS,
    })
    .put({ type: POSTS_LOADED, payload: mochPosts })
    .silentRun();
});

it('should delete post when DELETE_POST and call loadPostsAction', () => {
  const mochPosts = [{
    id: '0',
    title: 'Test 1',
    datePosted: '',
    categories: [],
    content: '',
  }, {
    id: '1',
    title: 'Test 2',
    datePosted: '',
    categories: [],
    content: '',
  }];

  const postsApi = {
    deletPost: (id: string) => (mochPosts.filter((post) => post.id != id)),
  };

  return expectSaga(deletePostSaga, postsApi.deletPost)
    .dispatch({
      type: DELETE_POST,
    })
    .put({ type: LOAD_POSTS })
    .silentRun();
});