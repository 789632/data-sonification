
// A wind direction vector
var wind;
// Circle position
var position;

var pulse;
var red = 0;
var green = 0;
var blue = 0;

var t_red = 0;
var t_green = 0;
var t_blue = 0;

function setup() {
  createCanvas(720, 200);
  // Request the data from openweathermap
  var url = 'http://api.openweathermap.org/data/2.5/weather?q=New%20York,NY&units=imperial&APPID=7bbbb47522848e8b9c26ba35c226c734';
  loadJSON(url, gotWeather);
  // Circle starts in the middle
  position = createVector(width/2, height/2);
  // wind starts as (0,0)
  wind = createVector();
  
  // Create and start the pulse wave oscillator
  pulse = new p5.Pulse();
  pulse.amp(0.5);
  pulse.freq(440);
  pulse.start();
}

function draw() {
  
  var c = map(position.x, 0, width, 0, 255);
  var c2 = map(position.y, 0, width, 0, 255);
    
  background(c + c2, c2 * c / (c + 1));

  // This section draws an arrow pointing in the direction of wind
  push();
  translate(32, height - 32);
  // Rotate by the wind's angle
  rotate(wind.heading() + PI/2);
  noStroke();
  fill(255);
  ellipse(0, 0, 48, 48);

  stroke(45, 123, 182);
  strokeWeight(3);
  line(0, -16, 0, 16);

  noStroke();
  fill(45, 123, 182);
  triangle(0, -18, -6, -10, 6, -10);
  pop();
  
  // Move in the wind's direction
  position.add(wind);
  
  stroke(0);
  fill(51);
  ellipse(position.x, position.y, 16, 16);

  if (position.x > width)  position.x = 0;
  if (position.x < 0)      position.x = width;
  if (position.y > height) position.y = 0;
  if (position.y < 0)      position.y = height;

  var w = map(position.x, 0, width, 0, 1);
  w = constrain(w, 0, 1);
  var v = map(position.y, 0, height, 0, 1);
  v = constrain(v, 0, 1);
  masterVolume(v);
  pulse.width(w);
  
  console.log(wind)
  
}

function gotWeather(weather) {
  
  // Get the angle (convert to radians)
  var angle = radians(Number(weather.wind.deg));
  // Get the wind speed
  var windmag = Number(weather.wind.speed);
  
  // Display as HTML elements
  var temperatureDiv = createDiv(floor(weather.main.temp) + '&deg;');
  var windDiv = createDiv("WIND " + windmag + " <small>MPH</small>");
  
  // Make a vector
  wind = p5.Vector.fromAngle(angle);
}
