const choices=["rock","paper","scissor"];
const playerdisplay=document.getElementById("playerDisplay");
const computerdisplay=document.getElementById("computerDisplay");
const resultdisplay=document.getElementById("resultDisplay");


function playGame(playerchoices)
{
    const computerchoices=choices[Math.floor(Math.random()*3)];

    let result="";
    
    if(playerchoices === computerchoices)
    {
        result="IT'S A TIE ⛳"
    }

    else{

        switch(playerchoices)
        {
            case "rock":
                result= (computerchoices ==="scissor") ? "YOU WIN 🎉" : " YOU LOSE 🙁" ;
                break
            case "paper":
                result= (computerchoices==="rock") ? "YOU WIN 🎉" : " YOU LOSE 🙁" ;
                break
            case "scissor":
                result= (computerchoices==="paper") ? "YOU WIN 🎉" : " YOU LOSE 🙁";
                break
        }   
    }

    playerdisplay.textContent=`PLAYER : ${playerchoices}`;
    computerdisplay.textContent=`COMPUTER : ${computerchoices}`;
    resultdisplay.textContent=result;
}