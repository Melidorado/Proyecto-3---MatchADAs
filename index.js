
//GRILLA ///////////////////////////////////////////////
const grilla = document.querySelector(".grilla")
/* const botonNuevoJuego = document.querySelector("#nuevo-juego") */
const botonReiniciarJuego = document.querySelector("#boton-reiniciar-juego")
 
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
}

botonNormal.onclick = () => {
    overlay.classList.add("ocultar")
    modalNuevoJuego.classList.add("ocultar")
}

botonDificil.onclick = () => {
    overlay.classList.add("ocultar")
    modalNuevoJuego.classList.add("ocultar")
}
