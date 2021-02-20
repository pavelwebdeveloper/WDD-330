var comments;
var storedComments = localStorage.getItem("hikes")
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

export default comments;