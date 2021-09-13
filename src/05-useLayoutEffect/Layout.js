import React, { useLayoutEffect, useRef, useState } from 'react'
import { useCounter } from '../hooks/useCounter';
import { useFetch } from '../hooks/useFetch';
import './Layout.css';

export const Layout = () => {

  const [boxSize, setBoxSize] = useState({});
  const { counter, increment, decrement } = useCounter(1);
  const { data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);

  const { quote } = !!data && data[0];
  const pTag = useRef();
  

  useLayoutEffect(() => {
    setBoxSize(pTag.current.getBoundingClientRect());
  }, [quote])

  return (
    <div>
      <h1> Breaking Bad </h1>
      <hr />

      <blockquote className="blockquote">
        <p
          ref={ pTag }
        > { quote } </p>
      </blockquote>
      
      <pre>
        { JSON.stringify(boxSize, null, 3) }
      </pre>

      <button onClick={increment}> Siguiente quote </button>

    </div>
  )
}
