let getHole = index => document.getElementById(`hole${index}`);

let deadMole = document.getElementById('dead');
let lostPunch = document.getElementById('lost');
let wins = parseInt(deadMole.textContent);
let misses = parseInt(lostPunch.textContent);

for (let i = 1; i <= 9; i++) {
    getHole(i).onclick = function() {
        if (this.className.includes('hole_has-mole')) {
            wins += 1;
            deadMole.textContent = wins;
        }
        else {
            misses += 1;
            lostPunch.textContent = misses;
        }
    checkResults(wins, misses);
    }
}

function checkResults(deadMole, lostPunch) {
    console.log(deadMole, lostPunch);
    if (deadMole === 10) {
        alert('Вы победили!');
        location.reload();
    }
    else if (lostPunch === 5) {
        alert('Вы проиграли!');
        location.reload();
    }
}