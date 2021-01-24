import React, { useState } from 'react';

const Signin: React.FC<Props> = ({ signIn }) => {

  const [username, setUsername] = useState('');

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    signIn(username);
  }

  return (
    <form>
      <input
        type='text'
        value={username}
        placeholder='Username'
        onChange={({ target: { value } }) => setUsername(value)}
      ></input>
      <button
        onClick={handleClick}
      ></button>
    </form>
  )

}

interface Props {
  signIn: (username: String) => String;
}

export default Signin;