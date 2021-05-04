import { combineReducers } from 'redux';

import posts from './posts';
import auth from './auth';
import images from './images'

export const reducers = combineReducers({ posts, auth, images });
