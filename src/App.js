import React from 'react';
import logo from './logo.svg';
import './App.css';
import * as wasm from './wasm-hello-world';
import hello from './hello';

hello({
  arguments: [],
  cb: () => {
    console.log('done');
  }
});

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={() => wasm.greet('React')}>WASM greetings</button>
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
