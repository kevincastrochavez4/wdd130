const skewContainer = document.querySelector('.skew');

let scroll = 1;

window.addEventListener('load', function () {
  setInterval(() => {
    skewContainer.scroll({
      top: scroll,
      behavior: 'smooth',
    });

    scroll += 1;
  }, 50);
});
