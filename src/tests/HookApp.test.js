import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import HookApp from '../HookApp';

describe('HookApp', () => {
  test('debe renderizar correctamente el componente', () => {
    const wrapper = shallow(<HookApp />);
    expect(toJson(wrapper)).toMatchSnapshot();
  })
}) 
