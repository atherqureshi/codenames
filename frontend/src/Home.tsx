import React, { useEffect, useState } from 'react';
import { Box, Button, Grid, TextField } from '@material-ui/core';

export function Home() {
  const [createSessionClicked, setCreateSessionClicked] = useState<boolean>(
    false
  );
  const [joinSessionClicked, setJoinSessionClicked] = useState<boolean>(false);
  const [currentSessionID, setCurrentSessionId] = useState<string>();
  const [sessionInputError, setSessionInputError] = useState<string>('');

  useEffect(() => {
    if (createSessionClicked) {
      fetch('/update-session', { method: 'POST' })
        .then((response) => response.json())
        .then((data) => {
          setCreateSessionClicked(false);
        })
        .catch((error) => {
          setCreateSessionClicked(false);
        });
    }
  }, [createSessionClicked]);

  const validateSessionId = (session_id?: string): boolean => {
    if (session_id) {
      return RegExp(/^[0-9]{8}$/).test(session_id);
    }
    return false;
  };

  return (
    <Box className="App">
      <Grid container spacing={4} direction="column">
        <Grid item xs={12}>
          <Button
            variant="contained"
            color="secondary"
            size="large"
            onClick={() => {
              setCreateSessionClicked(true);
              setJoinSessionClicked(false);
            }}
          >
            Start Session
          </Button>
        </Grid>
        <Grid item xs={12}>
          <Button
            variant="contained"
            color="secondary"
            size="large"
            onClick={() => {
              setSessionInputError('');
              setJoinSessionClicked(!joinSessionClicked);
            }}
          >
            Join Session
          </Button>
        </Grid>
      </Grid>
      {joinSessionClicked && (
        <Grid item xs={12}>
          <p /> <p /> <p />
          <form>
            <TextField
              required
              margin="dense"
              autoFocus
              id="outlined-required"
              label="Required"
              variant="outlined"
              helperText="Enter 8 digit Session ID"
              placeholder="12345678"
              value={currentSessionID}
              onChange={(event) => {
                setCurrentSessionId(event.target.value);
              }}
            />
          </form>
          <Button
            color="primary"
            onClick={() => {
              if (validateSessionId(currentSessionID)) {
                fetch(`/session/${currentSessionID}`)
                  .then((response) => response.json())
                  .then(() => window.open(`session/${currentSessionID}`))
                  .catch((error) =>
                    setSessionInputError('No Session ID Found')
                  );
              } else {
                setSessionInputError('Enter a valid session ID');
              }
            }}
          >
            Join
          </Button>
        </Grid>
      )}
      {createSessionClicked && <p> Creating Session...</p>}
      {sessionInputError && <p> {sessionInputError} </p>}
    </Box>
  );
}
