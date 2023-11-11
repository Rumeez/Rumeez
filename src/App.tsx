import React from 'react';
import logo from './logo.svg';
import { handleButtonClick } from './buttonLogic';

function App() {
  return (
    <div className="App">
    <h1>Rumeez</h1>
    <button onClick={handleButtonClick}>Log in</button>
    <h2>Find your perfect roommate.</h2>
    <button onClick={handleButtonClick}>Create Account</button>
    </div>
  );
}

export default App;
