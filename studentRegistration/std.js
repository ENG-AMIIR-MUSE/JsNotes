let form = document.querySelector(".stdForm"),
    name = document.querySelector("#name"),
    email = document.querySelector("#Email"),
    address = document.querySelector("#Address"),
    profile  = document.querySelector("#profile"),
  
   
    btn = document.querySelector("#btn"),
    message = document.querySelector(".message"),
    add = document.querySelector(".add #add"),
    container = document.querySelector('.container'),
    students  = JSON.parse(localStorage.getItem("students") || "[]"),
    choose  = document.querySelector(".choose"),
    imgPro,
    indexToUpdate;


const allCourses =  JSON.parse(localStorage.getItem('courses'))
getCourses()
display(students)
profile.addEventListener('change',(e)=>{
    console.log('changed')

    let img  =e.target.files[0]
    console.log(img)
    imgPro  =  img.src
})
function getCourses(){
    
    let output = ` <select  id="course">`
    const courseNames  =  allCourses.forEach((course)=>{
       
       output += `
    <option value="courses">Courses</option>
    
    <option value="${course.courseName}">${course.courseName}</option>
   
    
    `
})
output += `</select>`
choose.innerHTML =  output



}
let course  = document.querySelector("#course")

course.addEventListener('change',()=>{
    console.log("some thng change ...",course.value)
})

add.addEventListener("click", () => {
//   console.log("clicked");
  form.classList.toggle("show");
});
btn.addEventListener("click", (e) => {
  e.preventDefault();
  if (name.value == "" || email.value == "" || address.value == ""|| course.value  == "courses") {
    alert("all fields are requried");
  }else{
    if(btn.value == "register"){

        addStudent(name,email, address,course)
        name.value = ""
        email.value = ""
        address.value = ""
        // course.value = ""
        form.classList.toggle("show");
    }else if(btn.value == "update"){
        update()
        form.classList.toggle('show')
    }

  }
});

display(students)
function display(students){
    let output  = ``

    output += `
    <table>
    <tr>
    <th>No
    </th>
   
    <th>Name</th>
    <th>Email</th>
    <th>Address</th>
    <th>Course</th>
    <th>Action</th>
    <tr>

    `
    if(students.length > 0){
// console.log("greater then ")
let i = 0;

    students.forEach((std,index)=>{
        output += `
        <tr>
        
            <td>
            ${++i}
            </td>
         
            <td>
            ${std.name}
            </td>
            <td>
            ${std.email}
            </td>
            <td>
            ${std.address}
            </td>
            <td>
            ${std.course}
            </td>
            <td>
            <button onclick="editStudent(${index})">Edit</button>
            <button onclick="removeStudent(${index})">remove</button>
            </td>
          
        </tr>
        `

    })
    output += '</table>'
    // console.log(output)
    container.innerHTML = output
}else{
    // console.log('less then ')
    output += `<tr><td>No Students Found</td></tr>`
    container.innerHTML =  output

}
  

}
function addStudent(name,email, address,course){
    students.push({name:name.value, email:email.value,address:address.value, course:course.value,imgPro})
    localStorage.setItem("students",JSON.stringify(students))
    display(students)
}

function removeStudent(index){
    students.splice(index,1)
    localStorage.setItem("students",JSON.stringify(students)) 
    display(students)
}
function editStudent(index){
    form.classList.toggle("show")
    name.value =  students[index].name
    email.value =  students[index].email
    address.value = students[index].address
 
//     console.log("current",course.value)
    
    indexToUpdate = index
    btn.value = "update"
    

}
function update(){
    students[indexToUpdate].name = name.value
    students[indexToUpdate].email = email.value
    students[indexToUpdate].address = address.value
    students[indexToUpdate].course = course.value
 
    localStorage.setItem("students",JSON.stringify(students))
    display(students)
    location.reload()
  
    name.value = ""
    email.value = ""
    address.value = ""
    btn.value = "register"
}

stdSearch =  document.querySelector('#stdSearch')
stdSearch.addEventListener("input", () => {
    const searchItem = stdSearch.value.toLowerCase();
    const filtered = students.filter((data) =>
      data.name.toLowerCase().includes(searchItem)||
      data.email.toLowerCase().includes(searchItem)||
      data.address.toLowerCase().includes(searchItem)||
      data.course.toLowerCase().includes(searchItem) 
   
    );
    console.log("filtered", filtered);
    display(filtered);
  });
console.log(students)