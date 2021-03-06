import React from 'react'
import { Typography, Button, Card, CardActions, CardContent, CardMedia } from '@material-ui/core';

import useStyles from './styles'

const CartItem = ({ item, onUpdateCartQuantity, onRemoveFromCart }) => {
    const classes = useStyles();

    return (
        <Card>
            <CardMedia image={item.media.source} alt={item.name} className={classes.media}/>
            <CardContent className={classes.cardContent}>
                <Typography variant="h5" align="left" className={classes.typography}>{item.name}</Typography>
                <Typography variant="h5" align="center" className={classes.typography}>{item.line_total.formatted_with_code}</Typography>
            </CardContent>
            <CardActions className={classes.cartActions}>
                <div className={classes.buttons}>
                    <Button type="button" size="small" onClick={() => onUpdateCartQuantity(item.id, item.quantity - 1)}>-</Button>
                    <Typography className={classes.typography}>{item.quantity}</Typography>
                    <Button type="button" size="small" onClick={() => onUpdateCartQuantity(item.id, item.quantity + 1)}>+</Button>
                </div>
                <Button variant="contained" type="button" color="secondary" className={classes.removeButton} onClick={() => onRemoveFromCart(item.id)}>Remove</Button>
            </CardActions>
        </Card>
    )
}

export default CartItem
