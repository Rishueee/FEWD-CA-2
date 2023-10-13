const balooon=document.getElementsByClassName('in')[0];
function moveleft(){
    let up = parseInt(window.getComputedStyle(balooon).getPropertyValue("left"));
    up-=200;
    if(up>200 && up<800){
        balooon.style.left = up +"px";
    }
    
}
function moveright(){
    let up = parseInt(window.getComputedStyle(balooon).getPropertyValue("left"));
    up+=200;
    if(up>200 && up<800){
        balooon.style.left = up +"px";
    }
   
}
document.addEventListener("keydown", event =>{
    if (event.key==="ArrowLeft"){
        moveleft();
        
    }
    
    if (event.key==="ArrowRight"){
        moveright();
    }
})

const ghost = document.getElementById('ghost');
var counter = 0;
function randomposition(){
    var position = [300,500,700];
    var pos=Math.floor(Math.random()*position.length);
    console.log(pos)
    ghost.style.left = position[pos] + "px"
    counter++;
}

ghost.addEventListener("animationiteration",()=>{
    randomposition()
    updateScore()

})


setInterval(function(){
    var balooonLeft =
    parseInt(window .getComputedStyle(balooon)
    .getPropertyValue("left"));
    var ghostLeft =
    parseInt(window .getComputedStyle(ghost)
    .getPropertyValue("left"));
    var ghostTop =
    parseInt(window .getComputedStyle(ghost)
    .getPropertyValue("top"));
    if (balooonLeft == ghostLeft &&
        ghostTop<500&&
        ghostTop>300){
      
            location.href = "./gameover.html"

           
       


        }
        

},1)

function updateScore() {

    const scoreElement = document.getElementById("scoreboard");
    scoreElement.innerHTML=counter;
    localStorage.setItem("score",counter);
   
}
const bgsound = new Audio("./assets/bg-sound.mp3")
bgsound.play()
bgsound.loop == true























