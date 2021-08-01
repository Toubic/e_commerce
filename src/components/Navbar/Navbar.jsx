import React from 'react';
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from '@material-ui/core';
import { ShoppingCart, Shoppingcart } from '@material-ui/icons';
import { Link, useLocation } from 'react-router-dom';

import logo from '../../assets/logo.png'
import useStyles from './styles'

const Navbar = ({ totalItemsInCart }) => {
    const classes = useStyles();
    const location = useLocation();

    

    return (
        <>
            <AppBar position="fixed" className={classes.appBar} color="inherit">
                <Toolbar>
                    <Typography component={Link} to="/" variant="h6" className={classes.title} color="inherit">
                        <img src={logo} alt="E-commerce" height="25px" className={classes.image} />
                        E-commerce
                    </Typography>
                    <div className={classes.grow} />
                    { location.pathname == '/' && (
                    <div className={classes.button,classes.iconButton}>
                        <IconButton component={Link} to="/cart" aria-label="Show cart item">
                            <Badge badgeContent={totalItemsInCart} className={classes.badge}>
                                <ShoppingCart />
                            </Badge>
                        </IconButton>
                    </div>)}
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar;
