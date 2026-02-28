import "./styles.css";
import {Todos, toDoList, addNewTask} from "./todos.js";
import { displayTasks } from "./displayTasks.js";
import { createProject } from "./createProject.js";

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

    newAddBtn.addEventListener("click", (e)=>{
            f.style.display="block";
    });

    let newProject= createProject(projectName.value);
    newProject.appendChild(newAddBtn);  

    projectForm.style.display= "none";
});

/** 
addBtn.addEventListener("click", (e)=>{
    f.style.display="block";
});


f.addEventListener("submit", (e)=>{
        e.preventDefault();
        addNewTask(title.value, taskDesc.value, taskDate.value);
        title.value="";
        taskDesc.value="";
        taskDate.value="";
        displayTasks();
        f.style.display="none";
});

projectContainer.appendChild(addBtn);
projectContainer.appendChild(f);

*/
