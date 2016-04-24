// Data variable
var albums;

// For automatically playing the song
var index = 1978;
var trigger = 0;
var autoplay = true;
var osc;
var duration;

function preload() {
  var url = 'data/prince_albums.csv';
  albums = loadTable(url, "csv", "header");
}

function setup() {
  // console.log(albums);
  //albums.addColumn('year_index');
  
  // total "song lasts 1 minute"
  //duration = 60000;
  
  // we need to represent 1978 -> 2015
  //map(+position, 163, 1, 21, 108)
  
  //count the columns
  print(albums.getRowCount() + " total rows in table");
  print(albums.getColumnCount() + " total columns in table");

  print(albums.getColumn("Album details"));

  // US chart positions: 163 -> 1
  
  //cycle through the table
  // for (var r = 0; r < albums.getRowCount(); r++) {
  //     print(albums.get(r, 'Year'));
      
  //     var idx = round(map(+albums.get(r, 'Year'), 1978, 2015, 0,  
      
  //     //albums.set(r, 'Year', idx);
  // }
    
  // A triangle oscillator
  osc = new p5.TriOsc();
  
  // Start silent
  osc.start();
  osc.amp(0);
    
}


// A function to play a note
function playNote(position, duration) {
  console.log(position);
  
  if(position == '—') {
    position = 109;
  }
  
  // midi from 21 -> 108. Chart positions from 163 -> 1
  midi = round(map(+position, 163, 1, 21, 108));
  
  osc.freq(midiToFreq(midi));
  
  // Fade it in
  osc.fade(0.5,0.2);
  
  // If we sest a duration, fade it out
  if (duration) {
    setTimeout(function() {
      osc.fade(0,0.2);
    }, duration-50);
  }
}


function draw() {
  // If we are autoplaying and it's time for the next note
  
  if (millis() % 1000)
  
  if (autoplay && millis() > trigger){
    playNote(albums.findRow(index, "Year"), 400);

    trigger = millis() + 400// albums[index].duration;
    
    // Move to the next note
    index++;
  // We're at the end, stop autoplaying.
  } else if (index >= albums.getRowCount()) {
    autoplay = false;
    osc.start()
  }
}