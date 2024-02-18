'use client'
import React from 'react';
import Link from 'next/link';
import { AppBar, Toolbar, IconButton, Button, Typography, Grid, ButtonGroup,TextField } from '@mui/material';

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Image from 'next/image';
import Picture from "../../public/Logo.png";
const Header: React.FC = () => {
  return (
    
    <AppBar position="static" sx={{ boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)", backgroundColor: '#fff' }}>
      <Toolbar>
        <Grid container alignItems="center">
          <Grid item = {true} xs={3}>
            <Link href='/' passHref>
              
                <Image src={Picture} alt="picture" width={160} height={60} style = {{marginLeft: '100px '}}/>
    
            </Link>
          </Grid>
          <Grid item = {true} xs={3}>
            <input
              type="text"
              placeholder="Tìm kiếm"
              style={{
                padding: '8px',
                borderRadius: '4px',
                border: '1px solid lightgray',
                marginRight: '10px',
                width: '100%'
              }}
            />
          </Grid>
          <Grid item = {true} xs={6}>
            <Link href='/home' passHref>
              <Button color = 'inherit' variant = 'text' startIcon = {<ShoppingCartIcon/>} sx={{ color: '#000', marginLeft: '30px', fontWeight: '300', textTransform: 'none', '& .MuiButton-startIcon': { marginRight: '4px' } }}>
                  Giỏ hàng
              </Button>
            </Link>
            <Link href='/faq' passHref>
              <Button color="inherit" style={{ color: '#000', marginLeft: '20px', fontWeight: '300', textTransform: 'none' }}>FAQ</Button>
            </Link>
            <Link href='/contact' passHref>
              <Button color="inherit" style={{ color: '#000', marginLeft: '20px', fontWeight: '300', textTransform: 'none' }}>Liên hệ</Button>
            </Link>
            <Link href='/signup'>
              <Button  variant = 'outlined'  sx = {{marginLeft: '30px', borderColor: '#28A745', color: "#28A745", fontWeight: '300', textTransform: 'none'}}>
                Trở thành người bán
              </Button>
            </Link>
            <Link href='/login' passHref>
              <Button variant = 'outlined' sx = {{marginLeft: '10px', borderColor: '#28A745', color: "#28A745", fontWeight: '300', textTransform: 'none'}}>Đăng nhập</Button>
            </Link>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
