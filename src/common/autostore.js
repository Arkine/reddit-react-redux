import map from './map'
import dataState from './dataState'

export const defaultActions = [
  'GET_ITEM_STARTED',
  'GET_ITEM_FAILED',

  'SAVE_ITEM_STARTED',
  'SAVE_ITEM_SUCCESS',
  'SAVE_ITEM_FAILED',

  'DELETE_ITEM_STARTED',
  'DELETE_ITEM_SUCCESS',
  'DELETE_ITEM_FAILED',

  'GET_ITEMS_SUCCESS',

  'GET_ALL_ITEMS_STARTED',
  'GET_ALL_ITEMS_SUCCESS',
  'GET_ALL_ITEMS_FAILED',
]

export function createActionNames(model) {
  const name = model.name.toUpperCase()
  const out = {}

  for (const key of defaultActions) {
    const transformed = key.replace('ITEM', name)

    out[key] = transformed
  }

  return out
}

export function createActionCreators(modelType, names) {
  const result = {}

  result.getItemStarted = id => ({ type: names.GET_ITEM_STARTED, id })
  result.getItemFailed = id => ({ type: names.GET_ITEM_FAILED, id })

  result.saveItemsStarted = item => ({ type: names.SAVE_ITEMS_STARTED, item })
  result.saveItemsSuccess = item => ({ type: names.SAVE_ITEMS_SUCCESS, item })
  result.saveItemsFailed = item => ({ type: names.SAVE_ITEMS_FAILED, item })

  result.deleteItemStarted = id => ({ type: names.DELETE_ITEMS_STARTED, id })
  result.deleteItemSuccess = id => ({ type: names.DELETE_ITEMS_SUCCESS, id })
  result.deleteItemFailed = id => ({ type: names.DELETE_ITEMS_FAILED, id })

  result.getItemsSuccess = items => ({ type: names.GET_ITEMS_SUCCESS, items })

  result.getAllItemsStarted = () => ({ type: names.GET_ALL_ITEMS_STARTED })
  result.getAllItemsSuccess = () => ({ type: names.GET_ALL_ITEMS_SUCCESS })
  result.getAllItemsFailed = () => ({ type: names.GET_ALL_ITEMS_FAILED })

  result.deleteItem = id => {
    return async dispatch => {
      return false
    }
  }

  result.saveItem = item => {
    return async dispatch => {
      return false
    }
  }

  result.getAllItems = () => {
    return async dispatch => {
      dispatch(result.getAllItemsStarted())

      try {
        // const items = await.modelType.getAll(dataSource.adapter);
        const items = [
          {
            id: 12345,
            title: 'test 1',
            date: 1234123,
            excerpt: 'Blagh blagh blagh',
          },
          {
            id: 763455,
            title: 'test 2',
            date: 64234,
            excerpt: 'bleep bloop',
          },
          {
            id: 77323,
            title: 'test 3',
            date: 234234,
            excerpt: 'BEEW BEWW!',
          },
          {
            id: 34,
            title: 'test 123',
            date: 23442,
            excerpt: '1 2 3',
          },
        ]

        dispatch(result.getItemsSuccess(items))
        dispatch(result.getAllItemsSuccess(items))
      } catch (error) {
        dispatch(result.getAllItemsFailed(error.message))
      }
    }
  }

  return result
}

export function createReducer(model, names) {
  const result = {
    store(state = {}, action) {
      switch (action.type) {
        case names.GET_ITEMS_SUCCESS:
          return map.merge(state, map.fromList(action.items, 'id'))
        case names.SAVE_ITEMS_SUCCESS:
          return map.setOrMerge(state, action.item.id, action.item)
        case names.DELETE_ITEMS_SUCCESS:
          return map.delete(state, action.id)
        default:
          return state
      }
    },

    state(state = {}, action) {
      switch (action.type) {
        case names.GET_ITEM_STARTED:
          return map.set(state, action.id, dataState.Loading)
        case names.GET_ITEM_FAILED:
          return map.set(state, action.id, dataState.Failed)
        case names.GET_ITEMS_SUCCESS:
          console.log('kevan', dataState.Loaded)
          return map.merge(
            state,
            map.fromList(action.items, 'id', dataState.Loaded)
          )
        case names.DELETE_ITEMS_SUCCESS:
          return map.set(state, action.id, dataState.Deleted)
        default:
          return state
      }
    },

    allState(state = null, action) {
      switch (action.type) {
        case names.GET_ALL_ITEMS_STARTED:
          return dataState.Loading
        case names.GET_ALL_ITEMS_SUCCESS:
          return dataState.Loaded
        case names.GET_ALL_ITEMS_FAILED:
          return dataState.Failed
        default:
          return state
      }
    },

    allLoaded(state = false, action) {
      switch (action.type) {
        case names.GET_ALL_ITEMS_STARTED:
          return true
        case names.GET_ALL_ITEMS_FAILED:
          return false
        default:
          return state
      }
    },
  }

  return result
}
