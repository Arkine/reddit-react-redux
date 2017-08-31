import {
  GET_NEWS_STARTED,
  GET_NEWS_SUCCESS,
  GET_NEWS_FAILED,
} from 'constants/News'

export function fetchingNewsStarted(state = false, action) {
  switch (action.type) {
    case GET_NEWS_STARTED:
      return true
  }

  return state
}

export function news(state = [], action) {
  switch (action.type) {
    case GET_NEWS_SUCCESS:
      return [...action.payload]
  }

  return state
}
