import axios from 'axios'
import get from 'lodash/get'
import { Dispatch, AnyAction } from 'redux'

const AxiosInterceptors = ( onErrors: { (statusCode: any, error: any): (dispatch: Dispatch<AnyAction>) => void; (arg0: number, arg1: any): void } ) => {
  const onResponseSuccess = (response:any) => response
  const onResponseError = (err:any) => {
    const statusCode = err?.status || (err?.response ? err.response?.status : 0)

    if (statusCode === 401) {
      onErrors(Number(statusCode), get(err, 'response.data.message') )
    } else if (statusCode >= 400) {
      onErrors(Number(statusCode), get(err, 'response.data'))
    }
    return Promise.reject(err)
  }
  axios.interceptors.response.use(onResponseSuccess, onResponseError)
}

export default AxiosInterceptors
