import React, { useContext, useEffect } from "react";
import { AppContext } from "../App";

function Letter({ letterPos, attemptVal }) {
  const { board, setDisabledLetters, currentAttempt, correctWord } =
    useContext(AppContext);
  const letter = board[attemptVal][letterPos];
  const correct = correctWord.toUpperCase()[letterPos] === letter;
  const stray = !correct && letter !== "" && correctWord.toUpperCase().includes(letter);
  const letterState = currentAttempt.attempt > attemptVal &&
    (correct ? "correct" : stray ? "stray" : "wrong");

  useEffect(() => {
    if (letter !== "" && !correct && !stray) {
      console.log(letter);
      setDisabledLetters((prev) => [...prev, letter]);
    }
  }, [currentAttempt.attempt]);
  return (
    <div className="letter" id={letterState}>
      {letter}
    </div>
  );
}

export default Letter;