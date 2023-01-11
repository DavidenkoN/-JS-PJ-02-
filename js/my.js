function выключитьКруги() {
  document.querySelectorAll(".dot.dot-1").forEach((node) => node.style.opacity = '0.3');
  document.querySelectorAll(".dot.dot-2").forEach((node) => node.style.opacity = '0.3');
  document.querySelectorAll(".dot.dot-3").forEach((node) => node.style.opacity = '0.3');
}

var entities = [
  {
    city: 'Rostov-on-Don<br>LDC admiral',
    img: 'images/projects.svg',
    area: '81 m2',
    time: '3.5 months',
    repairСost: 'Upon request'
  },
  {
    city: 'Soshi<br>Thieves',
    img: 'images/image 2.png',
    area: '105 m2',
    time: '4 months',
    repairСost: 'Upon request'
  },
  {
    city: 'Rostov-on-Don<br>Patriotic',
    img: 'images/projects-1.png',
    area: '93 m2',
    time: '3 months',
    repairСost: 'Upon request'
  }
]

// в начале текущий слайд = 1
var activeSlide = 1;

function slideRight() {

  let maxSlide = entities.length;

  if (activeSlide == maxSlide) {
    activeSlide = 1
    включитьСлайд(activeSlide)
  }
  else {
    activeSlide = activeSlide + 1
    включитьСлайд(activeSlide)
  }

}
function slideLeft() {

  let maxSlide = entities.length;

  if (activeSlide == 1) {
    activeSlide = maxSlide
    включитьСлайд(activeSlide)
  }
  else {
    activeSlide = activeSlide - 1
    включитьСлайд(activeSlide)
  }

}
function включитьСлайд(num) {
  activeSlide = num;
  //выключает все круги, включает первый круг  
  выключитьКруги();
  document.querySelectorAll('.dot.dot-' + num).forEach((node) => node.style.opacity = '1');
  // Переключает информацию из масива entities
  document.querySelector(".city-text").innerHTML = entities[num - 1].city;
  document.querySelector(".area").innerHTML = entities[num - 1].area;
  document.querySelector(".time").innerHTML = entities[num - 1].time;
  // Переключает картинку на какую то из масива ентитис
  document.querySelector(".slider").style.background = "url(' " + entities[num - 1].img + " ')"
  // выключить все brown-hypertext, включить нужному с помощью num
  document.querySelectorAll(".line-decorate").forEach((node) => node.classList.remove("brown-hypertext"));
  document.querySelectorAll(".line-decorate-" + num).forEach((node) => node.classList.add("brown-hypertext"));
}







