// Fonction random pour générer le chiffre du robot au moment où l'humain clique sur le bouton
function getRandomIntInclusive() {
  var min = Math.ceil(0);
  var max = Math.floor(10);
  var robotNumber = Math.floor(Math.random() * (max - min +1)) + min;
  var humanNumber = document.getElementById("humanNumber").value;
  document.getElementById("human__number--result").innerHTML = "Vous avez joué le " + humanNumber + " et j'ai joué le " + robotNumber;
}

//affichage du chiffre de l'humain
// function displayHumanNumber() {
//   var humanNumber = document.getElementById("humanNumber").value;
//   document.getElementById("human__number--result").innerHTML = "Vous avez joué le " + humanNumber;
// }
