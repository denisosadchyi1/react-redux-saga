import React from "react";
import ChoosedUsersList from "../../components/ChoosedUsersList";
import {FilterInput} from "../../UI/FilterInput";
import s from './choose.module.scss';


const ChoosePage = () => {
  return (
    <div>
      <div className={s.filterForm}>
        <h1>Choose Page</h1>
        <FilterInput />
      </div>
      <ChoosedUsersList />
    </div>
  );
};

export default ChoosePage;
