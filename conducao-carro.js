
let speed = parseInt(document.getElementById("speed").innerHTML);
let desacelerando = false;

document.addEventListener("keydown", (event) => {

  if (event.key === "w") {
    if (speed < 230) {
      document.getElementById("speed").innerHTML = ++speed;
    }
  }
 
 
 if (event.key === "s") {
    if (speed > 0) {
      document.getElementById("speed").innerHTML = --speed;
    }
  }
});


document.addEventListener("keyup", (event) => {
 if (event.key === "w" && !desacelerando) {
    perdeVelocidade();
    desacelerando = true;

  }

});


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