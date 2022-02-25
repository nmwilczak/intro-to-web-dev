// When this function is called, it takes the user's answer to the first
// question and uses if statements to check whether it's correct.
function submitAnswerOne() {
  // Get answer one's input element
  const answerOneInput = document.getElementById('answer-one-input');
  // Get the text from answer one's input element
  const answerOne = answerOneInput.value;

  if(answerOne == 'meerkat') {
    alert("That's right!");
    hide('question-one');
    show('question-two');
  } else if(answerOne == 'prairie dog') {
    alert('Not Quite: It has the word "kat" in it.');
  } else {
    alert('Wrong! Hint: The name of the animal starts with an m and is seven letters long.')
  }
}

// When this function is called, it takes the user's answer to the second
// question and uses if statements to check whether it's correct.
function submitAnswerTwo() {
  // Get answer two's input element
  const answerTwoInput = document.getElementById('answer-two-input');
  // Get the number from answer two's input element
  const answerTwo = answerTwoInput.value;

  if(answerTwo == 1982) {
    alert("That's right!");
    hide('question-two');
    show('question-three');
  } else if(answerTwo < 1982) {
    alert('The answer is higher.');
  } else {
    alert('The answer is lower.')
  }
}



function submitAnswerThree() {
  const answerThreeInput = document.getElementById('answer-three-input');
  const answerThree = answerThreeInput.value;

  if(answerThree == 'Go Away Green') {
    alert("That's right!");
    hide('question-three');
    show('question-four');
   
 } else if(answerThree == 'Light Green') {
    alert('Close, it is a light shade of green.');
  } else {
    alert('Wrong! Hint: Three words, __  ____ Green')
  }
}



function submitAnswerFour() {
  const answerFourInput = document.getElementById('answer-four-input');
  const answerFour = answerFourInput.value;

  if(answerFour == 24) {
    alert("That's right!");
    hide('question-four');
    show('question-five');
  } else if(answerFour < 24) {
    alert('The answer is higher.');
  } else {
    alert('The answer is lower.')
  }
}


function submitAnswerFive() {
  const answerFiveInput = document.getElementById('answer-five-input');
  const answerFive = answerFiveInput.value;

  if(answerFive == 'Staples') {
    alert("That's right!");
    hide('question-five');
    show('done');
   
 } else if(answerFive == 'Office Max') {
    alert('Not Quite: The company you are looking for is number one in the U.S. in terms of office supplies.');
  } else {
    alert('Wrong! Hint: Starts with an S')
  }
}







// Helper function that takes an ID and shows the element with that ID.
function show(id) {
  const element = document.getElementById(id);
  element.style.display = 'block';
}

// Helper  function that takes an ID and hides the element with that ID.
function hide(id) {
  const element = document.getElementById(id);
  element.style.display = 'none';
}