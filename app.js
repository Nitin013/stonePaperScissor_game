let userscore=0;
let compscore=0;
const msg=document.querySelector("#msg");
const comp_score=document.querySelector("#comp-score");
const user_score=document.querySelector("#user-score");
const choices=document.querySelectorAll(".choice");
 const genCompChoice = ()=> {
    const options = ["rock","paper","scissors"];
    const index=Math.floor(Math.random()*3);
    return options[index];
 }
 showWinner=(userWin)=> {
    if(userWin===true){
        msg.innerText="you win"
        msg.style.backgroundColor="green";
        user_score.innerText=++userscore;
        
    }else{
        msg.innerText="you lose";
        msg.style.backgroundColor="red";
        comp_score.innerText=++compscore;
    }
 }

const playgame = (choiceId)=> {
     console.log("user choice",choiceId);
     const compChoice=genCompChoice();
     console.log("comp choice",compChoice);
     if(choiceId===compChoice){
         console.log("draw");
         msg.innerText="draw";
     }else{
        let userWin = true;
        if(choiceId==="rock"){
            userWin=compChoice==="paper"?false:true;
        }
        else if(choiceId==="paper"){
            userWin=compChoice==="scissors"?false:true;
        }else{
            userWin=compChoice==="rock"?false:true;
        }
        showWinner(userWin);
     }
}
choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener("click",()=>{
        const choiceId=choice.getAttribute("id");
          console.log("choice was clicked",choiceId);
          playgame(choiceId)
    });
    
});