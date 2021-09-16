import React from 'react'
import { useCounter } from '../hooks/useCounter';
import { useFetch } from '../hooks/useFetch';

export const MultipleCustomHooks = () => {

  const { counter, increment } = useCounter(1);
  const { loading, data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);

  const { quote, author } = !!data && data[0];


  return (
    <div>
      <h1> Breaking Bad </h1>
      <hr />
      
      {
        loading
        ? 
          (
            <div className="loader"> Loading.... </div>
          )
        :
          (
            <blockquote>
              <p className="quote"> { quote } </p>
              <footer className="author"> { author }  </footer>
            </blockquote>
          )
      }

      <button onClick={increment}> Siguiente quote </button>

    </div>
  )
}
