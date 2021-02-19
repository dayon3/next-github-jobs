import { ChakraProvider } from "@chakra-ui/react"
import "bootstrap/dist/css/bootstrap.min.css"
import "../styles/globals.css"

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
