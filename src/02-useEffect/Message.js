import React, { useEffect, useState } from 'react';

export const Message = () => {

  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const { x, y } = coords;


  const moveMouse = (e) => {
    const coords = { x: e.x, y: e.y };
    setCoords(coords);
  }

  useEffect(() => {
    window.addEventListener('mousemove', moveMouse)
    return () => {
      window.removeEventListener('mousemove', moveMouse);
    }
  }, [])

  return (
    <>
      <h1> Eres genial </h1>
      <p> x: { x } y: { y } </p>
    </>
  )
}
