
// prendo input lunghezza array
const inputNum = document.getElementById('input-num');
//prendo input numeri da stampare
const inputNumPrint = document.getElementById('input-num-print');
//prendo bottone
const btn = document.getElementById('btn-go');
btn.addEventListener('click', createNumbers);

function createNumbers() {

    // creo un array con dei numeri casuali

    let randomic = [];
    let lengthArray = parseInt(inputNum.value);
    // ciclo e spingo ogni numero dentro randomic
    for (let i = 0; i < lengthArray; i++) {
        const num = getRndInteger(1, 100);
        randomic.push(num);

    }
    console.log(randomic);

    // stampare ultimi 5 numeri

    console.log(randomic.slice(-5))
}



function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}