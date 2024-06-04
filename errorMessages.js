// Create a function that takes a number as an argument and returns the appropriate error message. You should do this without using the switch or if statements.

function error(num) {
  let arr = [
    "Check the fan: e1",
    "Emergency stop: e2",
    "Pump Error: e3",
    "c: e4",
    "Temperature Sensor Error: e5",
  ];
  console.log(arr[num - 1]);
  
  
}
error(5);
error(2);

