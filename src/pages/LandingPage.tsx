import { Container } from '@mui/system';
import React from 'react';
import { Footer, Hero, JobsContainer, Navbar } from '../components';

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <JobsContainer />
      <Footer />
    </>
  )
}

export default LandingPage