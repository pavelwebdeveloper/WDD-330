import Comment from './Comment.js';
import comments from './comments-list.js';

const model = {
    saveComment(){
        let commentText = document.getElementById("comment_text").value;
        let nameOfHike = document.getElementById("hikeName").textContent;
            if(commentText == ""){
                document.getElementById("message").innerHTML = "Sorry, input cannot be blank. Please, " +
                "specify a comment";
            } else {
                document.getElementById("message").innerHTML = "";
                let type = "hikes";
                let name = nameOfHike;           
            let comment = commentText;
            let newComment = new Comment(name, comment);
            comments.push(newComment);
            let commentsArrayString = JSON.stringify(comments)
            console.log(commentsArrayString);
            localStorage.setItem(type, commentsArrayString);
            const hikeName = document.getElementById("hikeName").textContent;
            console.log("THIS IS THE HIKE NAME");
            console.log(document.getElementById("hikeName").textContent);

            this.showComments(hikeName);                
                /*this.addToDo(newTodo);
                this.showToDos(all, active, completed);
                this.countLeftTasks();*/
            
    }
},

showComments(hikeName = ""){        
    const commentsElement = document.getElementById("comments");
    commentsElement.innerHTML = "";
        this.renderComments(comments, hikeName);
},

renderComments(comments, hikeName){
    

   
    const commentsElement = document.getElementById("comments");
    commentsElement.innerHTML = "";
    
    comments.forEach(comment => {
        //console.log();
        if(hikeName != ""){
        if(comment.name == hikeName){
        commentsElement.appendChild(this.renderComment(comment));
        }
    } else {
        commentsElement.appendChild(this.renderComment(comment));
    }
    });
},

renderComment(comment){
    const hikeName = document.querySelector('#hikes flex-container');
    console.log("HIKE NAME:");
    console.log(hikeName);
    const item = document.createElement("div");
    item.innerHTML = `<span><b>${comment.name}</b></span>-<span><b>Date of comment</b></span>-
                            <span>${comment.date}</span> <span><b>Comment text</b></span>-
                            <span><i>${comment.content}</i></span>
                                               
                
                `;
       
                return item;
}
}

export default model;