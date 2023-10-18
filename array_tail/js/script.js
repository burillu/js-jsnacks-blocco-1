
// prendo input lunghezza array
const inputNum = document.getElementById('input-num');
//prendo input numeri da stampare
const inputNumPrint = document.getElementById('input-num-print');
//prendo bottone
const btn = document.getElementById('btn-go');
btn.addEventListener('click', createNumbers);
// prendo div result
const result = document.getElementById('result-print');

function createNumbers() {
    result.classList.add('d-none');
    result.classList.remove('alert-danger');
    // creo un array con dei numeri casuali

    let randomic = [];
    let lengthArray = parseInt(inputNum.value);
    let howManyNum = parseInt(inputNumPrint.value);
    // ciclo e spingo ogni numero dentro randomic
    for (let i = 0; i < lengthArray; i++) {
        const num = getRndInteger(1, 100);
        randomic.push(' ' + num);

    }
    if (howManyNum > lengthArray) {
        let errMsg = 'non è possibile visualizzare più numeri di quelli richiesti';
        result.classList.remove('alert-success');
        result.classList.add('alert-danger');
        result.innerHTML = errMsg;
        
    } else {
        // stampare ultimi 5 numeri

        console.log(randomic.slice(-(howManyNum)));
        result.classList.add('alert-success');
        result.innerHTML = `<p>Ecco i ${howManyNum} numeri estratti : <br>${randomic.slice(-(howManyNum))}</p>`;
    }
    console.log(randomic);


    result.classList.remove('d-none');

}



function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}