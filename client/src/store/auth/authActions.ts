import authProvider from 'services/auth.service'

import { AppDispatch } from 'store'
import { setLoading } from 'store/global/globalActions'

import { authSlice } from './authSlice'

import { to } from 'await-to-js'
import get from 'lodash/get'

const actions = authSlice.actions

export const login =
  (username: string, password: string) => async (dispatch: AppDispatch) => {
    dispatch(actions.requestLogin())
    dispatch<any>(setLoading(true))
    const [error, response] = await to(authProvider.login(username, password))
    dispatch<any>(setLoading(false))

    if (error) {
      const errorMessage = get(error, 'response.data.message')
      return dispatch(actions.failureLogin({ errorMessage }))
    }

    const { token } = response.data

    localStorage.setItem('token', token), dispatch(actions.successLogin())
    dispatch(actions.successLogin())
  }

export const clearAuthentication =
  (message: string) => (dispatch: AppDispatch) => {
    dispatch<any>(displayAuthError(message))
    dispatch(actions.clearAuth())
  }

export const displayAuthError =
  (message: string) => (dispatch: AppDispatch) => {
    dispatch(actions.errorMessage(message))
  }

  export const logout: () => void = () => async (dispatch: AppDispatch) => {
    dispatch<any>(setLoading(true))
    authProvider.logout()
    dispatch<any>(setLoading(false))
    dispatch(actions.successLogout())
    if (window.location.pathname === '/profile') {
      window.location.replace('/login')
    }
  }