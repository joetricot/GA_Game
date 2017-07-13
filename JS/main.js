var words = ["sidious", "lucas", "palpatine", "coruscant", "wookie", "ewoks", "dooku", "padawan", "nerfherder", "tatooine"];

var randomWord = words[Math.floor(Math.random() * words.length)];

var word = randomWord.toLowerCase().split("");

//make word app

function outputname () {
  var x = document.getElementById("letterinput").value;
  firstbox = document.getElementById("onesmall")
  var blah = (firstbox.innerText = x);
  console.log(blah)
}

function checkLetter {
  for(let i = 0; i < word.length; i++) {
    if word[i] === x {
      //make that letter visible
    } else {
      //return that letter into incorrect letter guesses div
      return document.getElementsByClassName('incorrectguesses').innerText(word[i]);
    }
  }
}

function gameOver(win) {
  if (win) {
    alert ("Congratulations! You've done well, Lord Vader...")
  } else {
    alert ("You're out of guesses! Try again for a new hope.")
  }
}
// function input() {
//     var inputletter = document.getElementById("letterinput").value;
//     document.getElementsByClassName("submit").innerHTML = x ;
// }
// input(word);
