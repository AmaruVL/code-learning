// para poner descripciones de las pruebas
describe('Pruebas en <DemoComponent/>', () => { 
  test('Esta prueba no debe de fallar', ()=>{
    //1. Iniciialización
    const message1 = 'Hola mundo';
  
    //2. Estimulo
    const message2 = message1.trim();
  
    //3. Observar el comportamiento esperado
    // Condición para que pase la prueba
    expect(message1).toBe(message2);
  })
 })


