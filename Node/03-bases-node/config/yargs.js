const { describe } = require('yargs')

const argv = require('yargs')
  .option('b',{
    alias:'base',
    type:'number',
    demandOption: true,
    describe: 'Es la base de la tabla de multiplicar'
  })
  .option('l', {
    alias:'listar',
    type: 'boolean',
    default: false,
    describe: 'Muestra la tabla en cosola'
  })
  .option('h',{
    alias:'hasta',
    type: 'number',
    default: 10,
    describe: 'Establece el limite de la tabla'
  })
  .check((argv) => {
    if( isNaN(argv.base)){
      throw 'La base tiene que ser un número'
    }
    if( isNaN(argv.h)) {
      throw 'La variable "hasta" debe ser un número'
    }
    return true
  })

  .argv

module.exports = argv