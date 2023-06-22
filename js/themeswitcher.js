// let theme = localStorage.getItem('theme');
let theme = 0;
const themeToggler = document.querySelector('#theme-button');

document.querySelector('body').addEventListener('click', function (e) {
  e.target.classList.toggle('transition');
});

themeToggler.addEventListener('click', () => {
  if (theme === 3) {
    theme = 0;
    console.log(theme);
  } else {
    theme = theme + 1;
    console.log(theme);
  }

  switchThemes();
});

function switchThemes() {
  //   theme = localStorage.getItem('theme');

  //0. remove classes
  document.body.classList.remove('sage-theme');
  document.body.classList.remove('orange-theme');
  document.body.classList.remove('dark-theme');
  document.body.classList.remove('light-theme');

  //1. add theme depending on number
  if (theme === 0) {
    document.body.classList.add('sage-theme');
  } else if (theme === 1) {
    document.body.classList.add('orange-theme');
  } else if (theme === 2) {
    document.body.classList.add('dark-theme');
  } else if (theme === 3) {
    document.body.classList.add('light-theme');
  }

  //2. refresh page
  localStorage.setItem('theme');
}
