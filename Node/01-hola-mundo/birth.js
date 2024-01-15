// Obtenemos la fecha actual
const fechaActual = new Date();

const valorNacimiento = '2000-03-22'

// Pedimos la fecha de nacimiento al usuario (en formato yyyy-mm-dd)
// const fechaNacimiento = new Date(prompt("Ingrese su fecha de nacimiento (yyyy-mm-dd):"));
const fechaNacimiento = new Date(valorNacimiento);

// Calculamos la diferencia entre las dos fechas
let edad = fechaActual.getFullYear() - fechaNacimiento.getFullYear();

// Si aún no ha pasado el cumpleaños este año, restamos 1 a la edad
if (fechaNacimiento.getMonth() > fechaActual.getMonth() ||
    (fechaNacimiento.getMonth() == fechaActual.getMonth() && fechaNacimiento.getDate() > fechaActual.getDate())) {
    edad--;
}

// Mostramos la edad en años
console.log(`Tienes ${edad} años`);
