function generateRandom(){
    let x = Math.floor((Math.random()*3)+1);
    return x;
}

function highlightComputerMoves(computerValue){
    if (computerValue===1) {
        document.querySelector("#compscissor").style.border="5px solid transparent"
        document.querySelector("#comppaper").style.border="5px solid transparent"
        document.querySelector("#comprock").style.border="5px solid rgb(208, 48, 75)"
    } 
    else if (computerValue===2) {
        document.querySelector("#comprock").style.border="5px solid transparent"
        document.querySelector("#compscissor").style.border="5px solid transparent"
        document.querySelector("#comppaper").style.border="5px solid rgb(208, 48, 75)"
    } 
    else{
        document.querySelector("#comprock").style.border="5px solid transparent"
        document.querySelector("#comppaper").style.border="5px solid transparent"
        document.querySelector("#compscissor").style.border="5px solid rgb(208, 48, 75)"
    }
}

function updateScore(text){
    if (text=="Oh no! Computer Wins") {
        compScore++;
        document.querySelector("#compscore").innerText=compScore;
        
    } else {
        yourScore++;
        document.querySelector("#yourscore").innerText=yourScore;
    }
}

function clickRock(){
    let playerValue= 1;
    let compValue= generateRandom();
    if (compValue===1) {
        console.log("It's a Draw");
        result.style.backgroundColor="grey"
        result.innerText="It's a Draw"
        highlightComputerMoves(compValue)           
    }
    else if (compValue===2) {
        console.log("Computer Wins");
        result.style.backgroundColor="red";
        result.innerText="Oh no! Computer Wins";
        highlightComputerMoves(compValue);
        updateScore(result.innerText);            
    } 
    else if (compValue===3){
        console.log("You Win");
        result.style.backgroundColor="green"
        result.innerText="Hooray! You win"
        highlightComputerMoves(compValue)
        updateScore(result.innerText);               
    }   
}

function clickPaper(){
    let playerValue=2;
    let compValue= generateRandom();
    if (compValue===2) {
        console.log("It's a Draw");
        result.style.backgroundColor="grey"
        result.innerText="It's a Draw"
        highlightComputerMoves(compValue)    
    }
    else if (compValue===3) {
        console.log("Computer Wins");
        result.style.backgroundColor="red"
        result.innerText="Oh no! Computer Wins"
        highlightComputerMoves(compValue)
        updateScore(result.innerText);     
    } 
    else if (compValue===1){
        console.log("You Win");
        result.style.backgroundColor="green"
        result.innerText="Hooray! You win"
        highlightComputerMoves(compValue)
        updateScore(result.innerText);        
    } 
}

function clickScissor(){
    let playerValue=3;
    let compValue= generateRandom();
    if (compValue===3) {
        console.log("It's a Draw");
        result.style.backgroundColor="grey"
        result.innerText="It's a Draw" 
        highlightComputerMoves(compValue)   
    }
    else if (compValue===1) {
        console.log("Computer Wins");
        result.style.backgroundColor="red"
        result.innerText="Oh no! Computer Wins"
        highlightComputerMoves(compValue)
        updateScore(result.innerText);     
    } 
    else if (compValue===2){
        console.log("You Win");
        result.style.backgroundColor="green"
        result.innerText="Hooray! You win"
        highlightComputerMoves(compValue)
        updateScore(result.innerText);        
    } 
}

let result=document.querySelector(".result"); 
let yourScore= parseInt(document.querySelector("#yourscore").innerText)
let compScore= parseInt(document.querySelector("#compscore").innerText)
