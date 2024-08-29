var imgs = new Array(6);
imgs[0] = "../Promociones/img/ban1.jpg";
imgs[1] = "../Promociones/img/ban2.jpg";
imgs[2] = "../Promociones/img/ban3.jpg";
imgs[3] = "../Promociones/img/ban4.jpg";
imgs[4] = "../Promociones/img/ban5.jpg";
imgs[5] = "../Promociones/img/ban6.jpg";
imgs[6] = "../Promociones/img/ban7.jpg";

var c = 0;
setInterval(rotacion, 4000);
function rotacion() {
  c++;
  if (c >= imgs.length) {
    c = 0;
  }
  document.getElementById("banneri").src = imgs[c];
}

///////////////////////////////////////////////////////////////

document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".carta");

  // Función para rotar la tarjeta
  function rotarTarjeta(carta) {
    carta.classList.toggle("giro");
  }

  // Rotación automática de las tarjetas
  function rotarTarjetaAuto() {
    cards.forEach((carta) => {
      carta.classList.toggle("giro");
    });
  }

  // Ejecuta la rotación automática cada 9 segundos
  setInterval(rotarTarjetaAuto, 9000);

  // Al hacer clic a las imágenes rotar la tarjeta

  cards.forEach((card) => {
    const imgCarta = card.querySelector(".girar-imagen");
    if (imgCarta) {
      imgCarta.addEventListener("click", () => rotarTarjeta(card));
    }
  });

  // Al hacer clic a las imágenes rotar la tarjeta desde atras

  cards.forEach((card) => {
    const descJuego = card.querySelector(".carta-atras");
    if (descJuego) {
      descJuego.addEventListener("click", () => rotarTarjeta(card));
    }
  });
});

/////////////////////////////////////////////////////////////
