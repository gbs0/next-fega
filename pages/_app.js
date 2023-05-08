import '../styles/globals.css'
import { Application } from "@hotwired/stimulus"
import HelloController from "../src/controllers/hello_controller"



// function MyApp({ Component, pageProps }) {
//   return <Component {...pageProps} />
// }

// export default MyApp


import { useEffect } from 'react'

const MyApp = ({ Component, pageProps }) => {
  useEffect(() => {
    window.Stimulus = Application.start()
    Stimulus.register("hello", HelloController)
  }, [])

  return <Component {...pageProps} />
}

export default MyApp