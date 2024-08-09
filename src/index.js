import './styles.css';

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
})