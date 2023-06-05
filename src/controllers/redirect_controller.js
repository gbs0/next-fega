import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
    static targets = ['checkbox', 'badge']
    static values = { url: String }

    connect() {
        this.element.setAttribute("disabled", "")
    }

    to_url(event) {
      event.preventDefault()
      if (this.checkboxTarget) {
        if (this.checkboxTarget.checked) {
          this.badgeTarget.classList.add("hidden")
          window.location.href = this.urlValue  
        } else {
          this.badgeTarget.classList.remove("hidden")
        }
      } else {
        window.location.href = this.urlValue
      }
    }

    
}
