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

*/

// function declaration or function definition 

function fnName(){
    console.log("hello word")
}
// function call 
fnName()