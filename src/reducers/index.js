import { combineReducers } from 'redux'
import { fetchingNewsStarted, postsList } from './news'

const rootReducer = combineReducers({
  fetchingNewsStarted,
  postsList,
})

export default rootReducer
