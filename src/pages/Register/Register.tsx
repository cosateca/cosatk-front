
import { Box, Typography, TextField, Button, Grid, Checkbox } from '@mui/material'
import { height } from '@mui/system'
import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../../components/Footer/Footer'

const Register = () => {
    return (
        <>

            <Box
                sx={{
                    margin: '0 auto',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    width: { xs: '80%', sm: '20%' },
                    marginTop: 8,
                    height: '800px',
                    overflow: 'scroll',



                }}
            >
                <Typography variant="h1" sx={{ margin: 5, fontWeight: 'light' }}> Register </Typography>


                <TextField
                    id="Nom"
                    label="Nom"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                        style: {
                            color: '#222222',
                        },
                    }}
                />
                <TextField
                    id="Cognom"
                    label="Cognom"
                    variant="outlined"
                    fullWidth
                    margin="normal"
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
                    fullWidth

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
                    fullWidth
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
                    fullWidth
                    margin="normal"
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
                    fullWidth
                    margin="normal"
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
                    fullWidth
                    margin="normal"
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
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                        style: {
                            color: '#222222',
                        },
                    }}
                />

                <TextField

                    margin="normal"
                    required
                    fullWidth
                    name="Repetir password"
                    label="Repetir password"

                    id="password"
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
                <Button
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
            </Box>



        </>
    )
}

export default Register