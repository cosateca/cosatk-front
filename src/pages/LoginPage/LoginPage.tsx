import * as React from "react";
import * as ReactDOM from "react-dom/client";
import Button from "@mui/material/Button";
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';


const LoginPage =  () =>{
    return (
        <>
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <h1> Benvingut </h1>
                <Box component="form" sx={{ mt: 1 }}>

                    <InputLabel >
                        Email
                    </InputLabel>

                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        name="email"


                    />
                    <InputLabel >
                        Password
                    </InputLabel>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password"

                        type="password"
                        id="password"

                        sx={{

                            borderRadius: '0px',


                        }}

                    />
                    {/* <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            /> */}
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{
                            mt: 3,
                            mb: 2,
                            borderRadius: '0px',
                            bgcolor: 'rgba(103, 183, 225, 1)'


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
            </Box>
        </>
    )
}

export default LoginPage;