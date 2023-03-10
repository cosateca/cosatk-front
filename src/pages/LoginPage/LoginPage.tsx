import * as React from "react";
import Button from "@mui/material/Button";
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import { Typography } from "@mui/material";


const LoginPage = () => {
    return (
        <>
            <Box
                sx={{
                    margin: '0 auto',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    width: { xs: '80%', sm: '20%' },
                    marginTop : 8,
                    
                    
                }}
            >
                 <Typography variant="h1" sx = {{ margin: 5 , fontWeight: 'light'}}> Benvingut </Typography> 
                
                



                    <TextField
                        id="Email"                 
                        label="Email"
                        variant="outlined"
                        fullWidth
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
                        name="password"
                        label="password"
                        
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
                            width: {xs: '100%', sm: '50%'}
                            
                


                        }}

                    >
                        Login
                    </Button>
                    

                    <Grid item xs>
                        <Link href="#" variant="body2">
                            Has perdut la contrassenya ?
                        </Link>
                    </Grid>
                    <Grid item>
                        <Link href="#" variant="body2">
                            {"No tens compte ? Registra't !"}
                        </Link>
                    </Grid>

                </Box>
           
        </>
    )
}

export default LoginPage;