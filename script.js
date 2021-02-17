let order = [];
let clickedOrder = [];
let score = 0;

/*
0 - green
1 - red
2- yellow
3- blue
*/

const green = document.querySelector('.green');
const red = document.querySelector('.red');
const yellow = document.querySelector('.yellow');
const blue = document.querySelector('.blue');

let shuffleOrder = () => {
    let colorOrder = Math.floor(Math.random() * 4);
    order[order.length] = colorOrder;
    clickedOrder = [];
    for (let i in order) {
        let elementColor = createColorElement(order[i]);

        lightColor(elementColor, Number(i) + 1);
    };
}

let lightColor = (element, number) => {
    number = number * 1000;
    setTimeout(() => {
        element.classList.add('blink');
    }, number - 250);
    setTimeout(() => {
        element.classList.remove('blink');
    }, number + 250);
}

let checkOrder = () => {
    for (let i in clickedOrder) {
        if (clickedOrder[i] != order[i]) {
            gameOver();
            break;
        }
    }

    if (clickedOrder.length == order.length) {
        alert(`Pontuação: ${score}\nVocê acertou! Iniciando próximo nível!`);
        nextLevel();
    }

}

let click = (color) => {
    clickedOrder[clickedOrder.length] = color;
    createColorElement(color).classList.add('blink');

    setTimeout(() => {
        createColorElement(color).classList.remove('blink');
        checkOrder();
    }, 500);


}

let createColorElement = (color) => {

    switch (color) {
        case 0: return green;
        case 1: return red;
        case 2: return yellow;
        case 3: return blue;
    }
}

let nextLevel = () => {
    score++;
    shuffleOrder();
}

let gameOver = () => {
    alert(`Pontuação: ${score}!\nVocê perdeu!\nClique em OK para iniciar um novo jogo!`);
    order = [];
    clickedOrder = [];
    playGame();
}

let playGame = () => {
    alert('Bem vindo ao jogo Gênius!')
    score = 0;

    nextLevel();

}

green.onclick = () => click(0);
red.onclick = () => click(1);
yellow.onclick = () => click(2);
blue.onclick = () => click(3);

playGame();


