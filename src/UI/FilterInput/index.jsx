import React from "react";
import { useDispatch } from "react-redux";
import s from "./filter-input.module.scss";
import {firstNameFilter, surnameNameFilter} from '../../redux/actions/usersActions';

export const FilterInput = () => {

  const dispatch = useDispatch()

  const filterName = (text) => {
    dispatch(firstNameFilter(text))
  }

  const filterSurname = (text) => {
    dispatch(surnameNameFilter(text))
  }

  return (
    <div className={`input-group ${s.filterWrapper}`}>
      <span className="input-group-text">First and last name</span>
      <input 
        type="text" 
        aria-label="First name" 
        className="form-control"
        onChange={(e) => filterName(e.target.value)} />
      <input 
        type="text" aria-label="Last name" 
        className="form-control"
        onChange={(e) => filterSurname(e.target.value)} />
    </div>
  );
};
