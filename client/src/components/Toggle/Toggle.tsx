import React from 'react'
import styled from 'styled-components'

const CheckBoxWrapper = styled.div`
  position: relative;
`

const CheckBoxLabel = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  width: 42px;
  height: 26px;
  border-radius: 15px;
  background: ${({ theme }) => theme.colors.lightGrey};
  cursor: pointer;
  &::after {
    content: '';
    display: block;
    border-radius: 50%;
    width: 18px;
    height: 18px;
    margin: 3px;
    background: ${({ theme }) => theme.colors.lightGrey};
    box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
    transition: 0.2s;
  }
`
const CheckBox = styled.input`
  opacity: 0;
  z-index: 1;
  border-radius: 15px;
  width: 42px;
  height: 26px;
  &:checked + ${CheckBoxLabel} {
    background: ${({ theme }) => theme.colors.background};
    &::after {
      content: '';
      display: block;
      border-radius: 50%;
      width: 18px;
      height: 18px;
      margin-left: 21px;
      transition: 0.2s;
    }
  }
`

export interface IToggle {
  status: boolean
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const Toggle = (props: IToggle) => {
  return (
    <CheckBoxWrapper>
      <CheckBox
        onChange={props.onChange}
        id='checkbox'
        type='checkbox'
        checked={props.status}
      />
      <CheckBoxLabel htmlFor='checkbox' />
    </CheckBoxWrapper>
  )
}

export default Toggle
