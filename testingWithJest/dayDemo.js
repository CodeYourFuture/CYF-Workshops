const {
  setUpDay,
  makeAppointment,
  getAppointment,
  getLengthOfDay,
  getFirstAppointmentTime,
  getLastAppointmentTime,
  printAppointments,
} = require("./day");

// The following is just a demo of how to use the functions.
// Remember to call setUpDay() before making any appointments.
// If you want to debug a test, you can change the code below to copy the test code.
console.log("Day Demo.  Setting up an empty day.");
setUpDay();
printAppointments();
console.log("Making an appointment for John at 11am.");
makeAppointment(11, "John", 1);
printAppointments();
