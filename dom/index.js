/*

we can select dom elements using tow ways 

1) single selection 
    -doucment.getElementById
    doucmetn.getElemetnByClassName 
    doucment.GetElemtnByTagName
    document.getelemetnByname 

    -document.querySelector
2) collection seelction 



*/

// by id 

let h1  =  document.getElementById("h1")
//  h1  =  document.getElementsByClassName("hn1") // collection of html elements >> else  collectin with length 0
 h1  =  document.getElementsByTagName("h1") // collection 
 h1  =  document.getElementsByName("h1")

 h1 =  document.querySelectorAll("h1")
console.log("h1" ,h1)