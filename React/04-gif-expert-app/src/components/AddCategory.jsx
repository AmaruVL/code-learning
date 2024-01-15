import { useState } from "react"

//export const AddCategory = ({setCategories}) //primera forma
export const AddCategory = ({onNewCategory}) => {

  const [inputValue, setInputValue] = useState('')

  const onInputChange = ({target}) => {
    //Siempre se envia el event
    setInputValue(target.value)
  }

  const onSubmit = (event) => {
    event.preventDefault(); //Evitar que se actualize la pagina
    if( inputValue.trim().length <= 1) return;
    //setCategories(cat => [inputValue, ...cat]);
    onNewCategory(inputValue.trim());
    setInputValue('');
  }

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Buscar gifs"
        value={inputValue}
        onChange = {onInputChange} //(event) => onInputChange(event)
        />
    </form>
  )
}
