import {
  GET_NEWS_STARTED,
  GET_NEWS_SUCCESS,
  GET_NEWS_FAILED,
} from 'constants/News'
import { createAction } from 'redux-actions'

export function getAllNews() {
  console.log('get all news called')

  try {
    return {
      type: GET_NEWS_SUCCESS,
      postsList: {
        items: [1, 2, 3],
        error: {
          message: '',
          value: true,
        },
        loading: false,
      },
    }
  } catch (error) {
    return {
      type: GET_NEWS_FAILED,
      postsList: {
        items: [],
        error: {
          message: error,
          value: true,
        },
        loading: false,
      },
    }
  }
}

export function getNewsStarted() {
  return {
    type: GET_NEWS_STARTED,
    loading: true,
  }
}
