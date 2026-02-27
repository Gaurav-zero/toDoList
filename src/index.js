import "./styles.css";
import {Todos, toDoList, addNewTask,displayTasks} from "./todos.js";


const f= document.querySelector("form");
const addBtn= document.querySelector(".addBtn");
const title= document.querySelector("#titleTask");
const taskDesc= document.querySelector("#taskDesc");
const taskDate= document.querySelector("#taskDate");

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