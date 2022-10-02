import React from 'react'

import { isAuthenticatedSelector } from 'store/selectors'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Box from 'components/Box'

function ProfilePage() {
  const navigate = useNavigate()
  const isAuthenticated = useSelector(isAuthenticatedSelector)

  if (!isAuthenticated) {
    navigate('/login')
  }

  return (
    <Box
      display='flex'
      width='100%'
      height='80vh'
      justifyContent='center'
      alignItems='center'
    >
      <Box
        display='flex'
        width='100%'
        maxWidth='300px'
        height='100%'
        maxHeight='200px'
        backgroundColor='card'
        border='1px solid border'
        color='text'
        alignItems='left'
        flexDirection='column'
        p={3}
      >
        <Box as='h3' py={2}>
          Welcome to the profile page
        </Box>
        <Box>
          Username: user
        </Box>
        <Box>
          Password: ****
        </Box>
      </Box>
    </Box>
  )
}

export default ProfilePage
