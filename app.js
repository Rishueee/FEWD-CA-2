
var playbtn = document.getElementById('playbtn');
playbtn.onclick = () => {
    location.href = "./name.html";
}

var instr = document.getElementById('instruction');
instr.onclick = () => {
    location.href = "./instruction.html";
}
const bgsound = new Audio("./assets/BoxCat-Games-Battle-Boss(chosic.com).mp3")
bgsound.play()
bgsound.loop == true



