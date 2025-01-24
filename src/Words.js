import wordBank from "./wordle-bank.txt";
export const boardDefault = [
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
  ];

 export const generateWordSet = async () => {
    let wordSet;
    let gameWord;
    await fetch(wordBank)
      .then((response) => response.text())
      .then((result) => {
        const wordArray = result.split("\n")
        gameWord = wordArray[Math.floor(Math.random()* wordArray.length)]
        wordSet = new Set(wordArray);
    });

    return {wordSet, gameWord};
  };