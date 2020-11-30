const grilla = document.querySelector(".grilla");
/* const botonNuevoJuego = document.querySelector("#nuevo-juego") */
const botonReiniciarJuego = document.querySelector("#boton-reiniciar-juego");

let actualizarReloj = () => {
  let segundosTimer = 30;

  let timer = () => {
    let segundosTotales = segundosTimer;

    minutos = Math.floor(segundosTotales / 60);
    minutos = (minutos < 10 ? "0" : "") + minutos;

    segundosTotales %= 60;
    segundosTotales = (segundosTotales < 10 ? "0" : "") + segundosTotales;

    document.getElementById("temporizador").innerHTML =
      minutos + ":" + segundosTotales;

    segundosTimer--;

    if (segundosTimer > -1) {
      setTimeout(timer, 1000);
    }
  };
  timer();
};
actualizarReloj("fin");
