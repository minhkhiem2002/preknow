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
import { useRouter } from 'next/navigation';
const Login = () => {
    const router = useRouter();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
      };
    const handleLogin = () => {
        console.log('Email', email)
        console.log('Password', password)
        router.push('/');
    }
    return (
           <Grid container sx={{ height: '100vh', backgroundImage: `url(${BackgroundImage.src})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
                <Grid item xs = {3}></Grid>
                <Grid item xs={6} sx={{ alignItems: 'stretch', justifyContent: 'center', display: 'flex', flexDirection: 'column' }}>
                    <Paper sx={{ height: '70%', textAlign: 'center' ,width: '60%', marginLeft: '15%'}} elevation={1}>
                            <Image src = {LogoLogin} alt = "LoginLogoImage" style = {{width: '80%', height: '15%', marginTop: '5%   '}}/>

                        <Grid item xs = {12}>
                            <Typography variant = 'h6' component = 'div' sx = {{textAlign: 'left', marginLeft: '15%', fontSize: '15px', fontWeight: '400', marginTop: '5%'}}>Email</Typography>
                            <TextField
                                variant="outlined"
                                required
                                sx = {{width: '70%'}}
                                id="email"
                                label="Email Address"
                                autoComplete="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                size = "small"
                            />
                        </Grid>
                        <Grid item xs = {12}>
                        <Grid container >
                            <Grid item xs = {6}>
                                <Typography variant = 'h6' component = 'div' sx = {{textAlign:'left', paddingLeft: '30%', fontSize: '15px', fontWeight: '400', marginTop: '8%'}}>Password</Typography>
                            </Grid>
                            <Grid item xs = {6}>
                                <Typography variant = 'h6' component = 'div' sx = {{textAlign:'right', paddingRight: '30%', fontSize: '15px', fontWeight: '400', marginTop: '8%', color: '#7D92A1', textDecoration: 'underline'}}>
                                    <Link href = '/forgotPassword' passHref style ={{color: '#7D92A1'}}> 
                                        Forgot Password?
                                    </Link>
                                </Typography>
                            </Grid>
                        </Grid>
                        <FormControl sx={{ width: '70%' }} size = "small" variant="outlined">
                            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-password"
                                type={showPassword ? 'text' : 'password'}
                                onChange ={(e) => setPassword(e.target.value)}
                                value={password}
                                endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    edge="end"
                                    >
                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                                }
                                label="Password"
                            />
                            </FormControl>
                        </Grid>
                        <Grid item xs = {12} sx = {{display: 'flex',flexDirection: 'column'}}>
                                <Button variant = 'contained' sx = {{bgcolor: '#31AAB7', color: 'white', marginTop: '5%', width: '70%', marginLeft: '15%'}} onClick = {handleLogin}>Continue</Button>
                                <Divider sx = {{width: '70%', marginTop: '4%', color: '#7D92A1', textAlign: 'center', marginLeft: '15%'}}>Or</Divider>
                                <Button variant = 'outlined' sx = {{marginTop: '2%', width: '70%', marginLeft: '15%', border: '1px solid #DAE2E8', textTransform: 'none', color: '#566976'}} startIcon={<Image src={GoogleIcon} alt="Google Icon" width={20} height={20} />}>
                                    Login with Google
                                </Button>
                                <Button variant = 'outlined' sx = {{marginTop: '3%', width: '70%', marginLeft: '15%', border: '1px solid #DAE2E8', textTransform: 'none', color: '#566976'}} startIcon={<Image src={FacebookIcon} alt="Facebook Icon" width={20} height={20} />}>
                                    Login with Facebook
                                </Button>
                                <Box sx = {{display: 'flex', justifyContent: 'center', flexDirection: 'row', alignItems: 'stretch', marginTop: '3%'}}>

                                    <Typography variant = 'h5' component = 'div'
                                        sx = {{ color: '#324552', fontSize: '15px', fontWeight: '400'}}>
                                        Not on Preknow yet? 
                                    </Typography>
                                    
                                        <Typography variant = 'h5' component = 'div'
                                            sx = {{ color: '#7D92A1', fontSize: '15px', fontWeight: '600', marginLeft: '2%'}}>
                                           <Link href='/register' passHref >
                                            Sign up 
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
export default Login
