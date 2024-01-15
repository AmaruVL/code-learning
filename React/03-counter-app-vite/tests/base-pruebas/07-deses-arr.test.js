import { retornaArreglo } from "../../src/base-pruebas/07-deses-arr"

describe('Pruebas en 07-deses-arr', () => {
  test('should de retornar un string y un número', () => {
    const [letters, numbers] = retornaArreglo();

    // Forma 1
    expect(typeof letters).toBe('string');
    expect(typeof numbers).toBe('number');

    //Forma 2
    expect(letters).toEqual(expect.any(String));
    expect(numbers).toEqual(expect.any(Number));
  })
})