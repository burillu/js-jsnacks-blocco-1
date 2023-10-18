

// creo due array con dei numeri casuali

let randomic1 = [];
let randomic2 = [];
let lengthArray1 = getRndInteger(1,100);
let lengthArray2 = getRndInteger(1,100);
// ciclo e spingo ogni numero dentro randomic1
for (let i = 0; i < lengthArray1; i++) {
    const num = getRndInteger(1, 100);
    randomic1.push(num);

}
// ciclo e spingo ogni numero dentro randomic2
for (let i = 0; i < lengthArray2; i++) {
    const num = getRndInteger(1, 100);
    randomic2.push(num);

}

console.log(`primo array : ${randomic1}
lunghezza ${randomic1.length}`);
console.log(`secondo array : ${randomic2}
lunghezza ${randomic2.length}`);
let counter = 0;
while (((randomic1.length - randomic2.length) != 0)|| counter == 200) {
    if (randomic1.length > randomic2.length) {
        const num = getRndInteger(1, 100);
        randomic2.push(num);
    } else /*if (randomic2.length > randomic1.length)*/ {
        const num1 = getRndInteger(1, 100);
        randomic1.push(num1);
    }counter++;
}
console.log(`Adesso primo array : ${randomic1}
lunghezza ${randomic1.length}`);
console.log(`Adesso secondo array : ${randomic2}
lunghezza ${randomic2.length}`);

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}