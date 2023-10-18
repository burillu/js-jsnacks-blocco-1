

// creo due array con dei numeri casuali

let randomic1 = [];
let randomic2 = [];
let lengthArray= 25;
// ciclo e spingo ogni numero dentro randomic1
for (let i = 0; i < lengthArray; i++) {
    const num = getRndInteger(1, 100);
    randomic1.push(num);

}
// ciclo e spingo ogni numero dentro randomic2
for (let i = 0; i < lengthArray+15; i++) {
    const num = getRndInteger(1, 100);
    randomic2.push(num);

}

console.log(`primo array : ${randomic1}`);
console.log(`secondo array : ${randomic2}`);


function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}