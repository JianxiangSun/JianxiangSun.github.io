function revealMessage() {
         document.getElementById("hiddenmessage").style.display = 'block';

}

function countDown() {
      var currentVal = document.getElementById("countDownButton").innerHTML;

      if (currentVal > 1) {
          newVal = currentVal - 1;
      }

      else {
      var newVal = document.getElementById("hiddenpuzzle").style.display = 'block';
      var newVal = 0;
}

      document.getElementById("countDownButton").innerHTML = newVal;
}

function compute_x_times_y(x,y) {
  var z = 0;
  x = parseInt(x);
  y = parseInt(y);
  z = x * y;

  return z;
}

function compute_x_divide_y(x,y) {
  var z = 0;
  x = parseInt(x);
  y = parseInt(y);
  z = x / y;
  return z;
}

function ask_for_x_n_y() {
  var x = prompt("Enter x value");
  var y = prompt("Enter y value");
  var z = compute_x_times_y(x,y);
  var x = document.getElementById("demo");
  x.style.fontSize = "50px";
  x.style.color = "orange";
  document.getElementById("demo").innerHTML = "The answer is " + z;
}

function ask_xy() {
  var x = document.getElementById("myForm").elements[0].value;
  var y = document.getElementById("myForm").elements[1].value;
  var z = compute_x_divide_y(x,y);
  var x = document.getElementById("demo");
  x.style.fontSize = "50px";
  x.style.color = "orange";
  document.getElementById("demo").innerHTML = "The answer is " + z;
}
