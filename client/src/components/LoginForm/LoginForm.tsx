import React from 'react'

import { login } from 'store/auth/authActions'
import { useDispatch, useSelector } from 'react-redux'

import { useFormik } from 'formik'

import * as Yup from 'yup'
import Box from 'components/Box'
import Input from 'components/Input'

const Schema = Yup.object().shape({
  username: Yup.string()
    .min(3, 'Username must be minimum 3 characters')
    .max(20, 'Username must be maximum 20 characters')
    .required('Username field is required.'),
  password: Yup.string()
    .min(4, 'Password must be minimum 4 characters')
    .max(20, 'Password must be maximum 20 characters')
    .required('Password is required'),
})

const initialValues = {
  username: '',
  password: '',
}
const Login = () => {
  const dispatch = useDispatch()

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema: Schema,
    onSubmit: async values => {
      dispatch(login(values.username, values.password))
    },
  })

  return (
    <form onSubmit={formik.handleSubmit}>
      <Box
        width={400}
        margin='0 auto'
        display='flex'
        flexWrap='wrap'
        marginTop='80px'
        boxShadow='0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)'
        borderRadius='4px'
        color='#000000de'
        backgroundColor='detail'
      >
        <Box
          color='primary'
          backgroundColor='card'
          width='100%'
          fontSize={26}
          textAlign='center'
          display='flex'
          padding='16px'
          alignItems='center'
        >
          Login App
        </Box>
        <Box padding={4} display='flex' flexDirection='column' width='100%'>
          <Input
            label='Username'
            id='username'
            type='text'
            name='username'
            error={
              formik.touched.username && (formik.errors.username as string)
            }
            fullWidth
            onChange={formik.handleChange}
            value={formik.values?.username || ''}
          />
          <Input
            label='Password'
            id='password'
            type='password'
            name='password'
            onChange={formik.handleChange}
            required
            error={formik.touched.username && formik.errors.password}
            value={formik.values?.password || ''}
            placeholder='Username'
          />
          <Box display='flex' justifyContent='center' width='100%'></Box>
          <Box
            as='button'
            color='primary'
            backgroundColor='card'
            type='submit'
            width='100%'
            height={48}
            fontSize={16}
            fontWeight={600}
          >
            Login
          </Box>
        </Box>
      </Box>
    </form>
  )
}

export default Login
