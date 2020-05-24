// SCSS
import "../scss/main.scss";

// JS
class Main {
    constructor() {
        this.themeToggle = document.getElementById("toggle-theme");
        this.themeToggle.addEventListener("change", this.toggleTheme.bind(this));

        if (localStorage.getItem("theme") === "dark") {
            document.documentElement.setAttribute("data-theme", "dark");
            this.themeToggle.checked = true;
        } else {
            document.documentElement.setAttribute("data-theme", "light");
            this.themeToggle.checked = false;
        }
    }

    toggleTheme(ev) {
        if (ev.target.checked) {
            document.documentElement.setAttribute("data-theme", "dark");
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.setAttribute("data-theme", "light");
            localStorage.setItem("theme", "light");
        }
    }
}

new Main();
