
/*

Data types
A value in JavaScript is always of a certain type. For example, a string or a number.
vriable can at one moment store a number and then store a string programing languages that allow such thing  , such us javasciprt is called "dynamically typed"
What does it mean that JavaScript is dynamically typed?
JavaScript is a dynamically typed language, which means that data types of variables are determined by the value they hold at runtime and can change throughout the program as we assign different values to them
Infinity is something which is boundless, endless, or larger than any natural number. It is often denoted by the infinity symbol 
∞\infty .


There are 8 basic data types in JavaScript.

Seven primitive data types:
number for numbers of any kind: integer or floating-point, integers are limited by ±(253-1).
bigint for integer numbers of arbitrary length.any value that is greater then 2 power 53 -1  comes under bigint 
string for strings. A string may have zero or more characters, there’s no separate single-character type.
boolean for true/false.
null for unknown values – a standalone type that has a single value null.
undefined for unassigned values – a standalone type that has a single value undefined.
symbol for unique identifiers.any data the created using constructure symbol comes under symbol
And one non-primitive data type:
object for more complex data structures.
The typeof operator allows us to see which type is stored in a variable.

Usually used as typeof x, but typeof(x) is also possible.
Returns a string with the name of the type, like "string".
For null returns "object" – this is an error in the language, it’s not actually an object.


in javascipt there is tow special values which is 
1 )  undefined and data type is : undefined 
2 ) null and the data type is : null

*/

let name  =  null 
let age = undefined 
let boolean  = true 
let nuber = 123
let  bingInt   = 1232n
let users = {
    name:'amir',
    id : 2234
}
let fav =  ['amir','muse']

// actually the data tupe of the null is null not object 
// in javascrpt null value is considered as object  , so null represent one object value 
// and this special object is one  primtive data type  and  that one primtive tupe comes under null type 
console.log(typeof name )
console.log(typeof age )
console.log(typeof users )
console.log(typeof fav)

