const totalPot = document.getElementsByName("totalPot")[0];
const playerNum = document.getElementsByName("playerSelect")[0];
const mostBuncos = document.getElementById("mostBuncos");
const highestScore = document.getElementById("highestScore");
const mostWins = document.getElementById("mostWins");
const mostBabyBuncos = document.getElementById("mostBabyBuncos");
const mostLosses = document.getElementById("mostLosses");
const body = document.body

const potFormatter = new Intl.NumberFormat("en-US",{ style: "currency", currency: "USD" })

body.addEventListener('keyup', calcPot);
body.addEventListener('click', calcPot);


function calcPot(){
    let totalWinningValue = totalPot.value * playerNum.value;
    mostBuncos.innerHTML = potFormatter.format(totalWinningValue * .4);
    highestScore.innerHTML = potFormatter.format(totalWinningValue * .2);
    mostWins.innerHTML = potFormatter.format(totalWinningValue * .15);
    mostBabyBuncos.innerHTML = potFormatter.format(totalWinningValue * .15);
    mostLosses.innerHTML = potFormatter.format(totalWinningValue * .1);
}

