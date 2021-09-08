import { useState } from 'react'

export const useForm = (target = {}) => {
  
  const [formState, setFormState] = useState(target);

  const handleInputChange = ({ target }) => {
    setFormState({
      ...formState,
      [target.name]: target.value
    })
  }

  return {
    formState,
    handleInputChange
  }

}
