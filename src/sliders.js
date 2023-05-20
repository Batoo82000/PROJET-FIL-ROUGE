'use strict';

let imgSlider = document.getElementsByClassName('imgSlider-1');
let imgSlider2 = document.getElementsByClassName('imgSlider-2');
let imgSlider3 = document.getElementsByClassName('imgSlider-3');
let imgSlider4 = document.getElementsByClassName('imgSlider-4');
let imgSlider5 = document.getElementsByClassName('imgSlider-5');

let step = 0;
let step2 = 0;
let step3 = 0;
let step4 = 0;
let step5 = 0;


function takeOffActiveImage(slider) {
    for (let i = 0; i < slider.length; i++) {
        slider[i].classList.remove('active');
    }
}

function interval(etape, slider) {
    setInterval(() => {
        etape++;
        if (etape >= slider.length) {
            etape = 0;
        }
        takeOffActiveImage(slider);
        slider[etape].classList.add('active');
    },
        2500)
}

export function sliders() {
    interval(step, imgSlider);
    interval(step2, imgSlider2);
    interval(step3, imgSlider3);
    interval(step4, imgSlider4);
    interval(step5, imgSlider5);
}