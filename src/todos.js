const toDoList=[];
class Todos{
    constructor(title){
        this.title= title;
    }

    setDescription(desc){
        this.description= desc;
    }

    setDueDate(date){
        this.dueDate= date;
    }

    setPriority(p){
        this.priority= p;
    }
}

function addNewTask(title){
    let newTask= new Todos(title);
    toDoList.push(newTask);
}




export {Todos, toDoList, addNewTask};