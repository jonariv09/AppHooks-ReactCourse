import {renderHook, act} from '@testing-library/react-hooks';
import { shallow } from 'enzyme';
import { MultipleCustomHooks } from '../../../03-examples/MultipleCustomHooks';
import { useFetch } from '../../../hooks/useFetch';

jest.mock('../../../hooks/useFetch');

describe('Pruebas en <MultipleCustomHooks />', () => {

  test('debe mostrarse correctamente', () => {

    useFetch.mockReturnValue({
      data: null,
      loading: true,
      error: null
    });

    const wrapper = shallow(<MultipleCustomHooks />);
    expect(wrapper).toMatchSnapshot();

  })

  test('debe de mostrar la informacion', () => {

    useFetch.mockReturnValue({
      data: [{
        author: 'Agustin',
        quote: 'Hola Mundo'
      }],
      loading: false,
      error: null
    });

    const wrapper = shallow(<MultipleCustomHooks />);

    expect(wrapper.find('.loader').exists()).toBe(false);
    expect(wrapper.find('.quote').text().trim()).toBe('Hola Mundo');
    expect(wrapper.find('.author').text().trim()).toBe('Agustin');
  })

})