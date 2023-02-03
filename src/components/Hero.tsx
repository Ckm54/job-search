import { Container, Stack, Typography } from '@mui/material';
import React from 'react';
import { palleteColor } from '../themes/palleteColor';

const Hero = () => {
  return (
    <Container sx={{padding: '10px 20px 60px 30px'}}>
      <Stack width={{lg: 3/4}} gap={1}>
        <Typography fontSize={{lg: '64px', xs: '30px'}} fontWeight={'bold'} >Find <span style={{color: `${palleteColor.primary}`}}>you</span> a job that best fits your lifestyle.</Typography>
        <Typography color={`${palleteColor.grayPallete}`} fontSize={{lg: '24px'}} >Discover the best opportunities around you</Typography>
      </Stack>
    </Container>
  )
}

export default Hero