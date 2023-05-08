import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ['counter']

  connect() {
    this.setCounter()
    this.element.querySelectorAll("#switch").forEach(checkbox => {
        if (checkbox.checked) {
            this.decrementCounter()
        }
    });
  }

  setCounter() {
    this.counterTarget.innerText = 7 
  }

  dispatch(event){
    if (event.currentTarget.checked) {
        this.decrementCounter()
    }
    else {
        this.incrementCounter()
    }
  }

  decrementCounter() {
    let count = parseInt(this.counterTarget.innerText, 10);
    this.counterTarget.innerText = (count - 1)
  }

  incrementCounter() {
    let count = parseInt(this.counterTarget.innerText, 10);
    this.counterTarget.innerText = (count + 1)
  }
}