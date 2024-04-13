import React from "react";
import Box from '@mui/material/Box';
import Container from "@mui/material/Container";
import { ThemeProvider } from "@mui/material/styles";
import fontcolorTheme from "./fontColorTheme";
import { Button, Typography, FormControl, FormLabel, Input, Link } from "@mui/material";
import logo from "./images/logo.png"

function SignUpStudent() {
    return (
        <ThemeProvider theme={fontcolorTheme}>
            <Box sx={{
                display: 'flex',
                flexDirection: 'row',
                height: '100vh'  // Set height to match the viewport height
            }}>
                <Container sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: {
                        xs: '0%',
                        sm: '40%',
                        md: '40%'
                    },
                    height: {
                        xs: '0%',
                        sm: '100%',
                        md: '100%'
                    },
                    p: {
                        xs: '0%'
                    },
                    bgcolor: '#79A8A9',  // corrected color name
                }}>

                    <Container sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '100%', // Ensure the container takes up the full width
                        height: '100%', // Ensure the container takes up the full height
                        overflow: 'hidden' // Hide any overflow content      
                    }}>
                        {/* <img src={user1} style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} alt="Sewing Machine" /> */}
                    </Container>
                </Container>

                <Container sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: {
                        xs: '100%',
                        sm: '60%',
                    },
                    height: {
                        xs: '100%',
                        sm: '100%'
                    },
                    bgcolor: { xs: '#79A8A9', sm: 'white', md: 'white' }  // corrected color name
                }}>
                    <main >
                        <Box
                            sx={{
                                width: 340,
                                mx: 'auto', // margin left & right
                                my: 4, // margin top & bottom
                                py: 3, // padding top & bottom
                                px: 2, // padding left & right
                                display: 'flex',
                                flexDirection: 'column',
                                gap: 2,
                                boxShadow: 'md',
                                bgcolor: 'white',
                                borderRadius: '16px'
                            }}
                            variant="outlined"
                        >
                            <div sx={{ mb: '10px' }}>
                                <Typography variant="h4" component="h1">
                                    <b>Sign in  <img src={logo} style={{ width: '100px', m: '0px' }} /></b>
                                </Typography>
                            </div>

                            <Box sx={{ 
                                display: 'flex',
                                flexDirection: 'row'}}>
                                <FormControl sx={{ m: '10px' }} >
                                    <FormLabel sx={{ textAlign: "left" }}>Username</FormLabel>
                                    <Input
                                        name="username"
                                        type="text"
                                        placeholder="Vedant"
                                    />
                                </FormControl>

                                <FormControl sx={{ m: '10px' }} >
                                    <FormLabel sx={{ textAlign: "left" }}>Passsword</FormLabel>
                                    <Input
                                        name="password"
                                        type="password"
                                        placeholder="password"
                                    />
                                </FormControl>
                            </Box>
                            <Box sx={{ 
                                display: 'flex',
                                flexDirection: 'row'}}>                                
                                <FormControl sx={{ m: '10px' }}>
                                    <FormLabel sx={{ textAlign: "left" }}>Email</FormLabel>
                                    <Input
                                        name="email"
                                        type="email"
                                        placeholder="johndoe@email.com"
                                    />
                                </FormControl>

                                <FormControl sx={{ m: '10px' }}>
                                    <FormLabel sx={{ textAlign: "left" }}>Phone</FormLabel>
                                    <Input
                                        name="phonr"
                                        type="number"
                                        placeholder="1234567890"
                                    />
                                </FormControl>
                            </Box>
                            <Button sx={{ mt: 1 }}>Log in</Button>
                            <Typography fontSize="body2" sx={{ alignSelf: 'center' }}>
                                Already have an account?
                                <Link href="/loginStudent">Log in</Link>
                            </Typography>
                            <Typography fontSize="body2" sx={{ alignSelf: 'center' }}>
                                Go back to Home Page
                                <Link href="/home">Home</Link>
                            </Typography>
                        </Box>
                    </main>
                </Container>
            </Box>
        </ThemeProvider>
    );
};

export default SignUpStudent;