import type { AppProps } from 'next/app'
import {  ThemeProvider } from 'styled-components'
import GlobalStyle from '../styles/GlobalStyle'
import {UserProvider} from '../shared/contexts/UserContext'

function MyApp({ Component, pageProps }: AppProps) {
    
    return (
        <>
        <UserProvider>            
          <ThemeProvider theme={{}}>
           <GlobalStyle />
            <Component {...pageProps} />
          </ThemeProvider>
        </UserProvider>
        </>
      )
}

export default MyApp

