**Joe Tricot** / **July 11, 2017**

# Star Wars Hangman Proposal

## What is Hangman?

Hangman is a game in which one player must guess the letters to a word unbeknownst to them.
The player will have a certain number of guesses. With each wrong guess, a body being hung is drawn until the maximum guesses have been reached and the person is hung.

## Wireframes
![image one](./wireframes/IMG_5451.JPG)
![image two](./wireframes/IMG_5452.JPG)
![image three](./wireframes/IMG_5453.JPG)

## Initial thoughts on game structure

I will create a Star Wars themed Hangman game. A player will have a maximum of 5 letters to guess.
The page will have a background of black with stars and the top of the page will feature the words
"Star Wars Hangman" in the classic Star Wars font.
I will have to create an array of words and have those words chosen at random to be placed on the board.
The words must remain hidden, only to be shown upon an entrey by the user of the appropiate letter.
With every letter entry that does not equal to a letter in the word, that letter will appear with a strikethrough near "wrong guesses". The number one will also be decreased from the default number of 5 near "guesses left".
Upon completion of the entire word, an alert will appear signfying a win.
Upon the "guesses left" hitting 0, an alert will appear signifying a loss/

## Phases of completion 

 - Phase -2
    - creating the page stylistically using html/css
        - implement star wars css font
        - implement background image of space
    - creating a button "enter" and a space where the user can enter a letter
    - creating a wrong guesses left space and a guesses left space
 - Phase -1
    - creating an array of possible words
    - randomizing those words and place into a function
    - hide the full word
    - show a letter in the word only if a letter entered by the user equates to a letter in the word
    - with every wrong letter guess, have that letter appear with a strikethrough
        - also, decrease one from the default number of 5 near "guesses left". 
 - Phase 0
    - create a function that reads if all the letters in the word have been accurately guessed
        - create an alert signifying a win
    - create a function that reads if guesses left equals to -
        - create an alert signifying a loss


## Links and resources 

http://jessefreeman.com/game-dev/intro-to-programming-for-games-with-javascript/
https://www.codecademy.com/courses/javascript-intermediate-tpoPb/0/1
https://codepen.io/offline_blogger/pen/Kedtr
+ continue to read Effective JavaScript


