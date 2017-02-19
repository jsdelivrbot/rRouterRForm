import { combineReducers } from 'redux';
import PostsReducer from './reducer_posts';

const rootReducer = combineReducers({
  //state: (state = {}) => state  // default just passes through state
  posts: PostsReducer
});

export default rootReducer;
