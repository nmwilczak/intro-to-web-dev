// Array of objects representing a todo list.
// Modify this array to contain your own list.
const songArray = [
  {name: 'Regular (English Version)', artist: 'NCT 127', time: 3.63},
  {name: 'Ruby', artist: 'Woozi', time: 2.72},
  {name: 'Im Gonna Love You', artist: 'D.O. ft. Wonstein', time: 2.52},
  {name: 'Waiting', artist: 'WOODZ', time: 3.12},
  {name: '0X1=LOVESONG (I Know I Love You)', artist: 'TOMORROW X TOGETHER', time: 3.35},
  {name: 'Zombie', artist: 'Day6', time: 3.47},
  {name: 'You Calling My Name', artist: 'GOT7', time: 3.23},
  {name: 'Valkyrie', artist: 'ONEUS', time: 3.45},
  {name: 'Feel My Rhythm', artist: 'Red Velevet', time: 3.48},
  {name: 'Feelin Like', artist: 'PENTAGON', time: 2.77},
  {name: 'Tempo', artist: 'EXO', time: 3.72},

];

// Loads the content into the page.
function loadContent() {
  // This line of code sorts the array alphabetically by the task labels.
  // Modify this to sort your data by a different field, or just delete it.
  songArray.sort((a, b) => compare(a.name, b.name));

  loadTable();
  loadShortestSong();
  loadAverage ();
}

// Adds a task to the array and reloads the page content.
function addNewSong() {
  const newSongName = document.getElementById('name-input').value;
  const newSongArtist = document.getElementById('artist-input').value;
  const newSongTime = document.getElementById('time-input').value;
  const newSong = {name: newSongName, artist: newSongArtist, time: newSongTime};
  songArray.push(newSong);

  loadContent();
}

// Iterates over the data array to create a table.
function loadTable() {
  const tableElement = document.createElement('table');

  // Create a header row.
  const headerRowElement = document.createElement('tr');
  headerRowElement.appendChild(createElement('th', 'Index'));
  headerRowElement.appendChild(createElement('th', 'Name'));
  headerRowElement.appendChild(createElement('th', 'Artist'));
  headerRowElement.appendChild(createElement('th', 'Length (Min)'));
  tableElement.appendChild(headerRowElement);

  // Iterate over the array and create a table row for each object.
  for (let i = 0; i < songArray.length; i++) {
    const song = songArray[i];
    const rowElement = document.createElement('tr');
    rowElement.appendChild(createElement('td', i));
    rowElement.appendChild(createElement('td', song.name));
    rowElement.appendChild(createElement('td', song.artist));
    rowElement.appendChild(createElement('td', song.time));
    tableElement.appendChild(rowElement);
  }

  const tableContainer = document.getElementById('table-container');
  tableContainer.innerHTML = '';
  tableContainer.appendChild(tableElement);
}

// Displays the name of the smallest mountain.
function loadShortestSong(){
  // Assume the first mountain is smallest
  let shortestSong = songArray[0];

  // Starting with the second mountain, look for a smallet mountain
  for (let i = 0; i < songArray.length; i++) {
    const song = songArray[i];
    // If this mountain is smallet than the previous smallest, it's now the smallest
    if(song.time < shortestSong.time) {
      shortestSong = song;
    }
  }
  document.getElementById('shortest-song').innerText = shortestSong.name;
}

//average distance of hike on the mountains//
function loadAverage (){
  let total = 0;
 for(let i = 0; i < songArray.length; i++){
    console.log (total)
   const song = songArray[i];
    total += Number(song.time);

 }
  let average = total / songArray.length;
  console.log (average);
  document.getElementById('average-time').innerText = average
  }



// Helper function that creates an element that contains text content.
function createElement(tag, text) {
  const element = document.createElement(tag);
  element.innerText = text;
  return element;
}

// Helper function that compares two values.
// Works on strings, numbers, and dates.
function compare(valueOne, valueTwo) {
  // valueOne comes before valueTwo
  if (valueOne < valueTwo) {
    return -1;
  }

  // valueOne comes after valueTwo
  if (valueOne > valueTwo) {
    return 1;
  }

  // valueOne and valueTwo are equal
  return 0;
}
