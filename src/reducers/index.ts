import { combineReducers, Reducer } from 'redux';

import { postReducer } from './post';
import { ApplicationState } from '../types';

const reducers: Reducer<ApplicationState> = combineReducers<ApplicationState>({
  posts: postReducer
});

export { reducers };
