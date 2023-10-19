import React from 'react';
import Videoplayer from './Components/Videoplayer';
import Notifications from './Components/Notifications';
import Options from './Components/Options';
import { AppBar, Typography } from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    appBar: {
      borderRadius: 15,
      margin: '30px 100px',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      width: '400px',
      border: '2px solid black',
  
      [theme.breakpoints.down('xs')]: {
        width: '90%',
      },
    },
    image: {
      marginLeft: '15px',
    },
    wrapper: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: '100%',
    },
  }));
const App = () => {
    const classes =useStyles();
  return (
    <div className={classes.wrapper}>
      <AppBar  className={classes.appBar}position="static" color="inherit">
        <Typography variant="h4" align="center">Video Chat </Typography>
      </AppBar>
       
      <Videoplayer />
       <Options>
      <Notifications />
      </Options >
    </div>
  );
};

export default App;
