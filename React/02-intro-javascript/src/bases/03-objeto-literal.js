const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion:{
        ciudad:'New York',
        zip: 55235113,
        lat: 15.24423,
        lng: 34.23553,
    }
};

//console.log({persona});
//console.table(persona);


const persona2 = {...persona}; //Realizando clon de persona

persona2.nombre = 'Peter'

console.log(persona);
console.log(persona2);

