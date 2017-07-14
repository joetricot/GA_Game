var words = ["sidious", "plagueis", "lucas", "palpatine", "coruscant", "wookie", "ewoks", "dooku", "padawan", "padme", "droid", "sith", "tatooine", "galaxy","kashyyyk", "cantina", "moff", "bacta", "clones", "grievous"];

var randomWord = words[Math.floor(Math.random() * words.length)];

var word = randomWord.toLowerCase().split("");

var mainbox = document.getElementById('mainbox');

var x = document.getElementById("letterinput").value;

window.onload = startGame();


//help from gainor bostwick in src
function startGame () {
  for (var i = 0; i < word.length; i++) {
    console.log(word[i]);
    var div1 = document.createElement('div')
      //creating another div and calling it div1 - to place the actual letter which will be hidden, and have the div with border bottom appear visible to the user
    var div = document.createElement('div')
    //creating another div and calling it div - to assign the smallbox css properties
    div.setAttribute('id','smallbox')
    //assigning the div called "div" the css properties of smallbox which has the border bottom property
    div1.setAttribute('id','hideletter')
        //assiging the div called "div1" a new css ID to make visibility hidden - after I wrote this, I then added an id in CSS called #hideletter
    div1.innerHTML = word[i];
    //putting the letters of the word inside the div1, which is the new div we made with visibility hidden
    div.appendChild(div1)
    //appending that div1 with hidden letter in the div with the border bottom property
    mainbox.appendChild(div)
    //appending the div, which includes the border bottom and the letter of the word (div1), inside the mainbox div
  }
}

function outputname () {
  for(var i=0;i<word.length;i++){
    if (x===word[i]){
      div1.setAttribute('id', 'showletter')
    }
  }
}


 // else {
//badletterid.append(x) and then decrease one from guessesleft




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
