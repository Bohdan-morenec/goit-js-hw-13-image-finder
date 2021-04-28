import '../../src/styles.css';
import './/api-pixabay';
import { getListPhoto } from './api-pixabay';
import renderCardPhoto from '../cards-hbs/photo-pixabay-card.hbs';

const input = document.querySelector('.input');
const btn = document.querySelector('.btn');
const listPhoto = document.querySelector('.gallery');
const test = document.querySelector('.anchor');
const listObserverEl = document.querySelector('.Intersection-Observer');

let pageNumber = 0;

const observeHendler = entries => {
  if (entries[0].isIntersecting) {
    startSearchBtn(1);
  }
};

const Observer = new IntersectionObserver(observeHendler);
Observer.observe(listObserverEl);

const startSearchBtn = async event => {
  if (!event.target) {
    pageNumber += 1;
  } else {
    pageNumber = 1;
    listPhoto.innerHTML = '';
  }
  const { hits } = await getListPhoto(input.value, pageNumber);
  renderadditionallyPhoto(hits);
};

const renderadditionallyPhoto = result => {
  listPhoto.insertAdjacentHTML('beforeend', renderCardPhoto(result));
};

btn.addEventListener('click', startSearchBtn);
test.addEventListener('click', () => {
  window.scrollTo({
    top: -100,
    behavior: 'smooth',
  });
});
