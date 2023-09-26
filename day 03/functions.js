/*
Functions
Quite often we need to perform a similar action in many places of the script.

For example, we need to show a nice-looking message when a visitor logs in, logs out and maybe somewhere else.

Functions are the main “building blocks” of the program. They allow the code to be called many times without repetition.

We’ve already seen examples of built-in functions, like alert(message), prompt(message, default) and confirm(question). But we can create functions of our own as well.


function : set of statement  that wrapped inside a block to perfom an action 
function declaration or definition  : the header of the function 
function scope or block  : the body of the function 
function call : when you  call the function 
user defined function :  when user created the function is called user defined 
predifined function : when  other developer create the function for you it is predifined function 



if you define two same concepts function in javascript you wll not get any error 
but it will call teh latest function 
*/

// function declaration or function definition 

function fnName(){
    console.log("hello word")
}

function fnName(){
    console.log("second function ")
}
function fnName(){
    console.log("third function ")
}
function fnName(){
    console.log("fourth function")
}
function fnName(){
    console.log("this si the fifth function ")
}
// function call 
fnName()
fnName()
fnName()
fnName()
// you can call the function multiple times in your own requirement

// function paramets are varaibles without scope statements which used to store data 
// and we can uilize the data of parameters inside the function scope  to perfom some action 
// paramers are always defined while function is created 
// parameters are defined inside the parenthesis  ()
// you can pass multiple parameters  seperated with a comma , 

// function argument  when you calling a function and pass a data to it is called function arguement

