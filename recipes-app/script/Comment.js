export default class Comment {
    constructor(recipeId, label, comment){
        this.recipeID = recipeId;
        this.recipeLabel = label;
        this.date = new Date();
        this.content = comment;
    }

   getCommentList(){
    let comments;
    let storedComments = localStorage.getItem("recipesComments");
            if(storedComments == null){
                comments = []
            } else {
                comments = JSON.parse(storedComments);                
            }
            return comments;
   }

   saveComment(){
    let commentText = document.getElementById("comment_text").value;
    var commentMessageElement = document.getElementById("commentMessageElement");
    var anotherMessageElement = document.getElementById("anotherMessage");
    
    
    

    commentMessageElement.innerHTML = "";

    
    try {
        
        if(commentText.length == 0)  {          
            throw 'not specified';
        } else if(commentText.length < 4) {
             throw "too short";
    } else {
            
    let childElement = document.getElementById("recipeList").firstChild;

    

    if(childElement.nodeName != "IMG"){
             var id = document.getElementById("recipeList").firstChild.firstChild.getAttribute('id');   
             var recipeLabel = document.getElementById("recipeList").firstChild.firstChild.firstChild.nextSibling.textContent;
         } else {   
             var id = document.getElementById("recipeList").firstChild.nextSibling.firstChild.getAttribute('id');   
             var recipeLabel = document.getElementById("recipeList").firstChild.nextSibling.firstChild.firstChild.nextSibling.textContent;
         }
     
         if(commentText == ""){
             document.getElementById("message").innerHTML = "Sorry, input cannot be blank. Please, " +
             "specify a comment";
         } else {
             document.getElementById("message").innerHTML = "";
             let type = "recipesComments";
             let idMeal = id; 
             let label = recipeLabel.trim();           
         let comment = commentText;
         let newComment = new Comment(idMeal, label, comment);
         let comments = this.getCommentList();
         comments.push(newComment);
         let commentsArrayString = JSON.stringify(comments);
         localStorage.setItem(type, commentsArrayString);                
            
         
         }
    }
    } catch (err){
        commentMessageElement.innerHTML += `the comment is ${err}`;
    } finally {
        anotherMessageElement.innerHTML = "Thanks a lot for using our website !";
    }




    }
}
