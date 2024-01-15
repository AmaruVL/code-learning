import PropTypes from 'prop-types';

//Colocar fuera de la funcion si no quieres que se ande acutalizando
const newMessage = {
    message: 'Hola mundo',
    title: 'Amaru'
};

//const getResult = (a,b) => a+b

export const FirstApp = ({title, subTitle, name}) => {
  //console.log(props)
  return (
    <>
        {/*<h1>{getResult(6,3)}</h1>*/}
        {/*<code>{JSON.stringify(newMessage)}</code>*/}
        <h1 data-testid="test-title">{title}</h1>
        <p>{subTitle}</p>
        <p>{subTitle}</p>

        <p>{name}</p>
    </>

  )
}

// Definir valores de los props y si deben ser obligatorios entregarlos
FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string,
}

FirstApp.defaultProps = {
  title: 'No hay titulo',
  subTitle: 'No hay sub',
  name: 'Amaru Villasante'
}