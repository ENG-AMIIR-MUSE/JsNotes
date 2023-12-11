let form = document.querySelector(".courseForm"),
    courseName = document.querySelector("#course_name"),
    code = document.querySelector("#code"),
    btn = document.querySelector("#btn"),
    message = document.querySelector(".message"),
    add = document.querySelector(".add button"),
    container = document.querySelector('.container'),
    courses  = JSON.parse(localStorage.getItem("courses") || "[]"),
    indexToUpdate;
    

add.addEventListener("click", () => {
 
  form.classList.toggle("show");
});
btn.addEventListener("click", (e) => {
  e.preventDefault();
  if (courseName.value == "" || code.value == "") {
    alert("all fields are requried");
 

  }else{
    if(btn.value == "Register"){
      
        addCourse(courseName, code)
        courseName.value = ""
        code.value = ""
        form.classList.toggle("show");
    }else if(btn.value == "update"){
        update()
        form.classList.toggle('show')
    }

  }
});
stdSearch.addEventListener("input", () => {
    const searchItem = stdSearch.value.toLowerCase();
    const filtered = courses.filter((data) =>
      data.courseName.toLowerCase().includes(searchItem)
    
   
    );
    console.log("filtered", filtered);
    display(filtered);
  });

display(courses)
function display(allCourses){
    let output  = ``

    output += `
    <table>
    <tr>
    <th>course Name</th>
    <th>course Code</th>
    <th>Action</th>
    <tr>

    `
    if(allCourses.length > 0){

    allCourses.forEach((course,index)=>{
        output += `
        <tr>
            <td>
            ${course.courseName}
            </td>
            <td>
            ${course.code}
            </td>
            <td>
            <button onclick="editCourse(${index})">Edit</button>
            <button onclick="removeCourse(${index})">remove</button>
            </td>
          
        </tr>
        `

    })
    output += '</table>'
   
    container.innerHTML = output
}else{
 
    output += `<tr><td>No courses added yet</td></tr>`
    container.innerHTML =  output

}
  

}
function addCourse(courseName,code){
    courses.push({courseName:courseName.value, code:code.value})
    localStorage.setItem("courses",JSON.stringify(courses))
    display(courses)
}

function removeCourse(index){
    courses.splice(index,1)
    localStorage.setItem("courses",JSON.stringify(courses)) 
    display(courses)
}
function editCourse(index){
    form.classList.toggle("show")
    courseName.value =  courses[index].courseName
    code.value =  courses[index].code
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