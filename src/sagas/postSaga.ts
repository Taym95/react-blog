
import { put, take } from 'redux-saga/effects';
import { loadPostsAction, postsLoadedAction } from '../actions';
import { getPostList } from '../api';

export function* postSaga() {
    while (true) {
        yield take(loadPostsAction);
        const postList = yield getPostList();
        yield put(postsLoadedAction(postList));
    }
}