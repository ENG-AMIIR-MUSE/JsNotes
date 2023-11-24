let form = document.querySelector(".courseForm"),
    courseName = document.querySelector("#course_name");
    code = document.querySelector("#code");
    reigster = document.querySelector("#register");
    message = document.querySelector(".message");
    add = document.querySelector(".add");
    courses  = JSON.parse(localStorage.getItem("courses") || "[]")

add.addEventListener("click", () => {
  console.log("clicked");
  form.classList.toggle("show");
});
reigster.addEventListener("click", (e) => {
  e.preventDefault();
  if (courseName.value == "" || code.value == "") {
    alert("all fields are requried");
  }else{
   courses.push({courseName:courseName.value, code:code.value})
   localStorage.setItem("courses",JSON.stringify(courses))
   console.log(courses)

  }
});
console.log(courses)
