// SCSS
import "../scss/main.scss";

// JS
class Main {
    constructor() {
        this.triggerMenu = document.getElementById("trigger");
        this.triggerMenu.addEventListener("change", this.toggleMenu.bind(this));

        this.activeLi = document.getElementsByClassName("active")[0].parentNode;
        this.activeLi.style.borderBottom = "4px solid hsl(136, 65%, 51%)";
        this.activeA = document.getElementsByClassName("active")[0];
        this.activeA.style.color = "hsl(233, 26%, 24%)";

        this.navMbl = document.getElementById("nav__mbl");
    }

    toggleMenu(ev) {
        if (ev.target.checked) {
            this.navMbl.style.display = "block";
            this.navMbl.style.boxShadow = "0px 160px 100px 6px rgba(0, 0, 0, 0.42)";
        } else {
            this.navMbl.style.display = "none";
        }
    }
}

new Main();
