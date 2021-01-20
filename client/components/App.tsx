import React from 'react';
// @ts-ignore
import Signin from './Signin.tsx';

const App: React.FC<Props> = (props) => {

  return (
    <div>
      <Signin />
      <button
      >Register</button>
    </div>
  )
};

interface Props { }

export default App;
