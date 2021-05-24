import React from 'react';
import { Grid } from '@material-ui/core';

import Product from './Product/Product'

const products = [
    {id: 1, name: 'Shoes', description: 'Running shoes', price: '500 sek', image: 'https://images.pexels.com/photos/2729899/pexels-photo-2729899.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'},
    {id: 2, name: 'Macbook', description: 'Apple Macbook', price: '1000 sek', image: 'https://images.pexels.com/photos/5412266/pexels-photo-5412266.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'}
];

const Products = () => {
    return(
        <main>
            <Grid container justify="center" spacing={4}>
                {products.map((product) => (
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}> 
                        <Product product={product} />
                    </Grid>
                ))}
            </Grid>
        </main>
    );
    
}

export default Products;