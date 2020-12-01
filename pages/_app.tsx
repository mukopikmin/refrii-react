import React from 'react'
import { AppProps } from 'next/app'
import { AuthProvider } from '../components/Auth'
import { Provider } from 'react-redux'
import createStore from '../store/createStore'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  components: {
    Container: {
      baseStyle: {
        fontWeight: 'bold',
        textTransform: 'uppercase',
        maxWidth: '1200px',
      },
    },
  },
})

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <Provider store={createStore()}>
      <AuthProvider>
        <ChakraProvider theme={theme}>
          <Component {...pageProps} />
        </ChakraProvider>
      </AuthProvider>
    </Provider>
  )
}

export default MyApp
