var words = ["sidious", "plageuis", "lucas", "palpatine", "coruscant", "wookie", "ewoks", "dooku", "padawan", "tatooine"];

var randomWord = words[Math.floor(Math.random() * words.length)];

var word = randomWord.toLowerCase().split("");
// var smallbox = document.getElementById('smallbox');
var mainbox = document.getElementById('mainbox');
console.log(mainbox);

//help from gainor
function startGame () {
  for (var i = 0; i < word.length; i++) {
    let div1 = document.createElement('div')
    let div = document.createElement('div')
    div.setAttribute('id','smallbox')
    // div1.setAttribute('id','hideletter')
    div1.innerHTML = word[i];
    div.appendChild(div1)
    mainbox.appendChild(div)


    // div.innerHTML = word[i];
    // div.setAttribute('class', 'hideletter')
    // mainbox.appendChild(div);
  }
}
startGame();

//make word appear on the mainbox div smallbox
//have letters in the word === smallbox divs (with border bottom)
//make word invisible using css visibility
//create if statement comparing letter in word to the submit output letter:
  //if the output letter === letter on the divs
    //then make that letter visible
  //else:
    //decrease one from the guessesleft div
    //add the output letter to the incorrectletters div, with a line-through
//create gamelost function:
  //if the guesses left number === 0, then alert game over
//create gamewon function
  //if all letters in the mainbox div are visible, then alert game won


// function gameStart () {
//
// }

function outputname () {
  var x = document.getElementById("letterinput").value;
  firstbox = document.getElementById("onesmall")
  var blah = (firstbox.innerText = x);
  console.log(blah)
}
//
// function checkLetter {
//   for(let i = 0; i < word.length; i++) {
//     if word[i] === x {
//       //make that letter visible
//     } else {
//       //return that letter into incorrect letter guesses div
//       return document.getElementsByClassName('incorrectguesses').innerText(word[i]);
//     }
//   }
// }

// function gameOver(win) {
//   if (win) {
//     alert ("Congratulations! You've done well, Lord Vader...")
//   } else {
//     alert ("You're out of guesses! Try again for a new hope.")
//   }
// }
// function input() {
//     var inputletter = document.getElementById("letterinput").value;
//     document.getElementsByClassName("submit").innerHTML = x ;
// }
// input(word);
