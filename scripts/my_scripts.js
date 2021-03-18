// ----------------- CLOCK BLOCK ----------------
var today = new Date();

var seconds = today.getSeconds ();
  if (seconds < 10) {
      seconds = '0' + seconds;
  }

var minutes = today.getMinutes();
  if (minutes < 10) {
      minutes = '0' + minutes;
    }
document.getElementById('clock').innerHTML = today.getHours() + ':' + minutes + ':' + seconds;
// ----------------------------------------------



// ---------------- CLOCK REFRESH ---------------
// https://www.w3schools.com/js/js_timing.asp
var refresh = setInterval(myTimer, 1000);

function myTimer() {
  var d = new Date();
  document.getElementById('clock').innerHTML = d.toLocaleTimeString();
}
// ----------------------------------------------



// ----------------- DATE BLOCK -----------------
// This Day
var today2 = new Date();

document.getElementById('clock-date').innerHTML = today2.getDate() + '/' + (today2.getMonth()+1);

// This Month
var maanden = new Array('Januari', 'Debruari', 'Maart', 'April', 'Mei', 'Juni', 'Juli', 'Augustus', 'September', 'Oktober', 'November', 'December');

document.getElementById('clock-date').innerHTML = today2.getDate() + ' ' + maanden[today2.getMonth()] + ' ' + today2.getFullYear();

// ---------------------------------------------



// ----------------- IMAGE BLOCK ----------------

var hour = parseInt(today.getHours());
var image = document.getElementById('clock-img').innerHTML;

function clockImg() {
  if (hour >= 0 && hour <= 5) {
      document.getElementById('clock-img').src = "night.png";
    // image.src = '../images/moon.png';
    console.log("0-5");
  } else if (hour >= 6 && hour <= 11) {
      document.getElementById('clock-img').src = "morning.png";
      // image.src = '../images/morning.png';
      console.log("6-11");
  } else if (hour >= 12 && hour <= 17) {
      document.getElementById('clock-img').src = "afternoon.png";
      // image.src = '../images/sun.png';
      console.log("12-17");
  } else if (hour >= 18 && hour <= 23){
      document.getElementById('clock-img').src = "evening.png";
      // image.src = "evening.png";
      console.log("18-23");
  } else {
    console.log("Hi");
    console.log(hour);
  }
}

clockImg();

//https://answers.unity.com/questions/30652/is-there-a-javascript-between-x-and-y-values-opera.html


// ---------------------------------------------







// document.getElementById('clock').innerHTML = today.toString();

//document.getElementById('clock').innerHTML = today.getDate();
//document.getElementById('clock').innerHTML = today.getMonth(); // Januari is maand 0
//document.getElementById('clock').innerHTML = today.getYear(); // Deprecated - niet gebruiken.
//document.getElementById('clock').innerHTML = today.getFullYear();
//document.getElementById('clock').innerHTML = today.getDay(); // Zondag is dag 0

// document.getElementById('clock').innerHTML = today.getHours();
// document.getElementById('clock').innerHTML = today.getMinutes();
// document.getElementById('clock').innerHTML = today.getSeconds();
//document.getElementById('clock').innerHTML = today.getMilliseconds();







// -----------------
// var seconds = addLeadingZero(today.getSeconds());
// var minutes = addLeadingZero(today.getMinutes());
//
// document.getElementById('clock').innerHTML = today.getHours() + ':' + minutes + ':' + seconds;
//
// function addLeadingZero(number) {
//   if (number < 10) {
//     return '0' + number;
//   }
//   return number;
// }
// -----------------

// -----------------

// -----------------



//document.getElementById('clock').innerHTML = today.getTime();
