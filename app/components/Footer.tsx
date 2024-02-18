'use client'
import Image from 'next/image'
import FooterBanner from '../../public/Footer.png'
import FooterLine from '../../public/FooterLine.png'
import {Grid, Typography,Box} from '@mui/material'
const Footer = () => {
    return (
        <Box sx = {{backgroundColor:'#F8FAFB', width: '100%'}}>
        <Grid container spacing = {3} sx = {{width: '86%', marginLeft: '10%', textAlign: 'left', marginTop: 0}}>
            <Grid item = {true} xs = {2.4}>
                <Typography variant = 'h4' component = 'div' gutterBottom sx = {{fontSize: '23px', fontWeight: '600', color: '#21717A'}}>Shop with us</Typography>
                <Typography variant = 'h5' gutterBottom sx = {{fontSize: '15px', fontWeight: '400'}}>Advance Search</Typography>
                <Typography variant = 'h5' gutterBottom sx = {{fontSize: '15px', fontWeight: '400'}} >My Account</Typography>
                <Typography variant = 'h5' gutterBottom sx = {{fontSize: '15px', fontWeight: '400'}}>My Order</Typography>
                <Typography variant = 'h5' gutterBottom sx = {{fontSize: '15px', fontWeight: '400'}}>View Basket</Typography>
            </Grid>
            <Grid item = {true} xs = {2.4}>
                <Typography variant = 'h4' component = 'div' gutterBottom sx = {{fontSize: '23px', fontWeight: '600', color: '#21717A'}}>Sell with us</Typography>
                <Typography variant = 'h5' gutterBottom sx = {{fontSize: '15px', fontWeight: '400'}}>Start Selling</Typography>
                <Typography variant = 'h5' gutterBottom sx = {{fontSize: '15px', fontWeight: '400'}}>Refer a Seller</Typography>
            </Grid>
            <Grid item = {true} xs = {2.4}>
                <Typography variant = 'h4' component = 'div' gutterBottom sx = {{fontSize: '23px', fontWeight: '600', color: '#21717A'}}>About us</Typography>
                <Typography variant = 'h5' gutterBottom sx = {{fontSize: '15px', fontWeight: '400'}}>About PreKnow</Typography>
                <Typography variant = 'h5' gutterBottom sx = {{fontSize: '15px', fontWeight: '400'}}>Privacy Policy</Typography>
                <Typography variant = 'h5' gutterBottom sx = {{fontSize: '15px', fontWeight: '400'}}>Term & Conditions</Typography>
            </Grid>
            <Grid item = {true} xs = {2.4}>
                <Typography variant = 'h4' component = 'div' gutterBottom sx = {{fontSize: '23px', fontWeight: '600', color: '#21717A'}}>Find help</Typography>
                <Typography variant = 'h5' gutterBottom sx = {{fontSize: '15px', fontWeight: '400'}}>Help</Typography>
                <Typography variant = 'h5' gutterBottom sx = {{fontSize: '15px', fontWeight: '400'}}>Customer Support</Typography>
            </Grid>
            <Grid item = {true} xs = {2.4}>
                <Typography variant = 'h4' component = 'div' gutterBottom sx = {{fontSize: '23px', fontWeight: '600', color: '#21717A'}}>Follow us</Typography>
                <Typography variant = 'h5' gutterBottom sx = {{fontSize: '15px', fontWeight: '400'}}>Facebook</Typography>
                <Typography variant = 'h5' gutterBottom sx = {{fontSize: '15px', fontWeight: '400'}}>Youtube</Typography>
                <Typography variant = 'h5' gutterBottom sx = {{fontSize: '15px', fontWeight: '400'}}>Instagram</Typography>
                <Typography variant = 'h5' gutterBottom sx = {{fontSize: '15px', fontWeight: '400'}}>Tiktok</Typography>
            </Grid>
            <Grid item = {true} xs = {12} sx = {{textAlign: 'center'}}>
                <Image src = {FooterBanner} alt = 'FooterBanner' style = {{marginLeft: '-8%'}}/>
            </Grid>
        </Grid>
        <Image src = {FooterLine} alt = 'FooterLine' style = {{width: '100%', marginTop: "40px"}}/>
        </Box>
    )
}
export default Footer