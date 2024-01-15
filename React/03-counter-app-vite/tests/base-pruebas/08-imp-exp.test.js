import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";
import heroes from "../../src/data/heroes";

describe('Prueba en 08-imp-exp', () => {
  test('getHeroeByIdd debe retornar un héroe por ID', () => {
    const id = 1;
    const hero = getHeroeById(id);
    expect(hero).toEqual({ id: 1, name: 'Batman', owner: 'DC' })
  })

  test('getHeroeByIdd debe retornar undefined si no existe el id', () => {
    const id = 100;
    const hero = getHeroeById(id);
    expect(hero).toBeFalsy(); // verificar si es un valor nulo
  });

  //Tarea
  //Debe retornar un arreglo con los heroes de DC
  //Length ===3
  //toEqual al arreglo filtrado

  test('getHeroesByOwner debe retornar un arreglo con los heroes de DC', () => {
    const owner = 'DC';
    const array = getHeroesByOwner(owner);

    expect(array.length).toBe(3);
    expect(array).toEqual([
      { id: 1, name: 'Batman', owner: 'DC' },
      { id: 3, name: 'Superman', owner: 'DC' },
      { id: 4, name: 'Flash', owner: 'DC' }])

    expect(array).toEqual(heroes.filter( (heroe) => heroe.owner === owner ));
  });

  test('getHeroesByOwner debe retornar un arreglo con los heroes de DC', () => {
    const owner = 'Marvel';
    const array = getHeroesByOwner(owner);

    expect(array.length).toBe(2);      
    expect(array).toEqual(heroes.filter( (heroe) => heroe.owner === owner ));
  });

  

  //debe retornar un arreglo con los heroes de Marver
  //lenght === 2

});


