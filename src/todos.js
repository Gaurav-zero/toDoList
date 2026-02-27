const toDoList=[];
const table= document.querySelector("#table");
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

function displayTasks(){
    let tableLength= table.rows.length;
    for(let i=0; i<tableLength; ++i){
        table.deleteRow(0);
    }

    for(let i=0; i<toDoList.length; ++i){
        let row= table.insertRow();
        let cell0= row.insertCell(0);
        let cell1= row.insertCell(1);

        cell1.textContent= toDoList[i].title;
        let doneCheck= document.createElement("input");
        doneCheck.setAttribute("type", "checkbox");
        cell0.appendChild(doneCheck);

        doneCheck.addEventListener("change", (e) =>{
            toDoList.splice(i,1);
            let thisRow= doneCheck.parentNode.parentNode;
            thisRow.parentNode.removeChild(thisRow);
        });
    }
}


export {Todos, toDoList, addNewTask, displayTasks};