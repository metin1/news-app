import React from 'react'

import Box from 'components/Box'

const Footer: React.FC = () => {
  return (
    <Box
      m='auto'
      display='flex'
      justifyContent='center'
      alignItems='center'
      bg='lightgrey'
      backgroundColor='footer'
      width='100%'
      height='48px'
      maxHeight='48px'
      textAlign='center'
    >
      News Feeds © This is News Feeds page design by Metin
    </Box>
  )
}

export default Footer
