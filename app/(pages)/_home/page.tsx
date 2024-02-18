'use client'
import React from 'react';
import Link from 'next/link';
import Header from '@/app/components/Header';
import { Typography, Grid, Button,Box, Paper } from '@mui/material';
import { ArrowRightOutlined } from '@mui/icons-material';
import Banner from '@/public/Banner.png';
import Image from 'next/image';
import { Suspense } from 'react';
import LoadingSpinner from '@/app/components/LoadingSpinner';
import CardItem from '@/app/components/CardItem';
import Carousel from '@/app/components/Carousel';
import Footer from '@/app/components/Footer';
const HomePage = () => {
  return (
    <>
      <Suspense fallback={<LoadingSpinner/>}>
      <Header />
      <Box>

      <Image style={{ width: '82%', marginLeft: '8%' }} src={Banner} alt="banner" />
      <Box style={{ backgroundColor: "#F8FAFB", paddingBottom: '60px' }}>
        <Box style={{ width: "86%", marginLeft: '8%' }}>
          <Grid container alignItems="center" sx = {{paddingTop: "30px"}}>
            <Grid item = {true} xs={6}>
              <Typography variant="h4" component="span" style={{ fontWeight: '500', color: '#324552' }}>Popular books</Typography>
            </Grid>
            <Grid item = {true} xs={6} style={{ textAlign: 'right' }}>
              <Button style={{  fontWeight: '500', color: '#324552', textTransform: 'none', paddingRight: '20px' }} endIcon = {<ArrowRightOutlined/>}>
                See All
              </Button>
            </Grid>
            <Grid container spacing={3} alignItems="right" sx={{ marginTop: "0px" }}>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((index) => (
                <Grid item = {true} xs={2.4} key={index} sx={{ marginTop: "10px" }}>
                  <CardItem />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Box>
        <Box style={{ width: "86%", marginLeft: '8%' , marginTop: "60px"}}>
          <Grid container alignItems="center">
            <Grid item = {true} xs={6}>
              <Typography variant="h4" component="span" style={{ fontWeight: '500', color: '#324552' }}>New arrival books</Typography>
            </Grid>
            <Grid item = {true} xs={6} style={{ textAlign: 'right' }}>
              <Button style={{  fontWeight: '500', color: '#324552', textTransform: 'none', paddingRight: '20px' }} endIcon = {<ArrowRightOutlined/>}>
                See All
              </Button>
            </Grid>
            <Grid container spacing={3} alignItems="right" sx={{ marginTop: "0px" }}>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((index) => (
                <Grid item = {true} xs={2.4} key={index} sx={{ marginTop: "10px" }}>
                  <CardItem />
                </Grid>
              ))}
            </Grid>

          </Grid>
        </Box>
      </Box>
        <Box sx={{ flexGrow: 1 ,width: '86%', marginLeft: '8%', paddingBottom: '20px' }}>
            <Carousel/>
        </Box>
      
      </Box>
      <Footer />
      </Suspense>
    </>
  );
}

export default HomePage;
