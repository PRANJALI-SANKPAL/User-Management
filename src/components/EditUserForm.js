import React, { useState, useEffect } from 'react';

const EditUserForm = ({ currentUser, updateUser, setEditing }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  useEffect(() => {
    setName(currentUser.name);
    setEmail(currentUser.email);
    setPhone(currentUser.phone);
  }, [currentUser]);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (name && email && phone) {
      const updatedUser = {
        id: currentUser.id,
        name,
        email,
        phone
      };
      updateUser(updatedUser);
      setEditing(false);
    }
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="tel"
        placeholder="Phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <button type="submit">Update User</button>
      <button onClick={() => setEditing(false)}>Cancel</button>
    </form>
  );
};

export default EditUserForm;
