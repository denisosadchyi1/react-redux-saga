import React from "react";
import { useDispatch, useSelector } from "react-redux";
import s from "./users.module.scss";
import {loadUsers} from '../../redux/actions/usersActions';
import UserListCard from "./UserListCard";

const UserList = () => {
  const dispatch = useDispatch();
  const loadingShowUsers = useSelector(state => state.user.showUsers.loading)
  const users = useSelector((state) => state.user.showUsers.users);
  const chooseUser = useSelector((state) => state.user.showUsers.chooseUser);
  const loadingLoadedUsers = useSelector(state => state.user.loadUsers.loading)
  if(loadingShowUsers) {
    return <div className={s.loadingWrapper}><h2>Loading....</h2> </div>
  } else {
    return (
      <div>
        <h1>User List</h1>
        <div className="row">
          {users.map(user => (
            <div className="col-sm-4 mb-4" key={user.id.value + Math.random()}>
              <UserListCard name={user.name} gender={user.gender} email={user.email} age={user.dob.age} url={user.picture.medium} id={user.id.value} styles={user.styles} />
            </div>
          ) )}
        </div>
        {loadingLoadedUsers ? <div className={s.loadingWrapper}><h2>Loading....</h2> </div> : ''}
        <div className={s.loadButton}>
          <button
            className="btn btn-primary"
            onClick={() => dispatch(loadUsers())}
          >
            Load more users
          </button>
        </div>
      </div>
    );
  }
  }

export default UserList;
