import { Application } from "@hotwired/stimulus"
import { useEffect } from 'react'
import HelloController from "../src/controllers/hello_controller"
import '../styles/globals.css'

const MyApp = ({ Component, pageProps }) => {
  useEffect(() => {
    window.Stimulus = Application.start()
    Stimulus.register("hello", HelloController)
  }, [])

  return <Component {...pageProps} />
}

export default MyApp