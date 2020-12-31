import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      minWidth: 175,
      minHeight: 125,
    },
  })
);

export function Session() {
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
      <Grid container direction="column" spacing={4}>
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
            <Button variant="outlined">New Game</Button>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Button variant="outlined">Refresh Game</Button>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Button variant="outlined">Copy URL to Game </Button>
          </Grid>
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
