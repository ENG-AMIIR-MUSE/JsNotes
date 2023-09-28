/*

as we can pass function to string number boolean as argumnet 
also we can pass a function another function which is anonymous function 
anonymous function : a function without name 

function fn(){
    --------
    ------------
}

fn(function(){})
*/
function add(x,y){
    console.log(x+y)
}
function print(){
    console.log("normal function")
}
function fn(f){
console.log("f :",f)
f()
f()
f()
}

console.log("-----------------------------------")
fn(function(){
// anynonmous is a callback function  because we are passing as arguement 

     // passing to anonymous function
    let name  = "amir"
    console.log("name : "+ name)
})
console.log("------------")
fn(print) // passing to a noraml function
// print is a callback function  because we are passing as arguement 

console.log("------------")

fn(add)  
// add is a callback function  because we are passing as arguement 
// undefinded  =  undefined + undefined  / undefined + 232 


// any function whihc you are passing as argument  those function  are called callbacks function 

function greate(message){
    console.log("message ",message)
    message()
}
function message(){
    console.log("hello amir")
}
greate(message)

// any function which you pass as arugment to another function those function are called callback function 
// any function that takes anotehr function as argument is called higher order function 
// functions are  called higher order function only if it takes one argument as  a function

// also function can return a value   
function myFun(x,y){
    var  result  =  x + y 
    return result
}

function displayMessage(fun,x,y){
    var res =  fun(x,y)
    return display(res)
}
function display(fun){
return fun

}
const output =displayMessage(myFun,10,29)
console.log(output)

// return statement should be the last statement in your function 

// if you write a statement  after return keyword that line will not be excuted 


// once the interpreter reachers the return statement  your all that will be ignored



//==============================
// anonymous function only you use as an argument or you can return but you can define it alone 
// if you want to define alone then you have to assign it to a variable 
// const  varName  = function(){ }  : this is called function expression 

// function expression : is a technique whihc we assign  variable  to anonymous function 
const name   = function(name){
    console.log("hello word " , name)
}
// to call function expression you can use the variable that you assign it 
name("amir")