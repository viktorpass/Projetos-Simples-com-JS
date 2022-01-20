document.addEventListener('DOMContentLoaded',()=>{
    let squares = document.querySelectorAll(".square");

    squares.forEach((square)=>{
        square.addEventListener('click',handleClick);

    })
})
function handleClick(event){
    
    let square = event.target;
    let position = square.id;
    
    if(move(position)){
        
        setTimeout(()=>{
            if(playerTime == 0){
                alert(`Player ${(playerTime + 1)} venceu! - O fogo tomou conta do local`)
            }else if(playerTime == 1) {
                alert(`Player ${(playerTime + 1)} venceu! - Você conseguiu apagar as chamas`)
            }else{
                alert("Game Over - Não houve vencedor")
            }
            window.location.reload() 
        },30);
       
    }
    updateSquare(position);
}
function updateSquare(position){
    
    let square = document.getElementById(position.toString());
    let symbol = board[position];
    square.innerHTML = `<div class="${symbol}"></div>`
}

function updateSquares(){
    let squares = document.querySelectorAll(".square");

    squares.forEach((square)=>{
        let position = square.id;
        let symbol = board[position];
        if (symbol != ''){
            square.innerHTML = `<div class="${symbol}"></div>`
        }

    })
}
function restart(){
    window.location.reload()
}