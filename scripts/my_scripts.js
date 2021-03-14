var today = new Date();

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
var seconds = today.getSeconds ();
  if (seconds < 10) {
      seconds = '0' + seconds;
  }

var minutes = today.getMinutes();
  if (minutes < 10) {
      minutes = '0' + minutes;
    }
document.getElementById('clock').innerHTML = today.getHours() + ':' + minutes + ':' + seconds;
// -----------------

var refresh = setInterval(myTimer, 1000);

function myTimer() {
  var d = new Date();
  document.getElementById('clock').innerHTML = d.toLocaleTimeString();
}
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

var today2 = new Date();

document.getElementById('clock-date').innerHTML = today2.getDate() + '/' + (today2.getMonth()+1);

var maanden = new Array('Januari', 'Debruari', 'Maart', 'April', 'Mei', 'Juni', 'Juli', 'Augustus', 'September', 'Oktober', 'November', 'December');

document.getElementById('clock-date').innerHTML = today2.getDate() + ' ' + maanden[today2.getMonth()] + ' ' + today2.getFullYear();

//document.getElementById('clock').innerHTML = today.getTime();
