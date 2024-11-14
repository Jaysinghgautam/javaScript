 let userScore = 0;
 let compScore = 0;
  
const choices = document.querySelectorAll("choice");

const genCompchoice = () => {
  const options = ["rock","paper","scissors"];
  const randIdx = math.floor(math.random()*3);
  return options[randIdx];

}

const playGame = (userChoice) => {
     console.log("user choice= ",userChoice);
     // Generate computer choice 
      const compChoice = genCompchoice ();
      console.log("comp choice =", compChoice);
};


choices.forEach((choice) =>{
  choice.addEventListener("click", () => {

    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
 
   } ) ;
});
      const 
      





































































































