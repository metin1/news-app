import React from 'react'
import Box from 'components/Box'
import styled from 'styled-components'

const StyledInput = styled.input`
  max-width: 100%;
  margin-top: 4px;
  padding: 11px 13px;
  border-radius: 4px;
  outline: 0;
  border: 1px solid rgba(245, 245, 245, 0.7);
  font-size: 14px;
  transition: all 0.3s ease-out;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.1), 0 1px 1px rgba(0, 0, 0, 0.1);
  :focus,
  :hover {
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.15), 0 1px 5px rgba(0, 0, 0, 0.1);
  }
`

export const Input = (props: any) => {
  return (
    <Box
      width='100%'
      mb={4}
    >
      {props.label && <Box as='label' mb={1} htmlFor={props.name}>{props.label}</Box>}
      <Box
        {...props}
        as={StyledInput}
        width={props.fullWidth ? '100%' : 'inherit'}
      />
      {props.error && (
        <Box
          width='max-content'
          color='red'
          fontSize={1}
          mt='0.5rem'
          id={`${props.id}-error`}
        >
          {props.error}
        </Box>
      )}
    </Box>
  )
}

Input.displayName = 'Input'

Input.defaultProps = {
  type: 'text',
  fullWidth: true
}

export default Input
