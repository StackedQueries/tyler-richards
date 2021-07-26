import { combineReducers } from 'redux'

import posts from './posts'
import auth from './auth'
import images from './images'
import tags from './tags'

export const reducers = combineReducers({ posts, auth, images, tags })
