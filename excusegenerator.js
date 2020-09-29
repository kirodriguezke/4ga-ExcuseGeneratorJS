function misExcusas() {
let quien = ['El perro','Mi yaya','Su tortuga','Mi pájaro'];
let quien_index = Math.floor(Math.random() * 4);
let accion = ['se comió','se hizo pipí','reventó','rompió'];
let accion_index = Math.floor(Math.random() * 4);
let que = ['mis tareas', 'las llaves', 'el coche'];
let que_index = Math.floor(Math.random() * 3);
let cuando = ['antes de la clase','justo a tiempo','cuando acabé','durante mi almuerzo','mientras rezaba'];
let cuando_index = Math.floor(Math.random() * 5);
let excuse =  quien[quien_index] + " " + accion[accion_index] + " " + que[que_index] + " " + cuando[cuando_index] + ".";
document.getElementById("demo").innerHTML = excuse;
}
