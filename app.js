var pozx=0,pozy=500,height=500,width=500;
var snake,canvas,text;
var leftRandomPoz=0,bottomRandomPoz=500;

function myFunction(){
    random();
    var val;
    var ev=document.addEventListener('keydown', function(event) {
        var temp=event.keyCode;
            switch(event.keyCode){
                case 37:  clearInterval(val);val=setInterval(function(){pozx-=10;move();checkRand();},1000/20);break;//left arrow 
                case 38:  clearInterval(val);val=setInterval(function(){pozy+=10;move();checkRand()},1000/20);break;//Up arrow
                case 39:  clearInterval(val);val=setInterval(function(){pozx+=10;move();checkRand()},1000/20);break//right arrow ;
                case 40:  clearInterval(val);val=setInterval(function(){pozy-=10;move();checkRand()},1000/20);break;	//down arrow
            }
                
    } )

function move(){
    if(pozx<0 || pozy<10 || pozy>500|| pozx>490 ||checkCrash()){
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