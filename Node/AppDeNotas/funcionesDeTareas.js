import { readFileSync, writeFileSync } from "fs";

export let leerJSON = () => {
  let jsonData = readFileSync("./tareas.json", "utf-8");
  let data = JSON.parse(jsonData).data;
  return data;
};

export let escribirJSON = (listaTareas) => {
  let listado = JSON.stringify({ data: listaTareas });
  writeFileSync("./tareas.json", listado);
};
