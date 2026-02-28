import { toDoList } from "./todos.js";


const taskTable= document.createElement("table");

export function displayTasks(project){
    let tableLength= taskTable.rows.length;
    for(let i=0; i<tableLength; ++i){
        taskTable.deleteRow(0);
    }

    for(let i=0; i<toDoList.length; ++i){
        let row1= taskTable.insertRow();
        let cell0= row1.insertCell(0);
        let cell1= row1.insertCell(1);

        let row2= taskTable.insertRow();
        let cell2= row2.insertCell(0);
        let cell3= row2.insertCell(1);

        let row3= taskTable.insertRow();
        let cell4= row3.insertCell(0);
        let cell5= row3.insertCell(1);

        let row4= taskTable.insertRow();
        let cell6= row4.insertCell(0);
        let cell7= row4.insertCell(1);

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

        let prioritySelector= document.createElement("select");
        let option1= document.createElement("option");
        let option2= document.createElement("option");
        let option3= document.createElement("option");
        let option4= document.createElement("option");

        prioritySelector.setAttribute("name", "priority");
        prioritySelector.setAttribute("id", "prioritySelector");

        option1.textContent= "priority1";
        option2.textContent= "priority2";
        option3.textContent= "priority3";
        option4.textContent= "priority4";

        option1.setAttribute("value", "1");
        option2.setAttribute("value", "2");
        option3.setAttribute("value", "3");
        option4.setAttribute("value", "4");

        prioritySelector.appendChild(option1);
        prioritySelector.appendChild(option2);
        prioritySelector.appendChild(option3);
        prioritySelector.appendChild(option4);

        cell7.appendChild(prioritySelector);
        cell6.textContent="";

        doneCheck.addEventListener("change", (e) =>{
            toDoList.splice(i,1);
            let thisRow1= doneCheck.parentNode.parentNode;
            thisRow1.parentNode.removeChild(thisRow1);

            let thisRow2= descArea.parentNode.parentNode;
            thisRow2.parentNode.removeChild(thisRow2);

            let thisRow3= cell5.parentNode;
            thisRow3.parentNode.removeChild(thisRow3);

            let thisRow4= cell7.parentNode;
            thisRow4.parentNode.removeChild(thisRow4);
        });
    }

    project.appendChild(taskTable);
}