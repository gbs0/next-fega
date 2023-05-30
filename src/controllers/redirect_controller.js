import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
    static values = { url: String }

    connect() {
        console.log(this.element)
        this.element.setAttribute("disabled", "")
    }

    to_url(event) {
      event.preventDefault()
      window.location.href = this.urlValue
    }
}
