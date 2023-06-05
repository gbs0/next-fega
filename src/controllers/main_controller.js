import { Controller } from "@hotwired/stimulus"
import Swal from 'sweetalert2'
import toastr from 'toastr'

export default class extends Controller {
  static targets = ['counter', 'list', 'pill', 'tip']
  
  connect() {
    this.showMessage(20000, this.tipTarget)
    this.setToastr()
    this.setCounter()
    this.cleanList()
  }
  
  setToastr() {
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
  }

  showMessage(miliseconds, target) {
    setTimeout(() => {
      target.classList.remove("hidden")
    }, miliseconds);
  }
  
  dispatch(event){
    if (event.currentTarget.checked) {
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
    let modalTitle = `<span class="max-w-[10rem] py-1.5 px-3 truncate whitespace-nowrap inline-block rounded-md text-sm font-medium bg-blue-100 text-blue-800">Você falhou 😢</span>`
    let sweetModalContent = `<div class="mb-4">
      <p class="text-base text-gray-800 md:text-sm"><em>
          "Não importa o quão brilhante e vitorioso seja o seu passado, você ainda pode perder espetacularmente no presente."
      </em><em>- Friedrich Nietzsche</em></p>
    </div>
    <div class="flex justify-center">
      <iframe src="https://giphy.com/embed/MMFtyqOBK9rOlSZQK5" width="400" height="200" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
    </div>
    <div>
      <p class="my-3 sm:mt-6 text-base text-gray-800 md:text-sm">
      Sabe, nem todo mundo pode ter o que é preciso para ser feliz.<br>
      E você, bem, você mostrou isso com <strong>muita clareza</strong>.<br>
      Mas não desanime, você pode encontrar esperança em saber que pelo menos alguém em algum lugar está te <strong>apoiando</strong> nas suas derrotas, e nas vitórias também.<br>
      Então, dê um sorriso, levante a cabeça e <strong>tente novamente</strong>.<br> Quem sabe, com um pouco de prática, você possa se tornar um perdedor(a) ainda melhor, boa sorte! Você vai precisar.
      </p>
      
    </div>
    <a href="#" class="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-indigo-500 text-white hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
    data-controller="redirect" data-action="click->redirect#to_url" data-redirect-url-value="/spin"><i class="fa fa-thumbs-up"></i> OK, me leve a próxima etapa!</a>
      `
    Swal.fire({
      title: modalTitle,
      icon: '',
      html: sweetModalContent,
      
      showCloseButton: false,
      showCancelButton: false,
      showConfirmButton: false,
      focusConfirm: true,
      confirmButtonText:
        '<a href="#"><i class="fa fa-thumbs-up"></i> OK, me leve a próxima etapa!</a>',
      confirmButtonAriaLabel: 'Ok, me leve a próxima etapa!',
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