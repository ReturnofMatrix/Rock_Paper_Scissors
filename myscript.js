let player_choice,comp_choice;
let playerScore=0,compScore=0;

const buttons = document.querySelector(".btn");
const text =document.querySelector(".text");

buttons.addEventListener("click",(event)=>{
	let target=event.target;

	switch(target.id){
		case 'rock': player_choice='rock';
					break;
		case 'paper': player_choice='paper';
					break;
		case 'scissors': player_choice='scissors';
					break;
	}

	console.log("You : "+player_choice);
	getComputerChoice();
	console.log("Computer : "+comp_choice);
	playRound();
	const score=document.querySelector(".score");
	score.textContent=`Computer Score = ${compScore} 	Player Score = ${playerScore}`;

	if(playerScore===5){
		text.textContent="Final Result : Congratulations !!! You win.";
	}else if(compScore===5){
		text.textContent="Final Result : You Lose.. Better luck next time.";
	}

})


function playRound(){

	if(player_choice==="paper"){
		if(comp_choice==="rock"){
			text.textContent='You WIN ! Paper beats Rock';
			playerScore++;
		}
		if(comp_choice==="scissors"){
			text.textContent='You LOSE ! Scissors beats paper';
			compScore++;
		}
		if(comp_choice==="paper"){
			text.textContent='Its DRAW ! Try again. ';
		}
	};

	if(player_choice==="rock"){
		if(comp_choice==="scissors"){
			text.textContent='You WIN ! Rock beats scissors.';
			playerScore++;
		}
		if(comp_choice==="paper"){
			text.textContent='You LOSE ! Paper beats rock.';
			compScore++;
		}
		if(comp_choice==="rock"){
			text.textContent='Its DRAW ! Try again. ';
		}
	};

	if(player_choice==="scissors"){
		if(comp_choice==="paper"){
			text.textContent='You WIN ! Scissors beats paper';
			playerScore++;
		}
		if(comp_choice==="rock"){
			text.textContent='You LOSE ! Rock beats Scissors.';
			compScore++;
		}
		if(comp_choice==="scissors"){
			text.textContent='Its DRAW ! Try again. ';
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




