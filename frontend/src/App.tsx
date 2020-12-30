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
import CssBaseline from '@material-ui/core/CssBaseline';
import './styles.css';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
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
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 240,
  },
}));

export default function App() {
  const [darkState, setDarkState] = useState(true);
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
        <SwitchComponent checked={darkState} onChange={handleThemeChange} />
        <Typography
          component="h2"
          align="center"
          variant="h6"
          color="inherit"
          noWrap
          paragraph
          className={classes.title}
        >
          Code Names
        </Typography>
        <Switch>
          <Route path="/session">
            <Session />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </ThemeProvider>
    </Router>
  );
}
