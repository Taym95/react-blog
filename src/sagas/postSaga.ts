import { put, take, all, fork, call, takeLatest } from "redux-saga/effects";
import {
  loadPostsAction,
  postsLoadedAction,
  DELETE_POST,
  LOAD_POSTS,
  ADD_POST,
  UPDATE_POST,
  FAIL_LOADING_POSTS,
  FAIL_DELETE_POST
} from "../actions";
import { getPostList, deletePost, updatePost, addPost } from "../api";

export function* updatePostSaga() {
  while (true) {
    const { payload } = yield take(UPDATE_POST);
    yield updatePost(payload);
    yield put(loadPostsAction());
  }
}

export function* addPostSaga() {
  while (true) {
    const { payload } = yield take(ADD_POST);
    yield addPost(payload);
    yield put(loadPostsAction());
  }
}

export function* getPostsSaga(fakeGetPosts?: any) {
  // PS: we can use takeLatest for more cancelation w predectibality
  try {
    const postList = yield fakeGetPosts
      ? call(fakeGetPosts)
      : call(getPostList);
    yield takeLatest(LOAD_POSTS, postList);
    yield put(postsLoadedAction(postList));
  } catch (e) {
    yield put({ type: FAIL_LOADING_POSTS, error: e });
  }
}

export function* deletePostSaga(fakeDeletPost?: any) {
  while (true) {
    try {
      const { payload } = yield take(DELETE_POST);
      yield fakeDeletPost ? call(fakeDeletPost) : call(deletePost, payload);
      yield put(loadPostsAction());
    } catch (e) {
      yield put({ type: FAIL_DELETE_POST, error: e });
    }
  }
}

export function* mySaga() {
  yield all([
    fork(getPostsSaga),
    fork(deletePostSaga),
    fork(addPostSaga),
    fork(updatePostSaga)
  ]);
}
