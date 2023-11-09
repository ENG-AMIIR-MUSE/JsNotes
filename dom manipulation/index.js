let  div  = document.querySelector('div')

let p2  = document.createElement("p")
p2.innerHTML = "<strong>this is bold</strong>"


div.append(p2)

// p2.classList.add('p-tag')
p2.className = "p22 adf adf" // you can add alot of classes 
p2.classList.add('added') // just you can add one class 

let arr  = ["amir"]

// p2.remove() // removing element 

// p2.classList.toggle('added') // delete if exists else create it 
p2.setAttribute('name',"ahmed")

console.log(p2.getAttribute('name'))

p2.classList.add("moha")
p2.classList.toggle("jiinow")
p2.classList.forEach((data)=>console.log(data))


// div.insertBefore(p2,document.querySelector("p"))

// div.insertAdjacentElement

// console.log(document.getElementsByName('p'))
const p3  = document.getElementsByName('ahmed')

console.log(p3)