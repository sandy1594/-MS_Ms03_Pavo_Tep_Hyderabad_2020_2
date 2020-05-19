const WinCombos=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7], 
    [2,5,8],
    [0,4,8],
    [2,4,6]

]
const grid = () =>  Array.from(document.getElementsByClassName("q"));
const qnumid = (qel) => Number.parseInt(qel.id.replace("q",""));
const emptyQs = () => grid().filter(qel => qel.innerText==="");
const allsame = (arr) =>arr.every(qel =>qel.innerText===arr[0].innerText&& qel.innerText !=="");
const taketurn= (index,letter) => grid()[index].innerText=letter;
const opponentchoice = () => qnumid(emptyQs()[Math.floor(Math.random()*emptyQs().length)] );
const endGame = (winningsequence) => console.log("gameover",winningsequence);

const checkvictory = () => {
    let victory = false;
    WinCombos.forEach(_c => {
        const _grid = grid();
        const sequence = [_grid[_c[0]], _grid[_c[1]], _grid[_c[2]]];
        if(allsame(sequence)) {
            victory = true;
            endGame(sequence);
        }
    });
    return victory;
};





const opponentTurn= () =>{
    disableListener();
    setTimeout(() => {
        taketurn(opponentchoice(),'o');
        if(!checkvictory())

        enableListener();
        
    },1000);
}
const clickfn = ($event)=>{
    taketurn(qnumid($event.target), "x");
    opponentTurn();
}
const enableListener = ()=>grid().forEach(qel => qel.addEventListener("click",clickfn));
const disableListener=()=>grid().forEach(qel=>qel.removeEventListener("click",clickfn));
enableListener(); 