/*
  NavBar Component
*/ 
import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { withStyles } from '@material-ui/core/styles';
import history from '../../utils/history';
import styles from './styles';

function Navbar(props) {
    const {classes} = props; //internal prop
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
              <div className={classes.backButton} onClick={() => history.push('/')}>
                <ArrowBackIosIcon  className={classes.icon}/>
              </div>
            <Typography className={classes.title} variant="h4" noWrap>
                World Map
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    );
 }

export default withStyles(styles)(Navbar)

