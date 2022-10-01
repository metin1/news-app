import React, { ChangeEvent } from 'react'
import { useDispatch } from 'react-redux'
import {  useNavigate } from 'react-router-dom'

import Box from 'components/Box'
import { useTheme } from 'components/ThemeContext/ThemeContext'
import Toggle from 'components/Toggle'

import { setSearch } from 'store/global/globalActions'
import Navigation from './components/Navigation'

const Header: React.FC = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { mode, changeTheme } = useTheme()

  const handleClick = () => {
    navigate(`/`)
  }

  const handleChangeTheme = (e: ChangeEvent<HTMLInputElement>) => {
    changeTheme()
  }

  return (
    <Box bg='card' height='80px' maxHeight='80px'>
      <Box
        m='auto'
        px={3}
        maxWidth='1534px'
        display='flex'
        justifyContent='space-between'
        alignItems='center'
      >
        <Box
          as='h1'
          mx={2}
          color='text'
          onClick={handleClick}
          cursor='pointer'
        >
          News Feeds
        </Box>
        <Box
          display='flex'
          justifyContent='space-between'
          alignItems='center'
          height='40px'
          minWidth={320}
          mx={4}
        >
          <Navigation />
          <Toggle onChange={handleChangeTheme} status={mode !== 'light'} />
        </Box>
      </Box>
    </Box>
  )
}

export default Header
