import React from 'react';
import { Card, CardMedia, CardContent, CardActions,Typography, IconButton } from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';

import useStyles from './styles';

const Product = ({ product, onAddToCart }) => {
    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <CardMedia className={classes.media} image={product.media.source} title={product.name} />
            <CardContent>
                <div className={classes.cardContent}>
                    <Typography variant="h5" align="left" className={classes.typography} gutterBottom>
                        {product.name}
                    </Typography>
                    <Typography variant="h5" align="center" className={classes.typography} gutterBottom>
                        {product.price.formatted_with_code}
                    </Typography>
                </div>
                <Typography variant="body2" color="textSecondary" className={classes.typography}>
                    {product.description.replace(/(<p[^>]+?>|<p>|<\/p>)/img, "")}
                </Typography>
            </CardContent>
            <CardActions disableSpacing className={classes.cardActions}>
                <IconButton aria-label="Add to cart" onClick={() => onAddToCart(product.id,1)}>
                    <Typography variant="h5" className={classes.typography}>Add&nbsp;</Typography>
                    <AddShoppingCart className={classes.typography}/>
                </IconButton>
            </CardActions>
        </Card>
    )
}

export default Product;
