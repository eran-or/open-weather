
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import weather from './reducers/weather'
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  //Store cretion
  const store = createStore(
    weather,
    composeEnhancers(applyMiddleware(thunk))
  )
  return store
}