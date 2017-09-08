import { combineReducers } from 'redux'

import { postActionNames } from 'actions/posts'
import { createReducer } from 'common/autostore'

import Post from 'models/Post'

const posts = createReducer(Post, postActionNames)

export default combineReducers(posts)
