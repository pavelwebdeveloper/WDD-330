import ToDo from './ToDo.js'

class ToDos {
    constructor(todos) {
        this.todos = todos;
        }
        
        showToDos(all, active, completed){
            const todosList = document.getElementById("todolist");
            todosList.innerHTML = "";
            this.renderTodolist(this.todos, todosList, all, active, completed);
            this.countLeftTasks();
        }
        
        renderTodolist(todoList, parent, all, active, completed){
            if(all == true){
            todoList.forEach(todo => {
                parent.appendChild(this.renderTodoItem(todo));
                this.countLeftTasks();
            });
            } else if(active == true){
                todoList.forEach(todo => {
                    if(todo.completed == false){
                    parent.appendChild(this.renderTodoItem(todo));
                    this.countLeftTasks();
                    }
                    });
            } else {
                todoList.forEach(todo => {
                if(todo.completed == true){
                    parent.appendChild(this.renderTodoItem(todo));
                    this.countLeftTasks();
                    }
                });
            }
        
        }
    

        renderTodoItem(todo){
            const li = document.createElement("li");
            if(todo.completed == true){
                li.innerHTML = `<div style="border:1px solid black;margin:5px;width:40%;">
            <div id="checked" style="width:20px;height:20px;border:1px solid black;display:inline-block;margin:5px;">
             <i class="fa fa-check-square-o"></i>
             </div>
             <div style="display:inline-block;padding:0px 10px;" class="checked">
             ${todo.todoName}
             </div>
             <div id="delete" style="display:inline-block;">
             <input type="hidden" value=${todo.id}>
             <i class="material-icons">clear</i>             
             </div>
             </div>`;
            return li;
            } else{
                li.innerHTML = `<div style="border:1px solid black;margin:5px;width:40%;">
            <div id="checked" style="width:20px;height:20px;border:1px solid black;display:inline-block;margin:5px;">
             <i class="fa fa-check-square-o displayed" ></i>
             </div>
             <div style="display:inline-block;padding:0px 10px;">
             ${todo.todoName}
             </div>
             <div id="delete" style="display:inline-block;">
             <input type="hidden" value=${todo.id}>
             <i class="material-icons">clear</i>             
             </div>
             </div>`;
            return li;
            }            
        }

        countLeftTasks(){
            var uncompletedTasks = 0;
            for(let i=0;i<this.todos.length;i++){
                if(this.todos[i].completed == false){
                    uncompletedTasks++;
                }
             }
             document.getElementById("uncompleted").innerHTML = `${uncompletedTasks} tasks left`;
        }


        addItem(all, active, completed){
            let todoName = document.getElementById("todo_value").value
            if(todoName == ""){
                document.getElementById("message").innerHTML = "Sorry, input cannot be blank. Please, " +
                "specify an item";
            } else {
                document.getElementById("message").innerHTML = "";
            let id = Date.now()            
            let completed = false
            let newTodo = new ToDo(id, todoName, completed);
                //todoList.addToDo(newTodo);
                //todoList.showToDos();
                this.addToDo(newTodo);
                this.showToDos(all, active, completed);
                this.countLeftTasks();
            }
        }

        

        addToDo(newTodo, all, active, completed){
            
            console.log("this is new todo")
            console.log(newTodo);
            localStorage.setItem("todos", newTodo)
            
                this.todos.push(newTodo)
            let todosArrayString = JSON.stringify(this.todos)
            console.log(todosArrayString);
            localStorage.setItem("todos", todosArrayString)
            this.countLeftTasks();
        
        }

        checkItem(event, all, active, completed){
            console.log("clicked");
            console.log(event);
            console.log(event.target);
            //console.log(event.target.previousSibling.previousSibling.firstChild.nextSibling);
            event.target.classList.toggle('checked');

            //event.target.previousSibling.previousSibling.firstChild.nextSibling.classList.toggle('displayed');
            event.target.previousSibling.previousSibling.firstChild.nextSibling.classList.toggle('displayed');
           console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%");
           console.log(event.target.nextSibling.nextSibling.firstChild.nextSibling.value);
           var itemId = event.target.nextSibling.nextSibling.firstChild.nextSibling.value;
           for(let i=0;i<this.todos.length;i++){
               if(this.todos[i].id == itemId){
            this.todos[i].completed = (this.todos[i].completed == false) ? true : false;
               }
            }
            let todosArrayString = JSON.stringify(this.todos)
                console.log(todosArrayString);
                localStorage.setItem("todos", todosArrayString)
                    this.showToDos(all, active, completed);
                    this.countLeftTasks();
        }
        

        deleteItem(event, all, active, completed){
            let deleteItemId = event.target.previousSibling.previousSibling.value;
            console.log("11111111111111111111111111111111");
            console.log(event.target.previousSibling.previousSibling);
            console.log("2222222222222222222222222222222222");
            console.log(event.target);
            console.log("33333333333333333333333333333333333");
            console.log(deleteItemId);
            for(let i=0;i<this.todos.length;i++){
                if(this.todos[i].id == deleteItemId){
                    console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
                    console.log("before");
                    console.log(this.todos.length);
                    console.log(this.todos);
                    this.todos.splice(i, 1);
                    console.log("????????????????????????????????????????");
                    console.log("after");
                    console.log(this.todos.length);
                    console.log(this.todos);
                    let todosArrayString = JSON.stringify(this.todos)
                console.log(todosArrayString);
                localStorage.setItem("todos", todosArrayString)
                    this.showToDos(all, active, completed);
                    this.countLeftTasks();
                }
            }

        }
}

export default ToDos;