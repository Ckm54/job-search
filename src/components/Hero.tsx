import { Container, Stack, Typography } from '@mui/material';
import React from 'react';
import { palleteColor } from '../themes/palleteColor';

const Hero = () => {
  return (
    <Container>
      <Stack width={{lg: 3/4}}>
        <Typography fontSize={{lg: '64px', xs: '30px'}} fontWeight={'bold'} >Find a job that best fits your lifestyle.</Typography>
        <Typography color={`${palleteColor.grayPallete}`} fontSize={{lg: '24px'}} >Discover the best opportunities around you</Typography>
      </Stack>
    </Container>
  )
}

export default Hero