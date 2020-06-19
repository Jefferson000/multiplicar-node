const opts = {
    base:{
        demand: true,
        alias: 'b'
    },
    limite:{
        alias: 'l',
        default: 10
    }
}

const argv = require('yargs')
.command('listar','Muestra la tabla de multiplicar según los datos de entrada',{ opts })
.command('crear','Crea la tabla de multiplicar',{ opts })
.help()
.argv;

module.exports = {
    argv
}