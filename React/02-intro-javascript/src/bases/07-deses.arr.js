const personajes = ['Goku','Vegeta','Trunks'];
const [p1] = personajes;
const [,p2] = personajes;
const [,,p3] = personajes;
console.log(p3)

const retornarArreglo = () =>{
    return ['ABC',123];
}

const [letras, numeros] = retornarArreglo();
console.log(letras,numeros);

//Tarea
//1. el primer valor del arr se llmara nombre
//2. se llamara setNombre
const getNombre = (valor) => {
    return [valor, ()=>{console.log('Hola mundo')}];
}

const [nombre, setNombre]  = getNombre('Goku');
console.log(nombre);
setNombre();
