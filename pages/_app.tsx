import  First  from '@/components/First'
import Footer from '@/components/Footer'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'


export default function App({ Component, pageProps }: AppProps) {
  return < >
  <First/>

  <Component {...pageProps}/>
  <Footer/>
  </>
}
