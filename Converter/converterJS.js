let url = "https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL";

function converterValor(){
    let input = document.getElementById("valor");
    let valor = input.value;

    console.log(valor);
    
    fetch(url)
        .then((res) => {
            return res.json();
        })
        .then((data) =>{
            console.log(data.USDBRL.high);
            let result = valor * data.USDBRL.high;
            let rate = `${valor} USD = ${result.toFixed(2)} BRL`;
            document.getElementById("resultado").innerHTML = rate;
        })

}
let cont = 0;
function onClick(){
    cont ++ ; 
    console.log(cont)
}
