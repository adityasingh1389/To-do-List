let taskList=document.querySelector("#task-list");
let todoApp=document.querySelector(".todo-container");
let inputBox=document.querySelector("input");


function addTask()
{
    if(inputBox.value=="")
    {
        alert("add a task first !");
    }
    else
    {
        let task=document.createElement("li")
        task.innerHTML="<div class='unchecked'>	&#10004</div>"+inputBox.value+"</div>"
        taskList.append(task);
        inputBox.value="";
        saveData();
    }
}

document.addEventListener("keydown",(e)=>
{
    if(e.key=="Enter")
    {
        addTask();
        saveData();
    }
})


todoApp.addEventListener("click",(e)=>{
    if(e.target.classList.contains("unchecked"))
    {
        if(e.target.classList.contains('checked'))
        {
            e.target.classList.remove('checked');
            e.target.parentNode.classList.remove("list-checked");
            saveData();
        }
        else
        {
            e.target.classList.add('checked');
            e.target.parentNode.classList.add("list-checked");
            saveData();
        }
    }
})

todoApp.addEventListener("dblclick",(e)=>{
    if(e.target.tagName=='LI')
    {
        e.target.remove();
        saveData();
    }
})

function saveData()
{
    localStorage.setItem("data",taskList.innerHTML);
}

function showTask()
{
    taskList.innerHTML=localStorage.getItem("data");
}
showTask();