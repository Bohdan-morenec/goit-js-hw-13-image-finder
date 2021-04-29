import moving from './moving';
import { getListPhoto } from './api-pixabay';
import { renderadditionallyPhoto } from './render-photo';
let pageNumber = 0;
const startSearchBtn = async event => {
  if (!event.target) {
    pageNumber += 1;
  } else {
    pageNumber = 1;
    moving.listPhoto.innerHTML = '';
  }
  const { hits } = await getListPhoto(moving.input.value, pageNumber);
  renderadditionallyPhoto(hits);
};

moving.btn.addEventListener('click', startSearchBtn);

export { startSearchBtn };
