
var piscando = document.getElementById('pisca');
var interval = window.setInterval(function(){
    if(piscando.style.visibility == 'hidden'){
        piscando.style.visibility = 'visible';
    }else{
        piscando.style.visibility = 'hidden';
    }
}, 700);