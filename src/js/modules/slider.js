function sliderHistory() {
  const sliderCont = document.querySelector('.history__cont');
  const slider = sliderCont.querySelector('.history__slider');
  new Swiper(slider, {
    slidesPerView: 'auto',
    loop: false,
    spaceBetween: 100,
    autoplay: {
      delay: 3000,
    },
    navigation: {
      nextEl: sliderCont.querySelector('.swiper-button-next'),
      prevEl: sliderCont.querySelector('.swiper-button-prev'),
    },
  });
}

function advantagesSlider() {
  const sliderCont = document.querySelector('.advantages');
  const slider = sliderCont.querySelector('.advantages__slider');
  let sliderInit = new Swiper(slider, {
    slidesPerView: 1,
    loop: true,
    spaceBetween: 0,
    autoplay: {
      delay: 4000,
    },
    navigation: {
      nextEl: sliderCont.querySelector('.swiper-button-next'),
      prevEl: sliderCont.querySelector('.swiper-button-prev'),
    },
    on: {
      slideChange: function () {
        const currentSlide = this.slides[this.activeIndex];
        const elem = currentSlide.querySelector('.advantages__item');
        const navBtns = sliderCont.querySelectorAll('.advantages__btn');
        if (elem.classList.contains('bg-lemon')) {
          navBtns.forEach((btn) => btn.classList.add('yellow'));
        } else {
          navBtns.forEach((btn) => btn.classList.remove('yellow'));
        }
      },
    },
  });
}

document.addEventListener('DOMContentLoaded', () => {
  sliderHistory();
  advantagesSlider();
});
