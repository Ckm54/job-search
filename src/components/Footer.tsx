import { Box, Container, Typography } from '@mui/material'
import React from 'react'
import { palleteColor } from '../themes/palleteColor';
import Logo from '../assets/logo_w_force.png';

type Props = {}

const Footer = (props: Props) => {
  return (
    <Box sx={{ borderTop: `1px solid ${palleteColor.secondary}` }}>
      <Container sx={{padding: '10px 0'}}>
      <Box
              component="div"
              sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
            >
              <img src={Logo} alt="logo" height={50} width='auto' />
            </Box>
      </Container>
    </Box>
  )
}

export default Footer