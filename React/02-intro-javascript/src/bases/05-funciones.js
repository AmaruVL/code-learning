const saludar = function(nombre){
    return `Hola, ${nombre}`;
}

const saludar2 = (nombre) => {
    return `Hola, ${nombre}`;
}

const saludar3 = (nombre) => `Hola, ${nombre}`;
const saludar4 = () => `Hola mundo`;


console.log(saludar2('vegeta'));
console.log(saludar3('Goku'));
console.log(saludar4());

//Colocar parentecis para especifiicar un objeto
const getUser = () => ({
    uid: 'ABC123',
    username: 'User124'
});

//Tarea
//1. Transformar a funcion de flecha
//2. Retornar objeto implicito
//3. Pruebas

/*
function getUsuarioActivo(nombre){
    return{
        uid:'ABC567',
        username: nombre
    }
}

const usuarioActivo = getUsuarioActivo('Fernando');
console.log(usuarioActivo);
*/

const getUsuarioActivo = (nombre) => ({
    uid:'ABC567',
    username: nombre
});

const usuarioActivo = getUsuarioActivo('Fernando');
console.log(usuarioActivo);