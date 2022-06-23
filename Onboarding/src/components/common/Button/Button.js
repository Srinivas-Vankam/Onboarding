import React from 'react';
import './button.scss';

function Button({ text, handleClick}) {

  return (
    <button type="submit" className='submitButton' onClick={handleClick}> {text} </button>
  )
}

export default Button