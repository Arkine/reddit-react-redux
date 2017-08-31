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

export function postsList(state = [], action) {
  console.log(action)
  switch (action.type) {
    case GET_NEWS_SUCCESS:
      return action.postsList
    case GET_NEWS_FAILED:
      return action.postsList
  }

  return state
}
