import ToDos from './ToDos.js'
import ToDo from './ToDo.js'
import todos from './todo-list.js';

            

const todoList = new ToDos(todos);
        //on load grab the array and insert it into the page
        window.addEventListener("load", () => {
            todoList.showToDos();
            });
            
        document.getElementById("add_todo").addEventListener("click", () => {
            let id = Date.now()
            let todoName = document.getElementById("todo_value").value
            let completed = false
            let newTodo = new ToDo(id, todoName, completed);
                todoList.addToDo(newTodo);
                });
       