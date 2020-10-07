import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { Auth } from 'aws-amplify';


import { AmplifySignOut, withAuthenticator } from '@aws-amplify/ui-react';

function App() {

  const [ user, setUser ] = useState(null);

  useEffect(() => {
    Auth.currentAuthenticatedUser()
    .then( userData => setUser(userData))
    .catch(err => console.log({ err }))
  }, [])
  console.log({ user });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <AmplifySignOut />
    </div>
  );
}

export default withAuthenticator(App);
