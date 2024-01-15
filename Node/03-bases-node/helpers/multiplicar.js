const fs = require('fs')
const colors = require('colors')

const crearArchivo = async(base = 5, hasta = 10, listar = false) => {
  try {

    let salida = ''
    salida += ('=====================\n'.green)
    salida += (`    Tabla del ${base} \n`.yellow)
    salida += ('=====================\n'.green)
    
    for (let i = 1; i <= hasta; i++){
      salida += `${base} x ${i} = ${base*i}\n`.blue
    }
    const nombreArchivo = `tabla-${base}.txt`
    fs.writeFileSync(nombreArchivo, salida)

    if(listar) {
      console.log(salida)  
    }
    return nombreArchivo
    
  } catch (error) {
    throw error
  }
}

module.exports = {
  crearArchivo
}