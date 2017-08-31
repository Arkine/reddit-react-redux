import {
  GET_NEWS_STARTED,
  GET_NEWS_SUCCESS,
  GET_NEWS_FAILED,
} from 'constants/News'

export function posts(state = [], action) {
  console.log(action)
  switch (action.type) {
    case GET_NEWS_SUCCESS:
      return action.postsList
    case GET_NEWS_FAILED:
      return action.postsList
  }

  return state
}
