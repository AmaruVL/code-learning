const { act } = require("react-dom/test-utils");

const activo = true;

/*
let mensaje = '';

if (activo) {
    mensaje = 'Activo';
} else {
    mensaje = 'Inactivo';
}
*/
//Operador con if y else
const mensaje1 = (!activo)?'Activo': 'Inactivo'; 

// Forma para solo admitir if
const mensaje2 = activo && 'Activo';

console.log(mensaje1);
console.log(mensaje2);