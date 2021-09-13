import React from 'react'

export const ShowIncrement = React.memo(({ increment }) => {

  console.log('Me volvi a generar');

  return (
    <div>

      <button
        onClick={() => {
          increment(1)
        }}
      >
        Incrementar
      </button>

    </div>
  )
})
