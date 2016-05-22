var canvas_width = 1200;
var canvas_height = 800;

// input "data" domain
var input = [153, 377]

// output pixel range
var output = [100, 500]

// rectangle constants
var yellow_x = 50;
var blue_x = 800;
var rect_width = 40;

function setup() {
  // initialize canvas to draw
  createCanvas(canvas_width, canvas_height);
  
  // set background fill
  background(102);
  
  // extent of inputs and outputs
  var input_span = input[1] - input[0];
  var output_span = output[1] - output[0];
  
  // set color of fill with rgb values (0 -> 255)
  fill(255,255,0);
  
  // rect(x, y, width, height)
  rect(yellow_x, input[0], rect_width, input_span);
  
  // draw blue rectangle
  fill(0,200,200);
  rect(blue_x, output[0], rect_width, output_span);
  
  for (var i = input[0]; i < input[1]; i++) {
    var output_y = map(i, input[0], input[1], output[0], output[1])
    
    stroke(255, 0, 0);
    
    // https://p5js.org/examples/examples/Form_Points_and_Lines.php
    line(yellow_x + rect_width, i, blue_x, output_y)
  }
}

function draw() {
  // nothing to do here
}