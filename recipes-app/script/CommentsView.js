export default class CommentsView {
    renderCommentsList(commentList, listElement, recipeId) {        
      
      listElement.innerHTML = commentList
      .map(comment => {         
            if(recipeId == comment.recipeID){
              var d = new Date(comment.date);
            return `<li class="comment">
      <h4>Comment date -  ${d}</h4> <p>${comment.content}</p>
      </li>`;
            }
          })
      .join('');    
  }
}