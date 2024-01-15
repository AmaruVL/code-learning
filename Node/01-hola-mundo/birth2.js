function calculate_age(dob) { 
  var diff_ms = Date.now() - dob.getTime();
  var age_dt = new Date(diff_ms); 
  console.log(age_dt.getUTCFullYear())
  return Math.abs(age_dt.getUTCFullYear() - 1970);
}

const calcularEdad = (fechaNacimiento) => {
  const difMilisegundos = Date.now() - fechaNacimiento.getTime()
  const añoResultante = new Date(difMilisegundos);
  return Math.abs(añoResultante.getUTCFullYear() - 1970)
}
// console.log(calculate_age(new Date(2000, 11, 9)));
const valorNacimiento = '2000-03-22' // yyyy-mm-dd
console.log(calcularEdad(new Date(valorNacimiento)));
