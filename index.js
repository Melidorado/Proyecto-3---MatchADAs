// TEMPORIZADOR ///////////////////////////////////////////////

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

    if (segundosTotales == 00) {
      mostrarOverlay()
      mostrarModalFinDelJuego()
    }
    
  };
  timer();
};



//MODALES ///////////////////////////////////////////////
const overlay = document.querySelector(".overlay");

const modalBienvenida = document.getElementById("modal-bienvenida");
const botonAJugar = document.getElementById("boton-jugar");

const modalNuevoJuego = document.getElementById("modal-nuevo-juego");
const botonFacil = document.getElementById("boton-facil");
const botonNormal = document.getElementById("boton-normal");
const botonDificil = document.getElementById("boton-dificil");

const modalFinDelJuego = document.getElementById("modal-fin-juego")
const botonNuevoJuego = document.getElementById("boton-nuevo-juego")
const botonReiniciarJuegoFinalizado = document.getElementById("boton-reiniciar-juego-terminado")

const botonInfo = document.getElementById("boton-ayuda")
const modalInfo = document.getElementById("modal-info")
const botonSeguirJugando = document.getElementById("boton-jugar-info")
const botonReiniciarJuego = document.getElementById("boton-reiniciar-juego")

const modalReiniciarJuego = document.getElementById("modal-reiniciar")
const botonCancelarReinicioJuego = document.getElementById("boton-cancelar")
const botonNuevoJuegoReiniciado = document.getElementById("boton-nuevo-juego-reiniciado")

const mostrarModalInformacionDeJuego = () => {
  modalInfo.classList.remove("ocultar")
}

const ocultarModalInformacionDeJuego = () => {
  modalInfo.classList.add("ocultar")
}

const ocultarOverlay = () => {
  overlay.classList.add("ocultar");
}

const mostrarOverlay = () => {
  overlay.classList.remove("ocultar")
}

const ocultarModalNuevoJuego = () => {
  modalNuevoJuego.classList.add("ocultar");
}

const mostrarModalNuevoJuego = () => {
  modalNuevoJuego.classList.remove("ocultar")
}

const ocultarModalFinDelJuego = () => {
  modalFinDelJuego.classList.add("ocultar")
}

const mostrarModalFinDelJuego = () => {
  modalFinDelJuego.classList.remove("ocultar") 
}

const ocultarModalBienvenida = () => {
  modalBienvenida.classList.add("ocultar");
}

const mostrarModalBienvenida = () => {
  modalBienvenida.classList.remove("ocultar");
}

const ocultarModalReiniciarJuego = () => {
  modalReiniciarJuego.classList.add("ocultar")
}

const mostrarModalReiniciarJuego = () => {
  modalReiniciarJuego.classList.remove("ocultar")
}

let dificultad = ''

botonNuevoJuego.onclick = () => {
  ocultarModalFinDelJuego()
  mostrarModalNuevoJuego()
}

botonReiniciarJuegoFinalizado.onclick = () => {
  ocultarModalFinDelJuego()
  ocultarOverlay()
  reiniciarJuego(dificultad)
}

botonAJugar.onclick = () => {
  ocultarModalBienvenida()
  mostrarModalNuevoJuego()
};

botonFacil.onclick = () => {
  dificultad = 9 
  ocultarOverlay()
  ocultarModalNuevoJuego()
  chequearSiSeOcultaModalReiniciar()
  limpiarGrillas()
  generarGrilla(dificultad);
  agregarGrillaAHTML(dificultad);
  actualizarReloj()
  while (chequearSiHayMatchesHorizontales()) {
    encontrarMatchHorizontal()
    console.log(grilla)
  }
  while (chequearSiHayMatchesVerticales()) {
    encontrarMatchVertical()
    console.log(grilla)
  }

  encontrarMatchHorizontal()
  encontrarMatchVertical()
  seleccionarItem()
};

botonNormal.onclick = () => {
  dificultad = 8
  ocultarOverlay()
  ocultarModalNuevoJuego()
  chequearSiSeOcultaModalReiniciar()
  limpiarGrillas()
  generarGrilla(dificultad);
  agregarGrillaAHTML(dificultad);
  actualizarReloj()
  while (chequearSiHayMatchesHorizontales()) {
    encontrarMatchHorizontal()
    console.log(grilla)
  }
  while (chequearSiHayMatchesVerticales()) {
    encontrarMatchVertical()
    console.log(grilla)
  }

  encontrarMatchHorizontal()
  encontrarMatchVertical()
  seleccionarItem()
};

botonDificil.onclick = () => {
  dificultad = 7
  ocultarOverlay()
  ocultarModalNuevoJuego()
  chequearSiSeOcultaModalReiniciar()
  limpiarGrillas()
  generarGrilla(dificultad);
  agregarGrillaAHTML(dificultad);
  actualizarReloj()
  while (chequearSiHayMatchesHorizontales()) {
    encontrarMatchHorizontal()
    console.log(grilla)
  }
  while (chequearSiHayMatchesVerticales()) {
    encontrarMatchVertical()
    console.log(grilla)
  }
  
  encontrarMatchHorizontal()
  encontrarMatchVertical()
  seleccionarItem()
};

botonInfo.onclick = () => {
  mostrarOverlay()
  mostrarModalInformacionDeJuego()
}

botonSeguirJugando.onclick = () => {
  ocultarOverlay()
  ocultarModalInformacionDeJuego()
}

botonReiniciarJuego.onclick = () => {
  mostrarOverlay()
  mostrarModalReiniciarJuego()
  seleccionarItem()
}

botonCancelarReinicioJuego.onclick = () => {
  ocultarOverlay()
  ocultarModalReiniciarJuego()
}

botonNuevoJuegoReiniciado.onclick = () => {
  ocultarOverlay()
  reiniciarJuego(dificultad)
}

const chequearSiSeOcultaModalReiniciar = () => {
  if (modalReiniciarJuego.classList.contains("ocultar")) {

  }
  else {
    ocultarModalReiniciarJuego()
  }
}

 
//GRILLA ///////////////////////////////////////////////

const grillaHTML = document.querySelector(".grilla");

const frutas = ["🍉", "🥥", "🍋", "🍒", "🍑", "🥝"];

let grilla = [];

const obtenerFrutaAlAzar = (frutas) => {
  return frutas[Math.floor(Math.random() * frutas.length)];
};

const generarGrilla = (dificultad) => {
  grilla = [];
  for (let i = 0; i < dificultad; i++) {
    grilla[i] = [];
    for (let j = 0; j < dificultad; j++) {
      grilla[i][j] = obtenerFrutaAlAzar(frutas);
    }
  }
  return grilla;
};

let tamanio = ""

const generarCuadrado = (x, y, array, dificultad) => {
  tamanio = 474 / dificultad;

  const cuadrado = document.createElement("div");
  cuadrado.dataset.x = x;
  cuadrado.dataset.y = y;
  cuadrado.classList.add("emoji")
  cuadrado.innerHTML = `<div style="font-size: ${
    tamanio - 10
  }px;"> ${array[x][y]} </div>`;
  cuadrado.style.top = `${x * tamanio}px`;
  cuadrado.style.left = `${y * tamanio}px`;
  cuadrado.style.width = `${tamanio}px`;
  cuadrado.style.height = `${tamanio}px`;
  return cuadrado;
};

const agregarGrillaAHTML = (dificultad) => {
  grillaHTML.style.width = `474px`;
  grillaHTML.style.height = `474px`;
  const listaDeFrutas = grilla;
  for (let i = 0; i < listaDeFrutas.length; i++) {
    for (let j = 0; j < listaDeFrutas[i].length; j++) {
      grillaHTML.appendChild(generarCuadrado(i, j, listaDeFrutas, dificultad));
    }
  }
};

const limpiarGrillas = () => {
  grilla = []
  grillaHTML.innerHTML = ''
}

const reiniciarJuego = (dificultad) => {
  limpiarGrillas()
  chequearSiSeOcultaModalReiniciar()
  generarGrilla(dificultad);
  agregarGrillaAHTML(dificultad);
  actualizarReloj()
  encontrarMatchHorizontal()
  encontrarMatchVertical()

}


/// ENCONTRAR MATCHES //////////////////////////////////////////////////////////

const chequearSiHayMatchesHorizontales = () => {
  for (let i = 0; i < grilla.length; i++) {
    for (let j = 0; j < grilla[i].length; j++) {
       if (grilla[i][j] === grilla[i][j + 1] && grilla[i][j + 1] === grilla[i][j + 2]) {
       return true
      }        
    } 
  }
  return false
}

const chequearSiHayMatchesVerticales = () => {
  for (let i = 0; i < grilla.length; i++) {
    for (let j = 0; j < grilla[i].length; j++) {
       if (grilla[i + 1] && grilla[i + 2] && grilla[i][j] === grilla[i + 1][j] && grilla[i + 1][j] === grilla[i + 2][j]) {
        return true
      }         
    } 
  }
  return false
}

const encontrarMatchHorizontal = () => {
  let matchesHorizontales = []
  for (let i = 0; i < grilla.length; i++) {
    for (let j = 0; j < grilla[i].length; j++) {
       if (grilla[i][j] === grilla[i][j + 1] && grilla[i][j + 1] === grilla[i][j + 2]) {
        matchesHorizontales.push([i, j]);
        matchesHorizontales.push([i, j + 1]);
        matchesHorizontales.push([i, j + 2]);
      }        
    } 
  }
  
  for (let i = 0; i < matchesHorizontales.length; i++) {
    eliminarMatchesHTML(obtenerCuadrado(matchesHorizontales[i]))
  }
  eliminarMatchesJS(matchesHorizontales)
  insertarMatchesEliminadosHorizontalesJS()
  agregarEmojiNuevoHorizontalAJS()  
}

const obtenerCuadrado = (arr) => {
  return document.querySelector(
    `div[data-x='${arr[0]}'][data-y='${arr[1]}']`,
  );
};


const encontrarMatchVertical = () => {
  let matchesVerticales = []
  for (let i = 0; i < grilla.length; i++) {
    for (let j = 0; j < grilla[i].length; j++) {
       if (grilla[i + 1] && grilla[i + 2] && grilla[i][j] === grilla[i + 1][j] && grilla[i + 1][j] === grilla[i + 2][j]) {
        matchesVerticales.push([i, j]);
        matchesVerticales.push([i + 1, j]);
        matchesVerticales.push([i + 2, j]);
      }         
    } 
  }

  for (let i = 0; i < matchesVerticales.length; i++) {
    eliminarMatchesHTML(obtenerCuadrado(matchesVerticales[i]))
  }
  eliminarMatchesJS(matchesVerticales)
  insertarMatchesEliminadosVerticalesJS()
  agregarEmojiNuevoVerticalAJS()
}

const eliminarMatchesHTML = (array) => {
  for (let child of array.children) {
    array.removeChild(child)
  }
}

const eliminarMatchesJS = (array) => {
  for (let i = 0; i < array.length; i++) {
    array[i] = null
  }
}

const insertarMatchesEliminadosHorizontalesJS = () => {
  for (let i = 0; i < grilla.length; i++) {
    for (let j = 0; j < grilla[i].length; j++) {
       if (grilla[i][j] === grilla[i][j + 1] && grilla[i][j + 1] === grilla[i][j + 2]) {
        grilla[i][j] = null
        grilla[i][j + 1] = null
        grilla[i][j + 2] = null

      }
    }
  }
}

const insertarMatchesEliminadosVerticalesJS = () => {
  for (let i = 0; i < grilla.length; i++) {
    for (let j = 0; j < grilla[i].length; j++) {
       if (grilla[i + 1] && grilla[i + 2] && grilla[i][j] === grilla[i + 1][j] && grilla[i + 1][j] === grilla[i + 2][j]) {
        grilla[i][j] = null
        grilla[i + 1][j] = null
        grilla[i + 2][j] = null
      }         
    } 
  }
}


const agregarEmojiNuevoHorizontalAJS = () => {
  for (let i = 0; i < grilla.length; i++) {
    for (let j = 0; j < grilla[i].length; j++) {
       if (grilla[i][j] === grilla[i][j + 1] && grilla[i][j + 1] === grilla[i][j + 2]) {
        grilla[i][j] = obtenerFrutaAlAzar(frutas)
        grilla[i][j + 1] = obtenerFrutaAlAzar(frutas)
        grilla[i][j + 2] = obtenerFrutaAlAzar(frutas)
        agregarEmojiNuevoAHTML(grilla, [i], [j])
        agregarEmojiNuevoAHTML(grilla, [i], [j+1])
        agregarEmojiNuevoAHTML(grilla, [i], [j+2])
        

      }
    }
  }
}

const agregarEmojiNuevoVerticalAJS = () => {
  for (let i = 0; i < grilla.length; i++) {
    for (let j = 0; j < grilla[i].length; j++) {
       if (grilla[i + 1] && grilla[i + 2] && grilla[i][j] === grilla[i + 1][j] && grilla[i + 1][j] === grilla[i + 2][j]) {
        grilla[i][j] = obtenerFrutaAlAzar(frutas)
        grilla[i + 1][j] = obtenerFrutaAlAzar(frutas)
        grilla[i + 2][j] = obtenerFrutaAlAzar(frutas)
        agregarEmojiNuevoAHTML(grilla, [i], [j])
        agregarEmojiNuevoAHTML(grilla, [i + 1], [j])
        agregarEmojiNuevoAHTML(grilla, [i + 2], [j])
      }         
    } 
  }
}

const agregarEmojiNuevoAHTML = (array, i, j) => {
  
  const espacioEnHTML = document.querySelector(`div[data-x='${[i]}'][data-y='${[j]}']`);
  espacioEnHTML.innerHTML = `<div style="font-size: ${tamanio - 10}px;"> ${array[i][j]} </div>`;


}

/// SELECCIONAR ITEMS //////////////////////////////////////////////////////////

const seleccionarItem = () => {
  const emojis = document.querySelectorAll(".emoji")
  
  for (let primerEmoji of emojis) {
    primerEmoji.onclick = () => {
      console.log("entraste al for del primer emoji seleccionado")

      for (let segundoEmoji of emojis) {
        segundoEmoji.onclick = () => {
          console.log("entraste al for del segundo emoji seleccionado")
          if (sonAdyacentes(primerEmoji, segundoEmoji)) {
            //chequear si los emojis seleccionados son adyacentes
            console.log("chequeando si son adyacentes")
            console.log(sonAdyacentes(primerEmoji, segundoEmoji))
            //si son adyacentes, cambiar de posicion
            intercambiarEmojis(primerEmoji, segundoEmoji)
            console.log("se deberian intercambiar emojis")
            //chequear si hay match
            if (hayMatch()) {
              //lo que armo meli va aca! (eliminar emojis)
            }
            else {
              //volver emojis a donde estaban
              console.log("los cuadrados deberian volver a donde estaban")
              setTimeout(() => intercambiarEmojis(primerEmoji, segundoEmoji), 550)
            }
          }
          else {
            //si no son adyacentes quitar clase ".seleccionado"
            primerEmoji.classList.remove("seleccionado")
            segundoEmoji.classList.remove("seleccionado")
          }
          segundoEmoji.classList.add("seleccionado")
          console.log("el segundo emoji deberia seleccionarse")
        }
      } 
      primerEmoji.classList.add("seleccionado")
    }
  }
}

/// SON ADYACENTES //////////////////////////////////////////////////////////

const sonAdyacentes = (emoji1, emoji2) => {

  if ((Number(emoji1.dataset.x) === Number(emoji2.dataset.x) && Number(emoji1.dataset.y) === Number(emoji2.dataset.y + 1))
      || (Number(emoji1.dataset.x) === Number(emoji2.dataset.x) && Number(emoji1.dataset.y) === Number(emoji2.dataset.y - 1))
      || (Number(emoji1.dataset.y) === Number(emoji2.dataset.y) && Number(emoji1.dataset.x) === Number(emoji2.dataset.x + 1))
      || (Number(emoji1.dataset.y) === Number(emoji2.dataset.y) && Number(emoji1.dataset.x) === Number(emoji2.dataset.x - 1))) {
      return true
  }
  else {
      return false
  }
}

/// INTERCAMBIAR EMOJIS //////////////////////////////////////////////////////////

const intercambiarEmojis = (emoji1, emoji2) => {

  const datax1 = Number(emoji1.dataset.x)
  const datay1 = Number(emoji1.dataset.y)
  const datax2 = Number(emoji2.dataset.x)
  const datay2 = Number(emoji2.dataset.y)

  //MODIFICAR GRILLA EN JS
  let modificoJS = grilla[datax1][datay1]
    grilla[datax1][datay1] = grilla[datax2][datay2]
    grilla[datax2][datay2] = modificoJS

  //MODIFICAR GRILLA EN HTML
  if (datax1 === datax2 && (datay1 === datay2 + 1 || datay1 === datay2 - 1)) {
    
    emoji1.style.left = `${datay2 * tamanio}px`
    emoji2.style.left = `${datay1 * tamanio}px`
    emoji1.dataset.y = datay2
    emoji2.dataset.y = datay1
  }
  else if (datay1 === datay2 && (datax1 === datax2 + 1 || datax1 === datax2 - 1)) {
    emoji1.dataset.x = datax2;
    emoji2.dataset.x = datax1;
    emoji1.style.top = `${datax2 * tamanio}px`;
    emoji2.style.top = `${datax1 * tamanio}px`;
  }
}


/// HAY MATCHES //////////////////////////////////////////////////////////

// const hayMatch = () => {
//   if (encontrarMatchHorizontal() || encontrarMatchVertical) {
//     console.log("hay match")
//     return true
//   }
//   else {
//     console.log("no hay match")
//     return false
//   }
// }