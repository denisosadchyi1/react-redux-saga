import { combineReducers } from "redux"
import { REQUESTED_USERS, REQUESTED_USERS_ERROR, REQUESTED_USERS_SUCCES, REQUESTED_LOAD_USERS, REQUESTED_USERS_LOAD_SUCCES, REQUESTED_USERS_LOAD_ERROR, REQUESTED_USERS_LOADED, CHOOSE_USER, USERS_NAME_FILTER, USERS_SURNAME_FILTER } from "../types/actionsType"

//This reducer are trial.

const usersState = {
  users: [],
  loading: false,
  error: false,
  chooseUser: [],
  filterUsers: []
}

//Test !!! --- !!! Test Reducer

//Переписать логіку фільтрації!!

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
        filterUsers: action.payload,
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
        filterUsers: [...state.users, ...action.payload],
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
        let tmpsStyles = state.users.map(user => {
          if(user.id.value === action.payload) {
            user = {...user, styles: true}
          }
          return user
        });
        console.log(tmpsStyles)
        return {
          ...state,
          users: tmpsStyles,
          chooseUser: [...state.chooseUser, ...state.users.filter(user => user.id.value === action.payload)],
        }
      }
    case USERS_NAME_FILTER:
      let index = action.payload.split('').length - 1
      console.log(index)
      console.log(action.payload)
      return {
        ...state,
        filterUsers: [...state.users.filter(user => user.name.first.toLowerCase().includes(action.payload.toLowerCase()))]
      }
    case USERS_SURNAME_FILTER:
      console.log(action.payload)
      return {
        ...state,
        filterUsers: [...state.users.filter(user => user.name.last.toLowerCase().includes(action.payload.toLowerCase()))]
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
