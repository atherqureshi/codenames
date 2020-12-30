import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  TextField,
} from '@material-ui/core';
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

  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      height: 140,
      width: 100,
    },
    control: {
      padding: theme.spacing(2),
    },
  }));

  const classes = useStyles();

  return (
    <div className="App">
      <h2> Code Names </h2>
      <Grid container className={classes.root} spacing={1}>
        <Grid item xs={12}>
          <Button
            variant="outlined"
            color="primary"
            size="large"
            onClick={() => {
              setCreateSessionClicked(true);
            }}
          >
            Start Session
          </Button>
        </Grid>
        <Grid item xs={12}>
          <Button
            variant="outlined"
            color="primary"
            size="large"
            onClick={() => {
              setJoinSessionClicked(true);
            }}
          >
            Join Session
          </Button>
        </Grid>
      </Grid>
      <Dialog
        open={joinSessionClicked}
        keepMounted
        onClose={() => setJoinSessionClicked(false)}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="join-session-dialog">{'Join Session'}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Session Id
          </DialogContentText>
          <form>
            <TextField
              required
              id="outlined-required"
              label="Required"
              defaultValue=""
              variant="outlined"
            />
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setJoinSessionClicked(false)} color="primary">
            Close
          </Button>
          <Button component={Link} to="/session" color="primary">
            Join
          </Button>
        </DialogActions>
      </Dialog>
      {createSessionClicked && <p> Creating Session...</p>}
    </div>
  );
}
