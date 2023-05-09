import { Controller } from "@hotwired/stimulus"
import Swal from 'sweetalert2'

export default class extends Controller {
  static targets = ['counter']
  
  connect() {
    this.setCounter()
  }

  setCounter() {
    this.counterTarget.innerText = 7
  }

  verifyCounterIntegrity() {
    let points = parseInt(this.counterTarget.innerText, 10)
    if (points > 7) {
      this.setCounter()
    }
  }
  dispatch(event){
    if (event.currentTarget.checked) {
        this.decrementCounter()
        this.checkVictory()
    }
    else {
        this.incrementCounter()
    }
  }

  checkVictory() {
    const points  = this.counterTarget.innerText
    if (points == "0") {
        this.uncheckAll()
        setTimeout(() => {
            this.invokeModal()
          }, 800);
    }
    else {
      this.verifyCounterIntegrity()
    }
  }

  invokeModal() {
    let sweetModal = `You can use <b>bold text</b>
    <a href="//sweetalert2.github.io">links</a>
    and other HTML tags
    `
    Swal.fire({
      title: '<strong>HTML <u>example</u></strong>',
      icon: 'error',
      html:
        sweetModal,
      showCloseButton: false,
      showCancelButton: false,
      focusConfirm: false,
      confirmButtonText:
        '<i class="fa fa-thumbs-up"></i> Great!',
      confirmButtonAriaLabel: 'Thumbs up, great!',
      cancelButtonText:
        '<i class="fa fa-thumbs-down"></i>',
      cancelButtonAriaLabel: 'Thumbs down'
    })
  }

  decrementCounter() {
    let count = parseInt(this.counterTarget.innerText, 10)
    this.counterTarget.innerText = (count - 1)
  }

  incrementCounter() {
    let count = parseInt(this.counterTarget.innerText, 10)
    this.counterTarget.innerText = (count + 1)
  }

  uncheckAll() { // Uncheck all then reset points to 7 again
    this.element.querySelectorAll("#switch").forEach(checkbox => {
        if (checkbox.checked) {
            checkbox.checked = !checkbox.checked
        }
    });
    this.setCounter()
  }
}