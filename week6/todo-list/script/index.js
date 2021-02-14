import ToDos from './ToDos.js'

import todos from './todo-list.js'

            

const todoList = new ToDos(todos);
var all = true;
var active = false;
var completed = false;


        //on load grab the array and insert it into the page
        window.addEventListener("load", () => {
            todoList.showToDos(all, active, completed);
            document.getElementById("mode").firstChild.style.border = "1px solid black";
            });

            document.getElementById("mode").addEventListener("click", () => {
                event.target.classList.toggle('active');
                if(event.target.textContent == "All."){
                    event.target.style.border = "1px solid black";
                    event.target.nextSibling.style.border = "none";
                    console.log(event.target.nextSibling);
                    event.target.nextSibling.nextSibling.nextSibling.style.border = "none";
                    console.log(event.target.nextSibling.nextSibling.nextSibling);
                    all = true;
                    active = false;
                    completed = false;
                    todoList.showToDos(all, active, completed);
                } else if(event.target.textContent == "Active."){
                    event.target.previousSibling.style.border = "none";
                    event.target.style.border = "1px solid black";
                    event.target.nextSibling.nextSibling.style.border = "none";
                    all = false;
                    active = true;
                    completed = false;
                    todoList.showToDos(all, active, completed);
                } else {
                    event.target.previousSibling.previousSibling.previousSibling.style.border = "none";
                    event.target.previousSibling.previousSibling.style.border = "none";
                    event.target.style.border = "1px solid black";
                    all = false;
                    active = false;
                    completed = true;
                    todoList.showToDos(all, active, completed);
                }
                          
                    });
        
            
        document.getElementById("add_todo").addEventListener("click", () => {
            todoList.addItem(all, active, completed);            
                });

        document.getElementById("todolist").addEventListener("click", (event) => {            
                    todoList.checkItem(event, all, active, completed);            
                        });

        document.getElementById("todolist").addEventListener("click", (event) => {            
                         todoList.deleteItem(event, all, active, completed);            
                        });

        /*document.getElementById("add_todo").addEventListener("click", () => {
                    let todoName = document.getElementById("todo_value").value
                    if(todoName == ""){
                        document.getElementById("message").innerHTML = "Sorry, input cannot be blank. Please, " +
                        "specify an item";
                    } else {
                        document.getElementById("message").innerHTML = "";
                    let id = Date.now()            
                    let completed = false
                    let newTodo = new ToDo(id, todoName, completed);
                        todoList.addToDo(newTodo);
                        todoList.showToDos();
                    }
                });*/

    
    