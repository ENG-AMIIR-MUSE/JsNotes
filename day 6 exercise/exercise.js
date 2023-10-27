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

// 4 ) ====================Guess Number
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

const timDiff = startOfYear - today; // miliseocnd
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

// 8 ) ===================

function checkNumber(num) {
  if (num % 3 == 0 || num % 7 == 0) {
    return true;
  }
  return false;
}
console.log(checkNumber(9));

let arr = [1, 23, 5, 6, 50];
let sum = arr.reduce((t, e) => (t += e));

console.log(sum);

// 19 ==================== print stars
let star = "";
for (let i = 0; i <= 5; i++) {
  for (let j = 0; j <= i; j++) {
    star += "*";
  }
  console.log(star);
}

// 23    ================ number of days passed from 2023

let startDate = new Date("2023,01 ,01");
let todaysDate = new Date();
let diff = todaysDate - startDate;
console.log(
  "days that passed since from 2023 is : " +
    Math.floor(diff / (1000 * 60 * 60 * 24))
);

//  24 ) ==========program to calculate age. while pass your birthdate.

function getAge(birthDate) {
  let date = new Date(birthDate);
  console.log(date);
  console.log(new Date().getFullYear() - date.getFullYear());
}

getAge("2004,01,01");

//  22 ) ===============compare dates

function compareDates(date1, date2) {
  let d1 = new Date(date1);
  let d2 = new Date(date2);

  if (d1 > d2) {
    console.log(`date 1 ${date1} is greater then date 2 ${date2} `);
  }
  else if(date1   === date2){
    console.log(`date 1 and date 2 are equal  date 1 : ${d1}  date 2 ${d2}`)
  }
  else {
    console.log(`date 2 ${date2} is less then date 1 ${date1} `);
  }
}

compareDates('2025,01,01','2025,01,01');

// 21  ) ===================================
function getMonthName(date){
  const monthNames = ["January","February","March","April","May","June","July","August","September","Octobar","Novembar","December"]
  const  d  = new Date(date)
  console.log(monthNames[d.getMonth()])

}
getMonthName('2023,10,2')


// 25 ================= get day with three letter
function getDayWithThreeLetters(date){
 let newD  = new Date(date)
 let  dayNames  =  ['Monday',"Thuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]
return   dayNames[newD.getDay()].slice(0,3)


}
console.log(getDayWithThreeLetters(new Date('2023,10,26')))
