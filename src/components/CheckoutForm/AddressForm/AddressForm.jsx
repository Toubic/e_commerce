import React, { useState, useEffect } from 'react';
import { InputLabel, Select, MenuItem, Button, Grid, Typography } from '@material-ui/core';
import { useForm, FormProvider } from 'react-hook-form';
import { commerce } from '../../../lib/commerce';

import FormInput from '../FormInput';
import { Link } from 'react-router-dom';
import useStyles from './styles';

const AddressForm = ({ checkoutToken, next }) => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [address1, setAddress1] = useState('');
    const [email, setEmail] = useState('');
    const [city, setCity] = useState('');
    const [postalCode, setPostalCode] = useState('');
    const [shippingCountries, setShippingCountries] = useState([]);
    const [shippingCountry, setShippingCountry] = useState('');
    const [shippingSubdivisions, setShippingSubdivisions] = useState([]);
    const [shippingSubdivision, setShippingSubdivision] = useState('');
    const [shippingOptions, setShippingOptions] = useState([]);
    const [shippingOption, setShippingOption] = useState('');
    const classes = useStyles();
  
    const methods = useForm();

    const countries = Object.entries(shippingCountries).map(([countryCode, countryName]) => ({ id: countryCode, label: countryName }));
    const subdivisions = Object.entries(shippingSubdivisions).map(([subdivisionCode, subdivisionName]) => ({ id: subdivisionCode, label: subdivisionName }));
    const options = shippingOptions.map((shippingOpt) => ({ id: shippingOpt.id, label: `${shippingOpt.description} - (${shippingOpt.price.formatted_with_symbol})` }));

    const fetchShippingCountries = async (checkoutTokenId) => {
        const { countries } = await commerce.services.localeListShippingCountries(checkoutTokenId);

        if(countries){
            setShippingCountries(countries);
            setShippingCountry(Object.keys(countries)[0]);
        }
    }

    const fetchSubdivisions = async(countryCode) => {
        const { subdivisions } = await commerce.services.localeListSubdivisions(countryCode);

        if(subdivisions){
            setShippingSubdivisions(subdivisions);
            setShippingSubdivision(Object.keys(subdivisions)[0]);
        }
    }

    const fetchShippingOptions = async(checkoutTokenId, country, region = null) => {
        const options = await commerce.checkout.getShippingOptions(checkoutTokenId, { country, region })

        if(options){
            setShippingOptions(options);
            if(options[0]){
                setShippingOption(options[0].id);
            }
        }
    }

    useEffect(() => {
        fetchShippingCountries(checkoutToken.id);
    }, []);

    useEffect(() => {
        if (shippingCountry) 
            fetchSubdivisions(shippingCountry);
    }, [shippingCountry])

    useEffect(() => {
        if (shippingSubdivision)
            fetchShippingOptions(checkoutToken.id,shippingCountry,shippingSubdivision);
    }, [shippingSubdivision])

    return (
        <>
            <Typography variant="h6" gutterBottom>Shipping address</Typography>
            <FormProvider {... methods}>
                <form onSubmit={methods.handleSubmit((data) => next({ firstName, lastName, address1, email, city, postalCode, shippingCountry, shippingSubdivision, shippingOption }))}>
                    <Grid container spacing={3}>
                        <FormInput value={firstName} required name="firstName" label="First name" onChange={(e) => setFirstName(e.target.value)}/>
                        <FormInput value={lastName} required name="lastName" label="Last name" onChange={(e) => setLastName(e.target.value)}/>
                        <FormInput value={address1} required name="address1" label="Address" onChange={(e) => setAddress1(e.target.value)}/>
                        <FormInput value={email} required name="email" label="Email" onChange={(e) => setEmail(e.target.value)}/>
                        <FormInput value={city} required name="city" label="City" onChange={(e) => setCity(e.target.value)}/>
                        <FormInput value={postalCode} required name="postalCode" label="Postal code" onChange={(e) => setPostalCode(e.target.value)}/>
                       <Grid item xs={12} sm={6}>
                            <InputLabel>Shipping country</InputLabel>
                            <Select value={shippingCountry} fullWidth onChange={(e) => setShippingCountry(e.target.value)}>
                                {countries.map((country) => (
                                    <MenuItem value={country.id} key={country.id}>
                                        {country.label}
                                    </MenuItem>
                                ))}
                            </Select>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <InputLabel>Shipping subdivision</InputLabel>
                            <Select value={shippingSubdivision} fullWidth onChange={(e) => setShippingSubdivision(e.target.value)}>
                                {subdivisions.map((subdivision) => (
                                    <MenuItem value={subdivision.id} key={subdivision.id}>
                                        {subdivision.label.split("[").shift()}
                                    </MenuItem>
                                ))}
                            </Select>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <InputLabel>Shipping options</InputLabel>
                            <Select value={shippingOption} fullWidth onChange={(e) => setShippingOption(e.target.value)}>
                                {options.map((option) => (
                                    <MenuItem value={option.id} key={option.id}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </Select>
                        </Grid>
                    </Grid>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
                        <Button component={Link} variant="contained" to="/cart" color="secondary" className={classes.backButton}>Back to Cart</Button>
                        <Button type="submit" variant="contained" color="primary" className={classes.nextButton}>Next</Button>
                    </div>
                </form>
            </FormProvider>
        </>
    )
}

export default AddressForm
