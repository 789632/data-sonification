When people think about communicating data they often gravitate towards graphics and interactive visualizations, thinking that these are the only options. But why stop at the sense of sight?!? There are many other methods of perception, each with its own strengths and weaknesses, that can be used to enhance and augment own ability to present data. In this workshop you will explore the tools, theory, and techniques of sonifying data (as well as little history of how we got to where we are today) for both creative and informational uses.

If you have ever wanted to break past the limits of the eye and explore alternative methods of visualizing data, this workshop is for you! You WILL learn how to trigger sounds based on data and user interaction, modulate audio (pitch, tempo, etc.), and "play" a CSV using p5.js (with a little D3.js thrown in). In this workshop you WON'T learn how to create synthesizers, work with waveforms, or process sonic textures unfortunately (there are other workshops for that). Basic programming experience (ideally with Javascript) is necessary but experience with p5.js or D3.js is not required (or assumed).

And please do not hesitate to reach out to me directly via email at jondinu@gmail.com or over twitter @jonathandinu

[![Join the chat at https://gitter.im/Jay-Oh-eN/data-sonification](https://badges.gitter.im/Jay-Oh-eN/data-sonification.svg)](https://gitter.im/Jay-Oh-eN/data-sonification?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

## Getting Setup

_it is also recommended to bring a pair of your own headphones_

You will need:

* [p5.js Editor](https://p5js.org/download/)

__OR__

* Text Editor: I recommend [Sublime Text](http://www.sublimetext.com/2)
* A (modern) Web Browser: I recommend [Google Chrome](https://www.google.com/chrome/browser/desktop/)

### Libraries Used
* [p5.js](https://p5js.org/)

## Workshop

### 0: Getting Data

* [NASA Climate Data](http://climate.nasa.gov/vital-signs/carbon-dioxide/)
* [Prince's Studio Albums (Wikipedia)](https://docs.google.com/spreadsheets/d/1FiPbFhuHwVu4NSbeZWFGDh4XsZ0JGT1LDGl9p0QSzzc)
* [Quandl (Financial)](https://www.quandl.com)
* [SF Evictions](https://data.sfgov.org/Housing-and-Buildings/Eviction-Notices/5cei-gny5)
* [treasury.io](http://treasury.io/)

#### Exercise

1. [Generating (and importing) Sounds]()
2. [Loading Data]()
3. [Triggering Sounds]()
4. [Sonic Modulation]()
5. [User Interaction]()

2. [Triggering Audio](prince/index2.html)
1. [Loading Data](prince/index.html)
3. [Sonic Modulation](weather/index.html)
4. [User Interaction](theremin/index.html)
5. [Sequencing](theremin/matrix.html)

1. Using the [loadTable()]() function, load one of the Sea in the [data/](data) folder into your sketch.
2. To make sure the data was loaded, print how many rows and columns are in the dataset as well as the first row of data.
3.

8. Find a dataset on the [Durham open data](https://opendurham.nc.gov/page/home/) portal to sonify (it should have some element of time to it).
9.

### 3: Triggering Sounds

### 4: Modulating Audio

#### Amplitude

#### Frequency/Pitch

#### Tempo/Timing

#### Filters

### Exercise

Rather than loading the NASA temperature data, use [this NYC weather data](https://bl.ocks.org/emeeks/raw/2fffa9abe50ac97603c7/cloud_rain_freeze.json) (from Elijah Meeks [visualization](https://bl.ocks.org/emeeks/2fffa9abe50ac97603c7))

### 3: Editorializing Audio

## Static Data

## Real time!

#### Composition/Arrangement

#### Sequencing/Chords

## Sonification Examples

### Data as Driver

* [bitListen](http://www.bitlisten.com/)
* [Listen to Wikipedia](http://listen.hatnote.com/)
* [TweetScapes](https://www.youtube.com/watch?v=0lKSFlB_-Q0)
* [NYC Subway Song](http://www.fastcodesign.com/1663129/mtame-google-engineer-turns-subway-lines-into-musical-instruments)
* [ChartWAVE](http://chartbeat.github.io/chartwave/?host=gizmodo.com)
* [James Murphy meets IBM](https://www.youtube.com/watch?v=BUkwbsd-NcA)

### Editorialization

* [NYC Subway Income Disparity](http://hyperallergic.com/180725/data-driven-music-to-for-the-disharmony-of-new-yorks-income-inequality/)
* [FMS Symphony (Federal Reserve)](https://thomaslevine.com/!/fms-symphony/)

### Augmentation

* [p5 Flocking Audio Effect](http://b2renger.github.io/pages_p5js/flock/index.html)

### Audio as Tool

* [Gieger Counter](https://en.wikipedia.org/wiki/Geiger_counter)
* [Higgs Boson](https://lhcopensymphony.wordpress.com/the-first-higgs-boson-data-sonifcation/)

## References

### Programming

* [JS for Cats](http://jsforcats.com/)
* [Codeschool Interactive Tutorial](https://www.codeschool.com/learn/javascript)
* [My Javascript Resource List](https://github.com/Jay-Oh-eN/awesome-resources/blob/master/javascript.md)
* [p5 Javascript resource list](https://github.com/processing/p5.js/wiki/Education#js-resources)
* [Git (and Github) for Poets](https://www.youtube.com/playlist?list=PLRqwX-V7Uu6ZF9C0YMKuns9sLDzK6zoiV)
* [Jonathan's Favorite Datasets](https://github.com/Jay-Oh-eN/awesome-resources/blob/master/datasets.md)

### p5.js

* [Official p5 Tutorials](https://p5js.org/tutorials/)
* [p5 Videos](https://github.com/processing/p5.js/wiki/Education#videos)
    * [Dan Shiffman's Videos](https://www.youtube.com/user/shiffman/playlists?sort=dd&shelf_id=14&view=50)
* [Nature of Code (in p5js)](https://github.com/shiffman/The-Nature-of-Code-Examples-p5.js)
* [Classes that use/teach p5](https://github.com/processing/p5.js/wiki/Education#class--workshop-syllabi)

### Audio
* [MIDI for Programmers](https://www.cs.cmu.edu/~music/cmsip/readings/MIDI%20tutorial%20for%20programmers.html)
* [p5js-osc](https://github.com/genekogan/p5js-osc)
* [Web MIDI](https://webaudiodemos.appspot.com/slides/index.html#/)
    * [Demos](https://webaudiodemos.appspot.com/)
* [Web MIDI + p5](https://github.com/marianmoldovan/p5js-playground/blob/master/sketch.js)
* [Visualizing Music with P5](https://github.com/therewasaguy/p5-music-viz)
* [freesound.org](https://www.freesound.org/)
