var thamks = document.getElementById('kit');
thamks.onclick = () => {
    location.href = "./game.html";
}

const thank = document.getElementById("kit");


const yourname = document.getElementById("ent")
yourname.onchange = () => {
    localStorage.setItem('name',yourname.value);
}
const yournick = document.getElementById("nick")
yournick.onchange = () => {
    localStorage.setItem('nick',yournick.value);
}
const yourage = document.getElementById("age")
yourage.onchange = () => {
    localStorage.setItem('age',yourage.value);
}