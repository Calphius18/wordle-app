import React, { useContext, useEffect } from 'react';
import { AppContext } from "../App";

function Letter({ letterPos, attemptVal }) {
  const { board, correctWord, currentAttempt, setDisabledLetters, disabledLetters} = useContext(AppContext);
  const letter = board[attemptVal][letterPos];

  const correct = correctWord[letterPos] === letter;
  const stray = !correct && letter !== "" && correctWord.includes(letter);

  const letterState = currentAttempt.attempt > attemptVal &&(correct ? "correct" : stray ? "stray" : "wrong");

  useEffect(() => {
    if (letter !== "" && !correct && !stray) {
      setDisabledLetters((prev) => [...prev, letter]);
    }
  }, [currentAttempt.attempt]);

  return (
    <div className='letter' id={letterState}>{letter}</div>
  );
}

export default Letter;