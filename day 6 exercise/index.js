let date  = new Date()
// date  = new Date("september 14 2015 1:13:00")
// console.log(date.getDate())
date.getDate() // get date as number 
console.log(date.getFullYear()) // year as a number 
console.log(date.getMonth()) // month as a number 
console.log(date.getDate()) // day as a number 
console.log(date.getHours()) // hours as a number 
console.log(date.getMinutes()) // Minutes as a number 
console.log(date.getSeconds()) // seconds  as a number 

const d  = new Date()
console.log(d.getMonth())

const d1  = new Date('2023-10-2')
const d2  = new Date('2003-2-2')
console.log(d1.getDate() > d2.getDate())
console.log(d1.getDay())


