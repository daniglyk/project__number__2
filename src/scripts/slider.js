let offsett = 0;
const sliderLine = document.querySelector('.slider-line');
const btnNext = document.querySelector('.slider-next');
const btnPrev = document.querySelector('.slider-prev');

btnNext.addEventListener('click', function(){
    offsett = offsett + 256;
    btnPrev.style.background = "white";
    btnPrev.disabled = false;
    if (offsett >= 768) {
        btnNext.style.background = "orange";
        btnNext.disabled = true
    } 
    sliderLine.style.left = -offsett + 'px';
});

btnPrev.addEventListener('click', function () {
    offsett = offsett - 256;
    btnNext.style.background = "white";
    btnNext.disabled = false;
    if (offsett <= 0) {
        btnPrev.style.background = "orange";
        btnPrev.disabled = true;
    }
    sliderLine.style.left = -offsett + 'px';
});