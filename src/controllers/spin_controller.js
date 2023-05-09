import { Controller } from "@hotwired/stimulus"
import Swal from 'sweetalert2'
import toastr from "toastr"

export default class extends Controller {
    // let container = document.querySelector(".container");
    // let btn = document.getElementById("spin");

    static targets = ["roulette", "button"]

    connect() {
        toastr.options = {
            "closeButton": true,
            "debug": false,
            "newestOnTop": true,
            "progressBar": true,
            "positionClass": "toast-top-right",
            "preventDuplicates": false,
            "onclick": null,
            "showDuration": "5000",
            "hideDuration": "500",
            "timeOut": "2000",
            "extendedTimeOut": "1000",
            "showEasing": "linear",
            "hideEasing": "linear",
            "showMethod": "fadeIn",
            "hideMethod": "fadeOut"
        }
    }

    rotate(event) {
        console.dir(event.currentTarget)
        event.currentTarget.disabled = true
        let number = Math.ceil(Math.random() * 1000);    

        this.rouletteTarget.style.transform = "rotate(" + number + "deg)";
        number += Math.ceil(Math.random() * 1000);
        toastr.warning("Voce poderá jogar de novo em 5 segundos!")
        setTimeout(() => {
            this.buttonTarget.disabled = false
        }, 5000);
    }
}
