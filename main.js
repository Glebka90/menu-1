function burgerMenu(selector) {
  let menu = $(selector);
  let button = menu.find('.burger-menu__button');
  let link = menu.find('.burger__menu_link');
  let overlay = menu.find('.burger-menu__overlay');


  button.on('click', (e) => {
    e.preventDefault();
    toggleMenu();
  });
  link.on('ckick', () => toggleMenu());
  overlay.on('click', () => toggleMenu());

  function toggleMenu() {
    menu.toggleClass('burger-menu_active');
    if (menu.hasClass('burger-menu_active')) {
      $('body').css('overflow', 'hidden');
    } else {
      $('body').css('overflow', 'visible');
    }
  }
}
burgerMenu('.burger-menu');