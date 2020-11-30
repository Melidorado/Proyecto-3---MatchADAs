const grilla = document.querySelector(".grilla");
/* const botonNuevoJuego = document.querySelector("#nuevo-juego") */
const botonReiniciarJuego = document.querySelector("#boton-reiniciar-juego");

const actualizarReloj = () => {
  let segundosIniciales = 30;

  const timer = () => {
    let segundosTotales = segundosIniciales;

    minutos = Math.floor(segundosTotales / 60);
    minutos = (minutos < 10 ? "0" : "") + minutos;

    segundosTotales %= 60;
    segundosTotales = (segundosTotales < 10 ? "0" : "") + segundosTotales;

    document.getElementById("temporizador").innerHTML =
      minutos + ":" + segundosTotales;

    segundosIniciales--;

    if (segundosIniciales > -1) {
      setTimeout(timer, 1000);
    }
  };
  timer();
};
actualizarReloj();
