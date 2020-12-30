import React, { useState, useEffect } from 'react';
import './App.css';
import { Button, Container } from '@material-ui/core';

function App() {
  const [createSessionClicked, setCreateSessionClicked] = useState<Boolean>(
    false
  );

  useEffect(() => {
    if (createSessionClicked) {
      fetch('/create-session', { method: 'POST' })
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((error) => {
          console.log(error.message);
          setCreateSessionClicked(false);
        });
    }
  }, [createSessionClicked]);

  return (
    <div className="App">
      <body>
        <Container>
          <p> Code Names </p>
          <Button
            variant="outlined"
            color="primary"
            size="large"
            onClick={() => {
              setCreateSessionClicked(true);
            }}
          >
            Start a Session
          </Button>
          {createSessionClicked && <p> Creating Session...</p>}
        </Container>
      </body>
    </div>
  );
}

export default App;
