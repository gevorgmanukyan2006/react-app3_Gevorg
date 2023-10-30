export const createTask = (task) => {
    fetch("http://localhost:3001/task",{
        method:"POST",
        "content-type":"application-json",
        body: JSON.stringify({title: task.title, description: task.description})
    }).then((response)=> console.log(response,"response"));

}