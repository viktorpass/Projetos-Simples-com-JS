let board = ['','','','','','','','',''];
let playerTime = 0;
let symbols = ['o','x'];
let gameOver = false;

let winPositions = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
]
function move(position){

    if(board[position] == ''){
    board[position] = symbols[playerTime];
        
        gameOver = isWin();
        if(gameOver == false){
            playerTime = (playerTime == 0) ? 1 : 0;
        
        }
    }
   if(playerTime == 0){
    document.getElementById("playertime").innerHTML = "&#128293"
   }else{
    document.getElementById("playertime").innerHTML = "&#129519";
    } return gameOver;
} 
function isWin(){
    
    for(let i = 0; i < winPositions.length;i++){
        let seq = winPositions[i];
        
        let pos1 = seq[0];
        let pos2 = seq[1];
        let pos3 = seq[2];
        
        if(board[pos1] == board[pos2] && board[pos1] == board[pos3] && board[pos1] != ''){
            return true;
        }
        if (board[0] !='' && board[1] !='' && board[2] !='' && board[3] !='' && board[4] !='' && board[5] !='' && board[6] !='' &&board[7] !=''&&board[8] !=''){
            playerTime ="VELHA";
            return true;}
        
    }
    return false;
}


