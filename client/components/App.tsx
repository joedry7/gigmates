import React from 'react';
import axios, { AxiosResponse } from 'axios';
// @ts-ignore
import Signin from './Signin.tsx';
// @ts-ignore
import Register from './Register.tsx';

const App: React.FC<Props> = (props) => {

  const signIn = async (username: String): Promise<AxiosResponse> => {
    let data =  await axios(`/api/user/${username}`);
    return data
  }

  const register = async (formData: string[]): Promise<AxiosResponse> => {
    let config = {
      url: '/api/user',
      data: formData
    }
    let data =  await axios(config);
    return data
  }

  return (
    <div style={{display: 'grid', gridTemplate: '1fr / 1fr 1fr'}}>
      <Signin
      style={{}}
        signIn={signIn}
      />
      <Register
        register={register}
      />
    </div>
  )
};

interface Props {}

export default App;
