import React, { useEffect } from 'react'
import { checkWin } from '../helpers/helpers';

const Popup = ({correctLetters, wrongLetters, selectedWord, setPlayable, playAgain}) => {
let finalMesssage= '' ;
let finalMessageRevealWord = '' ;
let playable = true ;

if (checkWin(correctLetters,wrongLetters,selectedWord)=== 'win'){
  finalMesssage= 'Congratulations ! You Won ! ' ;
  playable = false ;
} 
else if (checkWin(correctLetters,wrongLetters,selectedWord)=== 'lose'){
  finalMesssage= 'Congratulations ! You Lost ! ' ;
  finalMessageRevealWord = `...the word was ${selectedWord}`;
  playable = false ;
}

useEffect(()=> setPlayable(playable) );

  return (
    <div className="popup-container" style={finalMesssage != '' ? {display:'flex'} : {}}>
        <div className="popup">
            <h2> {finalMesssage} </h2>
            <h3> {finalMessageRevealWord} </h3>
            <button onClick={playAgain}>Play Again</button>
        </div>
  </div>
  )
}

export default Popup