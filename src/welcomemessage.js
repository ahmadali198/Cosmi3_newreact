import React from 'react';

function WelcomeMessage() {
  const currentDateTime = new Date().toLocaleString();

  return (
    <div>
      <h1>Welcome to My React App!</h1>
      <p>Current Date and Time: {currentDateTime}</p>
    </div>
  );
}

export default WelcomeMessage;
