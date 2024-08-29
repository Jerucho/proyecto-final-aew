const bannerImagenes = [
  "../../images/Banner.png",

  "../../images/banner-2.jpg",

  "../../images/banner-3.jpeg",
];

document.addEventListener("DOMContentLoaded", () => {
  const banner = document.getElementById("banner");
  let indexActual = 0;

  function cambiarBanner() {
    banner.style.backgroundImage = `url('${bannerImagenes[indexActual]}')`;

    // Incrementar el indexActual para cambiar el fondo
    indexActual = (indexActual + 1) % bannerImagenes.length;
  }

  setInterval(cambiarBanner, 3000);
});
