import {renderHook, act} from '@testing-library/react-hooks';
import { useForm } from '../../hooks/useForm';

describe('Pruebas en userForm', () => {


  test('Debe de regresar un formulario por defecto', () => {
    const initialValues = {
      name: "Agustin",
      lastName: "Narvaez"
    }

    const { result } = renderHook(() => useForm(initialValues));

    const [values] = result.current;
    expect(values).toBe(initialValues);
  });

  test('debe de cambiar el valor del formulario (cambiar name)', () => {
    const initialValues = {
      name: "Agustin",
      lastName: "Narvaez"
    }

    const { result } = renderHook(() => useForm(initialValues));
    const [, handleInputChange, setValues] = result.current;
    const newName = "Jose";

    act(() => {
      const target = { name: "name", value: newName };
      handleInputChange({ target });
    })

    const [values] = result.current;
    expect(values).toEqual({ ...initialValues, name: 'Jose' });
  });

  test('debe de re-establecer el formulario con RESET', () => {
    const initialValues = {
      name: "Agustin",
      lastName: "Narvaez"
    }

    const { result } = renderHook(() => useForm(initialValues));
    const [, handleInputChange, reset] = result.current;
    const newName = "Jose";

    act(() => {
      const target = { name: "name", value: newName };
      handleInputChange({ target });
      reset();
    })

    const [values] = result.current;
    expect(values).toEqual(initialValues);
  });

});
