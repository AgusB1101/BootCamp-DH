import { leerJSON, escribirJSON } from "./funcionesDeTareas.js";

console.clear();

let listar = (tareas) => {
  tareas.forEach((tarea, indice) => console.log(`${++indice}.`, tarea));
};

let listarEstado = (tareas, estado) => {
  if (["terminada", "progreso", "pendiente"].includes(estado)) {
    let tareasFiltradas = tareas.filter((tarea) => tarea.estado === estado);
    listar(tareasFiltradas);
  } else console.log("Atención - tiene que pasar un estado válido.");
};

let crear = (tareas, tituloNueva) => {
  let nuevaTarea = { titulo: tituloNueva, estado: "pendiente" };

  tareas.push(nuevaTarea);
  escribirJSON(tareas);
  console.log(`Creada satisfactoriamente la tarea: ${tituloNueva}`);
};

switch (process.argv[2]) {
  case "listar":
    listar(leerJSON());
    break;
  case "filtrar":
    process.argv[3]
      ? listarEstado(leerJSON(), process.argv[3])
      : console.log("Atención - Tienes que pasar un estado");
    break;
  case "crear":
    process.argv[3]
      ? crear(leerJSON(), process.argv[3])
      : console.log("Atención - Tienes que pasar un título");
    break;
  case undefined:
    console.log("Atención - Tienes que pasar una acción");
    break;

  default:
    console.log("No entiendo qué quieres hacer.");
    break;
}
