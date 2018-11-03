import { combineReducers } from 'redux'
import {
  RECEIVE_LISTS,
  REQUEST_LISTS
} from '../actions'


const lists = (state = {
  isFetching: false,
  items: [],
}, action) => {
  switch (action.type) {
    case REQUEST_LISTS:
      return {
        ...state,
        isFetching: true,
      }
    case RECEIVE_LISTS:
      return {
        ...state,
        isFetching: false,
        items: action.lists,
      }
    default:
      return state
  }
}

const rootReducer = combineReducers({
  lists,
})

export default rootReducer
