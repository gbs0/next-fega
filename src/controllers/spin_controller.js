import { Controller } from "@hotwired/stimulus"
import Swal from 'sweetalert2'
import toastr from "toastr"

export default class extends Controller {
    // let container = document.querySelector(".container");
    // let btn = document.getElementById("spin");

    static targets = ["roulette", "button", "counter"]

    connect() {
        this.initToastr()
        this.setCounter()
    }

    rotate() {
        if (this.spinIsPossible()) {
            this.disableBtn()
            this.decrementCounter()
            this.startSpin()
            // number += Math.ceil(Math.random() * 1000);
            toastr.warning("Voce poderá jogar de novo em alguns segundos!")
        } else {
            this.invokeModal()
        }
        
    }

    spinIsPossible() {
        let points = parseInt(this.counterTarget.innerText, 10)
        return points >= 1
    }

    startSpin() {
        let number = Math.ceil(Math.random() * 1000);    
        this.rouletteTarget.style.transform = "rotate(" + number + "deg)"
        
    }

    enableBtn() {
        this.buttonTarget.style.backgroundColor = "#e2e2e2"
        this.buttonTarget.style.color = "#a2a2a2"
        this.buttonTarget.disabled = false
    }

    disableBtn() {
        this.buttonTarget.disabled = true
        this.buttonTarget.style.color = "#505050"
        this.buttonTarget.style.backgroundColor = "#505050"
        setTimeout(() => {
            this.enableBtn()
        }, 5000);
    }

    setCounter() {
        this.counterTarget.innerText = 2
    }

    decrementCounter() {
        let count = parseInt(this.counterTarget.innerText, 10)
        this.counterTarget.innerText = (count - 1)
    }
    
    incrementCounter() {
        let count = parseInt(this.counterTarget.innerText, 10)
        this.counterTarget.innerText = (count + 1)
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

    initToastr() {
        toastr.options = {
            "closeButton": true,
            "debug": false,
            "newestOnTop": true,
            "progressBar": true,
            "positionClass": "toast-top-right",
            "preventDuplicates": true,
            "timeOut": "5000",
            "showEasing": "linear",
            "hideEasing": "linear",
            "showMethod": "fadeIn",
            "hideMethod": "fadeOut"
        }
    }
    
}
