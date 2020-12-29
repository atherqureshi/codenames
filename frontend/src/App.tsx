import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [message, setMessage] = useState("unable to contact backend");

  useEffect(() => {
    fetch('/hello-world').then(res => res.json()).then(data => {
      setMessage(data.message)
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p>The message is: {message}.</p>
      </header>
    </div>
  );
}

export default App;
