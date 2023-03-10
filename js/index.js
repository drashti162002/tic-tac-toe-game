const cellElements = document.querySelectorAll(".game_board .cell");
const player1 = document.querySelector(".players .player1");
const player2 = document.querySelector(".players .player2");


const playerO = "O";
const playerX = "X";

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
let toggleTurn = true;

cellElements.forEach(cell=>{
    cell.onclick=()=>{ 
        if(!winner){
        console.log("this is winner");
        let currentPlayer = toggleTurn ? playerO : playerX ;
        cell.classList.add("disabled");
        cell.innerHTML = currentPlayer;
        cell.classList.add(currentPlayer);
        
        if(winnercheck(currentPlayer)){
            // console.log("first condition" , winnercheck(currentPlayer))
            console.log(currentPlayer + "winner");
            winner = true;
            result_text.innerHTML = currentPlayer + " Win The Game";
            addWinnerColor(currentPlayer)
        }   
        else if(isDraw()){
        
            console.log("second condition")
            result_text.innerHTML = "Game Is Draw"
            console.log("game is draw");
            playerDraw();
           //cell.classList.add("player_draw");
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

function  addWinnerColor(currentPlayer){
     return winning_conditions.some(condition=>{
        const temp = condition.every(index=>{
            return cellElements[index].classList.contains(currentPlayer);
        });
        if(temp) condition = condition.filter((index)=> cellElements[index].classList.add("win_color"))
    })
}


function isDraw(){
    console.log(winner,"is winner");
    return [...cellElements].every(cell=>{
        return cell.classList.contains(playerO)  || cell.classList.contains(playerX);
    })
}

function playerdraw(){
    return [...cellElements].every(cell=>{
        return cell.classList.contains(playerO)  || cell.classList.contains(playerX);
    })

}


function swapPlayer(){
    toggleTurn = !toggleTurn;
    if(toggleTurn){
        player1.classList.add("active");
        player2.classList.remove("active");
    }else{
        player2.classList.add("active");
        player1.classList.remove("active");
    }

}

result_button.onclick=()=>{
    location.reload();
}