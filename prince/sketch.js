// Data variable
var albums;

// The midi notes of a scale
var notes = [ 60, 62, 64, 65, 67, 69, 71];

// For automatically playing the song
var index = 0;
var song = [
  { note: 4, duration: 400, display: "D" },
  { note: 0, duration: 200, display: "G" },
  { note: 1, duration: 200, display: "A" },
  { note: 2, duration: 200, display: "B" },
  { note: 3, duration: 200, display: "C" },
  { note: 4, duration: 400, display: "D" },
  { note: 0, duration: 400, display: "G" },
  { note: 0, duration: 400, display: "G" }
];

var trigger = 0;
var autoplay = true;
var osc;
var chord = []

function preload() {
  var url = 'data/prince_albums.csv';

// loadJSON
// loadXML

  albums = loadTable(url, "csv", "header");

  // load songs. or large assets
}

function setup() {
  console.log(albums);
  index = 0;
  
  //count the columns
  print(albums.getRowCount() + " total rows in table");
  print(albums.getColumnCount() + " total columns in table");

  print(albums.getColumn("Year"));

  // US chart positions: 163 -> 1
  
  //cycle through the table
  for (var r = 0; r < albums.getRowCount(); r++)
    for (var c = 0; c < albums.getColumnCount(); c++) {
     // print(albums.get(r, c));
    }
    
  // A triangle oscillator
  osc = new p5.TriOsc();
  // Start silent
  osc.start();
  // osc.stop()

// volume control
  osc.amp(0);
}

// A function to play a note
function playNote(note, duration) {

  // data -> frequency
  osc.freq(midiToFreq(note));

// start sound
osc.fade(0.5, 0.2);

setTimeout(function() {
  // fade to .2
  osc.fade(0, 0.2);
}, duration - 50);
}

function draw() {
  // trigger sounds
 // US column -> Midi -> playNote()
  if (autoplay && (millis() > trigger)) {
    var charts = albums.get(index, 'US');
    var midiNote = map(charts, 163, 1, 34, 92);
    playNote(midiNote, 400);

    trigger = millis() + 400;
    index++;
  }

  //albums().getRowCount();

}











