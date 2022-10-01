export interface IAuthState {
  loading?: boolean
  isAuthenticated?: boolean
  loginSuccess?: boolean
  loginError?: boolean
  errorMessage?: string | Error
}
