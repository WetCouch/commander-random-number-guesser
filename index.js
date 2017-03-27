#!/usr/bin/env node

const program = require('commander');
const co = require('co');
const prompt = require('co-prompt');

program
    .version('0.0.1');

program
    .command('start')
    .description('Start the game')
    .action(() => {
        co(function *()
            {
                let playing = true;

                while (playing) {
                    let guessed = false;
                    let random = Math.floor((Math.random() * 100) + 1);

                    while (!guessed) {
                        let guess = yield prompt('Guess the number between 0 and 100 (type "exit" to quit): ');

                        if (guess == parseInt(random)) {
                            let ask = yield prompt('Your guess is correct, it is ' + guess + '. Do you want to play again? (y/n): ');
                            guessed = true;
                            if (ask == 'n') {
                                process.exit();
                            }
                        } else if (guess == 'exit') {
                            guessed = true;
                            playing = false;
                            console.log('Canceled!');
                            process.exit();
                        } else if (guess > parseInt(random)) {
                            console.log('Guess too high!')
                        } else {
                            console.log('Guess too low!')
                        }
                    }
                }
            })
        });

program.parse(process.argv);

