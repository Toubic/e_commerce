import React from 'react';
import { Typography } from '@material-ui/core';

import useStyles from './styles';

const Footer = () => {
    const classes = useStyles();
    return (
        <>
            <Typography variant="subtitle1" align="center" className={classes.typography}>Made by Toubic.</Typography>
            <a href="https://github.com/Toubic/e_commerce"><Typography variant="subtitle1" align="center" className={classes.typography}>GITHUB</Typography></a>
        </>
    )
}

export default Footer
