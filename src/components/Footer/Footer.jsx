import React from 'react';
import { Typography } from '@material-ui/core';

import useStyles from './styles';

const Footer = () => {
    const classes = useStyles();
    return (
        <>
            <Typography variant="subtitle1" align="center" className={classes.typography}>Made by Toubic.</Typography>
        </>
    )
}

export default Footer
