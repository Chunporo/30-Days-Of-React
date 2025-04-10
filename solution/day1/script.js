function letsLearnScope() {
  var gravity = 9.81;
  console.log("The gravity is " + gravity + " m/s^2");
}

if (true) {
  var gravity = 9.81;
  console.log("The gravity is " + gravity + " m/s^2");
}
console.log("The gravity is " + gravity + " m/s^2");

for (var i = 0; i < 3; i++) {
  console.log(i);
}

console.log(i);
cd;
