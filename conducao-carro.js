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

