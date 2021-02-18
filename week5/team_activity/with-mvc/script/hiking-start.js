import { hikeList, Hike } from './hiking-data-and-class.js';
import comments from './comments-list.js';
import Comment from './Comment.js';



// This app uses an MVC (model, view, controller) pattern
'use strict'

const imgBasePath = "//byui-cit.github.io/cit261/examples/";



    const controller = {
        load() {
            //on load grab the array and insert it into the page
            window.addEventListener("load", () => {
                view.showHikeList();
                });

            //document.getElementById("back").addEventListener("click", () => {view.showHikeList();});
          
            document.getElementById("backButton").addEventListener("click", () => {view.showHikeList();});

            document.getElementById("inputComment").addEventListener("click", () => {model.saveComment();}, true);
           
            model.showComments();
            }
        
        };
    


    const view = {
        showHikeList() {
            const hikeListElement = document.getElementById("hikes");
            hikeListElement.innerHTML = "";
            this.renderHikeList(hikeList, hikeListElement);
          },
        renderHikeList(hikeList, parent) {
            hikeList.forEach(hike => {
                //for(const hike of hikeList){
                const item = new Hike(hike.name, hike.imgSrc, hike.imgAlt, hike.distance, 
                    hike.difficulty, hike.description, hike.directions);
              parent.appendChild(item.renderHike(imgBasePath));
                })
            //};
        }    

        
    };

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
                const hikeName = document.getElementById("hikeName").value;
                console.log("HIKE NAME:");
                console.log(document.getElementById("hikeName"));

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
        const item = document.createElement("div");
        item.innerHTML = `<h2>${comment.name}</h2>
              <div class="flex-container">
                    <div>
                            <div>
                                <h3>Date of comment</h3>
                                <p>${comment.date}</p>
                            </div>
                            <div>
                                <h3>Comment text</h3>
                                <p>${comment.content}</p>
                            </div>                       
                    </div>
                    </div>`;
           
                    return item;
    }
}
    


    

    
 controller.load();