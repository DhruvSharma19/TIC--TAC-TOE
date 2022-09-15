let turn = "X";
let opening=new Audio("")
let flag = false;
let move=new Audio("mixkit-unlock-game-notification-253.wav")
let winsound=new Audio("mixkit-game-level-completed-2059.wav")
let scoreboard = document.getElementsByClassName("win");
scoreboard[0].innerHTML = "X MAKE YOUR MOVE"


const changeTurn=()=>{
    
    return turn==="X"?turn="0":turn="X";
}
let boxes = document.getElementsByClassName("box-item");

Array.from(boxes).forEach(element => {
    
    element.addEventListener('click', (e) => {
        
        if (element.innerText === "") {
            
            element.innerText=turn;
            
            checkwin();
            turn=changeTurn();
            move.play();
            if(!flag){
                scoreboard[0].innerHTML=turn+" Make Your Move";
            }
            
        }
    })
})
const checkwin = () => {
    
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ] 
    wins.forEach((element) => {
        
        if ((boxes[element[0]].innerText === boxes[element[1]].innerText) && (boxes[element[2]].innerText === boxes[element[1]].innerText) && (boxes[element[1]].innerText !== "")) {
            if(!flag){
                scoreboard[0].innerText=turn+ " WON";
                winsound.play();
            }
            flag=true;
        }
    })
}
