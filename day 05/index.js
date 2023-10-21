// length property will give you the length of yous  string 

let string  = "amir Muse Hassan"
console.log(string.length)

// accessing a character in your string  >>> two ways >> charAt()  or []
// string are like array they are index based 
console.log(string[string.length - 1])  
/*
string.length will give the length of you string  but as we metioned the string are like array they are index based the frist character index is 0 
so in order to get   the last character we have to use the string length - 1

string charAt()
-------------------

*/
console.log(string.charAt(string.length -6))  // similar to the string[index]

/*

Searching  string index 
-------------------------------
1) indexOf()  
2) lastIndexOf()
they both return the index of the searched string 
---------------------------------------------------
they take both Positon as parameter  >> this is the index Postion where you want to begin  the search 
Note
-----
if you don't pass a postion  teh default postion of the indexOf is  0 
if you don't pass a postion the defualt postion of the lastIndexOf is infinity
*/

let str  = "the xcode undefined code vcode code code !"
console.log(str.indexOf("The")) //  There is no string that matches "The" so it will return the -1 
console.log(str.lastIndexOf("The"))

console.log(str.indexOf("code"))
console.log(str.lastIndexOf("code")) // this will  check end to the left 
console.log(str.indexOf("code",-6)) // the first index of  code is 4 but  4 is not greater then or equal to 5 , so we specify the strat postion of the string 
console.log(str.lastIndexOf("code",-1)) // the last index of code is 24  and the postion we passed is 24 , so check if the index of our last occurance which is 24 is less then the index of our position 
// this case its equal so it will return the 24 index

//  substring and slice : they are both used to return a section of our string  and return as a new string , they don't change the orginal string 
// first param is indexStart:
let newStr  = "The Morning is upon us."
console.log(newStr.slice(12)) // it will extract from indx 12  as a new string 
console.log(newStr.substring(12)) // it will extract from indx 12  as a new string
// if you give  menus value to the slice method  it will start the menus value to right 
console.log(newStr.slice(-15)) 
console.log(newStr.slice(-15)) 

/*

the first difference between the slice and substring is  when you give them - negative value 

slice : it will start that negative number  then it goes to the right 
while the 
substring  : it will consider that negative as 0  , so it will start from 0 and return the whole string 


*/
console.log("slice:",newStr.slice(-17)) // it start -17 to end or the right 
console.log("substring: ",newStr.substring(-17)) // it consider as 0  , and will start from 0

/*

so if you give them  , index that is not exist  they will return the empty string ''

*/
console.log("50",newStr.slice(50))
console.log("50",newStr.substring(50))

/*

now lets talk about the second parameter  whihc is index end 

*/
console.log(newStr.slice(12,17))