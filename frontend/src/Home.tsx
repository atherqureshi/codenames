import React, { useEffect, useState } from 'react';
import { Box, Button, Grid, TextField } from '@material-ui/core';
import { Link } from 'react-router-dom';

export function Home() {
  const [createSessionClicked, setCreateSessionClicked] = useState<boolean>(
    false
  );
  const [joinSessionClicked, setJoinSessionClicked] = useState<boolean>(false);

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
    <Box className="App">
      <Grid container spacing={4} direction="column">
        <Grid item xs={12}>
          <Button
            variant="contained"
            color="primary"
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
            color="primary"
            size="large"
            onClick={() => {
              setJoinSessionClicked(!joinSessionClicked);
            }}
          >
            Join Session
          </Button>
        </Grid>
      </Grid>
      {joinSessionClicked && (
        <Grid item xs={12}>
          <p /> <p />
          <form>
            <TextField
              required
              id="outlined-required"
              label="Required"
              defaultValue=""
              variant="outlined"
              helperText="Enter the session id of the game you want to join"
            />
          </form>
          <Button component={Link} to="/session" color="primary">
            Join
          </Button>
        </Grid>
      )}
      {createSessionClicked && <p> Creating Session...</p>}
    </Box>
  );
}
