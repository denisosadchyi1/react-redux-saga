import React from "react";
import { useDispatch, useSelector } from "react-redux";
import s from "./userListCard.module.scss";
import {chooseUser} from '../../../redux/actions/usersActions';

const UserListCard = ({ name, url, age, email, id }) => {
  const dispatch = useDispatch()
  const payload = {
    id
    // showState
  }
  return (
    <div className={`${s.userCard}`}>
      <div className="card-body">
        <div className="row">
          <div className="col-6 col-sm-4 pb-4">
            <img src={url} alt="" />
          </div>
          <div className="col-6 col-sm-7 pb-2">
            <label htmlFor="name">Name</label>
            <h5 id="name">
              {name.title} {name.first} {name.last}
            </h5>
          </div>
          <div className="col-6 col-sm-4">
            <label htmlFor="age">Age</label>
            <h4 id="age">{age}</h4>
          </div>
          <div className="col-6 col-sm-2">
            <label htmlFor="email">Email</label>
            <h6 id="email">{email}</h6>
          </div>
        </div>
      </div>
      <div className={s.userCheckButton}>
        <button 
          className="btn btn-warning"
          onClick={() => dispatch(chooseUser(payload))}>отметить пользователя</button>
      </div>
    </div>
  );
};

export default UserListCard;
