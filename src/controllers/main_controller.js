import { Controller } from "@hotwired/stimulus"
import Swal from 'sweetalert2'
import toastr from 'toastr'

export default class extends Controller {
  static targets = ['counter', 'list', 'pill']
  
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
    this.cleanList()
  }

  dispatch(event){
    if (event.currentTarget.checked) {
        this.invokeNotification(event.currentTarget)
        this.insertPillInList(event.currentTarget)
        this.decrementCounter()
        this.checkVictory()
    }
    else {
        this.incrementCounter()
        this.removePillInList(event.currentTarget)
    }
  }

  verifyCounterIntegrity() {
    let points = parseInt(this.counterTarget.innerText, 10)
    if (points > 7) {
      this.setCounter()
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

  insertPillInList(prop) {
    const pill = `<li class="mx-3">
    <span data-main-target="pill" data-emotion="${prop.dataset.emotion}" class="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-pink-500 text-white">${prop.dataset.emotion}</span>
    </li>`
    this.listTarget.insertAdjacentHTML('beforeend', pill)
  }

  removePillInList(prop) {
    this.pillTargets.forEach(element => {
      if (element.dataset.emotion == prop.dataset.emotion) {
        element.remove()
      }
    });
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

  setCounter() {
    this.counterTarget.innerText = 7
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

  cleanList() {
    this.listTarget.innerHTML = ""
  }
}