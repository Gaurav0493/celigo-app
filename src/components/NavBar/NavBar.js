import React from 'react';
import { NavLink } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';


import './NavBar.css'


// import AuthContext from '../../context/auth-context';

const NavBar = props => (
    <AppBar>
        <Toolbar className="main-navigation">
            <div className="main-navigation__logo">
                <h1>Celigo</h1>
            </div>
            <nav className="main-navigation__items">
                <ul>
                    <li>
                        <Button>
                            <NavLink to="/home">Home</NavLink>
                        </Button>
                    </li>
                    <li>
                        <Button>
                            <NavLink to="/signin">Sign In</NavLink>
                        </Button>
                    </li>
                    <li>
                        <Button>
                            <NavLink to="/about">About</NavLink>
                        </Button>
                    </li>
                </ul>
            </nav>
        </Toolbar>
    </AppBar>
);

export default NavBar;