const http = require('http')

http.createServer( (request, response) => {

  // response.writeHead(200, {'Content-type': 'application/json'}) // Status
  // response.setHeader('Content-Disposition', 'attachment; filename=lista.csv')
  // response.writeHead(200, {'Content-type': 'application/csv'}) // Status

  // const  persona = {
  //   id:1,
  //   nombre: 'Fernando'
  // }

  // response.write(JSON.stringify(persona)) 
  // response.write('id,nombre\n')
  // response.write('1, Fernando\n')
  // response.write('2, Maria\n')
  // response.write('3, Juan\n')
  // response.write('4, Javier\n')

  response.write('Hola mundo')
  response.end()
})
.listen(8080)

console.log('Escuchando el puerto', 8080)