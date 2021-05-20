const main=function(){
    var pScore=0;
    var cScore=0;

    //start Game function
    const startGame=function(){
        const playButton = document.querySelector('.game button');  //Getting the things required 
        const introScreen =  document.querySelector('.game');
        const matchScreen = document.querySelector('.match');

        playButton.addEventListener("click", ()=>{      //on clicking
            introScreen.classList.add("fadeOut");
            matchScreen.classList.add("fadeIn");
        });
    };

    //play function

    const playMatch=function(){
        const options = document.querySelectorAll('.options button');   //getting options
        const playerHand = document.querySelector('.player-hand');
        const computerHand = document.querySelector('.computer-hand');

        //computer options randomly generated

        const computerOptions=['rock','paper','scissors'];
        
        
        
        options.forEach(option=>{
            option.addEventListener('click', function(){
                //computer choice
                const computerNumber = Math.floor(Math.random() * 3);
                const computerChoice = computerOptions[computerNumber];
                // compare hands called here

                compareHands(this.textContent, computerChoice);

                if(this.textContent === 'paper'){
                    playerHand.src ='./photos/paper.png';
                }
                else if(this.textContent === 'scissors'){
                    playerHand.src = './photos/scissors.png';
                }
                else{
                    playerHand.src = './photos/rock.png';
                }
                
                if(computerNumber === 0){
                    computerHand.src = './photos/rock.png';
                }
                else if(computerNumber === 1){
                    computerHand.src = './photos/paper.png';
                }
                else{
                    computerHand.src = './photos/scissors.png';
                }
            });
        });
    };

    const upgradeScore = function(){
        const playerScore = document.querySelector('.player-score p');
        const computerScore = document.querySelector('.computer-score p');
        playerScore.textContent = pScore;
        computerScore.textContent = cScore;
    }
    const compareHands = function(playerChoice, computerChoice){
        const winner = document.querySelector('.winner');
        //checking for a tie
        if(playerChoice === computerChoice){
            winner.textContent = "It is a tie";
            return;
        }
        if(playerChoice === 'rock'){
            if(computerChoice === 'scissors'){
                winner.textContent = "You win";
                pScore++;
                upgradeScore();
                return;
            }
            else{
                winner.textContent = "You lost";
                cScore++;
                upgradeScore();
                return;
            }
        }
        if(playerChoice === 'paper'){
            if(computerChoice === 'scissors'){
                winner.textContent = "You lost";
                cScore++;
                upgradeScore();
                return;
            }
            else{
                winner.textContent = "You win";
                pScore++;
                upgradeScore();
                return;
            }
        }
        if(playerChoice === 'scissors'){
            if(computerChoice === 'rock'){
                winner.textContent = "You lost";
                cScore++;
                upgradeScore();
                return;
            }
            else{
                winner.textContent = "You win";
                pScore++;
                upgradeScore();
                return;
            }
        }
    }
    //Inner functions are called

    startGame();
    playMatch();
    //updateScore();


};

main();