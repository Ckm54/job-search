import React from 'react';
import { Footer, Hero, JobsContainer, Navbar } from '../components';
import { Toaster } from 'react-hot-toast';

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <JobsContainer />
      <Toaster />
      <Footer />
    </>
  )
}

export default LandingPage