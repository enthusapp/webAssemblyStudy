/* eslint-disable no-console */
import React from 'react';
import { useWasm } from 'react-wasm';
import logo from './logo.svg';
import './App.css';

function App() {
  const { loading, error, data } = useWasm({
    url: './test.wasm',
  });

  console.log(`loading ${loading}`);
  console.log(`error ${error}`);

  if (!loading && !error) {
    const { instance } = data;
    console.log(instance.exports.add(1, 2));
  }

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
    </div>
  );
}

export default App;
