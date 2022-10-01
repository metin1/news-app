import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  width: fit-content;
  padding: 8px 16px;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.text};
  &:hover {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.link};
  }
`

const InternalLink = (props: any) => {
  return (
    <StyledLink {...props} />
  )
}

export default InternalLink
