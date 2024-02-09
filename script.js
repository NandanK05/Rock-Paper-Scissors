var wi=0;
var lo=0;
shw=document.getElementById("show");

function result(pick)
{
    document.getElementById("rock").style.backgroundColor="white";
    document.getElementById("paper").style.backgroundColor="white";
    document.getElementById("scissors").style.backgroundColor="white";

    var computer = (Math.floor(Math.random()*100))%3;
    if(computer === 0)
    {
        rock=document.getElementById("rock");
        rock.style.backgroundColor="rgb(0, 251, 255)";
    }
    else if(computer === 1)
    {
        rock=document.getElementById("paper");
        rock.style.backgroundColor="rgb(0, 251, 255)";
    }
    else
    {
        rock=document.getElementById("scissors");
        rock.style.backgroundColor="rgb(0, 251, 255)";
    }

    if(pick === 0 && computer === 1){
        lose();
    }
    else if(pick === 0 && computer === 2){
        win();
    }
    else if(pick === 1 && computer === 0){
        win();
    }
    else if(pick === 1 && computer === 2){
        lose();
    }
    else if(pick === 2 && computer === 0){
        lose();
    }
    else if(pick === 2 && computer === 1){
        win();
    }
    else{
        draw();
    }
}


function win(){
    wi++;
    shw.textContent="You Win!";
    shw.style.color="rgb(27, 250, 38)";
    document.getElementById("scoreu").textContent=wi;
}

function lose(){
    lo++;
    shw.textContent="You Lose!";
    shw.style.color="rgb(255, 0, 0)";
    document.getElementById("scorec").textContent=lo;
}

function draw(){
    shw.textContent="Draw!";
    shw.style.color="black";
}