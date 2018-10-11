'use strict';

// get username
var username = prompt('Howdy pardner, what\'s your name?');
    alert('Nice to meet you, ' + username + '. Thanks for stopping in!');
    console.log('The user responded with ' + username + ' when asked their name.');

// question 1
var knowMe = prompt('Whattya think... wanna get to know me a little better?').toLowerCase();
    if (knowMe  === 'yes' || knowMe === 'y') {
    alert('Right on ' + username + ', I make it my goal to reach out for new friends in my life so please, ask me something else!');
    console.log('The user chose wisely');
    }   else {
        alert('Hmm...I really think you should stick around ' + username + ' and I think I might be able to sway you over to the dark side... HA HA HAAA!!!');
        console.log('The user did not chose wisely'); 
}

// question 2
var exercise = prompt('How about my physique there ' + username + '?... does my profile photo give you the impression I exercise on a regular basis?').toLowerCase();
    if (exercise === 'yes' || knowMe ==='y') {
    alert('Good eye ' + username + '. I have put oodles & oodles of time into my 12oz biceps curls!');
    console.log('The user answered correctly');
    }   else {
        alert('Oh my... I guess we should hit the gym together sometime soon!');
        console.log('The user did not answer correctly');
}

// question 3
var favColor = prompt('Speaking of my profile photo, do I seem like someone who\'s favorite color might be hot pink?').toLowerCase();
    if (favColor === 'no' || favColor === 'n') {
    alert('Whew! Nothing against those who prefer hot pink, but actually, BLUE is where it\'s at for me.');
    console.log('The user answered correctly');
    }   else {
        alert('Interesting you would think that ' + username + ' but actually, BLUE is where it\'s at for me.');
        console.log('The user did not answer correctly');
}

// question 4
var university = prompt('Hey ' + username + ', does anything you\'ve learned about me so far indicate I might have gone to a university?').toLowerCase();
    if (university === 'no' || university === 'n') {
    alert('Good job ' + username + '! It looks like you dug a little deeper into my profile than just my awesome photo!');
    console.log('The user answered correctly');
    }   else {
        alert('Well, actually ' + username + ', I did graduate from high school and complete some junior college courses but did not attend university.');
        console.log('The user did not answer correctly');
}

// question 5
var compKnowledge = prompt('Now the important stuff... Does the appearance of my web page give you any reason to believe I know anything about computer programming?').toLowerCase();
    if (compKnowledge === 'yes' || compKnowledge === 'y') {
    alert('Fantastic, ' + username + '! I really appreciate you spending extra time getting to know me. How about a meetup sometime? I\'ll be buying the coffee!');
    console.log('The user answered correctly');
    }   else {
        alert('Wowee! I\'m so sorry if my skills are somehow lacking. I will look a lot closer to see where I can improve. Please feel free to contact me if you have any suggestions!');
        console.log('The user answered incorrectly');
}

// question 6: user gets only 4 chances to guess my lowest 18-hole golfing score (answer = 77) 
var myLowScore = 77;
var numGuesses = 4;
for (var i = 0; i < 4; i++) {
        var guessScore = prompt('Let\'s have a little fun now, ' + username + '. Golf is my favorite sport, so what do you think my lowest, 18-hole golf score is?').toLowerCase();
     
        
        if (guessScore < myLowScore /*&& guessScore !== myLowScore*/) {
                alert('Nope, I\'m afraid that is too low. Please try again.');
                console.log('User guessed too low');
        }else if(guessScore > myLowScore) { 
                alert('Nope, that is too high. Please try again.');
                console.log('User guessed too high');
        } else{
                alert('CORRECT');
                break;
        }
}
