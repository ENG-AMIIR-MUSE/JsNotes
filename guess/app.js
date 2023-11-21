let play = document.querySelector(".con .start .play");

play.addEventListener("click", () => {
  let sub = document.querySelector(".con .sub");
  sub.classList.toggle("show");
});

let button = document.querySelector(".sub button"); // button
let span = document.querySelector(".sub span"); // span
let randomNumber = Math.floor(Math.random() * (10 + 1) - 1 + 1);

span.innerHTML = "Guess a number between 1 and 10 :";

button.addEventListener("click", async () => {
  console.log("calling");
  await guessNumber();
});

async function getUserInput() {
  console.log("in async");
  return new Promise((resolve) => {
    let input = document.querySelector(".sub input");
    input.addEventListener("change", () => {
      resolve(input.value);
    });
  });
}

async function guessNumber() {
  console.log("in guess");
  let numberOfGuess = 3;

  while (numberOfGuess > 0) {
    let userInput = await getUserInput();
    console.log("=====================");
    console.log("user guess", userInput);
    console.log("randomNumber", randomNumber);
    console.log("number of Guess ", numberOfGuess);
    console.log("=====================");

    if (userInput === randomNumber.toString()) {
      console.log(`You guessed correctly with ${numberOfGuess} guesses!`);
      return; // Exit the function if guessed correctly
    } else {
      numberOfGuess--;
    }
  }

  console.log(`Your number of guesses has ended. Please try again.`);
}
