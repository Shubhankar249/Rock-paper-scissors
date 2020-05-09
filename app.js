const game = () =>{
    let pScore=0, cSore=0;

    const startGame= ()=>{
        const playBtn=document.querySelector('.intro button');
        const introScreen=document.querySelector('.intro');
        const matchScreen=document.querySelector('.match');

        playBtn.addEventListener('click', function () {
            introScreen.classList.add('fadeOut');
            matchScreen.classList.remove('fadeOut');
        });
    };

    const playMatch= ()=>{
        const options=document.querySelectorAll('.option button');
        const playerHand=document.querySelector('.player-hand');
        const computerHand=document.querySelector('.computer-hand');

        const computerOptions=["rock", "paper", "scissors"];

        options.forEach(option=> {
            option.addEventListener('click', function () {
                const compOp=Math.floor(Math.random()*3);
                const compChoice=computerOptions[compOp];   // picking random choice for computer
                const hands=document.querySelectorAll('.hands img');

                hands.forEach(hand => {
                   hand.src="./assets/rock.png";
                    hand.addEventListener('animationend', function () {
                        this.style.animation="";    // animation is stopped when it ends so that it can begin again.
                   })
                });

                // Animation start as button is clicked
                playerHand.style.animation="shakePlayer 2s ease";
                computerHand.style.animation="shakeComputer 2s ease";

                setTimeout(()=> {
                    // Updating images based upon choices.
                    playerHand.src=`./assets/${this.textContent}.png`;
                    computerHand.src=`./assets/${compChoice}.png`;

                    // calling compare func
                    compareHands(this.textContent, compChoice);

                    // Updating scores
                    const playerSc=document.querySelector('.player-score p');
                    const compSc=document.querySelector('.computer-score p');
                    playerSc.textContent=pScore;
                    compSc.textContent=cSore;
                }, 2000);
            })
        })
    };

    const compareHands=(playerChoice, compChoice)=>{    // chosing winnner
        const winner=document.querySelector('.winner');

        if (playerChoice===compChoice) {
            winner.textContent='It is a tie';
            pScore++;
            cSore++;
            return;
        }

        if (playerChoice==="rock") {
            if (compChoice==="scissors") {
                pScore++;
                winner.textContent="Player wins!";
            }
            else  {
                cSore++;
                winner.textContent="Computer wins!";
            }
            return;
        }
        if (playerChoice==="paper") {
            if (compChoice==="scissors") {
                cSore++;
                winner.textContent="Computer wins!";
            }
            else  {
                pScore++;
                winner.textContent="Player wins!";
            }
            return;
        }
        if (compChoice==="rock") {
            winner.textContent = "Computer wins!";
            cSore++;
        }
        else {
            pScore++;
            winner.textContent="Player wins!";
        }

    };

    // calls to inner functions
    startGame();
    playMatch();
};

game();
