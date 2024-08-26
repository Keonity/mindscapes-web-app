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
        alert("Virtual Angel - Credit to ARTMS");
    }
    else if (clicked.target.id === "liminalForest") {
        window.open('./forestOfBeginnings.html', '_blank').focus();
        // window.location.href = './forestOfBeginnings.html'
    }
    else {
        console.log(clicked.target.id);
    }
});