function openModal(){
    const modal = document.getElementById('modal-container')
    modal.classList.add('mostrar')

    modal.addEventListener('click', (e) =>{
        if (e.target.id == 'modal-container' || e.target.id == "fechar"){
            modal.classList.remove('mostrar')
            localStorage.fechaModal = 'modal-container'
        }
    })
}

function updateProgressBar() {
    var progressBar = document.getElementById('progress-fill');
    var temperatura = parseInt(document.getElementById('temperatura').innerText);

    
    var targetPercentage = (temperatura - 10) * 5; 

    
    var fillWidth = targetPercentage / 100 * progressBar.parentElement.clientWidth;

    progressBar.style.width = fillWidth + 'px';

    
    if (fillWidth >= progressBar.parentElement.clientWidth / 2) {
      progressBar.style.backgroundColor = '#FFA500'; 
    }
  }

  function diminuirTemperatura() {
    var temperaturaElement = document.getElementById('temperatura');
    var temperatura = parseInt(temperaturaElement.innerText);

    if (temperatura > 10) {
      temperatura--;
      temperaturaElement.innerText = temperatura;
      updateProgressBar();
    }
  }

  function aumentarTemperatura() {
    var temperaturaElement = document.getElementById('temperatura');
    var temperatura = parseInt(temperaturaElement.innerText);

    if (temperatura < 30) {
      temperatura++;
      temperaturaElement.innerText = temperatura;
      updateProgressBar();
    }
  }

  updateProgressBar();
