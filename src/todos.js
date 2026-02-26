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


export {Todos};