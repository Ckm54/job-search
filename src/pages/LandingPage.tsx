import { Container } from '@mui/system';
import React from 'react';
import { Hero, Navbar } from '../components';

const LandingPage = () => {
  return (
    <Container>
      <Navbar />
      <Hero />
    </Container>
  )
}

export default LandingPage