import {
  GET_NEWS_STARTED,
  GET_NEWS_SUCCESS,
  GET_NEWS_FAILED,
} from 'constants/News'
import { createAction } from 'redux-actions'

export function getAllNews(dispatch) {
  dispatch(getNewsStarted())
  return {}
}

export function getNewsStarted() {
  return {
    type: GET_NEWS_STARTED,
  }
}
