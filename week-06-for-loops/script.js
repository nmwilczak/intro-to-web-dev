// Replace this speeh with your own.
// Notice the `` backticks, which let you split your string into multiple lines.
const speech = `Breathing but Ive been dying inside
Nothing new and nothing feels right
Dejavu so I close my eyes
Let the demon sing me a lullaby

Todays a present that I dont want
So Im wondering in this world
Am I really the only one
Whos been wanting to hide out from the sun
And run

When we live a life
Always dreaming for a dream to come true
So I live this life
Wanting something I cant see
And something I cant reach
Or something that could not exist

I feel like I became a zombie
Not alive but Im still walking
When the sunrise is upon me
Ill be waiting for the day to pass by
Oh why

I became a zombie
And theres nothing that can cure me
So tomorrow I know Ill be
Just the same youll see me
Wishing to stop and close my eyes

Yeah this is my life
Always dreaming for a dream to come true
This meaningless life
Wanting something I cant see
And something I cant reach
Or something that could not exist

I feel like I became a zombie
Not alive but Im still walking
When the sunrise is upon me
Ill be waiting for the day to pass by
Oh why

I became a zombie
And theres nothing that can cure me
So tomorrow I know Ill be
Just the same youll see me
Wishing to stop and close my eyes

No more of this I wanna cry
Dried out but feel like I should cry
Tell the world that Im still here tonight
Oh oh

I feel like I became a zombie
Not alive but Im still walking
When the sunrise is upon me
Ill be waiting for the day to pass by
Oh why

I became a zombie
And theres nothing that can cure me
So tomorrow I know Ill be
Just the same youll see me
Wishing to stop and close my eyes`;

// Remove punctuation from the speech. You might have to modify this if your
// speech contains other punctuation.
const speechPunctuationRemoved = speech.replace(',', '').replace('.', '');

// Use a regular expression to split the speech into individual words. You
// shouldn't need to change this, unless you want to split on characters other
// than whitespace.
const wordsArray = speechPunctuationRemoved.split(/\s+/);

// Displays words that have more than 5 characters.
function displayLongWords() {
  const longWordsElement = document.getElementById('long-words');

  // Loop over every word in the array.
  for(let i = 0; i < wordsArray.length; i++) {
    const word = wordsArray[i];
    // If the word has more than 5 characters, display it in the page.
    if(word.length > 5) {
      const wordElement = document.createElement('li');
      wordElement.innerText = word;
      longWordsElement.appendChild(wordElement);
    }
  }
}



function displaySpeechStats() {
  document.getElementById('speech').innerText = speech;

  displayLongWords();

  displayShortWords();

  displayNatWords ();

  displayMarieWords ();

  displayWilczakWords ();

  displayLongestWord ();

  displayEveryThirdWord ();

  displayUncommonWords ();








function displayShortWords() {
  const shortWordsElement = document.getElementById('short-words');

  for(let i = 0; i < wordsArray.length; i++) {
    const word = wordsArray[i];

    if(word.length < 4) {
      const wordElement = document.createElement('li');
      wordElement.innerText = word;
      shortWordsElement.appendChild(wordElement);
    }
  }
}



function displayNatWords() {
  const natWordsElement = document.getElementById('nat-words');

  for(let i = 0; i < wordsArray.length; i++) {
    const word = wordsArray[i];

    if(word.startsWith ('N') || word.startsWith ('n')) {
      const wordElement = document.createElement('li');
       wordElement.innerText = word;
       natWordsElement.appendChild(wordElement);
    }
  }
}


function displayMarieWords() {
  const marieWordsElement = document.getElementById('marie-words');

  for(let i = 0; i < wordsArray.length; i++) {
    const word = wordsArray[i];

    if(word.startsWith ('M') || word.startsWith ('m')) {
      const wordElement = document.createElement('li');
       wordElement.innerText = word;
       marieWordsElement.appendChild(wordElement);
    }
  }
}


function displayWilczakWords() {
  const wilczakWordsElement = document.getElementById('wilczak-words');

  for(let i = 0; i < wordsArray.length; i++) {
    const word = wordsArray[i];

    if(word.startsWith ('W') || word.startsWith ('w')) {
      const wordElement = document.createElement('li');
       wordElement.innerText = word;
       wilczakWordsElement.appendChild(wordElement);
    }
  }
}



function displayLongestWord() {
  const longestWordElement = document.getElementById('longest-word');

  let longestWord = wordsArray[0];

  for (let i = 1; i < wordsArray.length; i++) {

    if(wordsArray[i].length > longestWord.length) {
      longestWord = wordsArray[i];
    }
  }
  const wordElement = document.createElement('li');
   wordElement.innerText = longestWord;
   longestWordElement.appendChild(wordElement);}






function displayEveryThirdWord() {
  let everythirdWordElement = document.getElementById('every-third-word');

  for(let i = 0; i < wordsArray.length; i +=3){
    const word = wordsArray[i];
    const wordElement = document.createElement('li');
     wordElement.innerText = word;
     everythirdWordElement.appendChild(wordElement);
  }
}


function displayUncommonWords() {

  let commonWords = ['something', 'became', 'zombie', 'Ill', 'nothing', 'oh', 'see', 'im', 'life', 'still', 'cant'];
   let uncommonWordsElement = document.getElementById('uncommon-words');

  for(let word of wordsArray){

    if(!commonWords.includes(word)){
      const wordElement = document.createElement('li');
       wordElement.innerText = word;
       uncommonWordsElement.appendChild(wordElement);
    }
  }
}




}