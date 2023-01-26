const gallery = document.querySelector('.gallery-list');

export function createGalleryMarkup(response) {
  const genresList = JSON.parse(localStorage.getItem('genres'));
  const responseData = response.data.results;
  const markup = responseData
    .map(result => {
      const genre = result.genre_ids.map(num => {
        const findGenre = genresList.find(item => item.id === num);
        return findGenre;
      });
      const newArrGenre = genre.map(obj => obj.name);
      if (newArrGenre.length >= 3) {
        newArrGenre.splice(2, newArrGenre.length - 2, 'Other');
      }
      let startDate = '';
      //   console.log(Object.keys(result).includes('release_date'));
      if (Object.keys(result).includes('release_date')) {
        if (result.release_date !== '') {
          startDate = result.release_date.split('').slice(0, 4).join('');
        }
      }
      let poster;
      if (result.poster_path !== null) {
        poster = `https://image.tmdb.org/t/p/w500/${result.poster_path}`;
      }
      return `<li class="gallery_card">
            <a href="#" class="gallery_card-link link">
             <div class="gallery_card-film-poster">
                <img
                 src="${poster}"
                   width="395px"
                   height="574px"
                   alt=""
                   class="gallery_card-film-poster-image"
                 />
               </div>
               <div class="gallery_card-film-description">
                 <h2 class="gallery_card-film-description-name">${result.title}</h2>
                 <div class="gallery_card-film-description-info">
                   <p class="gallery_card-film-description-info-genre">
                     ${newArrGenre}
                   </p>
                   <p
                     class="gallery_card-film-description-info-production-year"
                   >
                     ${startDate}
                   </p>
                 </div>
               </div>
             </a>
           </li>`;
    })
    .join('');

  gallery.insertAdjacentHTML('beforeend', markup);
}
