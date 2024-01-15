let phoneScreen = document.getElementById('phone-screen');

function dialNumber(number) {
    phoneScreen.innerHTML += number;
}

function call() {
    phoneScreen.innerHTML = "Calling...<br>";
    setTimeout(function() {
        phoneScreen.innerHTML += "Connected!";
    }, 2000);
}
