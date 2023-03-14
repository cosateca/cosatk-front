
import { Box, Typography, TextField, Button, Grid, Checkbox } from '@mui/material'
import { width } from '@mui/system'
import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../../components/Footer/Footer'

const Register = () => {
    return (
        <>
            <Box sx={{
                    overflow: 'scroll',
                    height: '800px',


            }}>
                <Typography variant="h1" sx={{
                    textAlign: 'center',
                    fontWeight: 'light'
                }}> Register </Typography>

                <Box

                    sx={{
                        margin: '0 auto',
                        display: 'flex',
                        flexDirection: { xs: 'column', sm: 'row' },
                        alignItems: 'center',
                        width: { xs: '90%', sm: '100%' },
                        flexWrap: { xs: 'nowrap', sm: 'wrap' },
                        justifyContent: 'center',
                        
                        
                        gap: '1em'
                    }} >

                    <TextField
                        id="Nom"
                        label="Nom"
                        variant="outlined"
                        InputLabelProps={{
                            style: {
                                color: '#222222',
                            },
                        }}
                        sx={{
                            width: { xs: '80%', sm: '35%' },
                        }}
                    />
                    <TextField
                        id="Cognom"
                        label="Cognom"
                        variant="outlined"
                        sx={{
                            width: { xs: '80%', sm: '35%' },

                        }}
                        InputLabelProps={{
                            style: {
                                color: '#222222',
                            },
                        }}
                    />
                    <TextField
                        id="DNI/NIE"
                        label="DNI/NIE"
                        variant="outlined"
                        sx={{
                            width: { xs: '80%', sm: '35%' },
                        }}
                        InputLabelProps={{
                            style: {
                                color: '#222222',
                            },
                        }}
                    />
                    <TextField
                        id="Direcció"
                        label="Direcció"
                        variant="outlined"
                        sx={{
                            width: { xs: '80%', sm: '35%' },
                        }}
                        InputLabelProps={{
                            style: {
                                color: '#222222',
                            },
                        }}
                    />
                    <TextField
                        id="Télefon"
                        label="Teléfon"
                        variant="outlined"
                        sx={{
                            width: { xs: '80%', sm: '35%' },

                        }}
                        InputLabelProps={{
                            style: {
                                color: '#222222',
                            },
                        }}
                    />
                    <TextField
                        id="Any de naixement"
                        label="Any de naixement"
                        variant="outlined"
                        sx={{
                            width: { xs: '80%', sm: '35%' },

                        }}
                        InputLabelProps={{
                            style: {
                                color: '#222222',
                            },
                        }}
                    />
                    <TextField
                        id="Email"
                        label="Email"
                        variant="outlined"
                        sx={{
                            width: { xs: '80%', sm: '35%' },
                        }}
                        InputLabelProps={{
                            style: {
                                color: '#222222',
                            },
                        }}
                    />

                    <TextField
                        id="EmaPasswordil"
                        label="Password"
                        variant="outlined"
                        sx={{
                            width: { xs: '80%', sm: '35%' },

                        }}
                        InputLabelProps={{
                            style: {
                                color: '#222222',
                            },
                        }}
                    />

                    <TextField
                        required
                        name="Repetir password"
                        label="Repetir password"
                        id="password"
                        sx={{
                            width: { xs: '80%', sm: '35%' },

                        }}
                        InputLabelProps={{
                            style: {
                                color: '#222222',

                            },
                        }}
                    />

                    <Button
                        type="submit"
                        variant="contained"
                        sx={{
                            mt: 3,
                            mb: 2,
                            borderRadius: '0px',
                            bgcolor: '',
                            color: 'white',
                            width: { xs: '80%', sm: '35%' }
                        }}>
                        Register
                    </Button>
<Box sx={{
    display: 'block',
  
    
}}> 
                    <p >  <Checkbox />  He llegit i accepto els
                        termes i condicions i la
                        política de privacitat.</p>

                  <Link to='#' style={{textAlign: 'center'}}> <p> Tornar</p> </Link>  
                  </Box>
                    <Footer />
                </Box>
            </Box>
        </>
    )
}

export default Register



{/* <Box
sx={{
    margin: '0 auto',
    display: 'flex',
    flexDirection: { xs: 'column', sm: 'row' },
    alignItems: 'center',
    width: { xs: '90%', sm: '100%' },
    marginTop: 8,
    flexWrap: 'wrap',
    overflow: 'scroll'


}}
>

<Typography variant="h1" sx={{ margin: 5, fontWeight: 'light' }}> Register </Typography>

<TextField
    id="Nom"
    label="Nom"
    variant="outlined"
    
    margin="normal"
    InputLabelProps={{
        style: {
            color: '#222222',
        },
    }}
    sx={{
       width: { xs: '80%', sm: '40%' },
       margin :'2em',
    }}
/>
<TextField
    id="Cognom"
    label="Cognom"
    variant="outlined"
    
    margin="normal"
    sx={{
        width: { xs: '80%', sm: '40%' },
       margin :'2em',
     }}
    InputLabelProps={{
        style: {
            color: '#222222',
        },
    }}
/>
<TextField
    id="DNI/NIE"
    label="DNI/NIE"
    variant="outlined"
    margin="normal"
   
    sx={{
        width: { xs: '80%', sm: '40%' },
       margin :'2em',
     }}
    InputLabelProps={{
        style: {
            color: '#222222',


        },
    }}
/>
<TextField
    id="Direcció"
    label="Direcció"
    variant="outlined"
    margin="normal"
    sx={{
        width: { xs: '80%', sm: '40%' },
        margin :'2em',                     }}
    InputLabelProps={{
        style: {
            color: '#222222',
        },
    }}
/>
<TextField
    id="Télefon"
    label="Teléfon"
    variant="outlined"
    
    margin="normal"sx={{
        width: { xs: '80%', sm: '40%' },
        margin :'2em',                     }}
    InputLabelProps={{
        style: {
            color: '#222222',
        },
    }}
/>
<TextField
    id="Any de naixement"
    label="Any de naixement"
    variant="outlined"
    
    margin="normal"
    sx={{
        width: { xs: '80%', sm: '40%' },
        margin :'2em',                     }}
    InputLabelProps={{
        style: {
            color: '#222222',
        },
    }}
/>
<TextField
    id="Email"
    label="Email"
    variant="outlined"
    
    margin="normal"
    sx={{
        width: { xs: '80%', sm: '40%' },
        margin :'2em',                     }}
    InputLabelProps={{
        style: {
            color: '#222222',
        },
    }}
/>

<TextField
    id="EmaPasswordil"
    label="Password"
    variant="outlined"
    
    margin="normal"
    sx={{
        width: { xs: '80%', sm: '40%' },
        margin :'2em',                     }}
    InputLabelProps={{
        style: {
            color: '#222222',
        },
    }}
/>

<TextField

    margin="normal"
    required
    
    name="Repetir password"
    label="Repetir password"

    id="password"
    sx={{
        width: { xs: '80%', sm: '40%' },
        margin :'2em',                     }}
    InputLabelProps={{
        style: {
            color: '#222222',

        },
    }}




/>
{/* <FormControlLabel
control={<Checkbox value="remember" color="primary" />}
label="Remember me"
/> */}
{/* <Button
    type="submit"

    variant="contained"
    sx={{
        mt: 3,
        mb: 2,
        borderRadius: '0px',
        bgcolor: '',
        color: 'white',
        width: { xs: '100%', sm: '50%' }

    }}

>
    Register
</Button>

<p>  <Checkbox />  He llegit i accepto els
    termes i condicions i la
    política de privacitat.</p>
    <p> Tornar</p>



<Footer />
</Box> */}