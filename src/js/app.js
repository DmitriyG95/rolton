import './modules/functions.js';
import './modules/slider.js';
import './modules/animation.js';
//Компоненты
import '../components/header/header.js';
import '../components/footer/footer.js';

document.addEventListener('click', (e) => {
  if (e.target.closest('.openShow') || e.target.closest('.openShowFile')) {
    document.querySelectorAll('._active').forEach((e) => e.classList.remove('_active'));
    if (document.body.classList.contains('_lock')) document.body.classList.remove('_lock');
    if (document.querySelector('.openShow')) document.querySelector('.openShow').remove();
  }
  if (e.target.closest('._close')) {
    document.querySelectorAll('._active').forEach((e) => e.classList.remove('_active'));
    if (document.body.classList.contains('_lock')) document.body.classList.remove('_lock');
    if (document.querySelector('.openShow')) document.querySelector('.openShow').remove();
  }
});
