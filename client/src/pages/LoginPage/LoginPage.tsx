import React from 'react'

import LoginForm from 'components/LoginForm/LoginForm'
import { isAuthenticatedSelector } from 'store/selectors'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const  LoginPage = () => {
  const navigate = useNavigate()
  const isAuthenticated = useSelector(isAuthenticatedSelector)

  if (isAuthenticated) {
    navigate('/profile')
  }

  return (
    <LoginForm />
  )
}

export default LoginPage
