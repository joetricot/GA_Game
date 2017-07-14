var words = ["sidious", "plagueis", "lucas", "palpatine", "coruscant", "wookie", "ewoks", "dooku", "padawan", "padme", "droid", "sith", "tatooine", "galaxy","kashyyyk", "cantina", "moff", "bacta", "clones", "grievous"];

var randomWord = words[Math.floor(Math.random() * words.length)];

var word = randomWord.toLowerCase().split("");

var mainbox = document.getElementById('mainbox');

var counter = document.getElementById('number');
counter.innerText = 5;


//
// let default = document.getElementById("number");
// default.innerHTML = 5;

window.onload = startGame();

function startGame () {


  for (var i = 0; i < word.length; i++) {
    console.log(word[i]);
    var div1 = document.createElement('div')
      //creating another div and calling it div1 - to place the actual letter which will be hidden, and have the div with border bottom appear visible to the user
    var div = document.createElement('div')
    //creating another div and calling it div - to assign the smallbox css properties
    div.setAttribute('class','smallbox')
    //assigning the div called "div" the css properties of smallbox which has the border bottom property
    div1.setAttribute('class','hideletter')
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
  // check if value is in word
  var letterinput = document.getElementById("letterinput").value.toLowerCase();
  var wrongletter = document.getElementById('incorrectletter');

  // store all indicies where value is
  let correctWords = [];
  for(let j = 0; j < word.length; ++j){
    if(word[j] === letterinput){
      correctWords.push(j);
    }
  }
  console.log(correctWords)
  //now we have an array of good indicies

  //pull the big box from the dom and show the indicies
  let domLetters = document.getElementsByClassName('smallbox');
  for(let i = 0; i < correctWords.length; ++i){
    console.log(`showing all ${letterinput}`);
    domLetters[correctWords[i]].children[0].className = 'showletter'

  }
  //all letters should be shown

  //if no match grow long letter
  if(correctWords.length === 0) {
    wrongletter.append(letterinput);
    //update current incorrect guesses
    counter.innerText--
    //post current incorrect guesses

  }

}
  //if the letter input is correct,
  // console.log the array
  // var hideletter = document.getElementsByClassName('hideletter');
  //
  // var gleft = document.getElementById('number');
  // gleft.innerHTML = "5"
  // for(var i=0;i<hideletter.length;i++){
  //   if (letterinput===hideletter[i].innerHTML){
  //     hideletter[i].setAttribute('class', 'showletter')
  //   } else {
  //     wrongletter.append(letterinput)
  //     // let incorrectguesses = document.getElementsByClassName('incorrectguesses')
  //     // incorrectguesses.append(wrongletter);
  //     // counter.innerText -- ;
  //     // badletter.append(letterinput);
  //   }






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
