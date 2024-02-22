'use client'
import {useState} from 'react'
import Image from 'next/image'
import LogoLogin from '@/public/LogoLogin.png'
import BackgroundImage from '@/public/BackgroundLogin.png'
import GoogleIcon from '@/public/google.svg'
import FacebookIcon from '@/public/facebook.svg'
import {Divider, Typography, Grid, Paper,TextField,InputLabel, FormControl,OutlinedInput,InputAdornment, IconButton, Button,Box  } from "@mui/material"
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Link from 'next/link'
const Register = () => {
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [rePassword, setRePassword] = useState('')
    const [phone, setPhone] = useState('')

    const handleRegister = () => {
        console.log('Name', name)
        console.log('Email', email)
        console.log('Password', password)
        console.log('Phone', phone)
    }
    return (
        <Grid container sx={{ height: '100vh', backgroundImage: `url(${BackgroundImage.src})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
        <Grid item xs = {3}></Grid>
        <Grid item xs={6} sx={{ alignItems: 'stretch', justifyContent: 'center', display: 'flex', flexDirection: 'column' }}>
            <Paper sx={{ height: '85%', textAlign: 'center' ,width: '60%', marginLeft: '15%'}} elevation={1}>
                    <Image src = {LogoLogin} alt = "LoginLogoImage" style = {{width: '80%', height: '12%', marginTop: '5%   '}}/>

                <Grid item xs = {12}>
                    <Typography variant = 'h6' component = 'div' sx = {{textAlign: 'left', marginLeft: '15%', fontSize: '15px', fontWeight: '400', marginTop: '5%'}}>Email</Typography>
                    <TextField
                        variant="outlined"
                        required
                        sx = {{width: '70%'}}
                        id="email"
                        label="Enter your Email"
                        autoComplete="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        size = "small"
                    />
                </Grid>
                <Grid item xs = {12}>
                    <Typography variant = 'h6' component = 'div' sx = {{textAlign: 'left', marginLeft: '15%', fontSize: '15px', fontWeight: '400', marginTop: '5%'}}>Name</Typography>
                    <TextField
                        variant="outlined"
                        required
                        sx = {{width: '70%'}}
                        id="email"
                        label="Enter your Name"
                        autoComplete="email"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        size = "small"
                    />
                </Grid>
                <Grid item xs = {12}>
                    <Typography variant = 'h6' component = 'div' sx = {{textAlign: 'left', marginLeft: '15%', fontSize: '15px', fontWeight: '400', marginTop: '5%'}}>Password</Typography>
                    <TextField
                        variant="outlined"
                        required
                        sx = {{width: '70%'}}
                        id="email"
                        label="Enter Password"
                        autoComplete="email"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        size = "small"
                    />
                </Grid>
                <Grid item xs = {12}>
                    <Typography variant = 'h6' component = 'div' sx = {{textAlign: 'left', marginLeft: '15%', fontSize: '15px', fontWeight: '400', marginTop: '5%'}}>Confirm Password</Typography>
                    <TextField
                        variant="outlined"
                        required
                        sx = {{width: '70%'}}
                        id="email"
                        label="Enter Password x2"
                        autoComplete="email"
                        value={rePassword}
                        onChange={(e) => setRePassword(e.target.value)}
                        size = "small"
                    />
                </Grid>
                <Grid item xs = {12}>
                    <Typography variant = 'h6' component = 'div' sx = {{textAlign: 'left', marginLeft: '15%', fontSize: '15px', fontWeight: '400', marginTop: '5%'}}>Phone Number</Typography>
                    <TextField
                        variant="outlined"
                        required
                        sx = {{width: '70%'}}
                        id="email"
                        label="Enter your Phone Number"
                        autoComplete="phone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        size = "small"
                    />
                </Grid>
                <Grid item xs = {12} sx = {{display: 'flex',flexDirection: 'column'}}>
                                <Button variant = 'contained' sx = {{bgcolor: '#31AAB7', color: 'white', marginTop: '5%', width: '70%', marginLeft: '15%'}} onClick = {handleRegister}>Sign up</Button>
                                <Box sx = {{display: 'flex', justifyContent: 'center', flexDirection: 'row', alignItems: 'stretch', marginTop: '3%'}}>

                                    <Typography variant = 'h5' component = 'div'
                                        sx = {{ color: '#324552', fontSize: '15px', fontWeight: '400'}}>
                                        Already have account? 
                                    </Typography>
                                    
                                        <Typography variant = 'h5' component = 'div'
                                            sx = {{ color: '#7D92A1', fontSize: '15px', fontWeight: '600', marginLeft: '2%'}}>
                                           <Link href='/login' passHref >
                                            Sign in 
                                            </Link>
                                        </Typography>
                                </Box>
                        </Grid>
            </Paper>
        </Grid>

        <Grid item xs = {3}></Grid>
        
   </Grid>
    )
}
export default Register