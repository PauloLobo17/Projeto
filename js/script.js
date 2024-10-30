//dom

const lampada = document.querySelector('#lampada')
const btligar = document.querySelector('#btligar')
const btdesligar = document.querySelector('#btdesligar')
const btquebrada = document.querySelector('#btquebrada')

//evento

btligar.addEventListener('click',acender)
btdesligar.addEventListener('click',apagar)
lampada.addEventListener('dblclick',destruir)

//função

function acender(){
    lampada.src = 'img/acesa.gif'
}

function apagar(){
    lampada.src = 'img/apagada.gif'
}

function destruir(){
    lampada.src = 'img/quebrada.jpg'
}