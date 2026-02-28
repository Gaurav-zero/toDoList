export function createTable(project){
    let newTable= document.createElement("table");
    project.appendChild(newTable);

    return newTable;
}