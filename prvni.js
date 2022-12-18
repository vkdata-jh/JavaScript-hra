var hrac1 = document.getElementById("score1");
var hrac2 = document.getElementById("score2");

var vysledek1 = parseInt(document.getElementById("hrac1").textContent);
var vysledek2 = parseInt(document.getElementById("hrac2").textContent);

var hracA1 = document.getElementById("hracA1");
var hracA2 = document.getElementById("hracA2");

newGame();

console.log("vysledek 1 " + vysledek1 + "výsledek 2 " + vysledek2);

document.getElementById("hod").addEventListener("click", hra);
document.getElementById("podrzet").addEventListener("click", zapis);
document.getElementById("new").addEventListener("click", newGame);
var score = 0;

function newGame() {
  hrac1.style.backgroundColor = "rgb(255,127,80)";
  hrac2.style.backgroundColor = "rgb(0,0,255)";
  player1 = true;
  score = 0;
  document.getElementById("hrac1").textContent = "0";
  document.getElementById("hrac2").textContent = "0";
  hracA1.textContent = "0";
  hracA2.textContent = "0";
  vysledek1 = 0;
  vysledek2 = 0;
  document.getElementById("turn").textContent = "0";
}

function hra() {
  var hod = hodKostkou();
  if (hod > 1) {
    score += hod;
    console.log(hod);
    player1 ? (hracA1.textContent = score) : (hracA2.textContent = score);
  } else {
    switchPlayers();
  }
}
function zapis() {
  console.log(player1);
  if (score == 0) {
    prompt("není co přičíst");
  } else if (player1) {
    vysledek1 += score;
    document.getElementById("hrac1").textContent = vysledek1;
    switchPlayers();
  } else {
    vysledek2 += score;
    document.getElementById("hrac2").textContent = vysledek2;
    switchPlayers();
  }
  document.getElementById("turn").textContent = "0";
}
function hodKostkou() {
  var number = Math.ceil(Math.random() * 6);

  document.getElementById("turn").textContent = number;
  if (number == 1) {
    prompt("Padla jednička, hraje druhý hráč");
    document.getElementById("turn").textContent = 0;
  }
  return number;
}
function switchPlayers() {
  player1 = !player1;
  console.log(player1);
  score = 0;
  hracA1.textContent = "0";
  hracA2.textContent = "0";

  if (player1 == true) {
    hrac1.style.backgroundColor = "rgb(255,127,80)";
    hrac2.style.backgroundColor = "rgb(0,0,255)";
  } else {
    hrac2.style.backgroundColor = "rgb(255,127,80)";
    hrac1.style.backgroundColor = "rgb(0,0,255)";
  }
}
