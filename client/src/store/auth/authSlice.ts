import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { IAuthState } from './auth.types'

const initialState: IAuthState = {
  loading: false,
  isAuthenticated: false,
  loginSuccess: false,
  loginError: false,
  errorMessage: '',
}

export type AuthState = Readonly<typeof initialState>

const requestLogin = (state: IAuthState) => {
  state.loading = true
}

const failureLogin = (_state: IAuthState, action: PayloadAction<any | Error>) => {
  return {
    ...initialState,
    errorMessage: action.payload.errorMessage,
    loginError: true,
  }
}

const successLogin = (state: IAuthState) => {
  state.loading = false
  state.isAuthenticated = true
  state.loginError = false
  state.loginSuccess = true
}

const failureLogout = () => ({
  ...initialState,
})

const successLogout = () => ({
  ...initialState,
})

const errorMessage = (_state: IAuthState, action: PayloadAction<string>) => {
  return {
    ...initialState,
    errorMessage: action.payload,
  }
}

const clearAuth = (state: IAuthState) => {
  state.loading = false
  state.isAuthenticated = false
}


export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    requestLogin,
    failureLogin,
    failureLogout,
    successLogin,
    successLogout,
    errorMessage,
    clearAuth,
  },
})
