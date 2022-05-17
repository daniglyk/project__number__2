import './css/index.css';


let offsett = 0;
const sliderLine = document.querySelector('.slider-line');

document.querySelector('.slider-next').addEventListener('click', function(){
    offsett = offsett + 256;
    document.querySelector('.slider-prev').style.background = "white";
      document.querySelector('.slider-prev').disabled = false;
    if (offsett >= 768) {
      document.querySelector('.slider-next').style.background = "orange";
      document.querySelector('.slider-next').disabled = true
    } 
    sliderLine.style.left = -offsett + 'px';
});

document.querySelector('.slider-prev').addEventListener('click', function () {
    offsett = offsett - 256;
    document.querySelector('.slider-next').style.background = "white";
      document.querySelector('.slider-next').disabled = false;
    if (offsett <= 0) {
      document.querySelector('.slider-prev').style.background = "orange";
      document.querySelector('.slider-prev').disabled = true;
    }
    sliderLine.style.left = -offsett + 'px';
});