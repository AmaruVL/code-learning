import { useState } from "react";

export const useForm = (initialForm={}) => {

  const [formState, setFormState] = useState(initialForm);

  const onInputChange = ({target})=>{
    const {name, value} = target;
    setFormState({
      ...formState,
      [name]:value
    });
  }

  const onResetForm = () =>{
    setFormState(initialForm)
  }
  return {
    ...formState, //para poder extraer indivualmente el email, pass, etc
    formState,
    onInputChange,
    onResetForm
  }
}
