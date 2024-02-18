'use client'
import Image from 'next/image'
import {Card,CardMedia,CardContent,Typography, Grid,Box} from '@mui/material'
const CardItem = () => {
    return(
        <Card sx = {{width: '100%', boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)', borderRadius: 2}}>
            <CardContent sx = {{textAlign: 'center', paddingBottom: 0, paddingTop: 1}}>
                <Image
                    src="https://product.hstatic.net/200000343865/product/27_d55c5a3f109449d3993d7d2a537dd756_5f4ad095ec7640b395775857b25db59a_master.jpg"
                    alt="imagebook"
                    width = {164}
                    height = {219}
                    
                />
            </CardContent>
            <CardContent sx={{ overflow: 'hidden' }}>
                <Typography variant="h5" component="div" sx={{ fontSize: '16px', fontWeight: '600', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                    Name Book 1345465468
                </Typography>
                <Typography variant="body2" color="text.secondary" sx = {{fontSize: '15px'}}>
                    by Authors
                </Typography>
                <Grid container>
                <Grid item xs={6}>
                    <Typography variant="h4" sx={{ fontSize: '20px', color: '#DC3545', fontWeight: '600' }}>
                    240.000đ
                    </Typography>
                </Grid>
                <Grid item xs={6} >
                    <Typography variant="h4" sx={{ fontSize: '16px', textDecoration: 'line-through', color: '#7D92A1', textAlign: 'right' }}>
                    260.000đ
                    </Typography>
                </Grid>
                </Grid>
            </CardContent>
        </Card>
        
    )
}
export default CardItem