import { useState } from 'react';
import { Grid, IconButton,CardContent, Typography, Box  } from '@mui/material';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';
import SwipeableViews from 'react-swipeable-views';
import Image from 'next/image';
import bookType from "./../utils/data";

const itemsPerPage = 5;
const items = bookType.map(item => (
    <CardContent key={item.key} sx={{ textAlign: 'center', paddingBottom: 0, paddingTop: 1, position: 'relative' ,borderRadius: '2px', width: '100%', height: '100%' }}>
        <Image
            src={item.imageUrl}
            alt="imagebook"
            width={164}
            height={219}
        />
        <Typography variant="h5" component="div" sx={{ fontSize: '16px', fontWeight: '600', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', position: 'relative', zIndex: '1' }}>
            {item.name}
        </Typography>
        <Box style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '50%', backgroundColor: '#DAE2E8', zIndex: '-1' }}></Box>
    </CardContent>
));

const Carousel= () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const numPages = Math.ceil(items.length / itemsPerPage);

    const handleNext = () => {
        setActiveIndex((prevIndex) => (prevIndex === numPages - 1 ? 0 : prevIndex + 1));
    };

    const handlePrev = () => {
        setActiveIndex((prevIndex) => (prevIndex === 0 ? numPages - 1 : prevIndex - 1));
    };

    const renderPage = (pageIndex: number) => {
        const startIndex = pageIndex * itemsPerPage;
        const endIndex = Math.min(startIndex + itemsPerPage, items.length);

        return (
            <Grid container spacing={3} alignItems="center" justifyContent="center" key={pageIndex}>
                {items.slice(startIndex, endIndex).map((item, index) => (
                    <Grid item = {true} xs={2.4} key={startIndex + index}>
                        {item}
                    </Grid>
                ))}
            </Grid>
        );
    };

    return (
        <Grid container alignItems="center" justifyContent="center">
            <Grid item = {true} xs={3} sx = {{marginBottom: "20px"}}>
                <IconButton onClick={handlePrev}>
                    <ChevronLeft />
                </IconButton>
            </Grid>
            <Grid item = {true} xs={6} sx = {{textAlign: 'center',marginBottom: "20px"}}>
                <Typography variant="h4" component="span" style={{ fontWeight: '500', color: '#324552' }}>Book catergories</Typography>
            </Grid>
            <Grid item = {true} xs={3} sx = {{textAlign: 'right', marginBottom: "20px"}}>
                <IconButton onClick={handleNext}>
                    <ChevronRight />
                </IconButton>
            </Grid>
            <Grid item = {true} xs={12} sx = {{borderRadius: '2px'}}>
                <SwipeableViews index={activeIndex} onChangeIndex={setActiveIndex} enableMouseEvents>
                    {Array.from({ length: numPages }, (_, pageIndex) => renderPage(pageIndex))}
                </SwipeableViews>
            </Grid>
        </Grid>
    );
};

export default Carousel;
