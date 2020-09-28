// to move The cube throughout the window using the arrow keys.
let posTop = 50;
let posLeft = 50;

//Position the Cuby
function moveCube(event) {
    // gather
    console.log(event.key)

    //logic mvt
    if (event.key == "ArrowDown") {
        posTop = posTop + 5
    }

    if (event.key == "ArrowUp") {
        posTop = posTop - 5
    }

    if (event.key == "ArrowLeft") {
        posLeft = posLeft - 5
    }

    if (event.key == "ArrowRight") {
        posLeft = posLeft + 5
    }

    //The cube shall only move in a playground. 
    //create a container that will constrains the movement of the cube. 
    if (posTop >= 90) {
        posTop = 0
    }

    if (posTop < 0) {
        posTop = 90
    }

    if (posLeft >= 90) {
        posLeft = 0
    }

    if (posLeft < 0) {
        posLeft = 90
    }

    // limits
    //display
    cuby.style.top = posTop + "%"
    cuby.style.left = posLeft + "%"
};


const cuby = document.querySelector('#victim');

document.addEventListener('keydown', moveCube);
cuby.addEventListener('click', touched);
let timerID = setTimeout(timeOut, 5000);




function touched(event) {
    const url = "image/16-161413_plants-vs-zombies-zombie-imp-plants-vs-zombies.png"
    cuby.style.backgroundImage = 'url(' + url + ")";
    //cuby.style.backgroundColor = 'blue';
    document.removeEventListener('keydown', moveCube);
    cuby.removeEventListener('click', touched);
    clearTimeout(timerID),

        alert('Mouse Player Wins!!!!!!!!!');

    //logic
    mousePlayerScore++;
    //display
    document.querySelector('#mouseplayer').innerHTML = 'Mouse Player: ' + mousePlayer + ' ¦ Score ' + mousePlayerScore;

    button.style.display = "";

    if (mousePlayerScore < 5) {
        restart;
    }
    else {
        alert('Congratulations!!!!!');
        mousePlayerScore = 0;
    }


}






function timeOut() {
    alert('Keyboard Player Wins!!!!!!!!!!');
    keyboardPlayerScore++;
    document.querySelector('#keyplayer').innerHTML = 'Keyboard Player: ' + keyboardPlayer + ' ¦ Score ' + keyboardPlayerScore;
    button.style.display = "";

    if (keyboardPlayerScore < 5) {
        restart;
    }
    else {
        alert('Congratulations!!!!!');
        keyboardPlayerScore = 0;
    }

}


//document.removeEventListener('click', timeOut);

const keyboardPlayer = prompt('KEY BOARD PLAYER: Enter Your Name:');
const mousePlayer = prompt('MOUSE PLAYER: Enter Your Name:');

document.querySelector('#keyplayer').innerHTML = 'Keyboard Player: ' + keyboardPlayer;
document.querySelector('#mouseplayer').innerHTML = 'Mouse Player: ' + mousePlayer;

// to display the score

let keyboardPlayerScore = 0;
let mousePlayerScore = 0;

const button = document.querySelector('button')

button.addEventListener('click', restart);

function restart(event) {
    button.style.display = "none";
    document.addEventListener('keydown', moveCube);
    cuby.addEventListener('click', touched);
    timerID = setTimeout(timeOut, 5000);
    const url = "image/main-qimg-a7e00ea72a58fc946cdfec337f32a900.png"
    cuby.style.backgroundImage = 'url(' + url + ")";

    document.querySelector('#keyplayer').innerHTML = 'Keyboard Player: ' + keyboardPlayer + ' ¦ Score ' + keyboardPlayerScore;
    document.querySelector('#mouseplayer').innerHTML = 'Mouse Player: ' + mousePlayer + ' ¦ Score ' + mousePlayerScore;


}
/*if (mousePlayerScore >= 5) {
    alert('Congratulations!!!!!');
    mousePlayerScore = 0;
}
else if (keyboardPlayerScore >= 5) {
    alert('Congratulations!!!!!');
    keyboardPlayerScore = 0;
}*/
