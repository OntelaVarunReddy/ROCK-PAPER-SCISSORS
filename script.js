let choices=document.querySelectorAll(".images");
const options=["rock","paper","scissors"];
let user=document.querySelector("#score-u");
let comp=document.querySelector("#score-c");
let msg=document.querySelector(".msg");
let userScore=0;
let compScore=0;
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        let userChoice=choice.getAttribute("id");
        let randIdx=Math.floor(Math.random()*3);
        let compChoice=options[randIdx];
        if(userChoice=="rock" && compChoice=="paper")
        {
            compScore++;
            comp.innerText=compScore;
            msg.innerText="Lost, Paper beats rock";
            msg.classList.remove("black");
            msg.classList.remove("green");
            msg.classList.add("red");
        }
        else if(userChoice=="rock" && compChoice=="scissors")
        {
            userScore++;
            user.innerText=userScore;
            msg.innerText="Win, Rock beats scissors";
            msg.classList.remove("black");
            msg.classList.remove("red");
            msg.classList.add("green");
        }
        else if(userChoice=="rock" && compChoice=="rock")
        {
            msg.innerText="Draw";
            msg.classList.remove("red");
            msg.classList.remove("green");
            msg.classList.add("black");
        }
        else if(userChoice=="paper" && compChoice=="rock")
        {
            userScore++;
            user.innerText=userScore;
            msg.innerText="Win, Paper beats rock";
            msg.classList.remove("black");
            msg.classList.remove("red");
            msg.classList.add("green");
        }
        else if(userChoice=="paper" && compChoice=="scissors")
        {
            compScore++;
            comp.innerText=compScore;
            msg.innerText="Lost, Scissors beats paper";
            msg.classList.remove("black");
            msg.classList.remove("green");
            msg.classList.add("red");
        }
        else if(userChoice=="paper" && compChoice=="paper")
        {
            msg.innerText="Draw";
            msg.classList.remove("red");
            msg.classList.remove("green");
            msg.classList.add("black");
        }
        else if(userChoice=="scissors" && compChoice=="rock")
        {
            compScore++;
            comp.innerText=compScore;
            msg.innerText="Lost, Rock beats scissors";
            msg.classList.remove("black");
            msg.classList.remove("green");
            msg.classList.add("red");
        }
        else if(userChoice=="scissors" && compChoice=="paper")
        {
            userScore++;
            user.innerText=userScore;
            msg.innerText="Win, Scissors beats paper";
            msg.classList.remove("black");
            msg.classList.remove("red");
            msg.classList.add("green");
        }
        else if(userChoice=="scissors" && compChoice=="scissors")
        {
            msg.innerText="Draw";
            msg.classList.remove("red");
            msg.classList.remove("green");
            msg.classList.add("black");
        }
    });
});