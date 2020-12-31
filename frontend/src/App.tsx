import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './Home';
import { Session } from './Session';
import Typography from '@material-ui/core/Typography';
import SwitchComponent from '@material-ui/core/Switch';
import {
  createMuiTheme,
  ThemeProvider,
  makeStyles,
} from '@material-ui/core/styles';
import {
  lightGreen,
  lightBlue,
  deepPurple,
  green,
} from '@material-ui/core/colors';
import { Grid, Card, Button, Paper } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import './styles.css';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
  },
  fixedHeight: {
    height: 240,
  },
}));

export default function App() {
  const [darkState, setDarkState] = useState<boolean>(true);
  const [helpdialogClicked, setHelpDialogClicked] = useState<boolean>(false);
  const palletType = darkState ? 'dark' : 'light';
  const mainPrimaryColor = darkState ? lightGreen[500] : lightBlue[500];
  const mainSecondaryColor = darkState ? green[900] : deepPurple[500];
  const darkTheme = createMuiTheme({
    palette: {
      type: palletType,
      primary: {
        main: mainPrimaryColor,
      },
      secondary: {
        main: mainSecondaryColor,
      },
    },
  });
  const handleThemeChange = () => {
    setDarkState(!darkState);
  };

  const classes = useStyles();

  return (
    <Router>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <div className={classes.root}>
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
            spacing={2}
          >
            <Grid item md>
              <Paper elevation={3} className={classes.paper}>
                <Grid container direction="row">
                  <Grid item xl={3} />
                  <Grid item xl={6}>
                    <Typography
                      component="h6"
                      align="center"
                      variant="h6"
                      color="primary"
                    >
                      CodeNames
                    </Typography>
                  </Grid>
                  <Grid item xl={3}>
                    <SwitchComponent
                      checked={darkState}
                      onChange={handleThemeChange}
                    />
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
            <Grid item md>
              <Paper variant="outlined" className={classes.paper}>
                <Switch>
                  <Route path="/session">
                    <Session />
                  </Route>
                  <Route path="/">
                    <Home />
                  </Route>
                </Switch>
              </Paper>
            </Grid>
            <Grid item md>
              <Button
                onClick={() => {
                  setHelpDialogClicked(!helpdialogClicked);
                }}
                variant="text"
              >
                How to Play
              </Button>
            </Grid>
            {helpdialogClicked && (
              <Grid item md>
                <Card>
                  Goal: Codebreakers correctly guess all their team's color's
                  cards without stepping on a bomb <br /> <br />
                  Round Format: <br /> <br />
                  Team with 9 cards starts <br /> <br /> 1. Spymasters give a
                  one word hint and a number (pointing to amount of potential
                  cards) to codebreakers at the start of their respective teams
                  round <br /> <br />
                  2. Code breakers try to select a card pertaining to the
                  spymaster's hint <br /> <br />
                  A) If the Code breaker hits their team colors card, it gets
                  flipped, codebreaker can continue guessing until number runs
                  out <br /> <br />
                  B) if the code breaker hits the other teams colors card, other
                  teams card gets flipped, and turn is over <br />
                  <br />
                  C) If the CodeBreaker hits a bomb, then their team
                  automatically loses the game <br />
                  <br />
                </Card>
              </Grid>
            )}
            <Grid item md>
              <p> About </p>
            </Grid>
          </Grid>
        </div>
      </ThemeProvider>
    </Router>
  );
}
