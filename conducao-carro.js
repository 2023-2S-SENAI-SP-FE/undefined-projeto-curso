let speed = parseInt(document.getElementById("speed").innerHTML);
let desacelerando = false;

document.addEventListener("keydown", (event) => {
  // acelera com a tecla "w"
  if (event.key === "w") {
    document.getElementById("speed").innerHTML = ++speed;
  }

  // freia com a tecla "s"
  if (event.key === "s") {
    if (speed > 0) {
      document.getElementById("speed").innerHTML = --speed;
    }
  }
});

  

// inicia perda de velocidade após a tecla "w" ser liberada
document.addEventListener("keyup", (event) => {
  if (event.key === "w" && !desacelerando) {
    perdeVelocidade();

    desacelerando = true;
  }
});

//perde velocidade até 0
function perdeVelocidade() {
  if (speed > 0) {
    document.getElementById("speed").innerHTML = --speed;

    setTimeout(() => {
      perdeVelocidade();
    }, 300);
  } else {
    desacelerando = false;
  }
}

function updateClock() {
  var now = new Date();
  var hours = now.getHours();
  var minutes = now.getMinutes();
  var seconds = now.getSeconds();

  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  var timeString = hours + ":" + minutes + ":" + seconds;

  document.getElementById("clock").innerText = timeString;
}

// Atualizar o relógio a cada segundo
setInterval(updateClock, 1000);

// Inicializar o relógio quando a página carrega
updateClock();
