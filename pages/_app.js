import 'tailwindcss/tailwind.css'
import CustomNavbar from '../components/customNavbar'


function MyApp({ Component, pageProps }) {
  return (
    <>
    <CustomNavbar />
  <Component {...pageProps} />
  </>
  )  
}

export default MyApp
