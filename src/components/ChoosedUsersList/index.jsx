import React from 'react';
import {useSelector} from 'react-redux';
import ChoosedUsersListCard from './ChoosedUsersListCard';

const ChoosedUsersList = () => {
  const choosedUsers = useSelector((state) => state.user.showUsers.chooseUser);
  return (
    <div className="row">
    {choosedUsers.map(user => (
      <div className="col-sm-4 mb-4" key={user.id.value + Math.random()}>
        <ChoosedUsersListCard name={user.name} gender={user.gender} email={user.email} age={user.dob.age} url={user.picture.medium} id={user.id.value} />
      </div>
    ) )}
    </div>
  )
}

export default ChoosedUsersList;