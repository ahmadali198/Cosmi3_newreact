import React from 'react';
import './App.css';
import WelcomeMessage from './welcomemessage';
import Counter from './Counter';
import UserForm from './UserForm';

function App() {
  return (
    <div className="App">
      <WelcomeMessage />
      <hr />
      <Counter start={5} />
      <hr />
      <UserForm />
    </div>
  );
}

export default App;
