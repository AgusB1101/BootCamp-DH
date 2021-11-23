let form = document.querySelector("#formulario");
let title = document.querySelector("#title");
let rating = document.querySelector("#rating");
let awards = document.querySelector("#awards");
let release_date = document.querySelector("#release_date");
let length = document.querySelector("#length");
let genre_id = document.querySelector("#genre_id");
let listaErrores = document.querySelector(".errores");

let errors = [];

form.addEventListener("submit", (e) => {
  listaErrores.innerHTML = "";
  if (title.value === "") {
    title.classList.add("is-invalid");
    errors.push("El campo de Titulo es obligatorio");
  } else title.classList.add("is-valid");

  if (rating.value === "" || rating.value > 10 || rating.value < 0) {
    rating.classList.add("is-invalid");
    if (rating.value === "")
      errors.push("El campo de Calificación es obligatorio");
    else {
      errors.push(
        "El campo de Calificación tiene que estar comprendido entre 0 y 10"
      );
    }
  } else rating.classList.add("is-valid");

  if (awards.value === "" || awards.value > 10 || awards.value < 0) {
    awards.classList.add("is-invalid");
    if (awards.value === "") errors.push("El campo de Premios es obligatorio");
    else {
      errors.push(
        "El campo de Premios tiene que estar comprendido entre 0 y 10"
      );
    }
  } else awards.classList.add("is-valid");

  if (release_date.value === "") {
    release_date.classList.add("is-invalid");
    errors.push("El campo de Fecha de Creación es obligatorio");
  } else release_date.classList.add("is-valid");

  if (length.value === "" || length.value > 360 || length.value < 60) {
    length.classList.add("is-invalid");
    if (length.value === "") errors.push("El campo de Duración es obligatorio");
    else {
      errors.push(
        "El campo de Duración tiene que estar comprendido entre 60 y 360"
      );
    }
  } else length.classList.add("is-valid");

  if (genre_id.value === "") {
    genre_id.classList.add("is-invalid");
    errors.push("El campo de Género es obligatorio");
  } else genre_id.classList.add("is-valid");

  if (errors.length) {
    e.preventDefault();
    errors.forEach((error) => {
      console.log(error);
      listaErrores.innerHTML += `<li>${error}</li>`;
    });
    errors = [];
  } else {
    listaErrores.innerHTML = "";
    alert("La película se creó satisfactoriamente");
  }
});

title.addEventListener("keyup", (e) => {
  if (e.target.value === "") {
    title.classList.remove("is-valid");
    title.classList.add("is-invalid");
  } else {
    title.classList.remove("is-invalid");
    title.classList.add("is-valid");
  }
});

rating.addEventListener("change", (e) => {
  if (e.target.value === "" || e.target.value > 10 || e.target.value < 0) {
    rating.classList.remove("is-valid");
    rating.classList.add("is-invalid");
  } else {
    rating.classList.remove("is-invalid");
    rating.classList.add("is-valid");
  }
});

awards.addEventListener("change", (e) => {
  if (e.target.value === "" || e.target.value > 10 || e.target.value < 0) {
    awards.classList.remove("is-valid");
    awards.classList.add("is-invalid");
  } else {
    awards.classList.remove("is-invalid");
    awards.classList.add("is-valid");
  }
});

release_date.addEventListener("change", (e) => {
  if (e.target.value === "") {
    release_date.classList.remove("is-valid");
    release_date.classList.add("is-invalid");
  } else {
    release_date.classList.remove("is-invalid");
    release_date.classList.add("is-valid");
  }
});

length.addEventListener("change", (e) => {
  if (e.target.value === "" || e.target.value > 360 || e.target.value < 60) {
    length.classList.remove("is-valid");
    length.classList.add("is-invalid");
  } else {
    length.classList.remove("is-invalid");
    length.classList.add("is-valid");
  }
});

genre_id.addEventListener("change", (e) => {
  if (e.target.value === "") {
    genre_id.classList.remove("is-valid");
    genre_id.classList.add("is-invalid");
  } else {
    genre_id.classList.remove("is-invalid");
    genre_id.classList.add("is-valid");
  }
});
