import React from 'react';
import { TextField, Grid } from '@material-ui/core';
import { useFormContext, Controller } from 'react-hook-form';

const FormInput = ({ name, label, required }) => {
    const { control } = useFormContext();
    return (
        <div>
            <Grid item xs={12} sm={6}>
            
            </Grid>
        </div>
    )
}

export default FormInput
