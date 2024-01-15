import { render } from "@testing-library/react"
import { FirstApp } from "../src/FirstApp"

describe('Pruebas en <FirstApp/>', () => {
  /*test('should de hacer match con el snapshot', () => {
    const title = 'Hola mundo';
    const {container} = render(<FirstApp title={title}/>)

    expect(container).toMatchSnapshot();
  });*/

  test('debe de mostrar el titulo', () => {
    const title = 'Hola mundo';
    const {container, getByText, getByTestId} = render(<FirstApp title={title}/>);
    expect(getByText(title)).toBeTruthy();
    expect(getByTestId('test-title')).toBeTruthy();


  });
});