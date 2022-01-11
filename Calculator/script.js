let display = document.getElementById("display")
let red = document.getElementById("red")
let blue = document.getElementById('blue')
let green = document.getElementById('green')


function adicionar(){
    display.innerHTML += event.target.id
}
function calcular(){
    let resultado = document.getElementById("display").innerHTML
    if (resultado){
        let resultado = display.innerHTML
        display.innerHTML = eval(resultado)
    }else{
        display.innerHTML = "Não foi possível finalizar o cálculo"
        display.style.fontSize = "15px"
        setTimeout(()=>{
            display.innerHTML = ""
            display.style.fontSize = "25px"},800)
        }
    
}
function clearAll(){
    display.innerHTML = ""
}
function backspace(){
    let resultado = document.getElementById("display").innerHTML
    document.getElementById("display").innerHTML = resultado.substring(0, resultado.length - 1)
}
red.addEventListener('click',()=> {
    document.body.style.backgroundColor = "#FF0000"
    document.getElementById("display").style.backgroundColor = "#FF0000"
    for(let i =0;i<=18;i++){
        document.getElementsByClassName('button')[i].style.backgroundColor = "#FF0000"
    }
    
})
blue.addEventListener('click',()=>{
    window.location.reload();
})
green.addEventListener('click',()=>{
    document.body.style.backgroundColor = "#0d730d"
    document.getElementById("display").style.backgroundColor = "#0d730d"
    for(let i =0;i<=18;i++){
        document.getElementsByClassName('button')[i].style.backgroundColor = "#0d730d"
    }
    
})
