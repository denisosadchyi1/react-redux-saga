import { combineReducers } from "redux"
import { REQUESTED_USERS, REQUESTED_USERS_ERROR, REQUESTED_USERS_SUCCES, REQUESTED_LOAD_USERS, REQUESTED_USERS_LOAD_SUCCES, REQUESTED_USERS_LOAD_ERROR, REQUESTED_USERS_LOADED, CHOOSE_USER } from "../types/actionsType"

//This reducer are trial.

const usersState = {
  users: [],
  loading: false,
  error: false,
  chooseUser: [],
}

//Test !!! --- !!! Test Reducer

export const showUsersReducer = (state = usersState, action) => {
  switch(action.type){
    case REQUESTED_USERS:
      return {
        ...state,
        users: [],
        loading: true,
        error: false
      }
    case REQUESTED_USERS_SUCCES:
      return {
        ...state,
        users: action.payload,
        loading: false,
        error: false
      }
    case REQUESTED_USERS_ERROR:
      console.log('tess')
      return {
        ...state,
        users: [],
        loading: false,
        error: true
      }
    case REQUESTED_USERS_LOADED:
      return {
        ...state,
        users: [...state.users, ...action.payload],
        loading: false,
        error: false
      }
    case CHOOSE_USER:
      if(state.chooseUser.filter(user => user.id.value === action.payload).length !== 0) {
        console.log('This user add now')
        return {
          ...state
        }
      } else {
        return {
          ...state,
          chooseUser: [...state.chooseUser, ...state.users.filter(user => user.id.value === action.payload)],
        }
      }
  }
  return state
}
//Test rewrite 

export const loadUsersReducer = (state = usersState, action) => {
  switch(action.type){
    case REQUESTED_LOAD_USERS:
      return {
        ...state,
        users: [],
        loading: true,
        error: false
      }
    case REQUESTED_USERS_LOAD_SUCCES:
      return {
        ...state,
        users: action.payload,
        loading: false,
        error: false
      }
    case REQUESTED_USERS_LOAD_ERROR:
      return {
        ...state,
        users: [],
        loading: false,
        error: true
      }
  }
  return state
}
//Test 

export const usersReducer = combineReducers({
  showUsers: showUsersReducer,
  loadUsers: loadUsersReducer
});
