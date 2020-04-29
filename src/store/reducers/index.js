import { combineReducers } from 'redux';
import posts from './posts.reducers';
const reducers = combineReducers({
    posts
});

export default reducers;