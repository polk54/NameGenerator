var words = ["Parul", "Liz", "Loz", "Margot"]

function newWord(){
  var randomNumber = Math.floor(Math.random()*(words.length));
  document.getElementById("wordDisplay").innerHTML = words[randomNumber];
}
