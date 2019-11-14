import React, { useEffect, useState } from 'react';
import { axiosWithAuth } from '../data/axiosWithAuth';

const Users = () => {
  const [usersArr, setUsersArr] = useState([]);

  const getUsers = async () => {
    try {
      const response = await axiosWithAuth().get('users');
      setUsersArr(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div>
      {usersArr.map(user => {
        return (
          <>
            <p>id: {user.id}</p>
            <p>username: {user.username}</p>
            <p>password: {user.password}</p>
          </>
        );
      })}
    </div>
  );
};

export default Users;