import React, { useState, useEffect } from 'react'
import { Message } from './Message';

export const SimpleForm = () => {

  const [formState, setFormState] = useState({
    name: '',
    email: ''
  })

  const { name, email } = formState;

  useEffect(() => {
    console.log('!hey');
  }, []);

  useEffect(() => {
    console.log('formState cambio!!');
  }, [formState]);

  useEffect(() => {
    console.log('email cambio!!');
  }, [email]);

  const handleInputChange = ({ target }) => {
    setFormState({
      ...formState,
      [target.name]: target.value
    })
  }

  return (
    <>
      <h1> Use Effect </h1>
      
      <input 
        type="text"
        name="name"
        className="form-control"
        placeholder="Tu nombre"
        autoComplete="off"
        value={name}
        onChange={handleInputChange}
      />

      <input 
        type="text"
        name="email"
        className="form-control"
        placeholder="email@email.com"
        autoComplete="off"
        value={email}
        onChange={handleInputChange}
      />

      { name === "1234" && <Message /> }

    </>
  )
}
