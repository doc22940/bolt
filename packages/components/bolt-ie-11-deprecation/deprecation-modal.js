import Cookies from 'js-cookie';
// import './index.scss';

window.addEventListener('load', function () {
  const dismissNoticeTriggers = document.querySelectorAll(
    '.js-dismiss-deprecation-notice',
  );
  const deprecationNotification = document.querySelector('.js-ie-11-deprecation');

  if (deprecationNotification && Cookies.get('dismissIEDeprecationNotice')) {
    deprecationNotification.classList.add('is-hidden');
  }

  if (dismissNoticeTriggers){
    dismissNoticeTriggers.forEach(trigger => {
      trigger.addEventListener('click', e => {
        e.preventDefault();
        Cookies.set('dismissIEDeprecationNotice', true, { expires: 1 });
        deprecationNotification.classList.add('is-animating-out');

        setTimeout(() => {
          deprecationNotification.classList.add('is-hidden');
          deprecationNotification.classList.remove('is-animating-out');
        }, 1000);
      });
    });
  }
});
