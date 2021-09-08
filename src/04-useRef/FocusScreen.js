import React, { useRef } from 'react'

export const FocusScreen = () => {
  
  const inputRef = useRef();

  const handleClick = () => {
    inputRef.current.select();
  }

  return (
    <div>
      
      <input
        ref={inputRef}
        placeholder="Su nombre"
      />

      <button
        onClick={handleClick}
      > Focus </button>

    </div>
  )
}
