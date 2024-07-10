const args = process.argv.slice(2);
const choice = args[0];

if (!isNaN(choice)) {
  //check if the argument/input of user is a not a number
  console.error(
    "You can´t play a number in this game. Pick one of the three options: rock, paper or scissors." //If it is a number, say this.
  );
  return;
} else {
  if (choice === "rock" || choice === "paper" || choice === "scissors") {
    //If it is not a number, than check if the input is either "rock", "paper" or "scissors"
    game = ["rock", "paper", "scissors"];
    console.log(`You picked ${choice}`);
  } else {
    console.error(
      //If that is not the case, say this
      "Any other word, but rock, paper or scissors is not meant for this game."
    );
  }
}

const pcPick = () => {
  return game[Math.floor(Math.random() * game.length)]; //randomize pick function; store function in variable to use it later on
};

const opponent = pcPick(); //generate the computer's pick once and reuse it later. STore the result of function in another variable

if (choice === "rock" || choice === "paper" || choice === "scissors") {
  //the computer will only provide an argument, if the user has picked one of the three correct answers
  console.log(`Your rival picked ${opponent}`);
}

if (choice === opponent) {
  console.log(
    `You have picked ${choice} and your opponent has also picked ${opponent}. The forces collide, but neither gains the upper hand! It is indeed A TIE!!!`
  );
} else if (choice === "paper" && opponent === "scissors") {
  console.log(
    `You have picked ${choice} and your opponent has picked ${opponent}. You Are Sliced Apart by Their Sharp Scissors! YOU LOOSE!!!`
  );
} else if (choice === "paper" && opponent === "rock") {
  console.log(
    `You have picked ${choice} and your opponent picked ${opponent}. Wrap them up, your paper strategy prevails! YOU WIN!!!`
  );
} else if (choice === "scissors" && opponent === "rock") {
  console.log(
    `You have picked ${choice} and your opponent has picked ${opponent}. Get crushed, Your Bones Are Crushed by Their Rock! YOU LOOSE!!!`
  );
} else if (choice === "scissors" && opponent === "paper") {
  console.log(
    `You have picked ${choice} and your opponent has picked ${opponent}. You cut your opponent down to size with precision! YOU WIN!!!`
  );
} else if (choice === "rock" && opponent === "paper") {
  console.log(
    `You have picked ${choice} and your opponent has picked ${opponent}. Their paper engulfs and overpowers You! YOU LOOSE!!!`
  );
} else if (choice === "rock" && opponent === "scissors") {
  console.log(
    `You have picked ${choice} and your opponent has picked ${opponent}. You smash your opponent with brute force! YOU WIN!!!`
  );
}
