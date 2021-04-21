const toggle = document.querySelector('.header__menu-toggle');

const sidebar = document.querySelector('.sidebar');
const navMenu = sidebar.querySelector('.sidebar__nav');

const menuOpenBtn = toggle.querySelector('.header__toggle-wrapper_menu');
const menuCloseBtn = toggle.querySelector('.header__toggle-wrapper_close');

toggle.addEventListener('click', () => {
  sidebar.classList.toggle('sidebar_show');
  navMenu.classList.toggle('sidebar__nav_show');
  menuOpenBtn.classList.toggle('header__toggle-wrapper_display_none');
  menuCloseBtn.classList.toggle('header__toggle-wrapper_display_none');
});
