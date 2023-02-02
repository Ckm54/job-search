import { Box } from '@mui/material'
import React from 'react'
import SearchBar from './SearchBar/SearchBar'

type Props = {}

const AllJobs = (props: Props) => {
  return (
    <Box flexGrow={1}>
      <SearchBar />
    </Box>
  )
}

export default AllJobs