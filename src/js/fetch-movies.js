import axios from 'axios';
import { createGalleryMarkup } from './cerateGalleryMarkUp';

export async function fetchMovies() {
  try {
    const response = await axios.get(
      'https://api.themoviedb.org/3/trending/movie/week?api_key=d60997a7e23cda835c1c23368c69f903'
    );
    return response;
  } catch (error) {
    console.error(error);
  }
}

fetchMovies().then(function (response) {
  if (response.length === 0) {
    console.log(
      '"Sorry, there are no images matching your search query. Please try again."'
    );
  } else {
    createGalleryMarkup(response);
  }
});
