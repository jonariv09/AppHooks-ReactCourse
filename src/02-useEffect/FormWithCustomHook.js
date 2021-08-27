import React, { useState, useEffect } from 'react'
import { useForm } from '../hooks/useForm';

export const FormWithCustomHook = () => {

  const {formState, handleInputChange} = useForm({
    name: '',
    email: '',
    password: ''
  })

  const { name, email, password } = formState;

  useEffect(() => {
    
    console.log('cambio email!!')
  }, [email])

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formState)
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1> Form with custom hook </h1>
      <input 
        type="text"
        name="name"
        className="form-control"
        placeholder="Tu nombre"
        autoComplete="off"
        value={name}
        onChange={(event) => handleInputChange(event)}
      />

      <input 
        type="text"
        name="email"
        className="form-control"
        placeholder="email@email.com"
        autoComplete="off"
        value={email}
        onChange={(event) => handleInputChange(event)}
      />

      <input 
        type="text"
        name="password"
        className="form-control"
        placeholder="*****"
        autoComplete="off"
        value={password}
        onChange={(event) => handleInputChange(event)}
      />

      <button type="submit"> Enviar </button>

    </form>
  )
}
