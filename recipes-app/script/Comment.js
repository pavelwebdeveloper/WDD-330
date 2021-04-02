export default class Comment {
    constructor(recipeUri, label, comment){
        this.recipeURI = recipeUri;
        this.recipeLabel = label;
        this.date = new Date();
        this.content = comment;
    }

   getCommentList(){
    let comments;
    let storedComments = localStorage.getItem("recipes")
    console.log(localStorage);
            if(storedComments == null){
                comments = []
            } else {
                comments = JSON.parse(storedComments)
                console.log("memory start");
                console.log(comments);
                console.log(typeof comments);
                console.log("memory end");
            }

            return comments;
   }

   saveComment(){
    let commentText = document.getElementById("comment_text").value;
   
    let recipeId = document.getElementById("recipeList").firstChild.getAttribute('data-id');
    console.log("inside saveComment");
    console.log(recipeId);
    let recipeLabel = document.getElementById("recipeList").firstChild.firstChild.firstChild.firstChild.nextSibling.textContent;
    //console.log(document.getElementById("recipeList"));
    
    //console.log(document.getElementById("recipeList").firstChild.firstChild.firstChild.firstChild.nextSibling.textContent);
        if(commentText == ""){
            document.getElementById("message").innerHTML = "Sorry, input cannot be blank. Please, " +
            "specify a comment";
        } else {
            document.getElementById("message").innerHTML = "";
            let type = "recipes";
            let uri = recipeId; 
            let label = recipeLabel;           
        let comment = commentText;
        let newComment = new Comment(uri, label, comment);
        let comments = this.getCommentList();
        comments.push(newComment);
        let commentsArrayString = JSON.stringify(comments)
        console.log(commentsArrayString);
        localStorage.setItem(type, commentsArrayString);                
           
        
}
}
}
