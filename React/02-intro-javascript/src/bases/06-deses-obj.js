// Desestructuracion
// Asignación desestructurante

const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman'
}

//extrae lo que esta dentro de llaves del objeto persona
//const {nombre} = persona;
//const {nombre:nombre2} = persona; //renombrando nombre a nombre2
//const {nombre,edad,clave} = persona; //extrayendo

const getObjeto = ({nombre,edad,clave, rango = 'Capitán'}) => {
    //console.log(nombre,edad, rango);
    return{
        nombreClave: clave,
        anios:edad,
        latlng:{
            lat: 14.2344,
            lng:-12.2352
        }
    }
}

const {nombreClave, anios, latlng:{lat,lng}} = getObjeto(persona);

console.log(nombreClave, anios);
console.log(lat,lng);
