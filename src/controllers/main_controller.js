import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ['counter']
  
  connect() {
    this.setCounter()    
  }

  setCounter() {
    this.counterTarget.innerText = 7
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
        let modalPartial = `
        `
        this.uncheckAll()
        setTimeout(() => {
            this.invokeModal()
          }, 800);
    }
  }

  invokeModal() {
    alert("Você não tem mais pontos possiveis ):")
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