import * as api from "../api/api"
import { REGISTER_USER, LOGIN_USER } from "../constants/index"


export const registerUser = (userData) => ({
  type: REGISTER_USER,
  payload: api.registerUser(userData),
})


export const loginUser = (userData) => ({
  type: LOGIN_USER,
  payload: api.loginUser(userData),
})