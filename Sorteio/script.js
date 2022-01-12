function sorteio(){
    let addName = document.getElementById("addName").value;
    const inscritos = ["Alice","Lorena","Beatriz","Samuel","Lucca","Isaac","Roberta","Lavínia","Bryan","Nicole","Marcos"];
    if(!addName){
        alert("Digite um nome para iniciar o sorteio!")
        document.getElementById("name").innerHTML ="Sorteio Iphone 5"
        location.reload()
        
    }else{
        inscritos.push(addName)
        console.log(inscritos)
        const participantes = inscritos.length
        let nSorteado = Math.floor(Math.random() * participantes);
        document.getElementById("name").innerHTML = "Parabéns "+ inscritos[nSorteado] +", você ganhou um Iphone 5 "
        console.log(nSorteado)
    }
    
    
}