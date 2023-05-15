import { Application } from "@hotwired/stimulus"
import { useEffect } from 'react'
import HelloController from "../src/controllers/hello_controller"
import MainController from "../src/controllers/main_controller"
import SpinController from "../src/controllers/spin_controller"
import Lightbox from "../src/controllers/greetings_controller"
import '../styles/globals.css'
import 'lightgallery/css/lightgallery.css'

const MyApp = ({ Component, pageProps }) => {
  useEffect(() => {
    window.Stimulus = Application.start()
    Stimulus.register("hello", HelloController)
    Stimulus.register("main", MainController)
    Stimulus.register("spin", SpinController)
    Stimulus.register("greetings", Lightbox)
  }, [])

  return <Component {...pageProps} />
}

export default MyApp