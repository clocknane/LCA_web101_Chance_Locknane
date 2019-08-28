function realtimeClock() {

  var rtClock = new Date();

  var hours = rtClock.getHours();
  var minutes = rtClock.getMinutes();
  var seconds = rtClock.getSeconds();


  // Add AM and PM System
var amPm = ( hours < 12) ? "AM" : "PM";

// Convert the Hours Component to 12-Hour Format
hours = (hours > 12) ? hours - 12 : hours;


// Pad the Hours, Minutes, and Seconds with Leading Zeros
<<<<<<< HEAD
hours = ( "0" + hours).slice(-2);
=======
hours = ("0" + hours).slice(-2);
>>>>>>> 3ff202ce36e515ff89e1237a45005cdbaaf8768f
minutes = ("0" + minutes).slice(-2);
seconds = ("0" + seconds).slice(-2);

// Display the Clock
document.getElementById('clock').innerHTML = 
    hours + " : " + minutes + " : " + seconds + " " + amPm;
var t = setTimeout(realtimeClock, 500);

}