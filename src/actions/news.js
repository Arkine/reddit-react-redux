import {
  GET_NEWS_STARTED,
  GET_NEWS_SUCCESS,
  GET_NEWS_FAILED,
} from 'constants/News'
import { createAction } from 'redux-actions'

export function getAllNews() {
  console.log('get all news called')

  try {
  } catch (error) {}
}

export function getNewsSuccess(items) {
  return {
    type: GET_NEWS_SUCCESS,
    items: [1, 2, 3],
  }
}

export function getNewsFailed() {
  return {
    type: GET_NEWS_FAILED,
  }
}

export function getNewsStarted() {
  return {
    type: GET_NEWS_STARTED,
    loading: true,
  }
}
