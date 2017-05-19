var selectedAnswer = null;

var correctAnswer = 3; //temporary during development

function initialSet() {
	var set = {
        items: [
                {q: 'The Beatles actively recorded and released records during which decade?',
                 	a0: '1960 - 1970',
               		a1: '1970 - 1980',
               		a2: '1980 - 1990',
               		a3: '1990 - 2000',
               		ca: 0 },

               	{q: 'Which progressive rock group is a member of the Rock-and-Roll Hall of Fame?',
               		a0: 'Pink Floyd',
               		a1: 'Jethro Tull',
               		a2: 'Yes',
               		a3: 'Procol Harum',
               		ca: 2 },

               	{q: 'Which is the best-selling single?',
               		a0: 'Bohemian Rhapsody, Queen',
               		a1: 'White Christmas, Bing Crosby',
               		a2: 'Hey Jude, The Beatles',
               		a3: 'Stairway to Heaven, Led Zeppelin',
               		ca: 1 }
                ]
	}
	return set;
}


function checkForAnswer() {
  console.log("in checkForAnswer");

  console.log("selected answer is: " + selectedAnswer);
  if (selectedAnswer == null) {
    //
    //  Display error message
    //
    $('.warning-container').removeClass('hidden');
    $('.warning-container').html('.warning-container'.p);
    return false;
  }
  return true;
}

function checkRadio(x) {
    console.log("in checkRadio, button " + x);
    selectedAnswer = x;
    console.log("in checkRadio, selectedAnswer " + selectedAnswer);
    //
    //  Hide the error message
    //
    $('.warning-container').addClass('hidden');
    $('.warning-container').html('.warning-container'.p);

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
	$('.button-container').on('click', '.js-clicked', function(event) {
		event.preventDefault();
    console.log("event handler - button clicked to check answer");
		//
    //  Check to see that an answer has been selected. 
    //  If not then display error message.
    //
    if (checkForAnswer()) {
        //
        //  Change screen depending upon success/failure
        //
        if (selectedAnswer == correctAnswer) {
          console.log("Answer was correct");
        } else {
          console.log("Wrong answer");
        }
    }

	});

})