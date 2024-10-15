function animationTopBlock() {
  const topBlock = document.querySelector('.top-block');
  const animBlock = topBlock.querySelector('.top-block__anim');
  const firstImg = topBlock.querySelector('.top-block__img-close');
  const secondImg = topBlock.querySelector('.top-block__img-open');
  const logo = topBlock.querySelector('.top-block__logo');
  animBlock.addEventListener('click', () => {
    logo.classList.add('small');
    animBlock.classList.add('animFinal');
  });
}
animationTopBlock();
