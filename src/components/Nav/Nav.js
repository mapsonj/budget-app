import React from 'react';
import { NavLink } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const Nav = () => (
	<AppBar position="static">
    <Toolbar>
    <Typography  color="inherit">
        <NavLink to="/" activeClassName="is-active" exact={true}>Dashboard</NavLink>
    </Typography>
    <Typography color="inherit">
      <NavLink to="/create" activeClassName="is-active">Create Expense</NavLink>
    </Typography>
    <Typography  color="inherit">
      <NavLink to="/help" activeClassName="is-active">Help</NavLink>
    </Typography>
    </Toolbar>
  </AppBar>
);


export default Nav;