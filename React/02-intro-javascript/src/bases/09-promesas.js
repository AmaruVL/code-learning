import {getHeroeById} from './bases/08-imp-exp'

/*
const promesa = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        const p2 = getHeroeById(2);
        resolve(p2);
        //reject('No se pudo encontrar el héroe');
    }, 2000);

});


promesa.then((heroe)=>{
    console.log('Heroe', heroe);
})
.catch(err => console.warn(err)); //Catch si sale reject
*/

// Usar una promesa pasando un atributo
const getHeroeByIdAsync = (id) => {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            const hero = getHeroeById(id);
            if(hero){
                resolve(hero);
            }else{
                reject('No se pudo encontrar el héroe');
            }
        }, 2000)
    });
}

getHeroeByIdAsync(10)
    .then(heroe=> console.log('Heroe', heroe))
    .catch(err => console.warn(err)); 

// Es posible omitir la variable a utilizar si es que no se hara ningun cambio
getHeroeByIdAsync(3)
    .then(console.log)
    .catch(console.warn)