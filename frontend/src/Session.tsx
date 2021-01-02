import React, { useEffect, useState } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { Redirect, RouteComponentProps } from 'react-router-dom';
import { validateSessionId } from './util';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      minWidth: 175,
      minHeight: 125,
    },
  })
);

export type Card = {
  word: string;
  card_type: 'Blue' | 'Red' | 'Gray' | 'Black';
};

export type GameState = {
  session_id: string;
  updated_timestamp: number;
  cards: Card[];
};

type SessionParams = {
  session_id: string;
};

type SessionProps = RouteComponentProps<SessionParams>;

export function Session({ match }: SessionProps) {
  const session_id = match.params.session_id;
  const [gameState, setGameState] = useState<GameState>();
  const [redirectHome, setRedirectHome] = useState<boolean>(false);

  useEffect(() => {
    if (validateSessionId(session_id)) {
      fetch(`/session/${session_id}`)
        .then((response) => response.json())
        .then((data: GameState) => setGameState(data))
        .catch((error) => {
          console.log(error);
          setRedirectHome(true);
        });
    } else {
      setRedirectHome(true);
    }
  }, [session_id]);

  const classes = useStyles();

  function FormRow() {
    return (
      <React.Fragment>
        <Grid item xs={3}>
          <Button variant="outlined" className={classes.button}>
            item
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button variant="outlined" className={classes.button}>
            item
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button variant="outlined" className={classes.button}>
            item
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button variant="outlined" className={classes.button}>
            item
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button variant="outlined" className={classes.button}>
            item
          </Button>
        </Grid>
      </React.Fragment>
    );
  }

  return (
    <div>
      {redirectHome && <Redirect to={{ pathname: '/' }} />}
      <Grid container direction="column" spacing={2}>
        <Grid item sm={12} md>
          <Grid container direction="row" spacing={3}>
            <Grid item xs={6} sm={3}>
              9 - 8
            </Grid>
            <Grid item xs={6} sm={3}>
              Blue's Turn
            </Grid>
            <Grid item xs={6} sm={3}>
              Neutrals Remaining: 5
            </Grid>
            <Grid item xs={6} sm={3}>
              <Button variant="contained"> Spymaster </Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid
            wrap="nowrap"
            container
            spacing={3}
            direction="row"
            justify="center"
            alignItems="center"
          >
            <FormRow />
          </Grid>
        </Grid>
        <Grid item>
          <Grid
            wrap="nowrap"
            container
            spacing={3}
            direction="row"
            justify="center"
            alignItems="center"
          >
            <FormRow />
          </Grid>
        </Grid>
        <Grid item>
          <Grid
            wrap="nowrap"
            container
            spacing={3}
            direction="row"
            justify="center"
            alignItems="center"
          >
            <FormRow />
          </Grid>
        </Grid>
        <Grid item>
          <Grid
            wrap="nowrap"
            container
            spacing={3}
            direction="row"
            justify="center"
            alignItems="center"
          >
            <FormRow />
          </Grid>
        </Grid>
        <Grid item>
          <Grid
            wrap="nowrap"
            container
            spacing={3}
            direction="row"
            justify="center"
            alignItems="center"
          >
            <FormRow />
          </Grid>
        </Grid>
      </Grid>
      <Grid item sm={12}>
        <Grid container direction="row" spacing={6}>
          <Grid item xs={6} sm={3}>
            <Button
              variant="outlined"
              onClick={() => {
                navigator.clipboard
                  // .writeText(
                  //   `${window.location.hostname}/session/${session_id}`
                  // )
                  .writeText(
                    `${window.location.hostname}:3000/session/${session_id}`
                  )
                  .then((r) => console.log('Copied Link!'));
              }}
            >
              Copy Game Link
            </Button>
          </Grid>
          <Grid item xs={6} sm={3} />
          <Grid item xs={6} sm={3} />
          <Grid item xs={6} sm={3}>
            <Button variant="contained" color="primary">
              Next Turn
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
