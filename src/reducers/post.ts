import { Reducer } from "redux";
import { produce } from "immer";
import { PostState } from "../types";
import { POSTS_LOADED, LOAD_CATEGORY } from "../actions";

const initialState: PostState = {
  posts: [],
  categories: [],
  categorizedPosts: []
};

const postReducer: Reducer<PostState> = (
  state: PostState = initialState,
  action
) => {
  switch (action.type) {
    case POSTS_LOADED:
      const allCategories = action.payload
        .map((post: any) => {
          return post.categories;
        })
        .reduce((p: any, n: any) => p.concat(n), []);
      return produce(state, draftState => {
        draftState.posts = action.payload;
        draftState.categories = [...new Set(allCategories)] as string[];
      });
    case LOAD_CATEGORY:
      return produce(state, draftState => {
        draftState.categorizedPosts = draftState.posts.filter(post =>
          post.categories.includes(action.payload)
        );
      });
    default:
      return state;
  }
};

export { postReducer };
