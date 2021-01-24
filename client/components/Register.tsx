import React, { useState } from 'react';

const Register = ({ register }) => {

  const [username, setUsername] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.MouseEvent): void => {
    e.preventDefault();
    register({ username, firstName, lastName, email });
  }

  return (
    <form>

      <label>Username: </label>
      <input
        type='text'
        onChange={(e) => setUsername(e.target.value)}
      ></input><br/>

      <label>First Name: </label>
      <input
        type='text'
        onChange={(e) => setFirstName(e.target.value)}
      ></input><br/>

      <label>Last Name: </label>
      <input
        type='text'
        onChange={(e) => setLastName(e.target.value)}
      ></input><br/>

      <label>Email: </label>
      <input
        type='text'
        onChange={(e) => setEmail(e.target.value)}
      ></input><br/>

      <button
        type='submit'
        onClick={handleSubmit}
      >Register</button>

    </form>
  )

}

export default Register;