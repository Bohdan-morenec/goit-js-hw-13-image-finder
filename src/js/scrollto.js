import moving from './moving';

moving.test.addEventListener('click', () => {
  window.scrollTo({
    top: -100,
    behavior: 'smooth',
  });
});
