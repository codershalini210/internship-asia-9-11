var task_ary = []
function addtask()
{
    var txttask = document.getElementById("txttask")
    var pmsg = document.getElementById("pmsg")
   
    let lastindex = task_ary.length-1
    id=1
    if(lastindex>=0)
    {
    id= task_ary[lastindex].id +1
    }
    if(txttask.value=="")
    {
        pmsg.innerHTML = "Please Enter TAsk"
        return
    }
    let task = {id:id,taskname: txttask.value,status:"Pending"}
    
    if(task_ary.findIndex((e)=>e.taskname == txttask.value) != -1)
    {
        pmsg.innerHTML ="Task already present"
        return
    }
        
    task_ary.push(task)
    txttask.value=""
    txttask.focus()
    showTask()

}
function Completetask(index)
{
    task_ary[index].status = "Completed"
    showTask()
}
function deletetask(index)
{
    task_ary.splice(index,1)
    showTask()
}
function showTask()
{ var tbdy = document.getElementById("tbdy")
    let ui = task_ary.map((task,index)=>
    {
        return `<tr>
        <td>${task.id}</td>
        <td>${task.taskname}</td>
        <td>${task.status}</td>
        <td><input type="button" value="Complete" onclick="Completetask(${index})"/></td>
        <td><input type="button" value="Delete" onclick="deletetask(${index})"/></td>
        </tr>`
    }).join("")
    tbdy.innerHTML = ui
}