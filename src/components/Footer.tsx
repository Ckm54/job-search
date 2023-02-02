import { Box, Container, Typography } from '@mui/material'
import React from 'react'
import { palleteColor } from '../themes/palleteColor'

type Props = {}

const Footer = (props: Props) => {
  return (
    <Box sx={{ borderTop: `1px solid ${palleteColor.secondary}` }}>
      <Container sx={{padding: '10px 0'}}>
        <Typography>Footer section</Typography>
      </Container>
    </Box>
  )
}

export default Footer