import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '../styles/theme'

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination"
import "swiper/css/navigation"

import "../styles/swiper.css";


// import Swiper core and required modules
import SwiperCore, {
  Pagination,Navigation
} from 'swiper';

// install Swiper modules
SwiperCore.use([Pagination,Navigation]);


function MyApp({ Component, pageProps }) {
   return (
      <ChakraProvider theme={theme}>
         <Component {...pageProps} />
      </ChakraProvider>
   )
}

export default MyApp
