// Quake View handler
export default class MoviesView {
    renderMoviesList(moviesList, listElement) {
      
      listElement.innerHTML = moviesList
      .map(movie => {
        //console.log(movie);
        console.log(movie);
          //console.log(movie.image);
        return `<li data-id="${movie.imdbID}" class="quake">
  <h3>${movie.Title}</h3>, <img src="${movie.Poster}"></img>
  </li>`;
      })
      .join('');
    }


    
    renderMovie(movie, element) {
      const moviesHTML = element.innerHTML;
      
  }
}