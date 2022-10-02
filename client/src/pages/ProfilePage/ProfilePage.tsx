import React from 'react'

import { isAuthenticatedSelector } from 'store/selectors'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Box from 'components/Box'
import InternalLink from 'components/Link/InternalLink'
import Button from 'components/Button'

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
        border='1px solid border'
        color='text'
        alignItems='left'
        backgroundColor='card'
        flexDirection='column'
        p={3}
        borderRadius='4px'
        boxShadow='0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)'
      >
        <Box as='h3' py={2}>
          Welcome to the profile page
        </Box>
        <Box>Username: user</Box>
        <Box>Password: ****</Box>
        <Box as={InternalLink} display='flex' justifyContent='center' width='100%' to='/feed'>
          <Button color='contrastText' bg='detail'>Go to Feeds</Button>
        </Box>
      </Box>
    </Box>
  )
}

export default ProfilePage
