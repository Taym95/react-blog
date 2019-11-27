
import { put, take, all, fork } from 'redux-saga/effects';
import {
    loadPostsAction,
    postsLoadedAction,
    DELETE_POST,
    LOAD_POSTS,
    ADD_POST,
    UPDATE_POST
} from '../actions';
import {
    getPostList,
    deletePost,
    updatePost
    , addPost
} from '../api';

function* updatePostSaga() {
    while (true) {
        const { payload } = yield take(UPDATE_POST);
        yield updatePost(payload);
        yield put(loadPostsAction());
    }
}

function* addPostSaga() {
    while (true) {
        const { payload } = yield take(ADD_POST);
        yield addPost(payload);
        yield put(loadPostsAction());
    }
}

function* getPostSaga() {
    while (true) {
        yield take(LOAD_POSTS);
        const postList = yield getPostList();
        yield put(postsLoadedAction(postList));
    }
}

function* deletePostSaga() {
    while (true) {
        const { payload } = yield take(DELETE_POST);
        yield deletePost(payload);
        yield put(loadPostsAction());
    }
}


export function* mySaga() {
    yield all([
        fork(getPostSaga),
        fork(deletePostSaga),
        fork(addPostSaga),
        fork(updatePostSaga)
    ])
}