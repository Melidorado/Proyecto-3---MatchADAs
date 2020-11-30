
//MODALES ///////////////////////////////////////////////
const overlay = document.querySelector(".overlay")

const modalBienvenida = document.getElementById("modal-bienvenida")
const botonAJugar = document.getElementById("boton-jugar")

const modalNuevoJuego = document.getElementById("modal-nuevo-juego")
const botonFacil = document.getElementById("boton-facil")
const botonNormal = document.getElementById("boton-normal")
const botonDificil = document.getElementById("boton-dificil")


botonAJugar.onclick = () => {
    modalBienvenida.classList.add("ocultar")
    modalNuevoJuego.classList.remove("ocultar")
}

botonFacil.onclick = () => {
    overlay.classList.add("ocultar")
    modalNuevoJuego.classList.add("ocultar")
    generarGrilla(9)
    agregarGrillaAHTML(9)
}

botonNormal.onclick = () => {
    overlay.classList.add("ocultar")
    modalNuevoJuego.classList.add("ocultar")
    generarGrilla(8)
    agregarGrillaAHTML(8)
}

botonDificil.onclick = () => {
    overlay.classList.add("ocultar")
    modalNuevoJuego.classList.add("ocultar")
    generarGrilla(7)
    agregarGrillaAHTML(7)
}


//GRILLA ///////////////////////////////////////////////

 
const grillaHTML = document.querySelector(".grilla")
/* const botonNuevoJuego = document.querySelector("#nuevo-juego") */
const botonReiniciarJuego = document.querySelector("#boton-reiniciar-juego")

const frutas = ['🍉', '🥥', '🍋', '🍒', '🍑', '🥝'];

let grilla = [];

const obtenerFrutaAlAzar = frutas => {
  return frutas[Math.floor(Math.random() * frutas.length)];
};

const generarGrilla = (dificultad) => {
    grilla = []
    for (let i = 0; i < dificultad; i++) {
      grilla[i] = []
      for (let j = 0; j < dificultad; j++) {
        grilla[i][j] = obtenerFrutaAlAzar(frutas)
      }
    }
    return grilla
}
  
const generarCuadrado = (x, y, array, dificultad) => {
    const tamanio = 474 / dificultad
  
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

  
const agregarGrillaAHTML = (dificultad) => {
    grillaHTML.style.width = `474px`
    grillaHTML.style.height = `474px`
    const listaDeFrutas = grilla;
    for (let i = 0; i < listaDeFrutas.length; i++) {
      for (let j = 0; j < listaDeFrutas[i].length; j++) {
        grillaHTML.appendChild(generarCuadrado(i, j, listaDeFrutas, dificultad))
      }
    }
}
  
