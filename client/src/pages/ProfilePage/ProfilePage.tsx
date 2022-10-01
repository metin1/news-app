import React from 'react'

import { isAuthenticatedSelector } from 'store/selectors'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function ProfilePage() {
  const navigate = useNavigate()
  const isAuthenticated = useSelector(isAuthenticatedSelector)

  if (!isAuthenticated) {
    navigate('/login')
  }

  return <div>Welcome to the profile page</div>
}

export default ProfilePage
