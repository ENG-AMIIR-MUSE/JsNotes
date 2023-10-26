// 1 ) =================
const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const d3 = new Date();
const dayName = dayNames[d3.getDay()];
console.log(`Today is :${dayNames[d3.getDay()]} current time is : ${d3.toLocaleTimeString()}`)