// Fonction random pour générer le chiffre du robot au moment où l'humain clique sur le bouton
var humanNumber = document.getElementById("humanNumber");
var resultDuel = document.getElementById("human__number--result");


function playGame() {
  var min = Math.ceil(0);
  var max = Math.floor(10);
  var robotNumber = Math.floor(Math.random() * (max - min +1)) + min;
  if (humanNumber.value == "") {
    alert("Indiquez un nombre !")
  }
  else {
    resultDuel.innerHTML = "Vous avez joué le " + humanNumber.value + " et j'ai joué le " + robotNumber;

  }
  if (humanNumber.value > robotNumber) {
    alert("Sois maudit humain! Tu as gagné !");
  }
  else {
    alert("Tu as perdu, comme je l'avais prévu!");
  }

}
