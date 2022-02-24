// Меню бургер
document.addEventListener('DOMContentLoaded', () => {
  const menuBurgerItem = document.querySelectorAll('.menu-burger__item');

  document.getElementById('burger').addEventListener('click', () => {
    document.body.classList.toggle('_lock');
    document.getElementById('menu').classList.toggle('_active');
    document.getElementById('burger').classList.toggle('_active');
  });

  menuBurgerItem.forEach(e => {
    e.addEventListener('click', () => {
      document.body.classList.remove('_lock');
      document.getElementById('menu').classList.remove('_active');
      document.getElementById('burger').classList.remove('_active');
    });
  });
});

// Свайпер
const swiper = new Swiper('.swiper', {
  loop: true,

  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },

  a11y: {
    enabled: true,
    paginationBulletMessage: `Перейти к слайду {{index}}`
  },

  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true
  },

  mousewheel: {
    sensitivity: 1,
    eventsTarget: '.swiper-wrapper'
  }
});

// Шаги
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.menu-stages__item-link').forEach(function(tabsBtn) {
    tabsBtn.addEventListener('click', function(e) {
      const path = e.currentTarget.dataset.path

      document.querySelectorAll('.menu-stages__item-link').forEach(function(btn) {
        btn.classList.remove('menu-stages__item-link--active');
      });

      e.currentTarget.classList.add('menu-stages__item-link--active');
      document.querySelectorAll('.box-stages').forEach(function(tabsBtn) {
        tabsBtn.classList.remove('box-stages--active');
      });

      document.querySelector(`[data-target="${path}"]`).classList.add('box-stages--active');
    });
  });
});

// Аккардеон
$( () => {
  $("#accordion").accordion({
    icons: false,
    heightStyle: 'content',
    collapsible: true,
    active: true
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const menuReviewsItemTitle = document.querySelectorAll('menu-reviews__item-title');

  menuReviewsItemTitle.forEach(element => {
    element.addEventListener('click', () => {
      document.querySelector('menuReviewsItemTitle').classList.toggle('ui-state-active');
    });
  });
});
