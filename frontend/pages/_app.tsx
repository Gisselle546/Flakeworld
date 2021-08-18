import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {AuthProvider} from '../context/Auth';
import Layout from '../Containers/Layout';




function MyApp({ Component, pageProps }: AppProps) {




  return( 
    <>
      <AuthProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
      </AuthProvider>
  
    </>
  )
}


export default MyApp;
