var selectedAnswer = null;

var correctAnswer = 3; //temporary during development

function initialSet() {
	var set = {
        items: [
                {q: 'The Beatles actively recorded and released records during which decade?',
                 	a0: '1960\'s - 1970',
               		a1: '1970\'s - 1980',
               		a2: '1980\'s - 1990',
               		a3: '1990\'s - 2000',
               		correct: 0, 
                  useranswer: "" },

               	{q: 'Which progressive rock group is a member of the Rock-and-Roll Hall of Fame?',
               		a0: 'Pink Floyd',
               		a1: 'Jethro Tull',
               		a2: 'Yes',
               		a3: 'Procol Harum',
               		correct: 2, 
                  useranswer: "" },

               	{q: 'Which is the best-selling single of all time?',
               		a0: 'Bohemian Rhapsody, Queen',
               		a1: 'White Christmas, Bing Crosby',
               		a2: 'Hey Jude, The Beatles',
               		a3: 'Stairway to Heaven, Led Zeppelin',
               		correct: 1,
                  useranswer: "" }
                ]
	}
	return set;
}

function randomCorrectRemark() {
  var array = [ "Excellent! You really know your stuff.",
                "Correct! You are on a roll...",
                "Wow! You are a born rock-n-roller.",
                "Correct! Are there any questions you don't know?",
                "Great! Is your name Casey Casem?",
                "Whoa! That's right. You have hidden depths.",
                "Perfect! You are a rock star.",
                "Correct...making room for you in the VIP section."
              ]
  return (array[Math.floor((Math.random() * 100) % array.length)]);
}

function randomWrongRemark() {
  var array = [ "Wrong. You don't listen to much radio, do you?",
                "Wrong. Better luck on the next question.",
                "Well...not really. Try again.",
                "Not quite. Keep your day job.",
                "Yikes. You didn't bet any money on this, did you?",
                "Whoa. Wrong. You better stick with listening to CSPAN or talk radio.",
                "Don't be ashamed. Some people just aren't musical.",
                "Were you paying attention during Rock School?",
                "Sorry. Maybe you know more about the Big Band era?"
              ]
  return (array[Math.floor((Math.random() * 100) % array.length)]);
}

function displayMessage(msg, newcolor) { 
  //
  //  update the js-message-text value. 
  //  update the background with the color passed as a parm
  //
  $('p.js-message-text').text(msg);
  $('.message-container').css('background-color', newcolor);
}


function checkRadio(x) {
    selectedAnswer = x;
    console.log("in checkRadio, selectedAnswer " + selectedAnswer);
}


$(function() {
	'use strict';

	var set = initialSet();  //initialize the question set
  //
  //  Display the first question
  //
  var question = 0;
  //displayQuestion(set, question);
  console.log("first question displayed");

	
	//
	//  Event handler to fire when user clicks "check answer"
	// 
	$('.button-container').on('click', '.js-check', function(event) {
		event.preventDefault();
    console.log("event handler - button clicked to check answer");
		//
    //  Check to see that an answer has been selected. 
    //  If not then display error message. If an answer has been
    //  selected then check if it matches the correct answer.
    //
    if (selectedAnswer == null) {
        console.log("response is null");
        // 
        //  Let the user try again 
        //
        displayMessage("Please select an answer...", "pink");
    } else {
        if (selectedAnswer == correctAnswer) {
            console.log("response is correct");
            displayMessage(randomCorrectRemark(), 'lightgreen');
            //
            //  change the button to "next"
            //
            $('.js-check').addClass('hidden');
            $('.js-next').removeClass('hidden');
        } else {
            console.log("response is wrong");
            displayMessage(randomWrongRemark(), "pink");
            //
            //  notate the correct answer
            //
            $('.js-r3').css('background-color', 'gold').show(2000);
            //
            //  change the button to "next"
            //
            $('.js-check').addClass('hidden');
            $('.js-next').removeClass('hidden');
          } 
      }      
	});  // end of check answer button event handler

  $('.button-container').on('click', '.js-next', function() {
      console.log("Next button pressed");

  }) // end of next button event handler

})  //end of function()