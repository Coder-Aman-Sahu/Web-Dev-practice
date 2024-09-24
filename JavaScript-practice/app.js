let todo=[];

let req = prompt("Enter your request: ");

while(true){
    if(req=="quit"){
        console.log("You quit the app");
        break;
    }
    if(req=="list"){
        console.log("**********");  
        for(let i=0;i<todo.length;i++){
            console.log(i,todo[i]);
        }
        console.log("**********");  
    } else if(req=="add"){
        let task = prompt("Enter the task: ");
        todo.push(task);
        console.log("Task added successfully");
    } else if(req=="delete"){
        let idx = prompt("Enter the task index: ");
        todo.splice(idx,1);
    }
    req=prompt("Enter your request: ");
}