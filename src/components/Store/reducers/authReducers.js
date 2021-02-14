import {
  REGISTER_USER,
  LOGIN_USER,
  LOGOUT_USER,
  ADD_MESSAGE,
  FETCH_POSTS,
} from "../constants/index"


const INITIAL_STATE = {
    user: null,
    isAuth: false
}

function authReducers(state = INITIAL_STATE, action) {
  switch (action.type) {
    case REGISTER_USER:
    case LOGIN_USER:
      return { ...state, ...action.payload }
    case ADD_MESSAGE:
      return { ...state, lastMsgAdded: action.payload }
    case FETCH_POSTS:
      return { ...state, ...action.payload }
    case LOGOUT_USER:
      return { ...state, user: null, isAuth: false }

    default:
      return state
  }
}

export default authReducers
