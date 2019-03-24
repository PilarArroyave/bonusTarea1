let cursos = [
    {
        id: 1,
        nombre: 'Introducción a Node.js mediante el desarrollo de un proyecto ágil',
        duracion: '32 horas',
        valor: 0
    },
    {
        id: 2,
        nombre: 'Analítica de datos con TensorFlow',
        duracion: '100 horas',
        valor: 4666550
    },
    {
        id: 3,
        nombre: 'Diseño de Interfaces y UX',
        duracion: '48 horas',
        valor: 142900
    },
    {
        id: 4,
        nombre: 'Firebase para Web',
        duracion: '48 horas',
        valor: 142900
    }
];

let imprime_curso = (id) => setTimeout(()=> {        
    console.log('El curso con id ' + cursos[id].id + ' es '+ cursos[id].nombre + ' tiene una duración de ' + cursos[id].duracion + ' y un valor de ' + cursos[id].valor);
},2000*(id+1));

let imprimir_cursos = () => {
    for(let i = 0; i<cursos.length; i++){
        imprime_curso(i);
    }    
}

module.exports = {
    cursos,
    imprimir_cursos
};