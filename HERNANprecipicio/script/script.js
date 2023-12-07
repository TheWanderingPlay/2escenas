// cuando entra a el documento entra a la escena0
document.addEventListener("DOMContentLoaded", function() {
  boton();
});

// -------------------------------------------------------------
// Captura en variables o var
var personaje = document.querySelector('.personaje');
var css = document.querySelector('.css');
var CaidaIzquierda = document.getElementById('CaidaI')

// --------------------------------------escenas---------------------------------------------
  function escena0() {
  css.setAttribute("href", "./estilos/styles.css");
  personaje.setAttribute('src','./multimedia/hombre.png')
  if(personaje){
    personaje.classList.remove('personaje_A')
  }
  personaje.addEventListener('click', cayendo)
  }
    // lo anterior ejecuta esto v
    function cayendo() {
      personaje.classList.add('personaje_A');
      // CaidaIzquierda.addEventListener("mouseover", RotarIzquierda);
    }
    // function RotarIzquierda(){
    //   CaidaIzquierda.style.animation = "aidaI 10s"
    // }

  function escena1() {
  css.setAttribute("href", "./estilos/otherstyle.css");
  personaje.setAttribute('src','./multimedia/Aquira.png');
  if(personaje){
  personaje.classList.remove('personaje_A')
  }
  personaje.removeEventListener("click", cayendo)
  }
    // lo anterior ejecuta esto v

// --------------->>>>>> Captura del elemento DOM + detonador y nombre de la función ______BOTON DERECHO____
document.getElementById('derecha').addEventListener('click', boton);

  // Contador
  let funcionActual = 0;

    // Función dinámica
    function boton() {
      const funcionSeleccionada = window["escena" + funcionActual];
            
      // Calcular la siguiente función circularmente (0, 1, 0, 1, ...)
      funcionActual = (funcionActual + 1) % 2;

      // convertir la el nombre en nombre de funcion
      if (typeof funcionSeleccionada === 'function') {
        funcionSeleccionada();
      }
    }

// <<<<<<<<<<------------------ Captura del elemento DOM + detonador y nombre de la función ______BOTON IZQUIERDO____
document.getElementById('izquierda').addEventListener('click', boton1);

  // Contador

    // Función dinámica
    function boton1() {
      const funcionSeleccionada1 = window["escena" + funcionActual];
      
      // Verificar que la función seleccionada sea una función antes de ejecutarla
      if (typeof funcionSeleccionada1 === 'function') {
        funcionSeleccionada1();
      }
      
      // Calcular la siguiente función circularmente (0, 1, 0, 1, ...)
      funcionActual = (funcionActual - 1 + 2) % 2 ;
    }


// okey ANDRES lo que voy a hacer ess que las funciones escena1
// y escena2 cambien el documento css (cambiando entre el
// StyleSheet.css y el otherstyle.css) para eso creo solo utilizar
// document.querySelector y algun valor o propiedad que cambie los atributos


