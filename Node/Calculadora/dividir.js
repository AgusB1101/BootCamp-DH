let dividir = (numero1, numero2) =>
  numero1 && numero2
    ? numero1 / numero2
    : console.error("El numero no puede ser cero");

export default dividir;
