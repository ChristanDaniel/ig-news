import { AppProps } from 'next/app'
import { Header } from '../components/Header'

import '../Styles/global.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
    <Header/>
    <Component {...pageProps} />
    </>
  )

}

export default MyApp
