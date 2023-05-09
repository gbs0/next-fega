import { Controller } from "@hotwired/stimulus"
import Swal from 'sweetalert2'
import toastr from "toastr"

export default class extends Controller {
    // let container = document.querySelector(".container");
    // let btn = document.getElementById("spin");

    static targets = ["roulette", "button", "counter"]

    connect() {
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

    rotate(event) {
        console.dir(event.currentTarget.style)
        this.disableSpin()
        let number = Math.ceil(Math.random() * 1000);    

        this.rouletteTarget.style.transform = "rotate(" + number + "deg)";
        // number += Math.ceil(Math.random() * 1000);
        toastr.warning("Voce poderá jogar de novo em alguns segundos!")
        
    }

    enableSpin() {
        this.buttonTarget.disabled = false
    }

    disableSpin() {
        this.buttonTarget.disabled = true
        setTimeout(() => {
            this.enableSpin()
        }, 5000);
    }
}
