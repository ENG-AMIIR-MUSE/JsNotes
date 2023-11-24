let form = document.querySelector(".stdForm"),
    name = document.querySelector("#name"),
    email = document.querySelector("#Email"),
    address = document.querySelector("#Address"),
  
   
    btn = document.querySelector("#btn"),
    message = document.querySelector(".message"),
    add = document.querySelector(".add #add"),
    container = document.querySelector('.container'),
    students  = JSON.parse(localStorage.getItem("students") || "[]"),
    choose  = document.querySelector(".choose"),
    indexToUpdate;
    
const allCourses =  JSON.parse(localStorage.getItem('courses'))
getCourses()
function getCourses(){
    
    let output = ` <select  id="course">`
    const courseNames  =  allCourses.forEach((course)=>{
        
       output += `
    
    <option value="${course.courseName}">${course.courseName}</option>
   
    
    `
})
output += `</select>`
choose.innerHTML =  output



}
// console.log("course Names",courseNames)
console.log("all course",allCourses)
let course  = document.querySelector("#course")

course.addEventListener('change',()=>{
    // console.log("some thng change ...")
    console.log(course.value)
})

add.addEventListener("click", () => {
//   console.log("clicked");
  form.classList.toggle("show");
});
btn.addEventListener("click", (e) => {
  e.preventDefault();
  if (name.value == "" || email.value == "" || address.value == ""|| course.value  == "course") {
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
    students.push({name:name.value, email:email.value,address:address.value, course:course.value})
    localStorage.setItem("students",JSON.stringify(students))
    display(students)
}

function removeCourse(index){
    courses.splice(index,1)
    localStorage.setItem("courses",JSON.stringify(courses)) 
    display(courses)
}
function editStudent(index){
    form.classList.toggle("show")
    name.value =  students[index].name
    email.value =  students[index].email
    address.value = students[index].address
    course.selected = students[index].course
    indexToUpdate = index
    btn.value = "update"
    

}
function update(){
    courses[indexToUpdate].courseName = courseName.value
    courses[indexToUpdate].code = code.value
    localStorage.setItem("courses",JSON.stringify(courses))
    display(courses)
    courseName.value = ""
    code.value = ""
    btn.value = "register"
}
console.log(students)