import '@testing-library/jest-dom';
import {renderHook, act} from '@testing-library/react-hooks';
import {useCounter} from '../../hooks/useCounter';

describe('Hook useCounter', () => {

  test('deber retornar valores por defecto', () => {
    const {result} = renderHook(() => useCounter());

    expect(typeof result.current.increment).toBe('function');
    expect(typeof result.current.decrement).toBe('function');
    expect(typeof result.current.reset).toBe('function');
  });

  test('debe tener el counter en 100', () => {
    const { result } = renderHook(() => useCounter());
    expect(result.current.counter).toBe(1);
  });

  test('debe de incrementar el counter en 1', () => {
    const { result } = renderHook(() => useCounter(100));
    const { increment } = result.current;

    act(() => {
      increment();
    })

    const { counter } = result.current;
    expect(counter).toBe(101);
  });

  test('debe de decrementar el counter en 1', () => {
    const { result } = renderHook(() => useCounter(100));
    const { decrement } = result.current;

    act(() => {
      decrement();
    })

    const { counter } = result.current;
    expect(counter).toBe(99);
  });

  test('debe de restaurar los valores', () => {
    const { result } = renderHook(() => useCounter(100));
    const { reset, decrement } = result.current;

    act(() => {
      reset();
    })

    const { counter } = result.current;
    expect(counter).toBe(0);
  });

})
