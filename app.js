var pozx=0,pozy=500,height=500,width=500;
var snake,canvas,text;
var leftRandomPoz=0,bottomRandomPoz=500,val,previousKey=0;

function myFunction(){
    random();
    var ev=document.addEventListener('keydown', function(event) {
        var btn=event.keyCode;
        if(btn==37 && btn!=previousKey-2){
            clearInterval(val);val=setInterval(function(){pozx-=10;move();checkRand();},45);previousKey=btn;//left arrow 
        }
        else if(btn==38 && btn!=previousKey-2){
            clearInterval(val);val=setInterval(function(){pozy+=10;move();checkRand()},45);previousKey=btn;//Up arrow
        }
        else if(btn==39 && btn!=previousKey+2){
            clearInterval(val);val=setInterval(function(){pozx+=10;move();checkRand()},45);previousKey=btn;//right arrow
        }
        else if(btn==40 && btn!=previousKey+2){
            clearInterval(val);val=setInterval(function(){pozy-=10;move();checkRand()},45);previousKey=btn;//down arrow
        }           
    } )
function move(){
    if(pozx<0){
       pozx+=(width+10);
    }
    else if(pozy<10){
        pozy+=(height+10);
    }
    else if(pozx>490){
        pozx=-10;
    }
    else if(pozy>500){
        pozy=0;
    }
    else if(checkCrash()){
        text=document.getElementById("demo"); 
        text.innerHTML="Game Over";
    }
    else{
        position(newblock());
    }
}


function position(block){
    block.style.left=pozx+"px";
    block.style.top=height-pozy+"px";
}

function newblock(){
    canvas=document.getElementById("canvas");
    snake=document.getElementById("snake");
    
    if(pozx!=leftRandomPoz || pozy!=bottomRandomPoz+10)
    {
    snake.remove(); //nqs eshte nuk eshte e barabarte me kordinatat e frutit ,heq bishtin dhe shto koken qe te krijohet levizja
    }
    block=document.createElement("div");
    block.id= "snake";
    canvas.appendChild(block);
    return block;
}

function checkRand(){
    if(pozx==leftRandomPoz && pozy==bottomRandomPoz+10){
        random();
    }
}
function random(){
    var fruit=document.getElementById("fruit");
    leftRandomPoz=Math.floor(Math.random()*50)*10;
    bottomRandomPoz=Math.floor(Math.random()*50)*10;
    fruit.style.left=leftRandomPoz+"px";
    fruit.style.bottom=bottomRandomPoz+"px";
}

function checkCrash(){
    var length=document.getElementById("canvas").childElementCount;
    var snakeBlocks=document.getElementById("canvas").children;
    for(var i=1;i<length;i++){
        for(var j=i+1;j<length;j++){
            if(snakeBlocks[i].offsetTop==snakeBlocks[j].offsetTop && snakeBlocks[i].offsetLeft==snakeBlocks[j].offsetLeft){
                return true;
            }
        }
    }
    return false;
}

}