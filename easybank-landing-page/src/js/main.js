// SCSS
import "../scss/main.scss";

// JS
class Main {
    constructor() {
        this.triggerMenu = document.getElementById("trigger");
        this.triggerMenu.addEventListener("change", this.toggleMenu.bind(this));
    }

    toggleMenu(ev) {
        if (ev.target.checked) {
            console.log("menu-on");
        } else {
            console.log("menu-off");
        }
    }
}

new Main();
