// Inicializar AOS
AOS.init();

// Configuraciones predeterminadas están listadas a continuación
AOS.init({
  offset: 120, // desplazamiento (en píxeles) desde el punto de activación original
  delay: 0, // valores de 0 a 3000, con paso de 50 ms
  duration: 700, // valores de 0 a 3000, con paso de 50 ms
  easing: 'ease', // tipo de interpolación predeterminado para las animaciones de AOS
  once: false, // si la animación debe ocurrir solo una vez - al desplazarse hacia abajo
  mirror: false, // si los elementos deben animarse al salir de la vista durante el desplazamiento
  anchorPlacement: 'top-bottom', // define la posición del elemento con respecto a la ventana que debe activar la animación
});
