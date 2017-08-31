import { combineReducers } from 'redux'
import { fetchingNewsStarted, news } from './news'

const rootReducer = combineReducers({
  fetchingNewsStarted,
  news,
})

export default rootReducer
