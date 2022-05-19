const getUserChoice = userInput => {
userInput = userInput.toLowerCase();
if (userInput === 'rock' || userInput === 'scissors' || userInput === 'paper') {
  return userInput;
} else {
  console.log('error');
 }
}
getComputerChoice =() => {
  const randomNumber = Math.floor(Math.random() * 3);
 switch (randomNumber) {
 case 0:
 return 'rock';
 case 1:
 return 'paper';
 case 2:
 return 'scissors';
 }
};
console.log(getComputerChoice())

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return  'Its a tie';
  }
  if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
      return'Sorry, computer won!';
    } else {
      return 'You won!'
    }
    if (userChoice === 'paper') {
      if (computerChoice === 'scissors') {
         return 'Sorry, computer won!';
      }  else {
         return 'You won!';
    }
    if (userChoice === 'scissors') {
      if (computerChoice === 'rock') {
      return 'Sorry, computer won!';
  } else {
    return 'You won!';
      }
    } 
  } 
  };
console.log(determineWinner('rock', 'scissors'));
console.log(determineWinner('paper', 'scissors'));
console.log(determineWinner('rock', 'rock' )); 




const playGame = () => {
const userChoice = getUserChoice('scissors');
const computerChoice = getComputerChoice();
console.log('Your choice is: ' + userChoice);
console.log('Computer choice is ' + computerChoice);
}
}


