import './styles.css';
import magicalFlora from './magicalFlora.mp3';

let beat = new Audio(magicalFlora);

window.addEventListener("mouseover", (hovered) => {
    if (hovered.target.id === "liminalForest") {
        beat.play();
    }
    else {
        beat.pause();
        beat.currentTime = 0;
    }
});

window.addEventListener("click", (clicked) => {
    if (clicked.target.id === "angel") {
        alert("I'll be there for you when your wings break.");
    }
    else if (clicked.target.id === "liminalForest") {
        const userName = prompt("Your name is: ");
        console.log(userName);
    }
    else {
        console.log(clicked.target.id);
    }
});