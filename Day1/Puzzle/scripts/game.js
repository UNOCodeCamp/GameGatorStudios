var passcode = ~~(Math.random() * 1000);
var tries = 10;

while (guess != passcode && tries > 0)
{
    console.log("You have " + tries + " guesses left.")
    console.log("Guess a number between 0-999");
    var guess = prompt("Enter a number (0-999)");
    tries = tries - 1;
    if (guess == passcode)
    {
        console.log("You win");
    }
    else if (tries <= 0)
    {
        console.log("You lose the passcode was " + passcode);
    }
    else
    {
        giveClue()
    }
}

function giveClue()
{
     if (guess < passcode)
        {
           console.log("Lower!") 
        }
        else if (guess > passcode)
        {
           console.log("Higher!") 
        }
}