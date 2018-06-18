let secretNumber = 7;

let guess = Number(prompt("Guess a number"));

if(guess === secretNumber){
  alert("You guessed correctly!");
}
else if(guess < secretNumber){
  alert("Guess higher.");
}
else {
  alert("Guess lower.");
}
