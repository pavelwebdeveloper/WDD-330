export default class CommentsView {
    renderCommentsList(commentList, listElement, movieId) {
        //let movieId = document.getElementById("detailsList").parentNode.getAttribute('data-id');
        /*let movieId = document.getElementById("detailsList");*/
        console.log("listElement !!!!!!!!!!!!!!!!!!!: ");
        console.log(commentList);
        console.log("movieId: ");
        console.log(movieId);
      
      listElement.innerHTML = commentList
      .map(comment => {
          console.log("inside map");
        console.log(comment.movieId);
        if(movieId == comment.movieId){
        return `<li class="comment">
  <h3>${comment.date}</h3>, <p>${comment.content}</p>
  </li>`;
        }
      })
      .join('');
    
   

    
    /*renderMovie(movie, element) {

element.innerHTML = `<ul><li><b>Title</b> ${movie.Title}</li>
<li><b>Actors</b> ${movie.Actors}</li>
<li><b>Awards</b> ${movie.Awards}</li>
<li><b>BoxOffice</b> ${movie.BoxOffice}</li>
<li><b>Country</b> ${movie.Country}</li>
<li><b>Director</b> ${movie.Director}</li>
<li><b>Genre</b> ${movie.Genre}</li>
<li><b>Language</b> ${movie.Language}</li>
<li><b>Metascore</b> ${movie.Metascore}</li>
<li><b>Plot</b> ${movie.Plot}</li>
<li><b>Poster</b> <img src="${movie.Poster}"></img></li>
<li><b>Rated</b> ${movie.Rated}</li>
<li><b>Released</b> ${movie.Released}</li>
<li><b>Runtime</b> ${movie.Runtime}</li>
<li><b>Type</b> ${movie.Type}</li>
<li><b>Website</b> ${movie.Website}</li>
<li><b>Writer</b> ${movie.Writer}</li>
</ul>`;

      
  }*/

  
}

}