const {
  setUpDay,
  makeAppointment,
  getAppointment,
  getLengthOfDay,
  getFirstAppointmentTime,
  getLastAppointmentTime,
} = require("./day");

// test that all the appointments on an empty day are available
test("empty day", () => {
  // nothing to set up
  // perform the action we are testing
  setUpDay();
  // check the results are as expected
  const start = getFirstAppointmentTime();
  const length = getLengthOfDay();
  for (let time = start; time < length; time++) {
    expect(getAppointment(time).name).toBe("available");
  }
});

// test that we can make an appointment at the start of an empty day
test("Make Appointment at start of day", () => {
  // set up everything ready for the test
  setUpDay();
  const time = getFirstAppointmentTime();
  // perform the action
  const result = makeAppointment(time, "John", 1);
  // check the results are as expected
  expect(result).toBe(true);
  expect(getAppointment(time).name).toBe("John");
  expect(getAppointment(time).length).toBe(1);
});

// test that we can make an appointment at the start of an empty day
test("Make Appointment before the start of day", () => {
  // set up everything ready for the test
  setUpDay();
  const time = getFirstAppointmentTime() - 1;
  // perform the action
  const result = makeAppointment(time, "John", 1);
  // check the results are as expected
  expect(result).toBe(false);
  expect(getAppointment(getFirstAppointmentTime()).name).toBe("available");
});
