import React from 'react'
import { Link } from 'react-router-dom'

import Box from 'components/Box'

const NotFound = () => (
  <Box
    display='flex'
    flexDirection='column'
    justifyContent='center'
    alignItems='center'
    width='100vw'
    height='100vh'
    pb='12%'
  >
    <Box as='h1'>404</Box>
    <Box my={2}>The Page can&apos;t be found</Box>
    <Link to='/'>
      <Box>Go to Homepage</Box>
    </Link>
  </Box>
)

export default NotFound
