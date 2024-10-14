# Node.js Games

## Description

The **Node.js Games** repository contains implementations of two classic games: **Rock Paper Scissors** and an **English to Pig Latin Translator**. These command-line applications showcase basic programming concepts in Node.js, including user input handling and string manipulation.

---

### Rock Paper Scissors

**Description**: Implement a basic Rock Paper Scissors game where players can compete against a computer opponent.

**Requirements**:
- The program takes the player’s move as input from `process.argv`.
- The computer randomly generates its move.
- The winner is determined based on the rules of Rock Paper Scissors.
- The result (win, lose, or draw) is outputted to the console.

**Example Usage inspired by Mortal Combat**:

```node rockPaperScissors.js rock```
#### Output: ```You have picked ${choice} and your opponent has picked ${opponent}. You Are Sliced Apart by Their Sharp Scissors! YOU LOOSE!!!```

### English to Pig Latin Translator
**Description**: A program that translates English text to Pig Latin, making it fun to play with words.

****Requirements**:

- The program takes an English phrase as input from process.argv.
- It converts each word to Pig Latin using the following rules:
- If a word starts with a consonant and a vowel, put the first letter at the end of the word and add “ay.”

**Example**: Happy becomes appyhay.
If a word starts with two consonants, move the two consonants to the end of the word and add “ay.”

**Example**: Child becomes ildchay.
If a word starts with a vowel, add “way” to the end of the word.
**Example**: Awesome becomes Awesomeway.
The translated phrase is outputted to the console.
