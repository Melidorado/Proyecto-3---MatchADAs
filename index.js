const grillaHTML = document.querySelector(".grilla")
/* const botonNuevoJuego = document.querySelector("#nuevo-juego") */
const botonReiniciarJuego = document.querySelector("#boton-reiniciar-juego")

const frutas = ['🍉', '🥥', '🍋', '🍒', '🍑', '🥝'];

let grilla = [];

const obtenerFrutaAlAzar = frutas => {
  return frutas[Math.floor(Math.random() * frutas.length)];
};

const generarGrilla = () => {
    grilla = []
    for (let i = 0; i < 9; i++) {
      grilla[i] = []
      for (let j = 0; j < 9; j++) {
        grilla[i][j] = obtenerFrutaAlAzar(frutas)
      }
    }
    return grilla
  }
  
  const generarCuadrado = (x, y, array) => {
    const tamanio = 474 / 9
  
    const cuadrado = document.createElement('div')
    cuadrado.dataset.x = x
    cuadrado.dataset.y = y 
    cuadrado.innerHTML = `<div class="emoji" style="font-size: ${tamanio - 10}px;"> ${array[x][y]} </div>`
    cuadrado.style.top = `${x * tamanio}px`
    cuadrado.style.left = `${y * tamanio}px`
    cuadrado.style.width = `${tamanio}px`
    cuadrado.style.height = `${tamanio}px`
    return cuadrado
}

  
  const agregarGrillaAHTML = () => {
    const anchoDeGrilla = 50 * 5
    grillaHTML.style.width = `474px`
    grillaHTML.style.height = `474px`
    const listaDeFrutas = grilla;
    for (let i = 0; i < listaDeFrutas.length; i++) {
      for (let j = 0; j < listaDeFrutas[i].length; j++) {
        grillaHTML.appendChild(generarCuadrado(i, j, listaDeFrutas))
      }
    }
  }
  
  generarGrilla()
  agregarGrillaAHTML()