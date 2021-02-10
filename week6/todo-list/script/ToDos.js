
class ToDos {
    constructor(todo) {
        this.todo = todo;
        }
        
        showToDos(){

        } 

        addToDo(newTodo){
            
            console.log("this is new todo")
            console.log(newTodo);
            localStorage.setItem("todos", newTodo)
            
                this.todo.push(newTodo)
            let todosArrayString = JSON.stringify(this.todo)
            console.log(todosArrayString);
            localStorage.setItem("todosArray", todosArrayString)
        
        }
}

export default ToDos;