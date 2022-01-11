let img = document.getElementById("img")
let botoes = document.getElementById("botoes")



const trafficClick = (event) =>{
    
    turnOn[event.target.id]();
}
const turnOn = {
    "red" : () => img.src = "vermelho.png",
    "yellow" : () => img.src = "amarelo.png",
    "green" : ()=> img.src = "verde.png",
    
}

botoes.addEventListener('click',trafficClick)
