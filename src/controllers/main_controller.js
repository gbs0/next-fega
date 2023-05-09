import { Controller } from "@hotwired/stimulus"
import Swal from 'sweetalert2'
import toastr from 'toastr'

export default class extends Controller {
  static targets = ['counter']
  
  connect() {
    toastr.options = {
      "closeButton": false,
      "debug": false,
      "newestOnTop": true,
      "progressBar": true,
      "positionClass": "toast-top-right",
      "preventDuplicates": false,
      "onclick": null,
      "showDuration": "300",
      "hideDuration": "1000",
      "timeOut": "2000",
      "extendedTimeOut": "1000",
      "showEasing": "linear",
      "hideEasing": "linear",
      "showMethod": "fadeIn",
      "hideMethod": "fadeOut"
    }
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
        this.invokeNotification(event.currentTarget)
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

  invokeNotification(prop) {
    toastr.success(`Ótima escolha! Ser ${prop.dataset.emotion} é um diferencial.`)
  }

  invokeModal() {
    let sweetModal = `
      `
    Swal.fire({
      title: '<strong>Infelizmente suas escolhas <u>acabaram</u></strong>',
      icon: 'error',
      html:
        sweetModal,
      showCloseButton: false,
      showCancelButton: false,
      focusConfirm: false,
      confirmButtonText:
        '<a href="/spin"><i class="fa fa-thumbs-up"></i> OK, quero continuar!</a>',
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