import { Container } from '@mui/system';
import React from 'react';
import { Hero, JobsContainer, Navbar } from '../components';

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <JobsContainer />
    </>
  )
}

export default LandingPage