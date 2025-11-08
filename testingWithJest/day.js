// The appointments for the day.
const appointments = [];
// The hour of the first appointment of the day.
const START_OF_DAY = 9;
// The hour of the last appointment of the day.
const FINAL_APPOINTMENT_TIME = 17;
// The number of bookable hours in a day.
const MAX_APPOINTMENTS_PER_DAY = FINAL_APPOINTMENT_TIME - START_OF_DAY + 1;

// Set up the day with all available appointments.
function setUpDay() {
  for (let i = START_OF_DAY; i <= FINAL_APPOINTMENT_TIME; i++) {
    // the 9am appointment goes in index 0, so we need to subtract the start time
    appointments[i - START_OF_DAY] = { name: "available", length: 0 };
  }
}

// insert an appointment at a specific time
function updateIndex(time, person, length) {
  const index = time - START_OF_DAY;
  appointments[index].name = person;
  appointments[index].length = length;
}

// Get the appointment at a specific time.
function getAppointment(time) {
  return appointments[time - START_OF_DAY];
}

// Get the time of the first appointment in the day.
function getFirstAppointmentTime() {
  return START_OF_DAY;
}

// Get the time of the last appointment in the day.
function getLastAppointmentTime() {
  return FINAL_APPOINTMENT_TIME;
}

// Get the number of appointment slots in the day.
function getLengthOfDay() {
  return MAX_APPOINTMENTS_PER_DAY;
}

// Print out the appointments for the day.
function printAppointments() {
  console.log("Appointments for the day:");
  for (let i = START_OF_DAY; i <= FINAL_APPOINTMENT_TIME; i++) {
    console.log(
      `Time: ${i}, Name: ${appointments[i - START_OF_DAY].name}, Length: ${
        appointments[i - START_OF_DAY].length
      }`
    );
  }
}

// Make an appointment at a specific time.
// THIS IS THE ONLY FUNCTION THAT YOU CAN CHANGE
function makeAppointment(time, person, length) {
  updateIndex(time, person, length);
  return true;
}

module.exports = {
  setUpDay,
  makeAppointment,
  getAppointment,
  getLengthOfDay,
  getFirstAppointmentTime,
  getLastAppointmentTime,
  printAppointments,
};
