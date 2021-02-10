var todos;
var storedTodos = localStorage.getItem("todo")
        if(storedTodos == null){
            todos = []
        } else {
            todos = JSON.parse(storedTodos)
            console.log("memory start");
            console.log( todos);
            console.log("memory end");
        }

export default todos;