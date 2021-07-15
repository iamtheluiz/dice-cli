/* eslint-disable no-undef */
/* eslint-disable no-param-reassign */
[...document.querySelector('#main-nav ul').children].forEach((item) => {
  if (item.tagName === 'LI') {
    item.onclick = () => {
      document.querySelector('#main-nav #nav-display').checked = false;
    };
  }
});
