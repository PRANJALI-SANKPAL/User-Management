import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './AddUserForm.css';

const AddUserForm = ({ addUser }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Form validation
    if (!name || !email || !phone) {
      setError('Please fill in all fields.');
      return;
    }

    if (/\d/.test(name)) {
      setError('Name should not contain numeric values.');
      return;
    }

    if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
      setError('Invalid email format.');
      return;
    }

    if (!/^\d{7,}$/.test(phone)) {
      setError('Phone should contain only numeric values and have at least 7 digits.');
      return;
    }

    // All validation passed, create a new user
    const newUser = {
      id: uuidv4(),
      name,
      email,
      phone
    };
    addUser(newUser);

    // Clear form fields and error message
    setName('');
    setEmail('');
    setPhone('');
    setError('');
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
      {error && <p className="error">{error}</p>}
      <button type="submit">Add User</button>
    </form>
  );
};

export default AddUserForm;
