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
    store(state = [], action) {
      switch (action.type) {
        case names.GET_ITEMS_SUCCESS:
        case names.SAVE_ITEMS_SUCCESS:
        case names.DELETE_ITEMS_SUCCESS:
        default:
          return state
      }
    },

    state(state = [], action) {
      switch (action.type) {
        case names.GET_ITEM_STARTED:
        case names.GET_ITEM_FAILED:
        case names.GET_ITEMS_SUCCESS:
          console.log('ACTION ITEMS', action)
          return action.items
        case names.DELETE_ITEMS_SUCCESS:
        default:
          return state
      }
    },

    allState(state = [], action) {
      switch (action.type) {
        case names.GET_ALL_ITEMS_STARTED:
        case names.GET_ALL_ITEMS_SUCCESS:
        case names.GET_ALL_ITEMS_FAILED:
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
