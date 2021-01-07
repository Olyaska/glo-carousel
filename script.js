'use strict';

class SliderCarousel {
    constructor({main, wrap, next, prev, position = 0, slidesToShow = 3}) {
        this.main = document.querySelector(main);
        this.wrap = document.querySelector(wrap);
        this.slides = document.querySelector(wrap).children;
        this.next = document.querySelector(next);
        this.prev = document.querySelector(prev);
        this.slidesToShow = slidesToShow;
        this.options = {
            position,
            widthSlide: (Math.floor(100 / this.slidesToShow)),
        };
    }

    init() {
        console.log(this);
        this.addGloClass();
        this.addStyle();

        if (this.prev && this.next) {
            this.controlSlider();
        } else {
            this.addArrow();
            this.controlSlider();
        }
    }

    addGloClass() {
        this.main.classList.add('glo-slider');
        this.wrap.classList.add('glo-slider__wrap');
        for (const item of this.slides) {
            item.classList.add('glo-slider__wrap');
        }
    }
    addStyle() {
        const style = document.createElement('style');
        style.id = 'sliderCaruse-style';
        document.head.appendChild(style);
        style.textContent = `
            .glo-slider {
                overflow: hidden !important;
            }
            .glo-slider__wrap {
                display: flex !important;
                transition: transform 0.5s !important;
                will-change: transform !important;
            }
            .glo-slider__item {
                flex: 0 0 ${this.options.widthSlide}% !important;
                margin: auto 0 !important;
            }
        `;
    }
    controlSlider() {
        this.prev.addEventListener('click', this.prevSlider.bind(this));
        this.next.addEventListener('click', this.nextSlider.bind(this));      
    }
    prevSlider() {
        if (this.options.position > 0) {
            --this.options.position;
            this.wrap.style.transform = `translate(-${this.options.position * this.options.widthSlide}%)`;
        }
    }
    nextSlider() {
        
        if (this.options.position < this.slides.length - this.slidesToShow) {
            console.log('this.slidesToShow: ', this.slidesToShow);
            console.log('this.slides.length: ', this.slides.length);
            console.log('this.options.position: ', this.options.position);
            ++this.options.position;
            this.wrap.style.transform = `translate(-${this.options.position * this.options.widthSlide}%)`;
        }

    }
    addArrow() {

    }
}