// SCSS
import "../scss/main.scss";

// JS
import tanya from "../images/image-tanya.jpg";
import john from "../images/image-john.jpg";

const data = [
    {
        imgSrc: tanya,
        altText: "tanya",
        description: `“ I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ”`,
        author: "Tanya Sinclair",
        jobPosition: "UX Engineer",
    },
    {
        imgSrc: john,
        altText: "john",
        description: `“ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”`,
        author: "John Tarkpor",
        jobPosition: "Junior Front-end Developer",
    },
];

class Slider {
    constructor() {
        this.image = document.querySelector(".image");
        this.content = document.querySelector(".content");
        this.contentName = document.querySelector(".content-name");
        this.contentJobPosition = document.querySelector(".content-jobPosition");
        this.nextBtn = document.querySelector('img[alt="next"]');
        this.prevBtn = document.querySelector('img[alt="prev"]');
        this.counter = 0;

        this.update();

        this.nextBtn.addEventListener("click", this.next.bind(this));
        this.prevBtn.addEventListener("click", this.prev.bind(this));
    }

    updateUI() {
        if (this.counter === 0) {
            this.prevBtn.classList.add("disabled");
        } else {
            this.prevBtn.classList.remove("disabled");
        }

        if (this.counter >= data.length - 1) {
            this.nextBtn.classList.add("disabled");
        } else {
            this.nextBtn.classList.remove("disabled");
        }
    }

    update() {
        const id = this.counter;
        this.image.src = data[id].imgSrc;
        this.image.alt = data[id].altText;
        this.content.textContent = data[id].description;
        this.contentName.textContent = data[id].author;
        this.contentJobPosition.textContent = data[id].jobPosition;

        this.updateUI();
    }

    next() {
        if (data.length <= this.counter + 1) return;

        this.counter++;
        this.update();
    }

    prev() {
        if (this.counter - 1 < 0) return;

        this.counter--;
        this.update();
    }
}

new Slider();
