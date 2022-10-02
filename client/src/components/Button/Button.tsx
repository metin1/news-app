import React from 'react'
import Box from 'components/Box'

export const Button = (props: any) => {
  return (
    <Box
      as='button'
      color={props.color || 'primary'}
      backgroundColor={props.bg || 'card'}
      type='submit'
      width='100%'
      height={48}
      fontSize={16}
      fontWeight={600}
    >
      {props.children}
    </Box>
  )
}
export default Button
