import { REGISTER_USER, LOGIN_USER } from "../constants/index"


const INITIAL_STATE = {
    user: null,
    isAuth: false
}

function authReducers(state = INITIAL_STATE, action) {
  switch (action.type) {
    case REGISTER_USER:
    case LOGIN_USER:
      return { ...state, ...action.payload }

    default:
      return state
  }
}

export default authReducers
