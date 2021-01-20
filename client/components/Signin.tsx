import React, { useState } from 'react';

const Signin: React.FC<Props> = () => {

  const [username, setUsername] = useState('');

  return (
    <form>
      <input
        type='text'
        value={username}
        placeholder='Username'
      ></input>
    </form>
  )

}

interface Props {}

export default Signin;