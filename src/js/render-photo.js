import moving from './moving';
import renderCardPhoto from '../cards-hbs/photo-pixabay-card.hbs';

const renderadditionallyPhoto = result => {
  moving.listPhoto.insertAdjacentHTML('beforeend', renderCardPhoto(result));
};

export { renderadditionallyPhoto };
