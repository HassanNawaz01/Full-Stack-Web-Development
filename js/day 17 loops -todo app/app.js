let todo = [];
let req = prompt("Enter your request");
while (true){
    if (req == "quit"){
        console.log("quitting Todo App");
        break
    }else if (req =="list"){
        for (let i=0;i<todo.length; i++){
            console.log(`${i} :${todo[i]}`);
            console.log("------------------");
        }
    }else if (req == "add"){
        let add= prompt("Please eneter the task you want to add");
        todo.push(add);
        
        let yesNo = prompt("add more task in a list type: Y/N");
        while ((yesNo =="Y") || (yesNo == "y")){
            add= prompt("Please enter the task you want to add");
            todo.push(add);
            yesNo = prompt("if want to add more task in a list: Y");
        }
    }else if (req=="delete") {
        let idx =prompt("which index you want to delete in list");
        console.log(`your list task : ${todo[idx]} deleted!`);
        todo.splice(idx,1);
    }else{
        console.log("invalid request!");
    }
    req = prompt("Please enter your request");
}