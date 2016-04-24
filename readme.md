When people think about communicating data they often gravitate towards graphics and interactive visualizations, thinking that these are the only options. But why stop at the sense of sight?!? There are many other methods of perception, each with its own strengths and weaknesses, that can be used to enhance and augment own ability to present data. In this workshop you will explore the tools, theory, and techniques of sonifying data (as well as little history of how we got to where we are today) for both creative and informational uses.

If you have ever wanted to break past the limits of the eye and explore alternative methods of visualizing data, this workshop is for you! You WILL learn how to trigger sounds based on data and user interaction, modulate audio (pitch, tempo, etc.), and "play" a CSV using p5.js (with a little D3.js thrown in). In this workshop you WON'T learn how to create synthesizers, work with waveforms, or process sonic textures unfortunately (there are other workshops for that). Basic programming experience (ideally with Javascript) is necessary but experience with p5.js or D3.js is not required (or assumed).

And please do not hesitate to reach out to me directly via email at jondinu@gmail.com or over twitter @clearspandex

## Getting Setup

You will need:

* HTTP web server
    * On OSX and Linux `python -m SimpleHTTPServer`
    * On Windows, I recommend downloading [Mongoose][mongoose]
* Text Editor: I recommend [Sublime Text][sublime]
* A (modern) Web Browser: I recommend [Google Chrome][chrome]

Once you have downloaded the software above, you are ready to start making some data visualizations!

![](http://media2.giphy.com/media/rOTGSPxvJJY7m/giphy.gif)

1. Get the files: Download the [ZIP][zip] or `git clone https://github.com/Jay-Oh-eN/civic-data-visualization.git` (git [tutorial][gitit]) this repository.
2. Start you HTTP web server
    * If using a `SimpleHTTPServer`, navigate into the repository folder (`hands-on-d3`) on your machine before you start the server.
    * If using Mongoose, set the 'Shared Directory' to be the repository folder.
3. Navigate with a web browser to `http://localhost:[port]` where [port] is the port the server has started on (`SimpleHTTPServer` defaults to port 8000)
4. You should see the directory listing, click on any of the `.html` files and you should see the charts.

__If you need some help with Javascript or D3, refer to the [tutorials](#resources) below__

### Libraries Used
* [p5.js][d3]

## Goals

By the end of this workshop you should be able to:

* Describe the data visualization process and the difference between explanatory and exploratory visualizations
* Understand the Javascript functions, closures and callbacks
* Know how to load multiple data files with D3
* Determine the best chart type for your type of data
* Create author driven narratives with animation (`setInterval()`)
* Create engaging user interaction through Javascript events such as dragging, hovering, and clicking
* Tie this interaction into a reader driven narrative
* Contextualize your data through the use of secondary datasets

## Workshop

### 0: Getting/Cleaning Data

#### Exercise

* Rather than loading the NASA temperature data, use the NYC weather data

### 1: Triggering Audio (beats)

* 

### 2: Modulating Audio

#### Amplitude

#### Frequency/Pitch

#### Tempo/Timing

#### Filters

### 3: Editorializing Audio

#### Composition/Arrangement

#### Sequencing/Chords

## Sonification Examples

### Author Driven

#### [Facebook IPO][facebook] (NYT)

![][facebook_ipo_nyt]

#### [Syrian Refugee Crisis][syria] (Wesam Manassra)

![][syria-img]

### Viewer Driven

#### [Crimespotting][crimespotting] (Stamen)

![][crimespotting-screenshot]

### Martini Glass (mix of author and viewer)

#### [Visualizing MBTA Data][mbta] (Mike Barry and Brian Card)

![][mbta-img]

#### [Gun Deaths][guns] (Periscopic)

![][guns-img]

#### [Flight Delays][flights] (538)

![][flights-img]

#### [Seven Modern Remakes Of The Most Famous Graphs Ever Made][plotly-remake] (Plotly)

![napolean](http://i.imgur.com/wgYtD37.png)

## Next Steps
* [Visual Storytelling with D3 (Ritchie King)][ritchie]
* [Data Visualization and D3.js (Udacity)][udacity]
* [Interactive Data Vizualization (Scott Murray)][murray]
* [CSE512: Data Visualization (University of Washington)][uw-viz]
* [D3 Meetups][meetups]

## Resources

https://bl.ocks.org/emeeks/raw/2fffa9abe50ac97603c7/cloud_rain_freeze.json