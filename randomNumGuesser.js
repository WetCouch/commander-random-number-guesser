var playing = true;

while(playing) {
    var guessed = false;
    var random = Math.floor((Math.random()*100)+1);

    while(!guessed) {
        var guess = prompt('Guess the number between 0 and 100');

        if (guess == parseInt(random)) {
            var ask = confirm('Your guess is correct, it is ' + guess + '. Do you want to play again?');
            guessed = true;
            if (ask == false) {
                playing = false;
            }
        } else if (guess == null) {
            guessed = true;
            playing = false;
            alert('Canceled!')
        } else if (guess > parseInt(random)) {
            alert('Guess too high!')
        } else {
            alert('Guess too low!')
        }
    }
}