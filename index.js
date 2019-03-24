const opciones = {
    id: {
        demand: true
    },
    nombre: {
        demand: true
    },
    cedula: {
        demand: true
    }
}

const argv = require ('yargs')
            .command ('inscribir', 'Inscribir estudiante', opciones)
            .argv;
const {cursos, imprimir_cursos} = require('./cursos');
var express = require('express')
var app = express()
 
/* let mostrarTexto = (texto) => {    
    
} */

if (!argv.id){
    imprimir_cursos();
}
else {
    let curso = cursos.find( curso => curso.id == argv.id);
    texto = 'El estudiante ' + argv.nombre + ' identificado con cédula ' + argv.cedula + '\n' +
    'Se ha matriculado en ' + curso.nombre + ' el cual tiene una duración de ' + curso.duracion +
    ' y un costo de ' + curso.valor;     
}

app.get('/', function (req, res) {
    res.send(texto)
})

app.listen(3000)