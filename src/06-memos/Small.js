import React from 'react'

export const Small = React.memo(({ value }) => {
  console.log('executed again');
  return (
    <div>
      <small> { value } </small>
    </div>
  )
})