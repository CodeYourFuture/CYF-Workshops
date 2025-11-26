/** Your goal for this exercise is to reasonably handle the type of an error appearing within a try catch block.
 * You'll notice that error.message is reporting a typescript error. There are a number of ways that you could address this typescript error.
 * Explore your options and be sure to have reasoning for the solution you've chosen. When ready, ask a volunteer for feedback on your solution.
 *
 * There is a test file for this exercise but it will only confirm that the function still works at runtime.
 * npm run test-exercise4
 */
export const tryCatchDemo = (state: "fail" | "succeed") => {
  try {
    if (state === "succeed") {
      return "No errors!";
    }
    if (state === "fail") {
      throw new Error("Failure!");
    }
  } catch (error) {
    return error.message;
  }
};
