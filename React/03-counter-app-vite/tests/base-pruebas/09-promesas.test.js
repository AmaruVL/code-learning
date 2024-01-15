import { getHeroeByIdAsync } from "../../src/base-pruebas/09-promesas";
import heroes from "../../src/data/heroes";

//NOTA:
//LA FORMA EN COMO ESTAN SIENDOS TESTEADOS ESTAS FUNCIONES ACTUALMENTE ESTAN
//OBSOLETAS D:
describe('Pruebas en 09-promesas', () => {
  test('getHeroeByIdAsync de retornar un heroe', () => {
    const id = 1;
    return expect(getHeroeByIdAsync(id)).resolves.toBe(heroes[0])
  });

  test('getHeroeByIdAsync de obtener un error si heroe no existe', (done) => {
    const id = 10;
    return expect(getHeroeByIdAsync(id)).rejects.toMatch('No se pudo encontrar el héroe');
  });
});