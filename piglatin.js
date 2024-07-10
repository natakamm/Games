const args = process.argv.slice(2);
const english = args[0];

if (
  typeof english === "string" &&
  isNaN(english) &&
  english.trim().length > 0 &&
  /^[a-zA-Z\s]+$/.test(english) //test is a method to test if the
  //type of input must be string; not be a number; not have any empty spaces; and not include a number in the string
) {
  const splitwords = english.split(" "); //variable for spli up words of user
  //console.log(splitwords); //method to break up a sentence into words and store them in an array

  const letters = splitwords.map((word) => word.split("")); //map creates a new array with the results of calling a function
  console.log(letters); //created an array that contains many arrays with the split up letters of each word
} else {
  console.error(
    'You can´t use numbers or special characters in this game. Just type a sentence using the letters of the alphabet in "this format".' //If it is a number, say this.
  );
  return;
}
