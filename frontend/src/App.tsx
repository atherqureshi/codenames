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
import { Grid, Button, Paper } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import './styles.css';
import { HowToPlayCard } from './HowToPlayCard';

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

  const [helpdialogClicked, setHelpDialogClicked] = useState<boolean>(false);

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
                  <Route path="/session/:session_id" children={<Session />} />
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
                <HowToPlayCard />
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
