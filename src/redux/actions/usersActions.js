import { FETCHED_USERS, REQUESTED_USERS, REQUESTED_USERS_SUCCES, REQUESTED_USERS_ERROR, LOAD_USERS, REQUESTED_LOAD_USERS, REQUESTED_USERS_LOAD_SUCCES, REQUESTED_USERS_LOAD_ERROR, REQUESTED_USERS_LOADED, CHOOSE_USER, USERS_NAME_FILTER, USERS_SURNAME_FILTER } from "../types/actionsType";

export const requestUsers = () => {
  return {
    type: REQUESTED_USERS 
  }
}
export const requestUsersSuccess = (data) => {
  return {
    type: REQUESTED_USERS_SUCCES,
    payload: data.results
  }
}
export const requestUsersError = () => {
  return {
    type: REQUESTED_USERS_ERROR 
  }
}

export const fetchUsers = () => {
  return { 
    type: FETCHED_USERS 
  }
};

export const loadUsers = () => {
  return {
    type: LOAD_USERS
  }
}

export const requestLoadUsers = () => {
  return {
    type: REQUESTED_LOAD_USERS 
  }
}
export const requestLoadUsersSuccess = (data) => {
  return {
    type: REQUESTED_USERS_LOAD_SUCCES,
    payload: data.results
  }
}

export const requestLoadUsersError = () => {
  return {
    type: REQUESTED_USERS_LOAD_ERROR 
  }
}

export const putLoadedUsers = (data) => {
  return {
    type: REQUESTED_USERS_LOADED,
    payload: data.results
  }
}

export const chooseUser = (id) => {
  return {
    type: CHOOSE_USER,
    payload: id
  }
}

export const firstNameFilter = (text) => {
  return {
    type: USERS_NAME_FILTER,
    payload: text
  }
}

export const surnameNameFilter = (text) => {
  return {
    type: USERS_SURNAME_FILTER,
    payload: text
  }
}