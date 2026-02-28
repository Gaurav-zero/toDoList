import "./styles.css";
import {Todos, toDoList, addNewTask} from "./todos.js";
import { displayTasks } from "./displayTasks.js";
import { createProject } from "./createProject.js";
import { createTable } from "./createTable.js";

const projectContainer= document.querySelector(".projectContainer");
const addProjectBtn= document.querySelector(".addProject");
const f= document.querySelector("form");
const addBtn= document.querySelector(".addBtn");
const title= document.querySelector("#titleTask");
const taskDesc= document.querySelector("#taskDesc");
const taskDate= document.querySelector("#taskDate");
const projectName= document.querySelector("#projectName");
const projectForm= document.querySelector(".projectForm")

addProjectBtn.addEventListener("click", (e)=>{
    projectForm.style.display="block";      
});

projectForm.addEventListener("submit", (e)=>{
    e.preventDefault();
    let newAddBtn= document.createElement("button");
    newAddBtn.textContent= "AddTask";

    

    let newProject= createProject(projectName.value);
    newProject.appendChild(newAddBtn);  
    //appendTable(newProject);

    newAddBtn.addEventListener("click", (e)=>{
        newProject.appendChild(f);
        f.style.display="block";
    });

    let newTable= createTable(newProject);

    f.addEventListener("submit", (e)=>{
        e.preventDefault();
        addNewTask(title.value, taskDesc.value, taskDate.value);
        title.value="";
        taskDesc.value="";
        taskDate.value="";
        displayTasks(newTable);
        f.style.display="none";
    });

    projectName.value= "";
    projectForm.style.display= "none";
});








