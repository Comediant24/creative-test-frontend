const sidebar = document.querySelector('.sidebar');
const navMenu = sidebar.querySelector('.sidebar__nav');
const sidebarOverlay = sidebar.querySelector('.sidebar__hover');

const menuBtn = document.querySelector('.header__menu-icon');

const handleEscClose = (e) => {
  if (e.key === 'Escape' && sidebar.classList.contains('sidebar_show')) {
    handleSidebar();
  }
};

const changeMenuBtn = () => {
  menuBtn.classList.toggle('header__menu-icon_close');
  menuBtn.classList.toggle('header__menu-icon_open');
};

const sidebarOpen = (e) => {
  sidebar.classList.add('sidebar_show');
  navMenu.classList.add('sidebar__nav_show');
  document.addEventListener('keydown', handleEscClose);
};

const sidebarClose = (e) => {
  sidebar.classList.remove('sidebar_show');
  navMenu.classList.remove('sidebar__nav_show');
  document.removeEventListener('keydown', handleEscClose);
};

const handleSidebar = () => {
  if (!sidebar.classList.contains('sidebar_show')) {
    sidebarOpen();
  } else {
    sidebarClose();
  }
  changeMenuBtn();
};

menuBtn.addEventListener('click', () => {
  handleSidebar();
});

sidebarOverlay.addEventListener('click', () => {
  handleSidebar();
});
