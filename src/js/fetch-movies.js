const axios = require('axios').default;

export async function fetchMovies() {
  try {
    const response = await axios.get(
      'https://api.themoviedb.org/3/trending/all/week',
      {
        params: {
          API_KEY: 'd60997a7e23cda835c1c23368c69f903',
        },
      }
    );
    return response;
  } catch (error) {
    console.error(error);
  }
}
