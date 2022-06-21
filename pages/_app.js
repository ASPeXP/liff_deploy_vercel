import { useEffect } from 'react';
import '../styles/globals.css'

// const liffId = process.env.NEXT_PUBLIC_LIFF_ID
const liffId = "1657143605-wLqzp5xL";

function MyApp({ Component, pageProps }) {

  useEffect( () => {

    const myfunction = async () => {
    const liff = (await import('@line/liff')).default;
    try{
      await liff.init({ liffId: liffId });
    }catch(error){
      console.error('liff init error', error.message)
    }
    if (!liff.isLoggedIn()) {
      liff.login();
    }
  }
  myfunction();
  })
  return <Component {...pageProps} />
}

export default MyApp
