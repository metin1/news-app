import React from 'react'
import Box from 'components/Box'

import InternalLink from 'components/Link/InternalLink'
import { useDispatch, useSelector } from 'react-redux'
import { isAuthenticatedSelector } from 'store/selectors'
import { logout } from 'store/auth/authActions'

const Navigation = () => {
  const dispatch = useDispatch()
  const isAuthenticated = useSelector(isAuthenticatedSelector)
  console.log(`LL: Navigation -> isAuthenticated`, isAuthenticated)

  const handleLogout = () => {
    dispatch(logout())
  }

  return (
    <Box
      as='nav'
      display='flex'
      justifyContent='space-around'
      alignItems='center'
      width='100%'
      maxWidth={270}
      flexDirection='column'
      marginRight='12px'
    >
      <Box
        as='ul'
        margin={0}
        padding={0}
        display='flex'
        flexDirection='row'
        justifyContent='flex-end'
        minWidth='220'
        width='100%'
        maxWidth={270}
      >
        <li>
          <InternalLink to='/feed'>Feeds</InternalLink>
        </li>
        {isAuthenticated && (
          <li>
            <InternalLink to='/profile'>Profile</InternalLink>
          </li>
        )}
        {isAuthenticated ? (
          <li>
            <InternalLink onClick={handleLogout}>Logout</InternalLink>
          </li>
        ) : (
          <li>
            <InternalLink to='/login'>Login</InternalLink>
          </li>
        )}
      </Box>
    </Box>
  )
}

export default Navigation
