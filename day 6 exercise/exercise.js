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
    semiPerimeter * (semiPerimeter - l1) *(semiPerimeter - l2)*(semiPerimeter - l3)

  );
  return areaOfTri
}

console.log(`The area of Triangle is : ${Math.floor(calculateAreaOfTriangle(15,16,17))} cm square`)

//  3) ===============check if  year is  leap year
function checkLeapYear(year){
 if(year %4  == 0){
    console.log(`${year}  is a leap year`)
 }else{
    console.log(`${year}  is not a leap year `)
 }
}

checkLeapYear(2028)
