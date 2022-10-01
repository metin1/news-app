import React from 'react'

import axios from 'axios'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import AxiosInterceptors from 'config/axios-interceptor'

import { catchErrorMessage } from 'store/global/globalActions'

import App from './App'
import reportWebVitals from './reportWebVitals'

import store from 'store/index'

import './index.css'

axios.defaults.baseURL = process.env.REACT_APP_API_URL

const actions = bindActionCreators({ catchErrorMessage }, store.dispatch)
AxiosInterceptors(
  (statusCode, error) =>
    actions.catchErrorMessage({
      statusCode, error,
    }),

)

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
