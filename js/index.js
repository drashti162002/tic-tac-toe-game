const cellElements = document.querySelectorAll(".game_board .cell");

const player1 = "O";
const player2 = "X";

const result = document.querySelector(".result");
const result_text = document.querySelector(".result h2");
const result_button = document.querySelector(".result button");

let winner =false;

const winning_conditions =[
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]

]
let toggleTurn;

cellElements.forEach(cell=>{
    cell.onclick=()=>{ 
        if(winner){
            return;
        }
        else {
        let currentPlayer = toggleTurn ? player1 : player2 ;
        cell.classList.add("disabled");
        cell.innerHTML = currentPlayer;
        cell.classList.add(currentPlayer);
        //console.log(); 
        if(winnercheck(currentPlayer)){
            console.log(currentPlayer + "winner");
           
            winner = true;
            result_text.innerHTML = currentPlayer + " Win the Game";
            // if(currentPlayer){
            //    winning_conditions = true;
            // }
            //cell.classList.add("disabled1");
            // currentPlayer.innerHTML=""
        }
        else if(isDraw()){
           result_text.innerHTML = "Game is Draw"
           console.log("game is draw");
        } 
        swapPlayer();

    }
}
} )


function selectplayer (player){
    console.log("THIS IS THE PLAYER", player)
    if(player == 1) toggleTurn = true
    else toggleTurn = false
}


function winnercheck(currentPlayer){
    return winning_conditions.some(condition=>{
        //console.log(condition);
        return condition.every(index=>{
            //console.log(index)
            //console.log(cellElements[index].classList.contains(currentPlayer));
            return cellElements[index].classList.contains(currentPlayer);
       });
    })
}

function isDraw(){
    if(!winner){

    
    console.log(winner,"is winner");
    return [...cellElements].every(cell=>{
        return cell.classList.contains(player1)  || cell.classList.contains(player2);
    })
    }
    else{
        alert("restart the game");
    }
}

function swapPlayer(){
    toggleTurn = !toggleTurn;

}

result_button.onclick=()=>{
    location.reload();
}