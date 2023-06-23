import React from 'react';
import './UserList.css';
const UserList = ({ users, deleteUser, setEditing, setCurrentUser }) => {
  const handleEditUser = (user) => {
    setEditing(true);
    setCurrentUser(user);
  };

  const handleDeleteUser = (userId) => {
    deleteUser(userId);
  };

  return (
    <div className="user-list">
      {users.map((user) => (
        <div className="user-card" key={user.id}>
          <h3>{user.name}</h3>
          <p>Email: {user.email}</p>
          <p>Phone: {user.phone}</p>
          <button onClick={() => handleEditUser(user)}>Edit</button>
          <button onClick={() => handleDeleteUser(user.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default UserList;
