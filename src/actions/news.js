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
        posts: [],
        error: {
          message: '',
          value: false,
        },
        loading: false,
      },
    }
  } catch (error) {
    return {
      type: GET_NEWS_FAILED,
      postsList: {
        posts: [],
        error: {
          message: error,
          value: true,
        },
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
