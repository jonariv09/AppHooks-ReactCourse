import React, { useContext } from 'react'
import { UserContext } from './UserContext'

export const AboutScreen = () => {

  const { user, setUser } = useContext(UserContext);

  const handleClickLogout = () => {
    setUser({});
  }

  return (
    <div>
      <h1> AboutScreen </h1>
      <hr />

      <button onClick={handleClickLogout}>
        Logout
      </button>
    </div>
  )
}
