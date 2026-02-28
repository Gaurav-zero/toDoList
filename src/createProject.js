const projectContainer= document.querySelector(".projectContainer");

export function createProject(name){
    let newProject= document.createElement("div");
    let projectHeading= document.createElement("h1");
    projectHeading.textContent= ">"+ name;
    newProject.appendChild(projectHeading);
    projectContainer.appendChild(newProject);

    newProject.setAttribute("class", "styleProject");

    return newProject;
}