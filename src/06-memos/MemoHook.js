import React, { useState, useMemo } from 'react';
import { useCounter } from '../hooks/useCounter';

export const MemoHook = () => {

  const { counter, increment } = useCounter(5000);
  const [show, setShow] = useState(true);

  const procesoPesado = (iteraciones) => {
    for(let i = 0; i < iteraciones; i++) {
      console.log('Ahi vamos');
    }

    return `${iteraciones} realizadas realizadas`;
  }


  const memoProcesoPesado = useMemo(() => procesoPesado(counter), [counter]);

  return (
    <div>
      <h3> Counter <small> { counter } </small> </h3>
      <hr />

      <p> { memoProcesoPesado } </p>

      <button
        onClick={increment}
      >
        +1
      </button>

      <button
        onClick={() => {
          setShow( !show )
        }}
      >
        Show / Hide { JSON.stringify(show) }
      </button>

    </div>
  )
}
