import { combineReducers } from "redux"
import { REQUESTED_USERS, REQUESTED_USERS_ERROR, REQUESTED_USERS_SUCCES, REQUESTED_LOAD_USERS, REQUESTED_USERS_LOAD_SUCCES, REQUESTED_USERS_LOAD_ERROR, REQUESTED_USERS_LOADED, CHOOSE_USER } from "../types/actionsType"

const showUsersState = {
  users: [],
  loading: false,
  error: false
}

export const showUsersReducer = (state = showUsersState, action) => {
  switch(action.type){
    case REQUESTED_USERS:
      return {
        users: [],
        loading: true,
        error: false
      }
    case REQUESTED_USERS_SUCCES:
      return {
        users: action.payload,
        loading: false,
        error: false
      }
    case REQUESTED_USERS_ERROR:
      console.log('tess')
      return {
        users: [],
        loading: false,
        error: true
      }
    case REQUESTED_USERS_LOADED:
      // console.log(action.payload)
      return {
        users: [...state.users, ...action.payload],
        loading: false,
        error: false
      }

  }
  return state
}

const loadUsersState = {
  users: [],
  loading: false,
  error: false
}

export const loadUsersReducer = (state = loadUsersState, action) => {
  switch(action.type){
    case REQUESTED_LOAD_USERS:
      return {
        users: [],
        loading: true,
        error: false
      }
    case REQUESTED_USERS_LOAD_SUCCES:
      return {
        users: action.payload,
        loading: false,
        error: false
      }
    case REQUESTED_USERS_LOAD_ERROR:
      return {
        users: [],
        loading: false,
        error: true
      }
  }
  return state
}

const chooseUserState = {
  chooseUsers: []
}

export const chooseUserReducer = (state = chooseUserState, action) => {
  switch(action.type) {
    case CHOOSE_USER:
      if(action.payload.id !== null) {
        return {
          chooseUsers: [...state.chooseUsers]
        }
      }
  }
  return state
}

export const usersReducer = combineReducers({
  showUsers: showUsersReducer,
  loadUsers: loadUsersReducer,
  chooseUser: chooseUserReducer,
});
