import React, { useContext, useEffect } from 'react'
import { UserContext } from './UserContext'

export const LoginScreen = () => {
  
  const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    console.log(user);
  }, [user]);

  const handleClickLogin = () => {
    setUser({
      id: 123456,
      name: "Agustin"
    })
  }

  return (
    <div>
      <h1> LoginScreen </h1>
      <hr />

      <button onClick={handleClickLogin}>
        Send new paramenters
      </button>

    </div>
  )
}
