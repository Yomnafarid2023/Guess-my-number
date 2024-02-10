# Guess-my-number
This game challenges you to guess a randomly generated number between 1 and 20.

# The game logic is created by **Java script**. 
By generating a random number that's hidden under the question mark (?) ,the user tries to guess that number by entring a number between 1 and 20. According to the input the game gives the user a _clue_ if his number is higher or lower than the hidden number.

The user starts the game with **score of 20**, which decreases by 1 for every wrong guess from the user until he guess the right number.
When the guess is right the background turns into winning green , the hidden number appears and the user gets a **highscore**, which reflects the score the user gets after all wrong guesses.

If the user reaches the score of 0 , he loses the game.

By clicking the **Again Button** the game reset everything except the highscore. After playing multiple rounds and reset the game using the Again button, the game saves the highest score the user gets.

# Modal window 
By clicking **Rules Button** a modal window displayed with all the rules of the game.

# **To close the modal window**
With JavaScript events the window can be closed by the (x) button in the modal window , by clicking anywhere outside the window border or by pressing the (Esc) key on keyboard.
