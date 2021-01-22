import React from 'react';
import axios, { AxiosResponse } from 'axios';
// @ts-ignore
import Signin from './Signin.tsx';

const App: React.FC<Props> = (props) => {

  const signIn = async (username: String): Promise<AxiosResponse> => {
    let data =  await axios.get(`/api/user/${username}`);
    return data
  }

  return (
    <div>
      <Signin
        signIn={signIn}
      />
      <button
      >Register</button>
    </div>
  )
};

interface Props {}

export default App;
