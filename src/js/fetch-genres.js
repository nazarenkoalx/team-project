import axios from 'axios';

//
export async function fetchGenres() {
  try {
    const response = await axios.get(
      'https://api.themoviedb.org/3/genre/movie/list?api_key=d60997a7e23cda835c1c23368c69f903'
    );
    return response;
  } catch (error) {
    console.error(error);
  }
}

fetchGenres().then(function (response) {
  if (response.length === 0) {
    console.log(
      '"Sorry, there are no images matching your search query. Please try again."'
    );
  } else {
    localStorage.setItem('genres', JSON.stringify(response.data.genres));
  }
});
