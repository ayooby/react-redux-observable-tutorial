import { combineReducers } from 'redux'
import {
  RECEIVE_LISTS,
  REQUEST_LISTS
} from '../actions'
import { Maybe } from '../data/Maybe'


const lists = (state = {
  isFetching: false,
  items: Maybe.Nothing,
}, action) => {
  switch (action.type) {
    case REQUEST_LISTS:
      return {
        ...state,
        isFetching: true,
      }
    case RECEIVE_LISTS:
      const { lists } = action
      return {
        ...state,
        isFetching: false,
        items: lists.length === 0 ? Maybe.Empty : Maybe.Just(lists),
      }
    default:
      return state
  }
}

const rootReducer = combineReducers({
  lists,
})

export default rootReducer
