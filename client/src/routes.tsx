import React from 'react'
import { Route, Routes } from 'react-router-dom'

import HomePage from 'pages/HomePage'
import NotFoundPage from 'pages/NotFoundPage'
import Footer from 'shared/layout/footer'
import Header from 'shared/layout/header'

import Box from 'components/Box'
import Container from 'components/Container'
import LoginPage from 'pages/LoginPage'
import ProfilePage from 'pages/ProfilePage'

const AppRoutes = () => {
  return (
    <Box>
      <Header />
        <Container>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/feed' element={<HomePage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/profile' element={<ProfilePage />} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </Container>
      <Footer />
    </Box>
  )
}
export default AppRoutes
