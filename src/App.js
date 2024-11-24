import React, { useState } from 'react';
import './App.css';

function App() {
  const [clickCount, setClickCount] = useState(0);

  const handleClick = () => {
    setClickCount(clickCount + 1);
  };

  return (
    <div className="App">
      <h1>Welcome to My React Site!</h1>
      <button onClick={handleClick}>Click Me!</button>
      <p>You have clicked {clickCount} times.</p>
    </div>
  );
}

export default App;
