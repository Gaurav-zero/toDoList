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

function addNewTask(title, desc){
    let newTask= new Todos(title);
    newTask.setDescription(desc);
    toDoList.push(newTask);
}

function toggleDisplay(el){
    if(el.style.display == "block") el.style.display= "none";
    else el.style.display= "block";
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

        cell1.textContent= toDoList[i].title + "\n";
        let doneCheck= document.createElement("input");
        doneCheck.setAttribute("type", "checkbox");
        cell0.appendChild(doneCheck);

        doneCheck.addEventListener("change", (e) =>{
            toDoList.splice(i,1);
            let thisRow= doneCheck.parentNode.parentNode;
            thisRow.parentNode.removeChild(thisRow);
        });

        cell1.addEventListener("click", (e)=>{
            while(cell1.firstChild){
                cell1.removeChild(cell1.firstChild);
            }
            cell1.textContent= toDoList[i].title + "\n";
            const descContainer= document.createElement("textarea");
            descContainer.textContent= toDoList[i].description;
            cell1.appendChild(descContainer);
        });
    }
}


export {Todos, toDoList, addNewTask, displayTasks};