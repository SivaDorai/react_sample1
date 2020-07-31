import React from 'react';
import UserRegistration from './components/UserRegistration.js';
import './App.css';
import UserHistory from './components/UserHistory.js';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <UserRegistration></UserRegistration>
        <UserHistory></UserHistory>
      </header>
    </div>
  );
}

export default App;//
