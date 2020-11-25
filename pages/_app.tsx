import React from 'react'
import { AppProps } from 'next/app'
import { AuthProvider } from '../components/Auth'
import { Provider } from 'react-redux'
import createStore from '../store/createStore'

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <Provider store={createStore()}>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </Provider>
  )
}

export default MyApp
