// 1 ) =================
const dayNames = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const d3 = new Date();
const dayName = dayNames[d3.getDay()];
console.log(
  `Today is :${
    dayNames[d3.getDay()]
  } current time is : ${d3.toLocaleTimeString()}`
);

// 2 ) =============  caluclate the area of triable
function calculateAreaOfTriangle(l1, l2, l3) {
  let semiPerimeter = (l1 + l2 + l3) / 2;
  let areaOfTri = Math.sqrt(
    semiPerimeter *
      (semiPerimeter - l1) *
      (semiPerimeter - l2) *
      (semiPerimeter - l3)
  );
  return areaOfTri;
}

console.log(
  `The area of Triangle is : ${Math.floor(
    calculateAreaOfTriangle(15, 16, 17)
  )} cm square`
);

//  3) ===============check if  year is  leap year
function checkLeapYear(year) {
  if (year % 4 == 0) {
    console.log(`${year}  is a leap year`);
  } else {
    console.log(`${year}  is not a leap year `);
  }
}

checkLeapYear(2028);

function guessNumber() {
  let randomNumber = Math.floor(Math.random() * (10 - 1) + 1);
  let userGuess = Number(prompt("enter a number between 1 to 10"));
  if (userGuess > 10) {
    console.log("please enter a number between 1 and 10");
  }
  if (userGuess == randomNumber) {
    console.log("Good work");
  } else {
    console.log(`Not Matched , The guess number is ${randomNumber} `);
  }
}
// guessNumber()

let today = new Date();

let startOfYear = new Date(2024, 0, 1);

const timDiff = startOfYear - today;
// let daysLeft  = (startOfYear.getTime() -  today.getTime()) /( 1000 * 60 * 60 * 24)
console.log(
  `Number of days left in 2023 is ${Math.floor(
    timDiff / (1000 * 60 * 60 * 24)
  )}`
);

// let string = prompt("enter something ...");
// if(string.startsWith("py")){
//     console.log(string)
// }else{
//     console.log(string.padStart(string.length + 2 , "py"))
// }

let arr = [1, 23, 5, 6, 50];
let sum = arr.reduce((t, e) => (t += e));

console.log(sum);

let star  = ""
for (let i = 0; i <= 5; i++) {
    for(let j =  0 ; j <= i ; j++){
            star  += "*" 
    }
    console.log(star)
}

let startDate  = new Date('2023,01 ,01')
let todaysDate  = new Date()
let diff  = todaysDate -  startDate
// let startYear  =  new Date(2023,0,1)
// let diff =  todaysDate.getTime()  - startYear.getTime()
// let passedDays = Math.floor(diff/(1000*60*60*24))
console.log("days that passed since from 2023 is : "+Math.floor(diff / (1000 * 60 * 60 * 24)))
