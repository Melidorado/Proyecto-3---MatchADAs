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
const botonReiniciarJuego = document.getElementById("boton-reiniciar-juego")

const modalReiniciarJuego = document.getElementById("modal-reiniciar")
const botonCancelarReinicioJuego = document.getElementById("boton-cancelar")
const botonNuevoJuegoReiniciado = document.getElementById("boton-nuevo-juego-reiniciado")

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

botonNuevoJuego.onclick = () => {
  ocultarModalFinDelJuego()
  mostrarModalNuevoJuego()
}

botonReiniciarJuegoFinalizado.onclick = () => {
  ocultarModalFinDelJuego()
  ocultarOverlay()
}

botonAJugar.onclick = () => {
  ocultarModalBienvenida()
  mostrarModalNuevoJuego()
};

botonFacil.onclick = () => {
  ocultarOverlay()
  ocultarModalNuevoJuego()
  chequearSiSeOcultaModalReiniciar()
  generarGrilla(9);
  agregarGrillaAHTML(9);
  actualizarReloj()
  encontrarMatchHorizontal()
  encontrarMatchVertical()
  seleccionarItem()
};

botonNormal.onclick = () => {
  ocultarOverlay()
  ocultarModalNuevoJuego()
  chequearSiSeOcultaModalReiniciar()
  generarGrilla(8);
  agregarGrillaAHTML(8);
  actualizarReloj()
  encontrarMatchHorizontal()
  encontrarMatchVertical()
  seleccionarItem()
};

botonDificil.onclick = () => {
  ocultarOverlay()
  ocultarModalNuevoJuego()
  chequearSiSeOcultaModalReiniciar()
  generarGrilla(7);
  agregarGrillaAHTML(7);
  actualizarReloj()
  encontrarMatchHorizontal()
  encontrarMatchVertical()
  seleccionarItem()
};

botonInfo.onclick = () => {
  mostrarOverlay()
  mostrarModalBienvenida()
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
  mostrarModalNuevoJuego()
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

const generarCuadrado = (x, y, array, dificultad) => {
  const tamanio = 474 / dificultad;

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


/// ENCONTRAR MATCHES //////////////////////////////////////////////////////////


const encontrarMatchHorizontal = () => {

  for (let i = 0; i < grilla.length; i++) {
      
    for (let j = 0; j < grilla[i].length; j++) {
       
      if (grilla[i][j] === grilla[i][j + 1] && grilla[i][j + 1] === grilla[i][j + 2]) {
        const emoji = document.querySelector(`div[data-x='${i}'][data-y='${j}']`)
        const emoji1 = document.querySelector(`div[data-x='${i}'][data-y='${j + 1}']`)
        const emoji2 = document.querySelector(`div[data-x='${i}'][data-y='${j + 2}']`)
        emoji.style.backgroundColor = 'yellow'
        emoji1.style.backgroundColor = 'yellow'
        emoji2.style.backgroundColor = 'yellow'    
                    
      }
               
    }
      
  }
  
}


const encontrarMatchVertical = () => {
  for (let i = 0; i < grilla.length; i++) {
      
    for (let j = 0; j < grilla[i].length; j++) {
       
      if (grilla[i + 1] && grilla[i + 2] && grilla[i][j] === grilla[i + 1][j] && grilla[i + 1][j] === grilla[i + 2][j]) {
        const emoji = document.querySelector(`div[data-x='${i}'][data-y='${j}']`)
        const emoji1 = document.querySelector(`div[data-x='${i + 1}'][data-y='${j}']`)
        const emoji2 = document.querySelector(`div[data-x='${i + 2}'][data-y='${j}']`)
        emoji.style.backgroundColor = 'orange'
        emoji1.style.backgroundColor = 'orange'
        emoji2.style.backgroundColor = 'orange'    
                    
      }
               
    }
      
  }

}

/// SELECCIONAR ITEMS //////////////////////////////////////////////////////////
let emojiSeleccionado = null;

const seleccionarItem = () => {
  const emojis = document.querySelectorAll(".emoji")
  
  for (let emoji of emojis) {
    emoji.onclick = () => {
      if (emojiSeleccionado) {
        //guardar emoji seleccionado
        if (sonAdyacentes()) {
        //chequear si los emojis seleccionados son adyacentes
        //si son adyacentes, cambiar de posicion
        intercambiarEmojis(emoji, emojiSeleccionado)
        //chequear si hay match
          if (hayMatch) {
            //lo que armo meli va aca! (eliminar emojis)
          }
          else {
            //volver emojis a donde estaban
            let primerEmojiSeleccionado = emojiSeleccionado
            setTimeout(() => intercambiarEmojis(emoji, primerEmojiSeleccionado), 550)
          }
        }
        //si no son adyacentes quitar clase ".seleccionado"
        emojiSeleccionado.classList.remove("seleccionado")
        //anular emoji seleccionado
        emojiSeleccionado = null
      }
      else {
      emoji.classList.add("seleccionado")
      }
    }
  }
}


//DEFINIR sonAdyacentes
//DEFINIR intercambiarEmojis


