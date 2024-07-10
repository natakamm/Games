const args = process.argv.slice(2);
const english = args[0];

function modifyString1(word) {
  if (word.length > 1) {
    //length of the string word is greater than 2.
    return word.slice(2) + word.slice(0, 2) + "ay"; // first slice: This takes the substring of word starting from the third character to the end
  } // second slice: This takes the substring of word starting from the first character and including the next character up to, but not including, the third character.
}

function modifyString2(word) {
  if (word.length > 1) {
    //length of the string word is greater than 1.
    return word.slice(1) + word.slice(0, 1) + "ay"; // first slice: This takes the substring of word starting from the third character to the end
  } // second slice: This takes the substring of word starting from the first character and including the next character up to, but not including, the third character.
}

if (
  typeof english === "string" &&
  isNaN(english) &&
  english.trim().length > 0 &&
  /^[a-zA-Z\s]+$/.test(english) //test is a method to test if the criteria are met
  //type of input must be string; not be a number; not have any empty spaces; and not include a number in the string
) {
  const splitwords = english.split(" ");
  const consonants = "BCDFGHJKLMNPQRSTVWXYZbcdfghjklmnpqrstvwxyz";
  const vowels = "AEIOUaeiou"; //variable for spli up words of user
  //console.log(splitwords); //method to break up a sentence into words and store them in an array
  for (let i = 0; i < splitwords.length; i++) {
    const firstCharacterOfEachWord = splitwords[i][0];
    const firstAndSecondCharacterOfEachWord = splitwords[i].substring(0, 2);

    if (vowels.includes(firstCharacterOfEachWord)) {
      splitwords[i] += "way"; //this will add "-way" to the end of the word at index i the loop is running over, that is a vowel
    } else if (
      consonants.includes(firstAndSecondCharacterOfEachWord[0]) &&
      consonants.includes(firstAndSecondCharacterOfEachWord[1])
    ) {
      splitwords[i] = modifyString1(splitwords[i]);
    } else if (
      consonants.includes(firstAndSecondCharacterOfEachWord[0]) &&
      vowels.includes(firstAndSecondCharacterOfEachWord[1])
    ) {
      splitwords[i] = modifyString2(splitwords[i]);
    }
    //console.log(splitwords[i]);
  }
  const pigLatin = splitwords.join(" "); // Join array elements into a single string without any separator
  console.log(pigLatin);
} else {
  console.error(
    'You can´t use numbers or special characters in this game. Just type a sentence using the letters of the alphabet in "this format".' //If it is a number, say this.
  );
  return;
}

//) {
// const splitwords = english.split(" "); //variable for spli up words of user
//console.log(splitwords); //method to break up a sentence into words and store them in an array
// for (let i = 0; i < splitwords.length; i++) {
//  const firstCharacterOfEachWord = splitwords[i][0];
//  const vowels = "AaEeIiOoUu";
// console.log(firstCharacterOfEachWord);
//  if (vowels.includes(firstCharacterOfEachWord)) {
//   console.log("Vowel");
// }
//  }
