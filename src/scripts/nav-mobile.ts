export function initializeMobileNavigation() {
// Получаем элементы из DOM
const menuToggle = document.getElementById('menuToggle') as HTMLButtonElement;
const menuClose = document.getElementById('menuClose') as HTMLButtonElement;
const sidebar = document.getElementById('sidebar') as HTMLDivElement;

// Проверка наличия элементов
if (menuToggle && menuClose && sidebar) {
  menuToggle.addEventListener('click', () => {
    sidebar.classList.add('open');
  });

  menuClose.addEventListener('click', () => {
    sidebar.classList.remove('open');
  });
}
}