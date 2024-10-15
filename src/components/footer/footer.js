function actualYear() {
  const year = new Date().getFullYear();
  return year;
}

document.querySelector('#year').textContent = actualYear();
