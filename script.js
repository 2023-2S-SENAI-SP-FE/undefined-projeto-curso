//elementos DOM
const slider = document.querySelector(".slider")
const tooltip = document.querySelector(".tooltip")
// Get the modal
var modal = document.getElementById("myModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

//Calcula o valor do slider
function customSlider() {
    const maxVal = slider.getAttribute("max")
    const val = (slider.value / maxVal) + "%"

    tooltip.innerHTML = slider.value + "ºC"
}

//mostra valor do AC assim que a página carrega
customSlider()

//Apresenta o valor atual do slider
slider.addEventListener("input", () => {
    customSlider()
})

document.querySelector(".controles").addEventListener("click", (e) => {
    if (e.target.closest("div").id === "controle-1" ) {
        document.querySelector(".popup-message p").innerHTML = "Portas Trancadas."

        document.querySelector(".popup-message").classList.remove("invisivel")

        const timer = setTimeout(() => {
            document.querySelector(".popup-message").classList.add("invisivel")
        }, 1000);         
    } else if (e.target.closest("div").id === "controle-2" ) {
        document.querySelector(".popup-message p").innerHTML = "Bluetooth ligado."

        document.querySelector(".popup-message").classList.remove("invisivel")

        const delay = setTimeout(() => {
            document.querySelector(".popup-message").classList.add("invisivel")
        }, 1000);         
    } else if (e.target.closest("div").id === "controle-3" ) {
        document.querySelector(".popup-message p").innerHTML = "Spotify pressionado"

        document.querySelector(".popup-message").classList.remove("invisivel")

        setTimeout(() => {
            document.querySelector(".popup-message").classList.add("invisivel")
        }, 1000);         
    } else if (e.target.closest("div").id === "controle-4" ) {
        
        modal.style.display = "block";
        // When the user clicks on <span> (x), close the modal
        span.onclick = function() {
            modal.style.display = "none";
        }
        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }
    } else if (e.target.closest("div").id === "controle-5" ) {
        document.querySelector(".popup-message p").innerHTML = "Controle de voz"

        document.querySelector(".popup-message").classList.remove("invisivel")

        setTimeout(() => {
            document.querySelector(".popup-message").classList.add("invisivel")
        }, 1000);         
    } else if (e.target.closest("div").id === "controle-6" ) {
        document.querySelector(".popup-message p").innerHTML = "Liga farol alto"

        document.querySelector(".popup-message").classList.remove("invisivel")

        setTimeout(() => {
            document.querySelector(".popup-message").classList.add("invisivel")
        }, 1000);         
    }
})

document.querySelector(".controles-ac").addEventListener("click", (e) => {
    if (e.target.closest("div").id === "botao-1") {
        document.querySelector("#botao-1").classList.toggle("ativo")
    } else if (e.target.closest("div").id === "botao-2") {
        document.querySelector("#botao-2").classList.toggle("ativo")
    } else if (e.target.closest("div").id === "botao-3") {
        document.querySelector("#botao-3").classList.toggle("ativo")
    } else if (e.target.closest("div").id === "botao-4") {
        document.querySelector("#botao-4").classList.toggle("ativo")
    } else if (e.target.closest("div").id === "botao-5") {
        document.querySelector("#botao-5").classList.toggle("ativo")
    }
})