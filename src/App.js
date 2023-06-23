import React, { useState } from 'react';
import AddUserForm from './components/AddUserForm';
import UserList from './components/UserList';
import EditUserForm from './components/EditUserForm';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);

  const addUser = (newUser) => {
    setUsers([...users, newUser]);
  };

  const deleteUser = (userId) => {
    setUsers(users.filter((user) => user.id !== userId));
  };

  const updateUser = (updatedUser) => {
    setUsers(users.map((user) => (user.id === updatedUser.id ? updatedUser : user)));
  };

  const [editing, setEditing] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  return (
    <div className="container">
      <h1>User Management</h1>
      {editing ? (
        <EditUserForm
          users={users}
          setEditing={setEditing}
          currentUser={currentUser}
          setCurrentUser={setCurrentUser}
          updateUser={updateUser}
        />
      ) : (
        <AddUserForm addUser={addUser} />
      )}
      <UserList
        users={users}
        deleteUser={deleteUser}
        setEditing={setEditing}
        setCurrentUser={setCurrentUser}
      />
    </div>
  );
}

export default App;
