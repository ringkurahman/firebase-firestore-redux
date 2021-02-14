import * as api from "../api/api"
import {
  REGISTER_USER,
  LOGIN_USER,
  LOGOUT_USER,
  ADD_MESSAGE,
  FETCH_POSTS,
} from "../constants/index"


export const registerUser = (userData) => ({
  type: REGISTER_USER,
  payload: api.registerUser(userData)
})


export const loginUser = (userData) => ({
  type: LOGIN_USER,
  payload: api.loginUser(userData)
})


export const autoSignIn = () => ({
  type: LOGIN_USER,
  payload: api.autoSignIn()
})


export const logoutUser = () => ({
  type: LOGOUT_USER,
  payload: api.logoutUser(),
})


export const addMessage = (data, user) => ({
  type: ADD_MESSAGE,
  payload: api.addMessage(data, user),
})


export const fetchPosts = () => ({
  type: FETCH_POSTS,
  payload: api.fetchPosts(),
})