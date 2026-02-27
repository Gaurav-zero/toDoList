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

function addNewTask(title, desc, date){
    let newTask= new Todos(title);
    newTask.setDescription(desc);
    newTask.setDueDate(date);
    toDoList.push(newTask);
}



function displayTasks(){
    let tableLength= table.rows.length;
    for(let i=0; i<tableLength; ++i){
        table.deleteRow(0);
    }

    for(let i=0; i<toDoList.length; ++i){
        let row1= table.insertRow();
        let cell0= row1.insertCell(0);
        let cell1= row1.insertCell(1);

        let row2= table.insertRow();
        let cell2= row2.insertCell(0);
        let cell3= row2.insertCell(1);

        let row3= table.insertRow();
        let cell4= row3.insertCell(0);
        let cell5= row3.insertCell(1);

        cell1.textContent= toDoList[i].title;
        let doneCheck= document.createElement("input");
        doneCheck.setAttribute("type", "checkbox");
        cell0.appendChild(doneCheck);

        let descArea= document.createElement("textarea");
        descArea.textContent= toDoList[i].description;
        cell3.appendChild(descArea);
        cell2.textContent="";

        cell4.textContent="";
        cell5.textContent= `Due-Date:- ${toDoList[i].dueDate}`;

        doneCheck.addEventListener("change", (e) =>{
            toDoList.splice(i,1);
            let thisRow1= doneCheck.parentNode.parentNode;
            thisRow1.parentNode.removeChild(thisRow1);

            let thisRow2= descArea.parentNode.parentNode;
            thisRow2.parentNode.removeChild(thisRow2);

            let thisRow3= cell5.parentNode;
            thisRow3.parentNode.removeChild(thisRow3);
        });

        /**cell1.addEventListener("click", (e)=>{
            while(cell1.firstChild){
                cell1.removeChild(cell1.firstChild);
            }
            cell1.textContent= toDoList[i].title + "\n";
            const descContainer= document.createElement("textarea");
            descContainer.textContent= toDoList[i].description;
            cell1.appendChild(descContainer);
        });**/
    }
}


export {Todos, toDoList, addNewTask, displayTasks};