const container = document.querySelector(".container"),
  form = document.querySelector("form"),
  input = document.querySelector("#input"),
  btn = document.querySelector("#btn"),
  result = document.querySelector(".result");

// localStorage.setItem("tasks", JSON.stringify([]));
const tasks = JSON.parse(localStorage.getItem("tasks") || []);
let indexToUpdate;
// tasks.push({taskName:"hellow"})
form.addEventListener('submit',(e)=>{
  e.preventDefault()
  console.log("submited")
  if(btn.value == "add"){
   add()
  }else if(btn.value = "update"){
   update(indexToUpdate)
  }
})
function update(id){
  tasks[id].taskName = input.value
  localStorage.setItem("tasks",JSON.stringify(tasks))
  // window.location.reload()
  display(tasks)
  btn.value = "add"
  input.value = ""
}
display()

function add(){
  if(input.value !=  ""){
    tasks.push({taskName:input.value,status:"pending"})
    console.log(tasks)
    localStorage.setItem("tasks",JSON.stringify(tasks))
    // window.location.reload()
    display(tasks)
    input.value = ""
  }else{
    alert(
     "all Fields are Required"
    )
  }
}
function display(){

  let output = `<Table>
  <tr> 
     <th>No</th>
     <th>Task Name</th>
     <th>Status</th>
     <th>Action</th>
 </tr>`;
 
 let i = 0;
 if (tasks.length === 0) {
   output += `
 
 <tr><td colspan=4 style = "text-align:center">  No Tasks   Found</td></tr></table>`;
   result.innerHTML = output;
 } else {
  tasks.forEach((data,index)=>{
    output += `
    <tr>
    <td>${++i}</td>
 <td>${data.taskName}</td>
 <td>${data.status}</td>
 <td><button onClick =  "deleteTask(${index})">Delete</button><button onClick = "setTask(${index})">Update</button> </td>


 </tr>
 `
  })
   output += `
   
 
  
   
 

 
 </table>`;
   result.innerHTML = output;
 }
 console.log(tasks);
}


function deleteTask(id){
  console.log("id",id)
  tasks.splice(id,1)
  display()
}

function setTask(id){
console.log("id to update ", id)
input.value =  tasks[id].taskName
btn.value = "update"
indexToUpdate =  id


}