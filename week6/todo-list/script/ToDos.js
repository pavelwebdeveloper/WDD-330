
class ToDos {
    constructor(todo) {
        this.todo = todo;
        }
        
        showToDos(){

        } 

        addToDo(newTodo){
            
            console.log(newTodo);
            localStorage.setItem(storyName, storyHTML)
            if(!listArray.includes(storyName)){
            listArray.push(storyName)
            let storedListString = JSON.stringify(listArray)
            localStorage.setItem("listArray", storedListString)
        }
}
}

export default ToDos;