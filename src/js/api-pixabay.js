const KEU_PIXBAY = '21345847-4f426dc72e86c6150c047a55c';
const URL_LINE = 'https://pixabay.com/api';
// const options = {
// }

const getListPhoto = async (name, namber) => {
  const resultRequest = await fetch(
    `${URL_LINE}/?image_type=photo&orientation=horizontal&q=${name}&page=${namber}&per_page=12&key=${KEU_PIXBAY}`,
  );

  if (!resultRequest.ok) {
    throw resultRequest;
  }

  return await resultRequest.json();
};

export { getListPhoto };
// сделать правильно !!!!!!!!
