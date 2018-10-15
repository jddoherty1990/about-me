'use strict';

// get username
var username = prompt('GREETINGS and WELCOME to my profile page! Please enter your first name here...');
    alert('Nice to meet you, ' + username + '. Thanks for stopping in!');
    console.log('The user responded with ' + username + ' when asked their name.');

// query if user has a few minutes
var knowMe = prompt('Pull up a chair, ' + username + ' and get comfy. I have prepared a brief, fun game for us to play so that you can get to know me a little better. Do you have a couple of minutes to spare?').toLowerCase();
        if (knowMe  === 'yes' || knowMe === 'y') {
        alert('GREAT, ' + username + '!!! Thanks for sticking around, let\'s get started...');
        console.log('The user said yes');
        } else {  
        var goodBye = prompt('BUMMER!! I really hate to see you go, ' + username + '. Are you sure you can\'t stay even just a little gigabyte longer?').toLowerCase();
        } if (goodBye === 'yes' || goodBye === "y") {
                
        // alert('Sorry to see you go, ' + username + '. Please come back soon and we will do this again!');
        // console.log('The user answered yes');
        }           
 
// game question 1: about-me physical fitness
function questionOne() {
var exercise = prompt('How does my profile photo look to you, ' + username + '?... do you think I\'m a a bit of a couch potato? ;-)').toLowerCase();
        if (exercise === 'no' || exercise ==='n') {
        alert('Good eye, ' + username + '! I have put oodles & oodles of time into my 12oz, biceps curls..... KIDDING!!! But seriously, I really do enjoy a quality craft beer on occssion in conjunction with a healthy lifestyle but I never, EVER overindulge in alchohol..... not kidding on that count! :-)');
        console.log('The user answered correctly');
        } else {
                alert('Oh my... I guess I need to hit the gym a little harder real soon!');
                console.log('The user did not answer correctly');
                }
        }
questionOne();

// game question 2: about-me fav color
function questionTwo() {    
        var favColor = prompt('Speaking of my profile photo, ' + username + ', do I seem like someone who\'s favorite color might be hot pink?').toLowerCase();
        if (favColor === 'no' || favColor === 'n') {
        alert('Whew! Nothing against those who prefer hot pink, but actually, BLUE is where it\'s at for me.');
        console.log('The user answered correctly');
        } else {
                alert('Interesting you would think that, ' + username + '. Actually, BLUE is where it\'s at for me.');
                console.log('The user did not answer correctly');
        }
}
questionTwo();

// game question 3: about-me education
function questionThree() {        
        var university = prompt('Hey ' + username + ', does anything you\'ve learned about me so far indicate I might have gone to a university?').toLowerCase();
        if (university === 'no' || university === 'n') {
        alert('Good job ' + username + '! It looks like you dug a little deeper into my profile than just my awesome photo! I graduated from a small town high school in Central California and then followed that up with some junior college courses, but I did not pursue a university education. You should really continue on to the next game question to find out my story from there...');
        console.log('The user answered correctly');
        } else {
                alert('Well, actually ' + username + ', I graduated from a small town high school in Central California and then followed that up with some junior college courses, but I did not pursue a university education. You should really continue on to the next game question to find out the story from there...');
                console.log('The user did not answer correctly');
        }
}
questionThree();

// game question 4: about-me comp dev competence
function questionFour() {        
        var compKnowledge = prompt('Now the important stuff... Does the appearance of my web page give you any reason to believe I know anything about computer programming?').toLowerCase();
        if (compKnowledge === 'yes' || compKnowledge === 'y') {
        alert('Fantastic, ' + username + '! I really appreciate your positive feedback but am always looking for ways to improve my skills. Would you be willing to give me some constructive feedback? How about a meetup over coffee sometime, my treat? If so, please feel free to contact me, it\'d be great to meet you in person!');
        console.log('The user answered correctly');
        } else {
                alert('Wowee! I\'m so sorry if my skills are somehow lacking. I will look closer to see where I can improve. Please feel free to contact me if you have any suggestions or constructive feedback! How about a meetup over coffee sometime, my treat? If so, please feel free to contact me, it\'d be great to meet you in person!');
                console.log('The user answered incorrectly');
        }
}
questionFour();

// game question 5: about-me CDL for 30 years
function questionFive() {
        var truckDriver = prompt('')
}
questionFive();

// question 6: user gets only 4 chances to guess my lowest 18-hole golfing score (answer = 77)
function questionSix() {         
        var myLowScore = 77;
        var numGuesses = 4;
        for (var i = 0; i < 4; i++) {
                var guessScore = prompt('Let\'s have a little fun now, ' + username + '. Here\'s a guessing game about me... Golf is my favorite sport.  What do you think my lowest, 18-hole golf score is? (hint: the correct answer lies somewhere between 50 and 100)... I\'ll give you exactly four tries to answer correctly. READY, SET GO!').toLowerCase();
        if (guessScore < myLowScore /*&& guessScore !== myLowScore*/) {
                        alert('Nope, I\'m afraid that is too low. Please try again.');
                        console.log('User guessed too low');
        } else if(guessScore > myLowScore) { 
                        alert('Nope, that is too high. Please try again.');
                        console.log('User guessed too high');
          } else {
                        alert('CORRECT, you aced it, ' + username + '! You\'re on a roll, so don\'t stop now...one more question to go!');
                        break;
                }
        }
}
questionSix();
