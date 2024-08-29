//Carrucel de imagenes

var imgs=new Array(4)

imgs[0]="../../images/ban1.jpeg";
imgs[1]="../../images/ban2.jpeg";
imgs[2]="../../images/ban3.jpeg";
imgs[3]="../../images/ban4.jpeg";
imgs[4]="../../images/ban5.net";
imgs[5]="../../images/ban6.jpeg";
imgs[6]="../../images/ban7.jpeg";
imgs[7]="../../images/ban8.jpeg";
imgs[8]="../../images/ban9.jpeg";

var c=0;
setInterval(rotacion,3500);
function rotacion(){
    c++;
    if(c>=imgs.length){
        c=0;
    }
    document.getElementById("bannerimg").src=imgs[c];
}

//Modo claro y Oscuro
    const boton = document.getElementById('modoOscuro');
    const cuerpo = document.body;
    function CambiarColor() {
        cuerpo.classList.toggle('oscurito');
    }
    boton.addEventListener('click', CambiarColor);


//Cronometro
    function iniciarCuentaRegresiva(elementoCuentaRegresiva) {
        const fechaObjetivo = new Date(elementoCuentaRegresiva.dataset.targetDate).getTime();
        const actualizarCuentaRegresiva = () => {
            const tiempoRestante = fechaObjetivo - Date.now();
            if (tiempoRestante < 0) {
                clearInterval(intervaloId);
                elementoCuentaRegresiva.innerHTML = "<p class='temporizador'>¡Compralo ya!</p>";
                return;
            }
            const dias = Math.floor(tiempoRestante / (1000 * 60 * 60 * 24));
            const horas = Math.floor((tiempoRestante / (1000 * 60 * 60)) % 24);
            const minutos = Math.floor((tiempoRestante / (1000 * 60)) % 60);
            const segundos = Math.floor((tiempoRestante / 1000) % 60);
            
            elementoCuentaRegresiva.innerHTML = 
                (dias < 10 ? '0' : '') + dias + ' Dias  ' +
                (horas < 10 ? '0' : '') + horas + ' Horas  ' +
                (minutos < 10 ? '0' : '') + minutos + ' Min ' +
                (segundos < 10 ? '0' : '') + segundos + ' Seg';
        };
    
        const intervaloId = setInterval(actualizarCuentaRegresiva, 1000);
        actualizarCuentaRegresiva();
    }
    
    document.querySelectorAll('.cuenta-regresiva').forEach(iniciarCuentaRegresiva);