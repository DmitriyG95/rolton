export function isWebp() {
  function testWebP(callback) {
    let webP = new Image();
    webP.onload = webP.onerror = function () {
      callback(webP.height == 2);
    };
    webP.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
  }
  testWebP(function (support) {
    let className = support === true ? 'webp' : 'no-webp';
    document.documentElement.classList.add(className);
  });
}

isWebp();

function popup() {
  const history = document.querySelector('.history');
  const popup = history.querySelector('.popup');
  const popupBg = history.querySelector('.popup-bg');
  const popupClose = history.querySelector('.popup__close');
  const historyItems = history.querySelectorAll('.history__item');
  const popunName = history.querySelector('.popup__name');
  const popupYear = history.querySelector('.popup__year');
  const popupImg = history.querySelector('.popup__img img');
  historyItems.forEach((item) => {
    item.addEventListener('click', () => {
      const itemName = item.querySelector('.history__name').textContent;
      const itemYear = item.querySelector('.history__date').textContent;
      const itemImg = item.querySelector('.history__img img').getAttribute('src');
      popunName.textContent = itemName;
      popupYear.textContent = itemYear;
      popupImg.setAttribute('src', itemImg);
      history.classList.add('show');
    });
  });
  document.addEventListener('click', (e) => {
    if (e.target === popupBg || e.target === popupClose) {
      history.classList.remove('show');
    }
  });
}
popup();
