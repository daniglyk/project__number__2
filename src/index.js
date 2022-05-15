import './css/index.css';


let offsett = 0;
const sliderLine = document.querySelector('.slider-line');

document.querySelector('.slider-next').addEventListener('click', function(){
    offsett = offsett + 256;
    if (offsett >= 768) {
      document.querySelector('.slider-next').style.background = "orange";
      document.querySelector('.slider-next').disabled = true
      document.querySelector('.slider-prev').style.background = "white";
      document.querySelector('.slider-prev').disabled = false;
    }
    sliderLine.style.left = -offsett + 'px';
});

document.querySelector('.slider-prev').addEventListener('click', function () {
    offsett = offsett - 256;
    if (offsett <= 0) {
      document.querySelector('.slider-prev').style.background = "orange";
      document.querySelector('.slider-prev').disabled = true;
      document.querySelector('.slider-next').style.background = "white";
      document.querySelector('.slider-next').disabled = false
    }
    sliderLine.style.left = -offsett + 'px';
});