let random_no,comp_choice;
function getComputerChoice(){
	random_no=Math.random()*100+1;
	random_no=random_no.toFixed(2);
}
getComputerChoice();

if(random_no<=33.33){
comp_choice="Rock";
}else if(random_no<=66.66){
comp_choice="Paper";
}else{
comp_choice="Scissors";
}

const player_choice=prompt("Choose between Rock , Paper or Scissors : ");
console.log(player_choice,comp_choice);

