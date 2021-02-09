import { createStore, applyMiddleware, compose } from 'redux'
import promiseMiddleware from 'redux-promise'
import { combineReducers } from "redux"
import authReducers from "./reducers/authReducers"


const rootReducer = combineReducers({
  auth: authReducers,
})


const ReduxStore = () => {
    const composeEnhacers =
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
    
    const store = createStore(
      rootReducer,
      composeEnhacers(applyMiddleware(promiseMiddleware))
    )

    return store
}

export default ReduxStore