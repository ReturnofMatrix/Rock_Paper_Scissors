let player_choice,comp_choice;
let playerScore=0,compScore=0;

for(let i=0 ; i<5 ; i++ ){

playRound(getComputerChoice(),getPlayerChoice());

}

if(playerScore===compScore){
	console.log("Final Result : Its a Draw Match...")
}else if(playerScore>compScore){
	console.log("Final Result : Congratulations !!! You win.")
}else{
console.log("Final Result : You Lose.. Better luck next time.")
}

function playRound(getComputerChoice,getPlayerChoice){
	if(player_choice==="paper"){
		if(comp_choice==="rock"){
			console.log('You WIN ! Paper beats Rock');
			playerScore++;
		}
		if(comp_choice==="scissors"){
			console.log('You LOSE ! Scissors beats paper');
			compScore++;
		}
		if(comp_choice==="paper"){
			console.log('Its DRAW ! Try again. ');
		}
	};

	if(player_choice==="rock"){
		if(comp_choice==="scissors"){
			console.log('You WIN ! Rock beats scissors.');
			playerScore++;
		}
		if(comp_choice==="paper"){
			console.log('You LOSE ! Paper beats rock.');
			compScore++;
		}
		if(comp_choice==="rock"){
			console.log('Its DRAW ! Try again. ');
		}
	};

	if(player_choice==="scissors"){
		if(comp_choice==="paper"){
			console.log('You WIN ! Scissors beats paper');
			playerScore++;
		}
		if(comp_choice==="rock"){
			console.log('You LOSE ! Rock beats Scissors.');
			compScore++;
		}
		if(comp_choice==="scissors"){
			console.log('Its DRAW ! Try again. ');
		}
	};

}


function getComputerChoice(){
	random_no=Math.random()*100+1;
	random_no=random_no.toFixed(2);

	if(random_no<=33.33){
	comp_choice="rock";
	}else if(random_no<=66.66){
	comp_choice="paper";
	}else{
	comp_choice="scissors";
	}
}

function getPlayerChoice(){
	player_choice=prompt("Choose between Rock , Paper or Scissors : ");	
	player_choice.toLowerCase();
	while(!(player_choice==="paper"||player_choice==="rock"||player_choice==="scissors")){
	player_choice=prompt("Invalid input! \n Choose between Rock , Paper or Scissors . ");
}
}



