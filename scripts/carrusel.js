const bannerImagenes = [
  "../../images/Banner.png",

  "https://cdn2.steamgriddb.com/hero/c73f4d8f3e0c84920eef1464c4c73cb8.jpg",

  "https://i.redd.it/vlm6uxl72j4c1.png",
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
