export default class Comment {
    constructor(movieID, name, comment){
        this.movieId = movieID;
        this.name = name;
        this.date = new Date();
        this.content = comment;
    }

   getCommentList(){
    let comments;
    let storedComments = localStorage.getItem("movies")
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
   
    let movieId = document.getElementById("movieList").firstChild.getAttribute('data-id');
    let movieName = document.getElementById("movieList").firstChild.firstChild.firstChild.firstChild.nextSibling.textContent;
    
    console.log(document.getElementById("movieList").firstChild.firstChild.firstChild.firstChild.nextSibling.textContent);
        if(commentText == ""){
            document.getElementById("message").innerHTML = "Sorry, input cannot be blank. Please, " +
            "specify a comment";
        } else {
            document.getElementById("message").innerHTML = "";
            let type = "movies";
            let movieID = movieId; 
            let name = movieName;           
        let comment = commentText;
        let newComment = new Comment(movieID, name, comment);
        let comments = this.getCommentList();
        comments.push(newComment);
        let commentsArrayString = JSON.stringify(comments)
        console.log(commentsArrayString);
        localStorage.setItem(type, commentsArrayString);                
           
        
}
}
}
