
let speed = parseInt(document.getElementById("speed").innerHTML);
let desacelerando = false;
const audioa = new Audio('./acelerando.mp3');
const audiof = new Audio('./freiando.mp3');
const audioi = new Audio('./ignicao.mp3');
    

// document.addEventListener("keydown", (event) => {

//   if (event.key === "d") {
//     if (speed < 230) {
//       document.getElementById("speed").innerHTML = ++speed;
//     }
//   }
 
//   if (event.key === "b") {
//     if (speed > 0) {
//       document.getElementById("speed").innerHTML = --speed;
//     }
//   }

//   if (event.key === "r") {
//     if (speed < 30) {
//       document.getElementById("speed").innerHTML = ++speed;
//       document.getElementById("reverse").style.color = "#af0303";
//     }
//   }
//   if (event.key === "n") {
//     if (speed === 0) {
//       document.getElementById("speed").innerHTML = ++speed;

//     }
//   }

// });

function seletorDrive(event) {
  document.addEventListener("keydown", (event) => {

    if (event.key === "d") {
      if (speed < 230) {
        document.getElementById("speed").innerHTML = ++speed;
        audioa.play();
      }
    }
  

    if (event.key === "b") {
      if (speed > 0) {
        document.getElementById("speed").innerHTML = --speed;
        audiof.play();
      }
    }
  });
  
  document.addEventListener("keyup", (event) => {

    if (event.key === "d" && !desacelerando) {
      perdeVelocidade();
      desacelerando = true;
    }
  });
}


function seletorReverse(event) {
  document.getElementById("reverse").style.color = "#af0303";

  document.addEventListener("keydown", (event) => {

    if (event.key === "r") {
      if (speed < 30) {
        document.getElementById("speed").innerHTML = ++speed;
      }
    }
  

    if (event.key === "b") {
      if (speed > 0) {
        document.getElementById("speed").innerHTML = --speed;
      }
    }
  });

  document.addEventListener("keyup", (event) => {

    if (event.key === "r" && !desacelerando) {
      perdeVelocidade();
      desacelerando = true;
      // document.getElementById("reverse").style.color = "white";
    }
  });
}
function seletorNeutral(event) {
  document.getElementById("neutral").style.color = "#af0303";

  document.addEventListener("keydown", (event) => {

    if (event.key === "n") {
      if (speed === 0) {
        document.getElementById("speed").innerHTML = ++speed;
      }
    }
  });

  // document.addEventListener("keyup", (event) => {

  //   if (event.key === "n" && !desacelerando) {
  //     perdeVelocidade();
  //     desacelerando = true;
  //     document.getElementById("reverse").style.color = "white";
  //   }
  // });
}


document.addEventListener("keyup", (event) => {

  if (event.key === "d" && !desacelerando) {
    perdeVelocidade();
    desacelerando = true;
  }

  if (event.key === "r" && !desacelerando) {
    perdeVelocidade();
    desacelerando = true;
    
  }

});


function perdeVelocidade() {
 if (speed > 0) {
    document.getElementById("speed").innerHTML = --speed;

    setTimeout(() => {
      perdeVelocidade();
    }, 200);

  } else {
    desacelerando = false;
  }
}