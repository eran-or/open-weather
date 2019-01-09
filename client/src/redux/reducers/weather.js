import update from 'immutability-helper'
import { REQUEST_WEATHER, RECEIVE_WEATHER } from '../actions/actionTypes'

const defaultState = {
  weather:[]
}
export default (state = defaultState, action) => {
  switch (action.type) {
    case REQUEST_WEATHER:
      return update(state, {
        isFetching: {$set:true},
        didInvalidate: {$set:false}
      })
    case RECEIVE_WEATHER:  
      return update(state, {
        weather: {$set:action.weather},
        isFetching: {$set:false},
        didInvalidate: {$set:false},
        lastUpdated: {$set:action.receivedAt}
      })
    default:
      return state
  }
}