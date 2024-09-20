import './styles.css';
import magicalFlora from './magicalFlora.mp3';
import calamitousSkies from './assets/calamitousSkies.jpeg';

const limForest = document.querySelector("#liminalForest");
const body = document.querySelector("body");
const oonebi = document.querySelector("#oonebiImg");

oonebi.setAttribute("href", calamitousSkies);

let beat = new Audio(magicalFlora);
beat.volume = 0.5;

window.addEventListener("mouseover", (hovered) => {
    if (hovered.target === limForest) {
        beat.play();
        body.setAttribute("id", "liminalForestBg");
        
    }
    else if (hovered.target.id === 'angel') {
        beat.pause();
        beat.currentTime = 0;
        body.setAttribute("id", "hyesoliaBg");
    }
    else if (hovered.target.id === 'oonebi') {
        beat.pause();
        beat.currentTime = 0;
        body.setAttribute("id", "oonebiBg");
    }
    else {
        beat.pause();
        beat.currentTime = 0;
        body.setAttribute("id", "body");
    }
});

window.addEventListener("click", (clicked) => {
    if (clicked.target.id === "angel") {
        alert("Virtual Angel - Credit to ARTMS");
        window.open('./hyesolia.html', '_blank').focus();
    }
    else if (clicked.target.id === "liminalForest") {
        window.open('./forestOfBeginnings.html', '_blank').focus();
        // window.location.href = './forestOfBeginnings.html'
    }
    else if (clicked.target.id === "oonebi") {
        window.open('./oonebi.html', '_blank').focus();
        // window.location.href = './forestOfBeginnings.html'
    }
    else {
        console.log(clicked.target.id);
    }
});