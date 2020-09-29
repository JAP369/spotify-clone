import React, { useEffect, useState } from 'react';
import './App.css';
import Login from './Login';
import { getTokenFromUrl } from './spotify';
import SpotifyWebApi from 'spotify-web-api-js';

const spotify = new SpotifyWebApi(null);

function App() {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = '';
    const _token = hash.access_token;

    if (_token) {
      setToken(_token);
    }

    console.log('I HAVE A TOKEN >>>', token);
  }, []);
  return (
    //BEM
    <div className='App'>{token ? <h1>Im logged in</h1> : <Login />}</div>
  );
}

export default App;

// Client ID cb24c4c2475f41e58f8fa4768588ef16
// Client Secret 9e206664d37345898fdd7bb5aa1fbef7
