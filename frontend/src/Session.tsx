import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 2,
    },
    paper: {
      padding: theme.spacing(1),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  })
);

export function Session() {
  const classes = useStyles();

  function FormRow() {
    return (
      <React.Fragment>
        <Grid item xs={3}>
          <Paper className={classes.paper}>item</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>item</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>item</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>item</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>item</Paper>
        </Grid>
      </React.Fragment>
    );
  }

  return (
    <div>
      <Grid container spacing={5}>
        <FormRow />
      </Grid>
    </div>
  );
}
