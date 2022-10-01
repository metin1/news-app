import React, {Suspense} from 'react';


import ThemeProvider from 'components/ThemeContext'
import Loading from 'components/Loading'
import ErrorMessage from 'components/ErrorMessage'

import AppRoutes from 'routes'

import {
  globalErrorStatusCodeSelector,
  globalLoadingSelector,
} from 'store/selectors'

import './App.css';
import 'locales/i18n'
import { useSelector } from 'react-redux'

function App() {
  const isLoading = useSelector(globalLoadingSelector)
  const errorStatusCode = useSelector(globalErrorStatusCodeSelector)
  return (
    <ThemeProvider>
      {!!errorStatusCode && <ErrorMessage />}
      <Suspense fallback={<Loading />}>
        <AppRoutes />
        <Loading />
      </Suspense>
    </ThemeProvider>
  );
}

export default App;
