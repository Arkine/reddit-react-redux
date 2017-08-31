import { combineReducers } from 'redux'
import { posts } from './news'

const rootReducer = combineReducers({
  posts,
})

export default rootReducer
