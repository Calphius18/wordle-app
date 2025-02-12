import React, { useContext } from 'react'
import { AppContext } from '../App';


function Key( {keyVal, largeKey, disabled } ) {
  const {onDelete, onEnter, onClickLetter} = useContext(AppContext);

  const selectLetter = () => {
    if (keyVal === "ENTER") {
    onEnter();
    } else if (keyVal ==="DELETE") {
        onDelete();
    } else { 
        onClickLetter(keyVal);
    }
    };

  return (
    <div className='key' id={largeKey ? "large": disabled && "disabled"} onClick={selectLetter}>
      {keyVal}
      </div>
  );
}

export default Key;