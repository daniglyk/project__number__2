let index = 0;
let icons = document.querySelectorAll(".slider__icons");
let maxIndex = slider__icons.length - 4;
let fourstButtons = document.querySelectorAll(".buttons");


for (let i = 0; i <= maxIndex; i++) {
    slider__icons[i] === slider__icons[index]
    ? (slider__icons[i].style.display = "flex")
    : (slider__icons[i].style.display = "none");
}

let next = document.querySelector('.next');
let prev = document.querySelector('.prev');

const scrollNext = () => {
  index === maxIndex ? (index = 0) : (index += 1);
  for (let i = 0; i <= maxIndex; i++) {
    slider__icons[i] === slider__icons[index]
      ? (slider__icons[i].style.display = "flex")
      : (slider__icons[i].style.display = "none");
  }
};
next.addEventListener('click', scrollNext);

const scrollPrev = () => {
  index === 0 ? (index = maxIndex) : (index -= 1);
  for (let i = 0; i <= maxIndex; i++) {
    slider__icons[i] === slider__icons[index]
      ? (slider__icons[i].style.display = "flex")
      : (slider__icons[i].style.display = "none");
  }
  
};
prev.addEventListener('click', scrollPrev);

