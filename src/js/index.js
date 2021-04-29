import moving from './moving';
import '../../src/styles.css';
import './/api-pixabay';
import { startSearchBtn } from './logics';
import './scrollto';

const observeHendler = entries => {
  if (entries[0].isIntersecting) {
    startSearchBtn(1);
  }
};

const Observer = new IntersectionObserver(observeHendler);
Observer.observe(moving.listObserverEl);
